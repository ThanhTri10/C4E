//7.8
const arrStudents = ["Lan", "Điệp", "Ngọc", "Ngạn", "Trinh"];
//arrStudents.splice(4,0,"An");
//arrStudents.splice(2,1);
// for(let i=0; i < arrStudents.length; i++){
//     if (arrStudents[i] === "Trinh"){
//         console.log(i)
//     }
// }
// arrStudents.splice(0, 1, "Phú");
// for(let i=0; i < arrStudents.length; i++){
//     if (arrStudents[i] === "Lan"){
//         arrStudents[i] = "Phú"
//     }
// }
// console.log(arrStudents);


//7.6
// const number1 = [1, 3, 5, 7, 9];
// const number2 = [2, 4, 6, 8, 10];
// Cách 1
// let sum1 = 0;
// let sum2 = 0;
// for (let number of number1){
//     sum1 += number;
// }

// for (let number of number2){
//     sum2 += number
// }
// if (sum1 > sum2){
//     console.log("mảng 1 lớn hơn mảng 2")
// } else if (sum1 < sum2){
//     console.log("mảng 1 nhỏ hơn mảng 2")
// } else {
//     console.log("2 mảng có tổng bằng nhau")
// }

// Cách 2
// function calSum(arrNumbers){
//     let sum = 0;
//     for (let number of arrNumbers){
//         sum += number;
//     }
//     return sum;
// }
// console.log(calSum(number1))




//7.2
let sum = 0;
for (let i=0; i<=100; i++){
    if (i%5 == 0){
        sum += i**2;
    }
}
console.log(sum)

//7.3
const arr3 = [];
for (let i=0; i<=100; i++){
    if (i%5 == 0){
        arr3.push(i);
    }
}
console.log(arr3);

//7.4
const arr4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let x = 7;
let value;
for (let i=0; i<arr4.length; i++){
    if (arr4[i] == x){
        value = true;
    } else{
        value = false;
    }
}
if (value = true){
    console.log(arr4.indexOf(x))
} else if (value = false){
    console.log("ko co ky tu trung")
}

//7.5
const arr5 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr5 = [];
for (let i = 0; i<arr5.length; i++){
    console.log(arr5[i]);
    newArr5.unshift(arr5[i]);
}
console.log(newArr5);

//7.7
const arr7 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let tong = 0;
for (let i = 0; i<arr7.length; i++){
    if (arr7[i] % 2 == 0 && arr7[i]>0){
        tong += arr7[i];
    }
}
console.log(tong);