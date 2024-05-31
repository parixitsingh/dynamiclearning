let JavascriptCourse = {
    Topic: "Javascript",
    DomainPath: "/javascript",
    Pages: [
        {
            PageTitle: "Introduction to Javascript",
            IndexTitle: "Introduction",
            Path: "/introduction",
            Content : <div class="section">
                <h3>Lesson 1: What is JavaScript?</h3>
                <p>JavaScript is a versatile programming language commonly used in web development. It allows developers to create interactive and dynamic web pages.</p>
                <p><strong>History and Evolution:</strong> JavaScript was created by Brendan Eich in 1995 and has since evolved with many updates, the most significant being ES6 (ECMAScript 2015).</p>
                <p><strong>JavaScript in the Browser vs. Server-side (Node.js):</strong> JavaScript runs in the browser to control web page behavior. Node.js allows JavaScript to run on the server, enabling backend development.</p>
                <p><strong>Setup Environment:</strong> Use a text editor like VSCode and the browser console to write and test JavaScript code.</p>
            </div> 
        },
        {
            PageTitle: "Adding JavaScript to HTML",
            IndexTitle: "Using Javascript",
            Path: "/html",
            Content : <div class="section">
                <p>JavaScript can be added to HTML in three ways:</p>
            <p><strong>Inline JavaScript:</strong> Inside an HTML element using the <code>onclick</code> attribute.</p>
            <div class="example">
                <h4>Example:</h4>
                <pre><code>&lt;button onclick="alert('Hello World!')"&gt;Click Me&lt;/button&gt;</code></pre>
            </div>
            <p><strong>Internal JavaScript:</strong> Inside a <code>&lt;script&gt;</code> tag within the HTML document.</p>
            <div class="example">
                <h4>Example:</h4>
                <pre><code>&lt;script&gt;
document.getElementById('demo').innerHTML = 'Hello JavaScript!';
&lt;/script&gt;</code></pre>
            </div>
            <p><strong>External JavaScript:</strong> In a separate .js file linked to the HTML document.</p>
            <div class="example">
                <h4>Example:</h4>
                <pre><code>&lt;script src="myscript.js"&gt;&lt;/script&gt;</code></pre>
            </div>
            </div> 
        },
        {
            PageTitle: "Basics of JavaScript",
            IndexTitle: "Basics",
            Path: "/basics",
            Content : <div class="section">
                <p><strong>Syntax and Statements:</strong> JavaScript code is made up of statements, separated by semicolons.</p>
            <p><strong>Variables:</strong> Used to store data values. Declared using <code>var</code>, <code>let</code>, or <code>const</code>.</p>
            <div class="example">
                <h4>Example:</h4>
                <pre><code>var name = 'John';
let age = 25;
const isStudent = true;</code></pre>
            </div>
            <p><strong>Data Types:</strong> Common data types include String, Number, Boolean, Object, and Array.</p>
            <div class="example">
                <h4>Example:</h4>
                <pre><code>{`let message = 'Hello';
let count = 123;
let isActive = false;
let person = {firstName: 'John', lastName: 'Doe'};
let colors = ['red', 'green', 'blue'];`}</code></pre>
            </div>
            <p><strong>Comments:</strong> Use <code>//</code> for single-line comments and <code>/* ... */</code> for multi-line comments.</p>
            <div class="example">
                <h4>Example:</h4>
                <pre><code>{`// This is a single-line comment
/* This is
a multi-line
comment */`}</code></pre>
            </div>

            <div class="exercise">
                <h4>Exercise:</h4>
                <p>Create a basic HTML page and include an external JavaScript file that displays an alert with your name.</p>
            </div>
            </div>
        },
        {
            PageTitle: "Operators and Expressions",
            IndexTitle: "Operators and Expressions",
            Path: "/operatorsexpressions",
            Content: <div class="section">
                 <p><strong>Arithmetic Operators:</strong> Used for mathematical calculations.</p>
            <div class="example">
                <h4>Example:</h4>
                <pre><code>{`let sum = 10 + 5;
let difference = 10 - 5;
let product = 10 * 5;
let quotient = 10 / 5;
let remainder = 10 % 3;`}</code></pre>
            </div>
            <p><strong>Comparison Operators:</strong> Compare two values and return a boolean.</p>
            <div class="example">
                <h4>Example:</h4>
                <pre><code>{`let isEqual = (10 == '10');  // true
let isIdentical = (10 === '10');  // false
let isGreater = (10 > 5);  // true
let isLess = (10 < 5);  // false`}</code></pre>
            </div>
            <p><strong>Logical Operators:</strong> Used to combine multiple conditions.</p>
            <div class="example">
                <h4>Example:</h4>
                <pre><code>{`let andOperator = (10 > 5 && 10 < 15);  // true
let orOperator = (10 > 15 || 10 < 15);  // true
let notOperator = !(10 > 5);  // false`}</code></pre>
            </div>
            <p><strong>Assignment Operators:</strong> Assign values to variables.</p>
            <div class="example">
                <h4>Example:</h4>
                <pre><code>{`let x = 10;
x += 5;  // x = x + 5
x -= 3;  // x = x - 3
x *= 2;  // x = x * 2
x /= 2;  // x = x / 2`}</code></pre>
            </div>
            </div>
        },
        {
            PageTitle: "Control Structures",
            IndexTitle: "Control Structures",
            Path: "/controlstructures",
            Content : <div class="section">
                <p><strong>Conditional Statements:</strong> Execute code based on conditions.</p>
            <div class="example">
                <h4>Example:</h4>
                <pre><code>{`let age = 20;
if (age < 18) {
    console.log('Minor');
} else if (age >= 18 && age < 65) {
    console.log('Adult');
} else {
    console.log('Senior');
}`}</code></pre>
            </div>
            <p><strong>Loops:</strong> Execute code repeatedly based on conditions.</p>
            <div class="example">
                <h4>Example:</h4>
                <pre><code>{`// for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// while loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// do while loop
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);`}</code></pre>
            </div>
            <p><strong>Break and Continue:</strong> Control loop execution.</p>
            <div class="example">
                <h4>Example:</h4>
                <pre><code>{`for (let i = 0; i < 10; i++) {
    if (i === 5) break;  // Exit loop when i is 5
    if (i % 2 === 0) continue;  // Skip even numbers
    console.log(i);
}`}</code></pre>
            </div>
            </div>
        },
        {
            PageTitle: "Functions",
            IndexTitle: "Functions",
            Path: "/functions",
            Content : <div class="section">
                <p><strong>Function Declaration and Expression:</strong> Define reusable code blocks.</p>
            <div class="example">
                <h4>Example:</h4>
                <pre><code>{`// Function declaration
function add(a, b) {
    return a + b;
}

// Function expression
const multiply = function(a, b) {
    return a * b;
};`}</code></pre>
            </div>
            <p><strong>Parameters and Arguments:</strong> Pass data to functions.</p>
            <div class="example">
                <h4>Example:</h4>
                <pre><code>{`function greet(name) {
    console.log('Hello ' + name);
}

greet('Alice');  // Output: Hello Alice`}</code></pre>
            </div>
            <p><strong>Return Values:</strong> Functions can return values.</p>
            <div class="example">
                <h4>Example:</h4>
                <pre><code>{`function square(number) {
    return number * number;
}

let result = square(5);  // result is 25`}</code></pre>
            </div>
            <p><strong>Scope and Hoisting:</strong> Variable accessibility and behavior.</p>
            <div class="example">
                <h4>Example:</h4>
                <pre><code>{`// Global scope
let globalVar = 'I am global';

function testScope() {
    // Local scope
    let localVar = 'I am local';
    console.log(globalVar);  // Accessible
    console.log(localVar);   // Accessible
}

console.log(globalVar);  // Accessible
// console.log(localVar);   // Error: localVar is not defined

// Hoisting
console.log(hoistedVar);  // Output: undefined
var hoistedVar = 'I am hoisted';`}</code></pre>
            </div>
            <p><strong>Arrow Functions:</strong> Shorter syntax for functions.</p>
            <div class="example">
                <h4>Example:</h4>
                <pre><code>{`// Arrow function
const add = (a, b) => a + b;

console.log(add(5, 3));  // Output: 8`}</code></pre>
            </div>

            <div class="exercise">
                <h4>Exercise:</h4>
                <p>Write a function that takes two numbers and returns their sum. Call this function with different values and display the results on the webpage.</p>
            </div>
            </div>
        },
        {
            PageTitle: "The Document Object Model (DOM)",
            IndexTitle: "DOM",
            Path: "/dom",
            Content :<div class="section">
                <p>The DOM is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.</p>
            <p><strong>Selecting Elements:</strong> Use methods like <code>getElementById</code>, <code>querySelector</code>, etc., to select elements.</p>
            <div class="example">
                <h4>Example:</h4>
                <pre><code>{`// Selecting elements
let elementById = document.getElementById('demo');
let elementByClass = document.querySelector('.demo');
let elementByTag = document.querySelector('p');`}</code></pre>
            </div>
            <p><strong>Modifying Elements:</strong> Change element content and style.</p>
            <div class="example">
                <h4>Example:</h4>
                <pre><code>{`// Modifying elements
let element = document.getElementById('demo');
element.textContent = 'Hello JavaScript!';
element.style.color = 'red';`}</code></pre>
            </div>
            </div>
        },
        {
            PageTitle: "Events and Event Handling",
            IndexTitle: "Event Handling",
            Path: "/eventhandling",
            Content: <div class="section">
                <p><strong>Event Types:</strong> Common events include <code>click</code>, <code>mouseover</code>, <code>keydown</code>, etc.</p>
            <div class="example">
                <h4>Example:</h4>
                <pre><code>{`// Event types
let button = document.getElementById('myButton');
button.addEventListener('click', function() {
    alert('Button clicked!');
});`}</code></pre>
            </div>
            <p><strong>Adding Event Listeners:</strong> Use <code>addEventListener</code> to handle events.</p>
            <div class="example">
                <h4>Example:</h4>
                <pre><code>{`// Adding event listeners
let element = document.getElementById('demo');
element.addEventListener('mouseover', function() {
    element.style.color = 'blue';
});`}</code></pre>
            </div>
            <p><strong>Event Object:</strong> Access event details within event handlers.</p>
            <div class="example">
                <h4>Example:</h4>
                <pre><code>{`// Event object
let input = document.getElementById('myInput');
input.addEventListener('keydown', function(event) {
    console.log('Key pressed: ' + event.key);
});`}</code></pre>
            </div>
            <p><strong>Event Delegation:</strong> Use a single event listener to manage similar events on multiple elements.</p>
            <div class="example">
                <h4>Example:</h4>
                <pre><code>{`// Event delegation
document.getElementById('parent').addEventListener('click', function(event) {
    if (event.target && event.target.matches('button.className')) {
        console.log('Button clicked!');
    }
});`}</code></pre>
            </div>

            <div class="exercise">
                <h4>Exercise:</h4>
                <p>Create a simple to-do list where users can add and remove items. Use event listeners to handle the interactions.</p>
            </div>
            </div>
        },
        {
            PageTitle: "Objects and Arrays",
            IndexTitle: "Objects and Arrays",
            Path: "/objectsandarrays",
            Content: <div class="section">
                <p><strong>Object Literals:</strong> Used to store related data and functions together.</p>
            <div class="example">
                <h4>Example:</h4>
                <pre><code>{`// Object literal
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

console.log(person.fullName());  // Output: John Doe`}</code></pre>
            </div>
            <p><strong>Adding, Modifying, and Deleting Properties:</strong> Change object properties dynamically.</p>
            <div class="example">
                <h4>Example:</h4>
                <pre><code>{`// Adding, modifying, deleting properties
person.job = 'Developer';  // Adding
person.age = 31;  // Modifying
delete person.job;  // Deleting

console.log(person);`}</code></pre>
            </div>
            <p><strong>Array Methods:</strong> Common methods include <code>push</code>, <code>pop</code>, <code>shift</code>, <code>unshift</code>, <code>map</code>, <code>filter</code>, <code>reduce</code>.</p>
            <div class="example">
                <h4>Example:</h4>
                <pre><code>{`// Array methods
let colors = ['red', 'green', 'blue'];
colors.push('yellow');  // Add to end
colors.pop();  // Remove from end
colors.shift();  // Remove from start
colors.unshift('purple');  // Add to start

let upperColors = colors.map(color => color.toUpperCase());
console.log(upperColors);  // Output: ['PURPLE', 'GREEN', 'BLUE']`}</code></pre>
            </div>
            </div>
        },
        {
            PageTitle: "ES6 and Beyond",
            IndexTitle: "ES6 and Beyond",
            Path: "/es6",
            Content: <div class="section">
               <p><strong>Template Literals:</strong> Use backticks and placeholders for strings.</p>
            <div class="example">
                <h4>Example:</h4>
                <pre><code>{`// Template literals
let name = 'John';
let greeting = \`Hello, \$\{name\}!\`;
console.log(greeting);  // Output: Hello, John!`}</code></pre>
            </div>
            <p><strong>Destructuring Assignment:</strong> Extract values from arrays or properties from objects.</p>
            <div class="example">
                <h4>Example:</h4>
                <pre><code>{`// Destructuring assignment
let [a, b] = [1, 2];
console.log(a, b);  // Output: 1 2

let {firstName, lastName} = person;
console.log(firstName, lastName);  // Output: John Doe`}</code></pre>
            </div>
            <p><strong>Rest and Spread Operators:</strong> Combine or spread out elements.</p>
            <div class="example">
                <h4>Example:</h4>
                <pre><code>{`// Rest and spread operators
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num);
}
console.log(sum(1, 2, 3));  // Output: 6

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2);  // Output: [1, 2, 3, 4, 5]`}</code></pre>
            </div>
            <p><strong>Classes and Inheritance:</strong> Define and extend classes.</p>
            <div class="example">
                <h4>Example:</h4>
                <pre><code>{`// Classes and inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(\`\${this.name} makes a noise.\`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(\`\${this.name} barks.\`);
    }
}

let dog = new Dog('Rex');
dog.speak();  // Output: Rex barks.`}</code></pre>
            </div>

            <div class="exercise">
                <h4>Exercise:</h4>
                <p>Create a class called <code>Person</code> with properties for name and age, and a method that introduces the person. Create another class called <code>Student</code> that extends <code>Person</code> and adds a property for major. Test the classes by creating instances and calling their methods.</p>
            </div>
            </div>
        }
    ]
};

export default JavascriptCourse
