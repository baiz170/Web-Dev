function camelize(str) {
    return str
      .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
      .map(
        // capitalizes first letters of all array items except the first one
        // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
  }

  function filterRange(arr, a, b) {
    // added brackets around the expression for better readability
    return arr.filter(item => (a <= item && item <= b));
  }
  
  let arr = [5, 3, 8, 1];
  
  let filtered = filterRange(arr, 1, 4);
  
  alert( filtered ); // 3,1 (matching values)
  
  alert( arr ); // 5,3,8,1 (not modified)

  function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
  
      // remove if outside of the interval
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  
  }
  
  let arr2 = [5, 3, 8, 1];
  
  filterRangeInPlace(arr2, 1, 4); // removed the numbers except from 1 to 4
  
  alert( arr2 ); // [3, 1]

  let arr3 = [5, 2, 1, -10, 8];

arr3.sort((a, b) => b - a);

alert( arr3 );

function copySorted(arr) {
    return arr4.slice().sort();
  }
  
  let arr4= ["HTML", "JavaScript", "CSS"];
  
  let sorted = copySorted(arr4);
  
  alert( sorted );
  alert( arr4 );


  function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    };
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }

  let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

alert( names ); // John, Pete, Mary

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
  }));

  function sortByAge(arr5) {
    arr5.sort((a, b) => a.age - b.age);
  }
  
  let john1 = { name: "John", age: 25 };
  let pete1 = { name: "Pete", age: 30 };
  let mary1 = { name: "Mary", age: 28 };
  
  let arr5 = [ pete, john, mary ];
  
  sortByAge(arr5);
  
  // now sorted is: [john, mary, pete]
  alert(arr5[0].name); // John
  alert(arr5[1].name); // Mary
  alert(arr5[2].name); // Pete

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
  let arr7 = [1, 2, 3];
  shuffle(arr7);
  alert(arr7);
  
  function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }
  
  let john2 = { name: "John", age: 25 };
  let pete2 = { name: "Pete", age: 30 };
  let mary2 = { name: "Mary", age: 29 };
  
  let arr6 = [ john, pete, mary ];
  
  alert( getAverageAge(arr6) ); // 28


  function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert( unique(strings) ); // Hare, Krishna, :-O

  function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
  }

  