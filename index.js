#! /usr/bin/env node
import inquirer from "inquirer";
for (let i = 0; i <= 0; i++) {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'question1',
            message: 'What is TypeScript? \n A. A superset of JavaScript that compiles to JavaScript \n B. A database query language \n C. A server-side scripting language \n D. A CSS framework',
        },
        {
            type: 'input',
            name: 'question2',
            message: 'Which of the following is the correct way to declare a variable with a type annotation in TypeScript?\nA. let age: number = 30; \nB. let age = number(30);\nC. let number: age = 30;\nD. let age -> number = 30;',
        },
        {
            type: 'input',
            name: 'question3',
            message: 'What is the purpose of an interface in TypeScript?\nA. To define a blueprint for objects\nB. To perform arithmetic operations\nC. To create a new class\nD. To manage memory allocation',
        },
        {
            type: 'input',
            name: 'question4',
            message: 'Which of the following is the correct syntax to define a class in TypeScript?\nA. class Person { constructor(public name: string) {} }\nB. def class Person(name: str):\nC. class Person -> { constructor(public name: string); }\nD. function class Person { constructor(public name: string) {} }',
        },
        {
            type: 'input',
            name: 'question5',
            message: 'How do you define an enum in TypeScript?\nA. enum Direction { Up, Down, Left, Right }\nB. enum Direction: { Up, Down, Left, Right }\nC. enum Direction = [Up, Down, Left, Right]          \nD. enum Direction -> { Up, Down, Left, Right }',
        },
        {
            type: 'input',
            name: 'question6',
            message: 'Which of the following is the correct way to define a function with a return type in TypeScript?\nA. function greet(name: string): string { return "Hello, " + name; }\nB. function greet(name string) string { return "Hello, " + name; }\nC. function greet: (name: string) -> string { return "Hello, " + name; }\nD. def greet(name: str) -> str { return "Hello, " + name; }',
        },
        {
            type: 'input',
            name: 'question7',
            message: 'What is the purpose of generics in TypeScript?\nA. To define a collection of constants\nnB. To create reusable components\nC. To perform type assertions\nD. To declare multiple variables',
        },
        {
            type: 'input',
            name: 'question8',
            message: 'Which of the following is a correct way to use type assertion in TypeScript?\nA. let someValue: any = "this is a string"; let strLength: number = (someValue as string).length;\nB. let someValue: any = "this is a string"; let strLength: number = <string>someValue.length;\nC. let someValue: any = "this is a string"; let strLength: number = string(someValue).length;\nD. let someValue: any = "this is a string"; let strLength: number = someValue::string.length;',
        },
        {
            type: 'input',
            name: 'question9',
            message: 'How do you import a module in TypeScript?\nA. import { moduleName } from module B. require(module);\nC. include module;\nD. import moduleName from module;',
        },
        {
            type: 'input',
            name: 'question10',
            message: 'Which of the following is the correct syntax for creating a promise in TypeScript?\nA. let promise = new Promise((resolve, reject) => { /* executor */ });\nnB. let promise = Promise((resolve, reject) => { /* executor */ });\nC. let promise = new Promise = (resolve, reject) => { /* executor */ };\nD. let promise = promise((resolve, reject) => { /* executor */ });',
        },
    ]);
    let j = 0;
    if (answers.question1 == "A") {
        j++;
    }
    if (answers.question2 == "A") {
        j++;
    }
    if (answers.question3 == "A") {
        j++;
    }
    if (answers.question4 == "A") {
        j++;
    }
    if (answers.question5 == "A") {
        j++;
    }
    if (answers.question6 == "A") {
        j++;
    }
    if (answers.question7 == "B") {
        j++;
    }
    if (answers.question8 == "A") {
        j++;
    }
    if (answers.question9 == "A") {
        j++;
    }
    if (answers.question10 == "A") {
        j++;
    }
    console.log("SCORE:" + j);
}
