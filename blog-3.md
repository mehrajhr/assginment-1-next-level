Generics allows us to store a type to use later in a function , class or interface .

Basically when we write a function , then we decide to what type of data its will handle like (string or number ). If we want to handle anything then might be used any but its creates 'type safety hole'. 

Generics allows us to use a placeholder (usually <T>) that captures the specific type when we call to the function.We can use generics as "blueprints" for data, like API responses. 

This keeps your code DRY (Don't Repeat Yourself) because you don't have to create a new interface for every different type of data your server might send back.  

Generics allows us to write abstract logic by using a type variable <T>. This variable captures the specific type during execution, ensuring that components remain flexible for different data structures while staying 100% type-safe.

<!-- code for generics -->

const addStudent = <T>(studentInfo : T) =>{
    return {
        course: 'next level',
        ...studentInfo
    }
}

const student1 = {
    id: 'c231249',
    name: 'mehraj hasan riaj',
    haswatch: true
}
const student2 = {
    id: 'c231247',
    name: 'fahad',
    hasWatch : false,
    hasIphone : true
}

const student3 = {
    haswatch : true
}