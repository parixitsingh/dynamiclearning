import React from 'react';
import PageNavigationHeader from '../../Controls/PageNavigationHeader';
import "./Partial.css";

function BasicSyntax(props) {
    return (
      <div>
          <h2>Basic Syntax</h2>
          <PageNavigationHeader 
            hideNextBtn={props.hideNextBtn} 
            hidePreviousBtn={props.hidePreviousBtn} 
            onPreviousBtn={props.onPreviousBtn} 
            previousBtnTitle={props.previousBtnTitle} 
            onNextBtn={props.onNextBtn} 
            nextBtnTitle={props.nextBtnTitle}
          />     
          <div class="section">
            <p>Go has a simple and clean syntax. Here are some basic elements:</p>
            <h3>Variables</h3>
            <p>Variables in Go are declared using the <code>var</code> keyword. You can also use shorthand declaration with <code>:=</code>:</p>
            <pre><code>var x int = 10
var y = 20 // Type inference
z := 30   // Shorthand declaration</code></pre>
            <h3>Constants</h3>
            <p>Constants are declared using the <code>const</code> keyword and cannot be changed once set:</p>
            <pre><code>const Pi = 3.14
const Greeting = "Hello, Go!"</code></pre>
            <h3>Functions</h3>
            <p>Functions in Go are defined using the <code>func</code> keyword. Here is a basic example:</p>
            <pre><code>{ `func add(a int, b int) int {
    return a + b


func main() {
    sum := add(5, 3)
    fmt.Println("Sum:", sum)
}`}</code></pre>
        </div>
      </div>
    )
  }
  
  export default BasicSyntax