function fibonacciIter(n) {
  let first = 0;
  let second = 1;
  let sum = first + second;
  if (n < 2) {
    return 0;
  }
  for (let i = 0; i < n - 2; i++) {
    second += first;
    first = second - first;
    sum += second;
  }
  return sum;
}

function fibonacciRec(n, originalN = -1) {
  if (n <= 1) return 1;
  sum = fibonacciRec(n - 1) + fibonacciRec(n - 2);
  if (originalN === n) {
    return sum - 1;
  }
  return sum;
}

function main() {
  console.log("Hello World");
}

main();
