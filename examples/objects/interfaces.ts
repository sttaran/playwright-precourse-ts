
interface Person {
    name: string;
    age: number;
}

function greet(person: Person) {
    return "Hello " + person.name;
}

const person : Person = {
    name: 'John',
    age: 20,
    isMarried: false,
};

greet(person)
greet({name: "Alice", age: 20})


// Extending interfaces
interface Book {
    title: string;
}

interface BookWithAuthor extends Book {
    author: string;
}

// Adding properties to interfaces
interface BookWithAuthor {
    year: number;
}

function printBook(book: BookWithAuthor) {
    console.log(book.title + " by " + book.author + " published in " + book.year);
}

printBook({title: "Harry Potter", author: "J.K. Rowling", year: 1997})
printBook({title: "Harry Potter", author: "J.K. Rowling"})



export {};