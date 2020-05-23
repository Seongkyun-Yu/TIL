const getToday = () => {
  const today = new Date();

  const year = today.getFullYear().toString();
  let month = (today.getMonth() + 1).toString();
  let date = today.getDate().toString();

  month = month.length - 1 ? month : '0' + month;
  date = date.length - 1 ? date : '0' + date;

  return year + month + date;
};

export { getToday };
