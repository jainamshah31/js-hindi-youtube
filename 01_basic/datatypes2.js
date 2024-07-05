const Id= '123'
const anotherId = Symbol('1234')

//console.log(Id===anotherId);

// link of study 
//https://262.ecma-international.org/5.1/#sec-11.4.3

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
               //Memory 
//(1)Stack Memory (primitive type use)
//(2)Heap Memory  (non- primitive data type use)

let myYoutubename = "jainamshah"

let anotherName = myYoutubename 
anotherName = "chaiaurcode"
console.log(anotherName)

let userOne = {
    email:"jainamshah@.com"
    Upi:"usre@hdfc"
}
let userTwo = userOne

userTwo.email="jainamshah@.com"
console.log(userOne.email);
console.log(userTwo.email);