// Revere the string
// return a string

function reverseString(str) {
  let arr = str.split("")
  let newArr = []
  console.log(arr)
  arr.forEach(x => {
    newArr.unshift(x)
  })
  return newArr.join("");
}

function reverseString2(str) {
  for (var reversedStr = "", i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

function reverseString3(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

reverseString("hello");