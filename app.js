// jshint esversion:6 

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "You need to have a name for the data."]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const peopleSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const Fruit = mongoose.model("Fruit", fruitSchema);
const Person = mongoose.model("Person", peopleSchema);

const fruit = new Fruit ({
  name: "Apple",
  rating: 7,
  review: "Pretty nice."
});

const pineapple = new Fruit ({
  name: "Pineapple",
  rating: 10,
  review: "Love those pineapples"
});

pineapple.save();

const person = new Person ({
  name: "Amy",
  age: 37,
  favoriteFruit: pineapple
});

// person.save();



const kiwi = new Fruit ({
  name: "Kiwi",
  rating: 10,
  review: "The best."
});

const orange = new Fruit ({
  // name: "Orange",
  rating: 5,
  review: "Not after toothbrush."
});

const banana = new Fruit ({
  name: "Banana",
  rating: 80,
  review: "Hungry? Go for it."
});

// Fruit.insertMany([kiwi,orange,banana], (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits to fruitsDB");
//   }
// });

// fruit.save();

// Fruit.updateOne({_id: "6256dfecbd05942807eb1e16"}, {name: "Peach"}, function (err) { 
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Updated");
//   }
//  });

//  Fruit.deleteOne({_id: "62566649570d35a6b720bdff"}, function (err,result) { 
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
//  });


Person.updateOne({name: "John"}, {favoriteFruit: kiwi}, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Favorite fruit is added.");
  }
});

Person.deleteOne({_id: "6256ea00cbd3f16a922f3f5d"}, (err,result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});


// Fruit.find((err,fruits) => {
//   if (err) {
//     console.log(err);
//   } else {
//     mongoose.connection.close();
//     fruits.forEach((fruit) => {
//       console.log(fruit.name);
//     });
//   }
// });


