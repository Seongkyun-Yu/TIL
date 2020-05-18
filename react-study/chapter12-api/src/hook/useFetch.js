import { useReducer, useEffect } from 'react';
import { initialState, reducer } from '../reducer/bookReducer';
import { bookApi } from '../api';

const useFetch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    try {
      const bookData = await bookApi.getBook();
      if (bookData.status === 200) {
        dispatch({ type: 'SUCCESS', phone: bookData.data });
      } else {
        dispatch({
          type: 'ERROR',
          error: {
            state: true,
            message: bookData.statusText,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: 'ERROR',
        error: {
          state: true,
          message: error.message,
        },
      });
    }
  };
  const addPhone = async () => {
    try {
      const date = new Date();
      const newPhone = {
        id: date.getTime(),
        name: state.inputState.name,
        phone: state.inputState.phone,
      };
      await bookApi.addBook(newPhone);
      dispatch({ type: 'ADD', newPhone: newPhone });
    } catch (error) {
      dispatch({
        type: 'ERROR',
        error: {
          state: true,
          message: error.message,
        },
      });
    }
  };

  const deletePhone = async (id) => {
    try {
      await bookApi.deleteBook(id);
      dispatch({ type: 'DELETE', id: id });
    } catch (error) {
      dispatch({
        type: 'ERROR',
        error: {
          state: true,
          message: error.message,
        },
      });
    }
  };

  const changeInput = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'CHANGE_INPUT', name: name, value: value });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return [state, fetchData, addPhone, deletePhone, changeInput];
};

export default useFetch;
