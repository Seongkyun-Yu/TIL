const purpleCuteSlime = {
    name: '슬라임',
    attribute: 'cute',
    color: 'purple'
};

const {color, ...fdfs} = purpleCuteSlime;
console.log(color);
console.log(fdfs);


function sum(...rest) {
    return rest.reduce((acc, current) => acc+current, 0)
}

console.log(sum(1,2,3,4,5,6,7,8))

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(sum(numbers))