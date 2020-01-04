let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']
let result = countWord(names);
console.log(result);

function countWord (str){
  let result = str.reduce (function(accumulator,curValue) {
    if(curValue in accumulator){
      console.log(accumulator)
      accumulator[str]++;
    }
    else{
      accumulator[str]==1
    }
    return accumulator;
  },{})
  return result;
}