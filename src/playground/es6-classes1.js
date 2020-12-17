class Person{
constructor(name='anonyms',age=0) {
this.name=name;
this.age=age;
}
getGretting(){
//return 'Hi I am '+this.name+'!';
return`hi,I am test ${this.name}`;
}
getDescription(){
return`${this.name} is ${this.age} old major ${this.major}`
}
}
class Student extends Person{
constructor(name,age,major){
super(name,age);
this.major=major;
}
}

class Traveller extends Person{
constructor(name,age,location){
super(name,age);
this.location=location;
}
getGretting(){
let gretting =super.getGretting();
if(this.location){
gretting +=`I am visiting from ${this.location}`
}
return gretting;
}
}


const me = new Traveller('Preethi',22,'Chennai');
console.log(me.getGretting());

const other=new Traveller();
console.log(other.getGretting());