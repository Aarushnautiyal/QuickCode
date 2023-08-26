const factorial = (n) => {
  let fact = 1;
  if (n === 0 || n === 1) return fact;

  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
};

const RecusriveFactorial = (n) => {
  if (n === 0 || n === 1) return 1;

  return n * RecusriveFactorial(n - 1);
};
console.log("Factorial output is ->", RecusriveFactorial(4));
