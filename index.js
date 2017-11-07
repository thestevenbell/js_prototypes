function Animal() {
  this.init =  function (type, sound){
    this.type = type;
    this.sound = sound;
  },
  this.sound = "",
  this.type = "",
  this.age = 0,
  this.makeSound =  function (){console.log(this.sound)},
  this.printThis = function (){console.log(`A ${this.type} says ${this.sound}.`)}
}

let cat = new Animal();

cat.init("cat", "moo");
cat.printThis();

