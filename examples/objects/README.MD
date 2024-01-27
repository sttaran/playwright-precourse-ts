# TypeScript Objects

## **Object**

Literal notation:

```typescript
let person : {name: string, age: number, sayHello: () => void} = {
    name: "John",
    age: 25,
    sayHello: function() {
        console.log("Hello!");
    }
};
```

Type Alias notation:

```typescript
type Person = {
    name: string;
    age: number;
    sayHello: () => void;
};

let person: Person = {
    name: "John",
    age: 25,
    sayHello: function() {
        console.log("Hello!");
    }
};

```

Interface notation:

```typescript
interface Person {
    name: string;
    age: number;
    sayHello: () => void;
}

let person: Person = {
    name: "John",
    age: 25,
    sayHello: function() {
        console.log("Hello!");
    }
};
```



