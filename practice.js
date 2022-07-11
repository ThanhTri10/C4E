//1


//2
// const A = prompt("Nhập vào số A:");
// const B = prompt("Nhập vào số B:");

// if (A<0 || B>100 || A>B){
//     alert("Error");
// }

// for (let i=A; i<=B; i++){
//     let check = 0;
//     for (let j=2; j<i; j++){
//         if (i%j == 0){
//             check = 1;     
//             break;
//         }
//     }
//     if (i>1 && check == 0){
//         console.log(i);
//     }
// }

// let ucln;
// let bcnn;
// for (let i=1; i<=A; i++){
//     if (A%i == 0 && B%i==0){
//         ucln = i;
//     }
// }
// bcnn = (A*B)/ucln;
// console.log(ucln);
// console.log(bcnn);


//3
const number = prompt("Số số fibonacci trong dãy là:");
let number1 = 0; 
let number2 = 1; 
let nextNumber;

for (let i=1; i <= number; i++){
    console.log(number1);
    nextNumber = number1 + number2;
    number1 = number2;
    number2 = nextNumber;
}