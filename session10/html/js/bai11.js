let n=Number(prompt("Nhập vào một số nguyên n"));
let tong=0;
for(i=1; i<n;i++){
   if(n%i==0){
       tong +=i;
   }
   if(tong==n){
       console.log( "số n có phải là hoàn hảo");
       tong +=i;

   }else{
       console.log( "số n không phải là hoàn hảo");
   }
}