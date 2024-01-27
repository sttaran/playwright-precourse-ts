// Object literal type
function greet(person: { name: string; age: number }) {
    return "Hello " + person.name;
}

const person = {
    name: 'John',
    age: 20,
    isMarried: false,
};

console.log(greet(person));

export {};