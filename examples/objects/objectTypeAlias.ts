type Person = {
    name: string;
    age: number;
};

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

// Extending type aliases

type Book = {
    title: string;
}

// Type includes all properties from Book and adds author
type BookWithAuthor = Book & {
    author: string;
}

function printBook(book: BookWithAuthor) {
    console.log(book.title + " by " + book.author);
}

printBook({title: "Harry Potter", author: "J.K. Rowling"})
printBook({title: "Harry Potter"})


// Adding properties to type aliases - IMPOSSIBLE in TS(v5.3.3)

export {};