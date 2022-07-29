const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis (arr, thisArg){
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

const nums = [2, 4, 6, 8, 10];

console.log('this -> maçã', mapComThis(nums, maca));

console.log('this -> maçã', mapComThis(nums, laranja));

function mapSemThis(arr) {
    return arr.map(function(item) {
        return item * 9;
    })
}

console.log(mapSemThis(nums));