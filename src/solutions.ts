// 1 no problem

const filterEvenNumbers = (numbers : number[]):number[] =>{
    return numbers.filter((value : number) => value%2 === 0);
}

// 2 no problem

const reverseString = (text : string):string =>{
    const newText = text.split('');
    newText.reverse();
    return newText.join('');
}


// 3 no problem

type StringOrNumber = string | number;
const checkType = (value : StringOrNumber):string =>{
    if (typeof value === 'string'){
        return "String";
    }
    else {
        return "Number";
    }
}

// 4 no problem

const getProperty = <T , K extends keyof T>(obj : T , key : K): T[K] =>{
    return obj[key];
}


// 5 no problem 

interface Book {
    title : string;
    author : string;
    publishedYear : number;
}

const toggleReadStatus = (book : Book) =>{
    return {
        ...book,
        isRead : true
    }
}


// 6 no problem

class Person {
    name : string;
    age : number;

    constructor(name : string , age : number){
        this.name = name;
        this.age = age;
    }
}

class Student extends Person{
    grade : string;

    constructor(name : string , age : number , grade : string){
        super(name , age);
        this.grade = grade;
    }

    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}


// 7 no problem

const getIntersection = (array1 : number[] , array2 : number[]): number[] =>{
    return array1.filter(value => array2.includes(value));
}


