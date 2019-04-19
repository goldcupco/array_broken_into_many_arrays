function groupArrayElements(myArray, numOfArrays){

  const result = [];
  const newArraySize = Math.ceil(myArray.length / numOfArrays)
  for (let i =0; i < myArray.length; i += newArraySize){
    result.push(myArray.slice(i, i + newArraySize));
  }
  return result;
}

module.exports = groupArrayElements;
