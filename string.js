////////1////////
function reverseString(str){
    return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

///////2/////////
function Palindrome(str){
    return str==str.split("").reverse().join("");
}
console.log(Palindrome("madam"))

///////3/////////
function capatalize(str){
    return str[0].toUpperCase()+str.slice(1,4)+str[4].toUpperCase();
}
console.log(capatalize("ritik"));

////////4////////
function RemoveSpace(str){
    return str.replaceAll(" ","");
}
console.log(RemoveSpace("Hello Word"))


////////5////////
function countword(str){
/////for count string letters
    return str.length;       
/////for count words////
    return str.split(" ").length;
}
console.log(countword("I love sanvi"))

///////6////////
function removeDublicate(str){
    let result=" "

    for(let i=0;i<=str.length;i++){
        if(!result.includes(str[i])){
            result+= str[i]
        }
    }
    return result;

}
console.log(removeDublicate("madam"))

////////7///////
function Anagram(str1,str2){
    return str1.split("").sort().join("")===str2.split("").sort().join("");

}
console.log(Anagram("listen","silent"));


///////8///////
function longestWord(str){
    let words= str.split(" ");
    let longest=words[0];

    for(let i =0 ; i< words.length; i++){
        if(words[i].length > longest.length){
            longest = words[i];
        }
    }
    return longest;

}
console.log(longestWord("I love  javascript programming"))


/////////9/////////
function vowelCount(str){
    let vowels= str.match(/[aeiou]/g);
    return vowels ? vowels.length : "vowels not present";
}
console.log(vowelCount("jvscrpt"))

////////10/////////
function comparession(str){
    let result="";
    let count=1;

    for(let i=0;i<str.length;i++){
        if(str[i]==str[i+1]){
            count++;
        }else{
            result += str[i]+count;
            count=1;
        }
    }
    return result;
}
console.log(comparession("aaaaabbbbbbbcccccddddd"))


/////////11/////////
function NonCharacter(str){
    let arr=str.split("");
    let result=[]

    for(let i=0;i< arr.length;i++){
     let count=0;
        
    for(let j=0;j<=arr.length;j++){
        if(arr[j]==arr[i]){
            count++
        }
    }if(count==1){
       result.push(arr[i])
    }
  }
  return result;
}
console.log(NonCharacter("aaaabbbbcccdeffffff"))


/////////12////////
function longestSubstring(str){
   let arr=[];
   let max=0;

  for(let i=0;i < str.length;i++){
      while(arr.includes(str[i])){
        arr.shift();
      }
       arr.push(str[i]);
      if( arr.length> max){
        max=arr.length;
      }
   }
   return max;
}
console.log(longestSubstring("abcdeabchdabcde"))

////////13////////
function CamelCaseToSnake(str){
    return str.replace(/([A-Z])/g,"_$1").split(" ").join("_").toLowerCase();

}console.log(CamelCaseToSnake("helloWorldTest"))


/////////14//////////
function SnakeToCamelCase(str){
    return str.split("_").map(word => word[0].toUpperCase() + word.slice(1)).join("");

}
console.log(SnakeToCamelCase("hello_world_test"));

////////15///////
function validateEmail(str){
//     if(str.includes("@") && str.includes(".")){
//         return true;
//     }
// return false;
let arr=str.split("");
for(let i=0;i<=arr.length;i++){
    if(arr[i]=="@" || arr[i]=="."){
        return true;
    }
}
return false;
}
console.log(validateEmail("test@gamil.com"))