let number=Number(prompt("Nhập vào một số nguyên"));
let digit;
let reverseNumber;
while(number>0){
    digit = number%10;
        number=Math.floor(number/10);
        reverseNumber+=digit;
        
   }
   console.log("Số đảo ngược là "+reverseNumber);
