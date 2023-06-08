let amount=Number(prompt("Nhập vào số tiền gửi"));
let rate=Number(prompt("lãi suất năm%"));
let month=Number(prompt("Số tháng gửi:"));
ratemonth=rate/12;
interest=0;
for(let i=1; i<=month;i++){
    interestMonth=ratemonth*amount/100;
    amount=amount+interestMonth;
    interest+=interestMonth;
}
console.log("Tiền nhận sau khi kết thúc gửi:"+amount);
console.log("Tiền lãi nhận được sau khi kết thúc gửi:"+interest);


