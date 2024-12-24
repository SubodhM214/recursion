function fib(num) {
  let a = [];
  a[0] = 0;
  a[1] = 1;
  for (let i = 2; i < num; i++) {
    a[i] = a[i - 1] + a[i - 2];
  }
  return a;
}

function fibsRec(num) {
  //base case

  if (num <= 1) {
    return num;
  }
  //recursion call
  return fibsRec(num - 1) + fibsRec(num - 2);
}

function callFib() {
  let num = 10;
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(fibsRec(i));
  }
  console.log(arr);
}

console.log(fib(8));
callFib();
