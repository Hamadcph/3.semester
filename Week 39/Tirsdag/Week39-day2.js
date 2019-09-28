//opgave 1a

let myArray = ['Hamad', 'Jabs', 'Saz', 'Benjamin', 'chh'];

function filteredNames(names) {
  if(names.includes('a'))
  return names;
}
console.log(myArray.filter(filteredNames));

// opgave 1b



function reverseFunction(name) {
  return name.split('').reverse().join('');
}

console.log(myArray.map(reverseFunction));

//opgave 2a

Array.prototype.mfilter =  function (fun) {
    var filtered = []; 
    for(let i = 0; i < this.length; i++) {
      if (fun(this[i], i, this)) filtered.push(this[i]);
    }
    return filtered;
  };

  function getarr(name) {
      return name.length >= 4;
  }

  let myarray =['hamad','jabs','benji'];
  
  let myar = myarray.mfilter(getarr);
  console.log(myar);
  


// opgave 4

let numbers = [1, 3, 5, 10, 11];
let result = [4,8,15,21,11];

function insert(res, length, array) {
  if(length < array.length -1)
  return res + array[length+1];
  else return res;
}

let results = numbers.map(insert);
console.log(results);


//opgave 4.b

function aTag(name) {
  return '<a href=""> ' + name + '</a>'; 
}

function NavTag(array) {
  let arraynames = array.map(aTag);

  let navPrint = '<nav>\n';
  navPrint = navPrint + arraynames.join('\n');
  return navPrint = navPrint + '\n </nav>' ;
}


console.log(NavTag(myArray));

// opgave 4.c

let names = [{name:"Lars",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Bo", phone: "79345"}];

function table(arr) {
  let returnString = '<table>\n';

let tabelarr = function(arr) {
  function ex(element) {
    let returnString = '<tr>\n';
    returnString = returnString + '<td>' + element.name + '</td>\n';
    returnString = returnString + '<td>' + element.phone + '</td>\n';

    return returnString + '</tr>';
  }
  let MyObj = arr.map(ex);
  return MyObj.join("\n");
};
returnString = returnString + tabelarr(arr);

return returnString + '\n</table>';
}
console.log(table(names));

// 4.d

function NavTag2(arr) {

  let array2 = arr.map(function (name) {
      return name.name;
  })

  let arraynames = array2.map(arr);

  var navPrint = '<nav>\n';
  navPrint = navPrint + arraynames.join('\n');
  return navPrint = navPrint + '\n</nav>';
}

document.getElementById("names").innerHTML = table(names);

document.getElementById("NavPrint").innerHTML = NavTag2(names);

//opgave 4.e

document.getElementById("myButton").onclick = function () {

  function filteredNames(name) {
      if (name.name.includes('a'))
          return name;
  }

  var filterNames = names.filter(filteredNames);

  document.getElementById("names").innerHTML = table(filterNames);

  document.getElementById("NavPrint").innerHTML = NavTag2(filterNames);
}


// opgave 5a

var all= ["Lars", "Peter", "Jan", "Bo"];

console.log(all.join(','));



