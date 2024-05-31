let ReactJSCourse = {
    Topic: "ReactJS",
    DomainPath: "/reactjs",
    Pages: [
        {
            PageTitle: "Introduction to ReactJS",
            IndexTitle: "Introduction",
            Path: "/introduction",
            Content : <div class="section">
                <p>React is a JavaScript library for building user interfaces, particularly single-page applications where data changes over time. It was developed by Facebook and is maintained by Facebook and a community of developers.</p>
                <p><strong>Why Use React?</strong> React allows developers to create large web applications that can update and render efficiently in response to data changes. The main concepts include components, state, and props.</p>
                <p><strong>Key Features:</strong></p>
                <ul>
                    <li>Component-based: Build encapsulated components that manage their own state.</li>
                    <li>Declarative: Design views for each state in your application, and React will efficiently update and render just the right components when your data changes.</li>
                    <li>Learn Once, Write Anywhere: You can use React for web, mobile apps with React Native, and more.</li>
                </ul>
            </div> 
        },
        {
            PageTitle: "Setting Up the Environment",
            IndexTitle: "Environment",
            Path: "/environment",
            Content : <div class="section">
                <p>To start with React, you need to set up your development environment.</p>
            <p><strong>Step 1:</strong> Install Node.js and npm from the official website.</p>
            <p><strong>Step 2:</strong> Use Create React App to set up a new React project.</p>
            <div class="example">
                <h4>Example:</h4>
                <pre><code>{`// Open your terminal and run:
npx create-react-app my-app

// Navigate into your project directory
cd my-app

// Start the development server
npm start`}</code></pre>
            </div>
            </div> 
        },
        {
            PageTitle: "Understanding JSX",
            IndexTitle: "Understanding JSX",
            Path: "/jsx",
            Content : <div class="section">
                <p>JSX is a syntax extension for JavaScript, recommended to be used with React. It allows you to write HTML-like code within JavaScript, which then gets transformed to JavaScript objects by tools like Babel.</p>
            <p><strong>Embedding Expressions in JSX:</strong> You can embed any JavaScript expression by wrapping it in curly braces.</p>
            <div class="example">
                <h4>Example:</h4>
                <pre><code>{`const name = 'React';
const element = <h1>Hello, {name}</h1>;
ReactDOM.render(element, document.getElementById('root'));`}</code></pre>
            </div>
            <p><strong>JSX is an Expression:</strong> After compilation, JSX expressions become regular JavaScript objects.</p>
            <div class="example">
                <h4>Example:</h4>
                <pre><code>{`const element = <h1>Hello, world!</h1>;
console.log(element);  // Output: Object representation of the DOM element`}</code></pre>
            </div>

            <div class="exercise">
                <h4>Exercise:</h4>
                <p>Create a new React project and render a "Hello, World!" message using JSX.</p>
            </div>
            </div>
        },
        {
            PageTitle: "Components and Props",
            IndexTitle: "Components and Props",
            Path: "/componentsandprops",
            Content: <div class="section">
                <p><strong>Components:</strong> React components are the building blocks of any React application. They can be functional or class-based.</p>
            <div class="example">
                <h4>Example:</h4>
                <pre><code>{`// Functional Component
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

// Class Component
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}`}</code></pre>
            </div>
            <p><strong>Props:</strong> Props are inputs to components. They are single values or objects containing a set of values passed to components on creation using a naming convention similar to HTML-tag attributes.</p>
            <div class="example">
                <h4>Example:</h4>
                <pre><code>{`const element = <Welcome name="Sara" />;
ReactDOM.render(element, document.getElementById('root'));`}</code></pre>
            </div>
            </div>
        },
        {
            PageTitle: "State and Lifecycle",
            IndexTitle: "State and Lifecycle",
            Path: "/stateandlifecycle",
            Content : <div class="section">
                <p><strong>State:</strong> State is similar to props, but it is private and fully controlled by the component.</p>
            <div class="example">
                <h4>Example:</h4>
                <pre><code>{`class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

ReactDOM.render(<Clock />, document.getElementById('root'));`}</code></pre>
            </div>
            <p><strong>Lifecycle Methods:</strong> Methods like <code>componentDidMount</code> and <code>componentWillUnmount</code> allow you to run code at particular times in the lifecycle of a component.</p>
            </div>
        },
        {
            PageTitle: "Handling Events",
            IndexTitle: "Handling Events",
            Path: "/handlingevents",
            Content : <div class="section">
                <p>Handling events with React elements is very similar to handling events on DOM elements. However, there are some syntactic differences:</p>
            <ul>
                <li>React events are named using camelCase, rather than lowercase.</li>
                <li>With JSX you pass a function as the event handler, rather than a string.</li>
            </ul>
            <div class="example">
                <h4>Example:</h4>
                <pre><code>{`class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make \`this\` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

ReactDOM.render(<Toggle />, document.getElementById('root'));`}</code></pre>
            </div>

            <div class="exercise">
                <h4>Exercise:</h4>
                <p>Create a button that toggles between showing "ON" and "OFF" when clicked, using state and event handling.</p>
            </div>
            </div>
        },
        {
            PageTitle: "Conditional Rendering",
            IndexTitle: "Conditional Rendering",
            Path: "/conditionalrendering",
            Content :<div class="section">
                <p>In React, you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application.</p>
            <div class="example">
                <h4>Example:</h4>
                <pre><code>{`function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

ReactDOM.render(
    // Try changing to isLoggedIn={true}
    <Greeting isLoggedIn={false} />,
    document.getElementById('root')
);`}</code></pre>
            </div>
            </div>
        },
        {
            PageTitle: "Lists and Keys",
            IndexTitle: "Lists and Keys",
            Path: "/listsandkeys",
            Content: <div class="section">
                <p>First, let’s review how you transform lists in JavaScript.</p>
            <div class="example">
                <h4>Example:</h4>
                <pre><code>{`const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =&gt;
    <li key={number.toString()}>
        {number}
    </li>
);

ReactDOM.render(
    <ul>{listItems}</ul>,
    document.getElementById('root')
);`}</code></pre>
            </div>
            <p>Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.</p>
            </div>
        },
        {
            PageTitle: "Forms",
            IndexTitle: "Forms",
            Path: "/forms",
            Content: <div class="section">
                <p>HTML form elements work a bit differently in React. You can use controlled components to handle forms:</p>
            <div class="example">
                <h4>Example:</h4>
                <pre><code>{`class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
);`}</code></pre>
            </div>

            <div class="exercise">
                <h4>Exercise:</h4>
                <p>Create a form with an input field and a submit button. When the form is submitted, display an alert with the input value.</p>
            </div>
            </div>
        },
        {
            PageTitle: "Introduction to Hooks",
            IndexTitle: "Hooks",
            Path: "/hooks",
            Content: <div class="section">
                <p>Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.</p>
            <p><strong>useState Hook:</strong> Declare state variables in functional components.</p>
            <div class="example">
                <h4>Example:</h4>
                <pre><code>{`import React, { useState } from 'react';

function Example() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

ReactDOM.render(
    <Example />,
    document.getElementById('root')
);`}</code></pre>
            </div>
            </div>
        },
        {
            PageTitle: "useEffect Hook",
            IndexTitle: "useEffect",
            Path: "/useEffect",
            Content: <div class="section">
                <p>The <code>useEffect</code> Hook lets you perform side effects in function components. It serves the same purpose as <code>componentDidMount</code>, <code>componentDidUpdate</code>, and <code>componentWillUnmount</code> in React classes.</p>
            <div class="example">
                <h4>Example:</h4>
                <pre><code>{`import React, { useState, useEffect } from 'react';

function Example() {
    const [count, setCount] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = \`You clicked \${count} times\`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

ReactDOM.render(
    <Example />,
    document.getElementById('root')
);`}</code></pre>
            </div>

            <div class="exercise">
                <h4>Exercise:</h4>
                <p>Create a component that updates the document title to show the number of times a button is clicked, using the <code>useEffect</code> hook.</p>
            </div>
            </div>
        }
    ]
};

export default ReactJSCourse