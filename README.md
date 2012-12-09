mongo_require.js
================

CommonJS like module loader for MongoDB.

Installation
------------

Just save `mongo_require.js` into machine `mongod` is working on.

Usage
-----

### Basic Usage

At first, write your module.

```js
var Person = function (name) {
  this.name = name;
};

Person.prototype.hello = function () {
  print("Hi, my name is " + this.name + ".");
};

module.exports = Person;
```

Next, load `mongo_require.js` and your module.

```js
load('/path/to/mongo_require.js');

var Person = mongo_require('/path/to/person.js');

var bob = new Person('bob');
bob.hello();
```

And execute the js file using `mongo`.

```
$ mongo bob.js 
MongoDB shell version: 2.2.1
connecting to: test
Hi, my name is bob.
```

### Test Driven MapReduce

Define Mapper and Reducer function as a module.

```js
var mapper = function () {
  // Your Mapper function
};

var reducer = function (key, values) {
  // Your Reducer function
};

module.exports = {
  "mapper" : mapper,
  "reducer": reducer,
};
```

Write MapReduce job using `mongo_require.js`.

```js
load('/path/to/mongo_require.js');

var mr = mongo_require('/path/to/your_mapreduce.js');

db.users.(mr.mapper, mr,reducer, {"out": "mapreduce_result"});
```

You can unit-test Mapper and Reducer using any testing framework of Node.js!

Author
------

Yuya Takeyama
