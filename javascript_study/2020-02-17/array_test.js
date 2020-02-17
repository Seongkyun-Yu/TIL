function countBiggerThanTen(numbers) {
    /* 구현해보세요 */
    return numbers.reduce((acc,current) => {
        if(current>10)
            acc.push(current)
        else
            continue
    }, [])
  }
  
  const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
  console.log(count); // 5
  
  export default countBiggerThanTen;