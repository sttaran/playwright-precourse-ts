# TypeScript Arrays and Tuples

## Arrays

Arrays in TypeScript allow you to work with collections of values. You can specify the type of elements an array can contain.

### Example:

```typescript
// Array of numbers
let numbers: number[] = [1, 2, 3, 4, 5];

// Array of strings
let fruits: string[] = ["apple", "banana", "orange"];

// Mixed-type array (not recommended)
let mixedArray: (string | number)[] = ["apple", 42, "orange", 7];
```

## Tuples

Tuples are similar to arrays but have a fixed number of elements, and each element can have its own data type. This makes tuples particularly useful when you want to ensure a specific order and type of values.

### Example:

```typescript
// Tuple representing a person: [name, age, boolean]
let person: [string, number, boolean] = ["John", 30, true];
```

Tuples provide a way to structure data in a more explicit and precise manner.

### Destructuring Tuples:

```typescript
let person: [string, number, boolean] = ["John", 30, true];
let [name, age, isAdult] = person;

console.log(name);    // Output: John
console.log(age);     // Output: 30
console.log(isAdult); // Output: true
```

### Tuple vs Array:

Arrays are suitable for collections of similar items, while tuples are beneficial when dealing with a fixed set of diverse data types.