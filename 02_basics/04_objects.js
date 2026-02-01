// const AppUser = new Object()  //Singleton Object 
const AppUser = {};  // Non Singleton Object

AppUser.id = "123abc"
AppUser.name = "Sammy"
AppUser.LoggedIn = true

// console.log(AppUser);

const regularUser = {
    email: "some@gamil.com",
    FullName:  {
        userFullName: {
            firstName:"Lakshyajit",
            middleNamw:"NA",
            lastName:"kalita"
        }
    }
}
console.log(regularUser.FullName.userFullName.firstName);
// console.log(regularUser.FullName?.userFullName.firstName);


const obj1 = { a: 1, b: 2}
const obj2 = { c :1, d: 2}

const obj3 = Object.assign({}, obj1, obj2,)  // .assign() Method
console.log(obj3);

const obj4 = {...obj1, ...obj2} // Spread Method
console.log(obj4);


const users = [
    {
    id: "1323dbfgn",
    email: "Ladsjifhe2gmial.com"
    },
    {
    id1: "1323dbfgn",
    email2: "Ladsjifhe2gmial.com"
    },
    {
    id3: "1323dbfgn",
    email3: "Ladsjifhe2gmial.com"
    }
]
users[1].email
console.log(AppUser);

console.log(Object.keys(AppUser));
console.log(Object.values(AppUser));
console.log(Object.entries(AppUser));

console.log(AppUser.hasOwnProperty('LoggedIn'));
