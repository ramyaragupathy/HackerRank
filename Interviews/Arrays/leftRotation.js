var arr = [ 1, 2, 3, 4, 5]
var numOfRot = 4
console.log('Left Rotation by Modulo: ', leftRotate(arr, numOfRot))
console.log('Right Rotation by Modulo: ', rightRotate(arr, numOfRot))
console.log('Simple Rotation: ', rotation(arr, numOfRot))
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

function rotation (arr, numOfRot) {
  var aLength = arr.length
  for (let j = 1; j <= numOfRot; j++) {
    let temp = arr[0]
    for (let i = 0; i < aLength; i++) {
      arr[i] = arr[i + 1]
      if (i === aLength - 1) {
        arr[i] = temp
      }
    }
  }
  return arr
}
