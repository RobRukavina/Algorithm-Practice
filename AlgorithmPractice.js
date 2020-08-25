function isPalindrome(myString) {
  for (let i = 0; i < myString.length / 2; i++) {
    if (
      myString[i].toUpperCase() !=
      myString[myString.length - 1 - i].toUpperCase()
    ) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("Alex"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("Racecar"));
console.log(isPalindrome("moM"));
console.log(isPalindrome("Alex xela"));

function simpleSort(myList) {
  for (let i = 0; i < myList.length; i++) {
    for (let j = i; j < myList.length; j++) {
      if (myList[i] > myList[j]) {
        // without a temp
        // myList[i] += myList[j];
        // myList[j] = myList[i] - myList[j];
        // myList[i] -= myList[j];

        // with a temp
        temp = myList[i];
        myList[i] = myList[j];
        myList[j] = temp;
      }
    }
    console.log(myList);
  }
  return myList;
}

console.log(
  simpleSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48])
);

function binarySearch(low, high, actual) {
  delta = high - low / 4;
  delta = Math.round(delta);
  guess = high + low / 2;
  while (guess !== actual) {
    if (guess < actual) {
      guess += delta;
    } else if (guess > actual) {
      guess -= delta;
    }
    delta /= 2;
    delta = Math.round(delta);
    console.log(guess);
  }
}
console.log(binarySearch(0, 100, 5));

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let n1 = new Node(5);
let n2 = new Node(9);
let n3 = new Node(8);
let n4 = new Node(3, n1, n2);
let n5 = new Node(6, n3);
let n6 = new Node(1, n4, n5);

console.log(n6);

let n7 = new Node(4);
