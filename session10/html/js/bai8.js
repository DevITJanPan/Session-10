let n = Number(prompt("nhập vào một số nguyên n:"));
let tong =0;
for(i=1; i<=n; i++){
    
    if(i%2==0){
        console.log(i);
        tong += i;
    }
    
}
console.log(tong);