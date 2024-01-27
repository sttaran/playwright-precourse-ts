// Array of numbers
const numbers = [1, 2, 3];
const numbers2: number[] = [1, 2, 3];
const numbers3: Array<number> = [1, 2, 3];

// Array of strings
const strings = ['John', 'Jane'];
const strings2: string[] = ['John', 'Jane'];
const strings3: Array<string> = ['John', 'Jane'];

// Array of booleans
const booleans = [true, false];
const booleans2: boolean[] = [true, false];
const booleans3: Array<boolean> = [true, false];


// Tuple
// Array with fixed number of elements and known types, can hold only two elements with types string and number
const personData: [string, number] = ['John', 20];
personData[0] = "Alice"
personData[0] = 20
personData[0] = true

personData[1] = 22
personData[1] = "Alice"
personData[1] = true

// Non-empty array of numbers
let numbers4: [number, ...number[]] = [1, 2, 3];
numbers4 = []