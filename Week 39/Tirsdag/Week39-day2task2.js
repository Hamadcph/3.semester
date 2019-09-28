// opgave 5a

var all= ["Lars", "Peter", "Jan", "Bo"];

console.log(all.join(',' + ' ' + '#'));

var numbers = [2, 3, 67, 33]; 

function myFunc(total, num) {
    return total + num;
  }

  console.log(numbers.reduce(myFunc,0));


