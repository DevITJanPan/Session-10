let number1 =Number(prompt("Nhập vào  số thứ nhất:"));
let number2 =Number(prompt("Nhập vào số thứ hai:"));
let number3 =Number(prompt("Nhập vào số thứ ba:"));
let result=number1 * number2 * number3;
if (result<0){
    console.log("Dấu tích 3 số là -");
}else if(result>0){
    console.log("Dấu tích 3 số là +");
}else{
    console.log("Tích 3 số là 0");
}