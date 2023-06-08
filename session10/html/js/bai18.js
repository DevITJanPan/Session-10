for(index=1;index<100;index++){
    let checkFizz=false;
    if(index%3==0){
        checkFizz=true;
    }
    let checkBuzz=false;
    if(index%5==0){
        checkBuzz=true;
    }
    if(checkFizz&&!checkBuzz){
        console.log("Fizz");
    }else if(!checkFizz&&checkBuzz){
        console.log("Buzz");
    }
    else if(checkFizz&&checkBuzz){
      console.log(FizzBuzz);
    }
}