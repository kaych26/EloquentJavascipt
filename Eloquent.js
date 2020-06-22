const triangle = () => {
  let s = '#';
  for (let i = 0; i < 7; i++) {
    console.log(s);
    s += '#'
  }
}

triangle();

const fizzBuzz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i, ' FizzBuzz');
    }
    if (i % 3 === 0) {
      console.log(i, ' Fizz');
    }
    else if (i % 5 === 0) {
      console.log (i, ' Buzz')
    }
    else {
      console.log(i);
    }
  }
}
fizzBuzz()