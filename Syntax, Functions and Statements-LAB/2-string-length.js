function calcLength(str1,str2,str3){
let sum = str1.length+str2.length+str3.length;
let averageSum=Math.floor(sum/3);
console.log(sum);
console.log(averageSum);
}

calcLength('chocolate', 'ice cream', 'cake');