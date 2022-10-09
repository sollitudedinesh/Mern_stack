const name = require('./global.js');
// console.log(name.person1.age);

sayHi = (name)=>{
  setInterval(()=>{
    if(name.person1.age > name.person2.age){
      console.log(`${name.person1.name} is older than ${name.person2.name}`);
    }else if(name.person1.age < name.person2.age){
      console.log(`${name.person2.name} is older than ${name.person1.name}`);
    }else{
      console.log("they are same age");
    }
  }, 1000);
}

sayHi(name)