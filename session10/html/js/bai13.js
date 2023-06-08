let number;
let sum=0;
do{
    number = Number(prompt("Nhập vào một số nguyên dương: "));

    if(number>=0){
        sum+=number;

    }else{
        break;
    }
}while(true){
   
   console.log("số tổng là:"+sum);
       
    


}