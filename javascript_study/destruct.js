const deepObject = {
    state: {
      information: {
        name: 'velopert',
        languages: ['korean', 'english', 'chinese']
      }
    },
    value: 5,
    age:32
  };
  
  const { name, languages } = deepObject.state.information;
  const { value } = deepObject;

 
  
  const extracted = {
    name,
    languages,
    value
  };
  
  console.log(extracted);
