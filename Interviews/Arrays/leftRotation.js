var arr = [ 1, 2, 3, 4, 5]
console.log('Left Rotation: ', leftRotate(arr, 4))
console.log('Right Rotation: ', rightRotate(arr, 4))
function leftRotate (arr, numOfRot) {
  var aLength = arr.length
  var result = []
  for (let i = 0; i < aLength; i++) {
    var temp = (i + (aLength - numOfRot)) % aLength
    result[temp] = arr[i]
    // console.log(temp, result[temp])
  }
  return result
}

function rightRotate (arr, numOfRot) {
  var aLength = arr.length
  var result = []
  for (let i = 0; i < aLength; i++) {
    var temp = (i + numOfRot) % aLength
    result[temp] = arr[i]
  }
  return result
}
