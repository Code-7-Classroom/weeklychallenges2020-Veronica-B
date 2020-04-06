// VERY HARD: Object prototype chain and prototypal inheritance exercise.
// 1. Create a Person constructor that has three properties: name, job, and age.
// 2. Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
// 3. Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a    back-end developer".
 
// See next page…
// 4. Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that is passed in and a busy property that is NOT passed in and is set to true by default.
// 5. Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. Also give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.
// 6. Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer is not, e.g. should initially log out "Mark can't accept any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.
// 7. Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages the programmer knows.
// 8. Test it out - can you create different programmers and run all the methods on them? Does each programmer maintain their own properties properly and independently of the other programmers?
// Bonus - ES6 Syntax: Use ES6 Syntax in your answer. Feel free to add on new methods or properties to  incorporate the syntax.
// function Person(name, job, age) { }
// function Programmer(name, job, age, languages) { }


// 1. Create a Person constructor that has three properties: name, job, and age.

const Person= function(name, job, age){
    this.name=name;
    this.job=job;
    this.age=age;
}

// 2. Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".

Person.prototype.exercise = function(){
    console.log(`I like to swim!`);
}

//vero.exercise() shows up as I like to swim!

// 3. Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a    back-end developer".


Person.prototype.fetchJob = function(){
    console.log(`${this.name} is a ${this.job}.`);
}

// vero.fetchJob() "Vero is a student" shows up


// 4. Create a Programmer constructor that inherits all the members from Person with an 
//additional 'languages' property that is passed in and a busy property that is NOT passed in and is set to true by default.

const Programmer= function(name, job, age, languages, busy){
    this.name=name;
    this.job=job;
    this.age=age;
    this.languages=languages;
    this.busy=busy=true;
}

// 5. Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. 
//Also give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.

Programmer.prototype.completeTask = function(){
    return this.busy=false;
}

Programmer.prototype.acceptNewTask = function(){
    return this.busy=true;
}

// console.log(rida.completeTask()) returns false
//  console.log(rida.acceptNewTask()) returns true

// 6. Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer 
//is not,  e.g. should initially log out "Mark can't accept any new tasks right now." and "Mark would love to take on a new 
//responsibility." if the programmer is not busy.


Programmer.prototype.offerNewTask = function(){
    if (this.busy===true){
        console.log(`${rida.name} can't accept any new tasks right now.`)
    }else{
        console.log(`${rida.name} would love to take on a new responsibility`)
    }
}

// if console.log(rida.completeTask()) returns false then Rida would love to take on a new responsibility! appears
//  console.log(rida.acceptNewTask()) returns true Rida would love to take on a new responsibility appears

// rida.offerNewTask()

// 7. Give the Programmer 'learnLanguage' and 'listLanguages' methods 
//that add new languages to the programmer and list off all languages the programmer knows.


Programmer.prototype.learnLanguage = function(learn){
    this.languages.push(learn);
}

Programmer.prototype.listLanguages = function(){
   return this.languages;
}

//8. Test it out - can you create different programmers and run all the methods on them? Does each programmer 
//maintain their own properties properly and independently of the other programmers?
// Bonus - ES6 Syntax: Use ES6 Syntax in your answer. Feel free to add on new methods or properties to  incorporate the syntax.
// function Person(name, job, age) { }
// function Programmer(name, job, age, languages) { }


let vero= new Person(`Vero`, `student`, 18);
console.log(vero) //works 
vero.exercise() //shows up as I like to swim!
vero.fetchJob() //"Vero is a student" shows up
rida= new Programmer(`Rida`, `Front end developer`, 18, [`HTML`, `CSS`, `JS`], true);
 console.log(rida.completeTask()) //returns false
 rida.offerNewTask()// returns false then Rida would love to take on a new responsibility! appears
 console.log(rida.acceptNewTask()) //returns false
 rida.offerNewTask()//Rida can't accept any new tasks right now.
rida.learnLanguage(`python`);
console.log(rida.listLanguages());