// callback 함수 연습

// const rangeRepeat = function (type = 'all', startNum = 0, endNum = startNum + 1) {
//   if (type === 'all') {
//     for (let i = startNum; i < endNum; i++) {
//       if (i % 2 === 0) {
//         console.log(i);
//       }
//     }
//   }
//   else if (type === 'odd') {
//     for (let i = startNum; i < endNum; i++) {
//       if (i % 2) {
//         console.log(i);
//       }
//     }
//   }
//   else {
//     for (let i = startNum; i < endNum; i++) {
//       console.log(i);
//     }
//   }
// };

const logAll = function (i) {
  console.log(i);
};

const logOdd = function (i) {
  if (i % 2) {
    console.log(i);
  }
};

const logEven = function (i) {
  if (i % 2 === 0) {
    console.log(i);
  }
};

const Repeat = function (startNum = 0, endNum = startNum + 1, fn) {
  for (let i = startNum; i < endNum; i++) {
    fn(i);
  }
};

Repeat(0, 100, function (n) {
  if ( n % 10 === 0)
    console.log(n);
});


// function repeat(type = 'all', repeatNum = 1) {
//   let innerFunc;

//   if (type === 'odd') {
//     innerFunc = logOdd;
//   } else if (type === 'even') {
//     innerFunc = logEven;
//   } else {
//     innerFunc = logAll;
//   }

//   for (let i = 0; i < repeatNum; i++) {
//     innerFunc(i);
//   }

//   function logAll(n) {
//     console.log(n);
//   }
//   function logEven(n) {
//     if (n % 2 === 0) {
//       console.log(n);
//     }
//   }
//   function logOdd(n) {
//     if (n % 2) {
//       console.log(n);
//     }
//   }
// }

// repeat('이상한문자', 10);


// setTimeout( function () {
//   console.log('Hello');
// }, 1000);

