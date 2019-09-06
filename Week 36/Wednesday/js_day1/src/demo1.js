console.log("Hello World, i Know how to count");

[1,2,3,4].forEach(n=>console.log(n));


// opgave 1

//Function Declaration
       //Observe: no return type, no type on parameters
function add(n1, n2){
   return n1 +n2;
}

//Function Expression
var sub = function(n1,n2){
  return n1 - n2
} 

var mul = function (n1, n2) {
    return n1 * n2;
}

// Callback example, opgave 3

try {

    var cb = function (n1, n2, callback) {
        if (
            typeof n1 === "number", //Will fail if n1 is undefined, or is not a number
            typeof n2 === "number", //Will fail if n2 is undefined, or is not a number
            typeof callback === "function" //Will fail if callback is undefined or is not a function
        ) {
            return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
        } else {
            return console.log("input not right")
        }
    };

} catch (e) {
    console.log("Failed: " + e.log);
}

// opgave 2
console.log(add(1,2)); //equals 3
console.log(add); // prints: "[Function add]
console.log(add(1,2,3)); //equals 3
console.log(add(1)); // NaN
console.log( cb(3,3,add) ); // Result from the two numbers: 3+3=6
console.log( cb(4,3,sub) ); // Result from the two numbers: 4+3=1
console.log(cb(3,3,add())); // callback is not a function, TypeError
console.log(cb(3,"hh",add)); // Result from the two numbers: 3+hh=3hh

// opgave 4+5
console.log(cb(5,3,mul));
console.log(cb(10,2,function(n1,n2){
    return n1/n2;
}))


// opgave  6 CallBacks 

let names = ["Hamad","Jabs", "Saz", "o", "benny", "egon"];
function chosenOnes(name) {
    return name.length <=3
}
let value = names.filter(chosenOnes);
console.log(value);


names.forEach(function(all) {
    console.log(all);
});

value.forEach(function(chosenOnes) {
    console.log(chosenOnes);
});

// opgave 2 uppercase

var upper = names.map(function(x) { 
    return x.toUpperCase(); 
});
console.log(upper);

// opgave 4

var list = names.map(function(name){
    return "<li>" + name + "</li>";
});
list.unshift("<ul>");
list.push("</ul>");
console.log(list.join(""));

// opgave 5

var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];
// opgave a
//function getNewerModels(years) {
//    return years.year > 1999;
//}
//let newerCars = cars.filter(getNewerModels);
//console.log(newerCars);

// opgave b
//function getVolvo(Volvoen) {    
//    return Volvoen.make == 'Volvo';
//    }
//    let volvoen = cars.filter(getVolvo);
//    console.log(volvoen);
//    
    
  function belowPr(belowOnly) {
      return belowOnly.price < 5000; 
  }

  let cheap = cars.filter(belowPr); 
  console.log(cheap);


//opgave a:
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
//opgave b:
var all = boys.concat(girls);
console.log(all);
//opgave c:
var reduce = all.join(",");
console.log(reduce);
var reduce = all.join("-");
console.log(reduce);
// opgave d+e:
all.push("Lone", "Gitte");
console.log(all);
all.unshift("Hans","Kurt");
console.log(all);
// opgave f:
all.pop();
console.log(all);
//opgave g
all.shift();
console.log(all);
//opgave h
all.splice(3,2);
console.log(all);
// opgave i 
all.reverse();
console.log(all);
// opgave j
all.sort();
console.log(all);
// opgave k
all.sort(function (a, b) {
    return a.localeCompare(b);
    console.log(all);
});

// opgave l
all = all.map(function(x){ 
    return x.toUpperCase();
})
console.log(all);

// opgave m
const startsWithL = all.filter((name) => name.startsWith("L"));
console.log(startsWithL);
