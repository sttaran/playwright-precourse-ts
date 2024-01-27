# TypeScript Primitive Types

In TypeScript, primitive types are the most basic building blocks for defining data. They represent simple values, and there are five primary primitive types:

## **Boolean**

The `boolean` type represents a logical value, either `true` or `false`.

Example:
```typescript
let isCompleted: boolean = true;
```

## **Number**

The `number` type represents both integer and floating-point numbers.

Example:
```typescript
let age: number = 25;
let pi: number = 3.14;
```

## **String**

The `string` type represents textual data.

Example:
```typescript
let message: string = "Hello, TypeScript!";
```

## **Null and Undefined**

In TypeScript, `null` and `undefined` are their own types that represent the absence of a value.

Example:
```typescript
let nullValue: null = null;
let undefinedValue: undefined = undefined;
```

## **Symbol**

The `symbol` type represents a unique identifier.

Example:
```typescript
const mySymbol: symbol = Symbol("description");
```
## **BigInt**

Starting from TypeScript 3.2, the `bigint` type is introduced to represent arbitrary precision integers.

Example:
```typescript
let bigNumber: bigint = 9007199254740991n;
```

## **Void**

The `void` type is used to indicate that a function does not return any value.

Example:
```typescript
function logMessage(): void {
    console.log("This function returns nothing.");
}
```

## **Any**

The `any` type is a dynamic type that can hold any value. It is often used when the type of a variable is not known during development.

Example:
```typescript
let dynamicValue: any = "This can be any type.";
```

## **Unknown**
unknown
The unknown type, on the other hand, is designed to represent values of an unknown type while still maintaining type safety. Variables of type unknown cannot be assigned to other types without explicit type assertions or type checks.
```typescript
let unknownVariable: unknown = 42;

// Type assertion
let result: number = (unknownVariable as number) + 10;

// Type check
if (typeof unknownVariable === 'number') {
    let result: number = unknownVariable + 10;
}

```
## **Never**

The `never` type represents values that never occur. It is often used for functions that never return or always throw an exception.

Example:
```typescript
function throwError(message: string): never {
    throw new Error(message);
}
```
