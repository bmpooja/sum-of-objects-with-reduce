let sum = [{x: 1}, {x: 2}, {x: 3}]
let test = addObjects(sum);
console.log(test);

function addObjects ( sum ){
  let result = sum.reduce((accumulator , curValue)=> accumulator+ curValue.x ,0)
  return result;
}


