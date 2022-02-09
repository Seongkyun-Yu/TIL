function reverse(str){
    // add whatever parameters you deem necessary - good luck!
    if (str.length === 1) return str;
    
    return reverse(str.slice(1)) + str[0];
  }
  
  // reverse('awesome') // 'emosewa'
  // reverse('rithmschool') // 'loohcsmhtir'