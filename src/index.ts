// basic types
let id: number = 5;
let company: string = 'Alex';
let isPublished: boolean = true;
let x: any = 'hello';

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, 'hello'];

// tuple
let person: [number, string, boolean] = [1, 'Alex', true];
// tuple array
let employee: [number, string][];

employee = [
  [1, 'Alex'],
  [1, 'John'],
  [1, 'Jill'],
];

// union
let pid: string | number;

pid = 22;

// enum

enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

// objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: 'John',
};

// type assertion
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;

// functions
function addNum(x: number, y: number): number {
  return x + y;
}

function log(message: string | number): void {
  console.log(message);
}

// interfaces
interface UserInterface {
  id: number;
  name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: 'John',
};

// interface in a function
interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// interfaces (classes)
interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

// classes

class Person implements PersonInterface {
  // public, private, protected before var
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered.`;
  }
}

const alex = new Person(1, 'Alex Ghiurau');

// subclass
class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(2, 'Bob', 'Dev');

// Generics, placeholder of type
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(['alex', 'john', 'jill']);
