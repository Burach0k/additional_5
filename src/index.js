module.exports = function check(str, bracketsConfig) {
// var mas = str;
// var mas2 = [];
// var o = 0;
// var flag = true;
// var chislo = 0;
//   for(var i = 0; i<mas.length; i++){ //весь массив
//     for(var j = 0; j<bracketsConfig.length; j++){ // )
//       if(mas[i] === bracketsConfig[j][1]){
//         for(var k = 1; k<i; k++){//поиск (
//           return 9;
//           for(var l = 0; l<bracketsConfig.length; l++){//сравнение 
//             if(mas[i-k] == bracketsConfig[l][0]){
//               return 4;
//               for(var f = 0; f<mas.length; f++){//повторение
//                 if((i-k) == mas2[o]){
//                   flag = false;
//                 }
//               }
//               if(flag == false){ break;}
//               if(mas[i-k] == bracketsConfig[j][0]){ 
//                 chislo++;
//                 mas2[o] = i-k;
//                 o++;              
//               }else{
//                 return false;
//               }
//             }else{break;}
//           }
//           flag = true;
//           break;
//         }
//       }
//     }
// }
// if(chislo == mas.length/2) {return true;}else {return false}
var mas = str;
var m1 =[], m2 = [];
var p = 0;
var i = 0;
var flag = true;
// for(var i = 0; i<mas.length; i++){
  while(i<mas.length){
  for(var j = 0; j<bracketsConfig.length; j++){
    if(mas[i] == bracketsConfig[j][1]){
        if(flag == true){
          if(mas[i] == "|"){
            flag = false;
            break;
        }}
        if(mas[i-1] === bracketsConfig[j][0]){
          m1 = mas.substring(0,i-1);
          m2 = mas.substring(i+1);
          mas = m1 + m2;
          if(mas[i] == "|") {flag = true;}
          i = i-2;
          break;
        }else{
          return false;
        }
    }
  }
  i++;
}
if(mas ==''){return true;}else{return false;}
}

