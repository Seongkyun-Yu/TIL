function countBiggerThanTen(numbers) {
    /* 구현해보세요 */
    return numbers.reduce((acc,current) => {
        if(current>10)
            acc.push(current);
        return acc;
    }, [])
  }
  
  const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
  console.log(count); // 5
  

  console.log(Math.max([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]))