function removeOddSum(arr, k, l){
newArray = arr.slice();

for (i = 0; i < arr.length; i++) {
  if ((arr[i][k] + arr[i][l]) % 2 !== 0) {
    newArray.splice(arr.indexOf(newArray[i]), 1);
        }
    }
    return newArray
  }

module.exports = removeOddSum;
