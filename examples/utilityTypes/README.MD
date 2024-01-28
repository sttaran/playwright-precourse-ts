## Union

A union type describes a value that can be one of several types. We use the vertical bar (|) to separate each type, so number | string | boolean is the type of a value that can be a number, a string, or a boolean.

```typescript
function padLeft(value: string, padding: string | number) {
  // ...
}
```

If we have a value that has a union type, we can only access members that are common to all types in the union.

```typescript
interface Bird {
  fly();
  layEggs();
}
```

```typescript
interface Fish {
  swim();
  layEggs();
}
```

```typescript

function getSmallPet(): Fish | Bird {
  // ...
}

let pet = getSmallPet();
pet.layEggs(); // okay
pet.swim();    // errors
```

Here, we have a function that returns a union type of Bird | Fish. If we want to access a member that isn’t common to both types, we have to use a type assertion.

```typescript

let pet = getSmallPet();

if ((<Fish>pet).swim) {
  (<Fish>pet).swim();
}
else {
  (<Bird>pet).fly();
}
```

Each of these property accesses will cause an error since the compiler has no idea which type pet actually is at this point. To get the same code working, we’ll need to use a type assertion:

```typescript
let pet = getSmallPet();

if ((<Fish>pet).swim) {
  (<Fish>pet).swim();
}
else {
  (<Bird>pet).fly();
}
```

A type assertion is like a type cast in other languages, but performs no special checking or restructuring of data. It has no runtime impact, and is used purely by the compiler. TypeScript assumes that you, the programmer, have performed any special checks that you need.

The other place where we commonly see type assertions used is in callback functions:

```typescript
// TypeScript assumes that callback accepts two parameters of type Fish and number
function isFish(pet: Fish | Bird): pet is Fish {
  return (<Fish>pet).swim !== undefined;
}
```

```typescript
// 'swim' and 'fly' are methods of Fish
if (isFish(pet)) {
  pet.swim();
}
else {
  pet.fly();
}
```

## Intersection Types

An intersection type combines multiple types into one. This allows you to add together existing types to get a single type that has all the features you need. For example, Person & Serializable & Loggable is a Person and Serializable and Loggable. That means an object of this type will have all members of all three types.

```typescript
interface Book {
  title: string;
}

interface Loggable {
  log(): void;
}

class ConsoleLogger implements Loggable {
  log() {
    // ...
  }
}

const jim: Book & Loggable = {
  title: "The Book",
  log: () => console.log("The Book")
};
```

## Utility Types

TypeScript comes with a set of built-in utility types that help facilitate working with generics. These utilities are available globally.

### Partial

Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.

```typescript
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter"
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash"
});
```

### Required

Constructs a type consisting of all properties of Type set to required. The opposite of Partial.

```typescript
interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 }; // OK

const obj2: Required<Props> = { a: 5 }; // Error: property 'b' missing
```

### Readonly

Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.

```typescript
interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: "Delete inactive users"
};

todo.title = "Hello"; // Error: cannot reassign a readonly property
```

### Record

Constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type.

```typescript

interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";
type Cat = Record<CatName, CatInfo>;

// Equivalent to:
type Cat = {
  miffy: CatInfo;
  boris: CatInfo;
  mordred: CatInfo;
}
```

### Pick

Constructs a type by picking the set of properties Keys from Type.

```typescript

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false
};
```

### Omit

Constructs a type by picking all properties from Type and then removing Keys.

```typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false
};
```

### Exclude

Constructs a type by excluding from Type all union members that are assignable to ExcludedUnion.

```typescript

type T0 = Exclude<"a" | "b" | "c", "a">;  // "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">;  // "c"

type T2 = Exclude<string | number | (() => void), Function>;  // string | number
```
