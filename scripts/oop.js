const person = {
  name: { first: 'Bob', last: 'Smith' },
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],

  bio: function () {
    this ['name']['first'] + ' ' + this ['name']['last'] + ' is ' + this ['age'] + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.'
    console.log();
  },

  greeting: function () {
    console.log("Hi! I'm " + this['name']['first'] + '.');
  }
};

console.log(person.name.first);
console.log(person.name.last);
console.log(person.age);
console.log(person.interests[1]);
person.bio();
person.greeting();

person.age = 45;
person['name']['last'] = 'Cratchit';
console.log(person.age);
console.log(person['name']['last']);

person['eyes'] = 'hazel';
person.farewell = function () {
  console.log('Bye everybody!');
};
console.log(person['eyes']);
person.farewell();

let myDataName = 'height';
let myDataValue = '1.75m';
person[myDataName] = myDataValue;
console.log(person.height);

const person1 = {
  name: 'Chris',
  greeting: function () {
    console.log("Hi! I'm " + this.name + '.');
  }
};

const person2 = {
  name: 'Deepti',
  greeting: function () {
    console.log("Hi! I'm " + this.name + '.');
  }
};

//------
const arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

//------
const myObj = Object.create({}, {
    getFoo: {
      value: function () {
        return this.foo;
      }
    }
  }
);

myObj.foo = 1;
console.log(Object.keys(myObj));

//------
const obj = { a: 1, b: 2, c: 3 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}
