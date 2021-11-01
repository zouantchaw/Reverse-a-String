// Revere the string
// retrun a string

function reverseString(str) {
  let arr = str.split("")
  let newArr = []
  console.log(arr)
  arr.forEach(x => {
    newArr.unshift(x)
  })
  return newArr.join("");
}

reverseString("hello");