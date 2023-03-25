// arrow function

function hello(firstName){
    console.log(`Merhaba ${firstName}`);
}

hello("Javascript")


const helloFuncV1 = (firstName) => {console.log(`Merhaba ${firstName}`)}
helloFuncV1("js")

// her iki tarafta da birer işlem olduğundan süslülere gerek yok.
const helloFuncV2 = firstName => console.log(`Merhaba ${firstName}`)


const helloFuncV3 = (firstName,lastName) => console.log(`Merhaba ${firstName} ${lastName}`)

const helloFuncV4 = (firstName,lastName) => {
    let info = `Merhaba ${firstName} ${lastName}`
    console.log(info)
    return info;
}