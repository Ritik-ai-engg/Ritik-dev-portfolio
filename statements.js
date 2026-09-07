//////////while loop//////////////



////////1//////////////////
function isPrime(num){
    if(num < 2)
        return false;
   let i = 2;

   while(i< num){
    if(num%i === 0){
        return false;
    }
    i++;
   }
   return true;
}
console.log(isPrime(5));
console.log(isPrime(9));

/////////2/////////////
function factorial(n){
    let fact=1;
    let i= 1;

    while(i<=n){
        fact *= i;
        i++;
    }
    return fact;
}
console.log(factorial(5));
console.log(factorial(3));

//////////////3//////////
function longestWordLength(Word){
    let i =0;
    let max=0;

    while(i< Word.length){
        if(Word[i].length> max){
            max=Word[i].length;
        }
        i++;
    }
    return max;
}
console.log(longestWordLength(["Ritik","Sanvi.R","Anjali","Sushant.G"]));

////////////4///////////
function removeNegative(num){
    let i=0;
    let result=[];

    while(i<num.length){
        if(num[i]>=0){
            result.push(num[i]);
        }
        i++;
    }
    return result;

}
console.log(removeNegative([2,-4,6,-8,10,-12,14,16,17]))


//////////5//////////////
function mergeSrtedArrays(arr1,arr2){
    let result=[];
    let i=0;
    let j=0;

    while(i< arr1.length && j< arr2.length){
        if(arr1[i]< arr2[j]){
            result.push(arr1[i]);
            i++;
        }else{
            result.push(arr2[j]);
            j++;
        }
    }
    while(i<arr1.length){
        result.push(arr1[i]);
        i++;
    }
    while(j<arr2.length){
        result.push(arr2[j]);
        j++;
    }
    return result;

}
console.log(mergeSrtedArrays([1,5,10],[2,6,11]));



/////////do while loop////////////

/////////////1///////////////
function ValidatePin(input){
    let i=0;
    let pin;
    do{
        pin=input[i];
        i++;
    }while(pin.length!==4 || isNaN(pin)){
    return"valid Pin:" +pin;
    }
}
console.log(ValidatePin(["Ritik","abc","123","2468"]));

//////////////2///////////////////
function averageUntilStop(input){
    let i=0;
    let sum=0;
    let count=0;
    let value;
do{
    value=input[i];
    i++;
    
    if(value !="stop"){
        sum += Number(value);
        count++;
    }
}while(value!="stop"){
    return sum/count;
}

}
console.log(averageUntilStop(["10","20","30","stop"]))


///////////////3///////////////////
function simulateCoinToss(){
    let attempts=0;
    let result;

    do{
        result=Math.random()<0.5 ? "heads":"tails";
        attempts++;
    }while(result != "heads");

    return `It took ${attempts} flips to get heads`;
}
console.log(simulateCoinToss());


//////////////4//////////////
function ValidEmail(inputs){
    let emails=[];
    let i= 0;
    let email;

    do{
        email=inputs[i];
        i++;
        if( email.includes("@")){
            emails.push(email);
        }
    }while(email=" ");

    return emails;
}
console.log("test@","Ritik@gmail.com","user1234");

//////////////5/////////////////
function menuNavigate(input){
    let i=0;
    let choice;
    let count=0;
    
do{
    choice=input[i];
    i++;
    count++;
}while(choice != "exit");

return`Menu shown ${count} times`;
}
console.log(menuNavigate(["Home","Settings","exit","profile"]));