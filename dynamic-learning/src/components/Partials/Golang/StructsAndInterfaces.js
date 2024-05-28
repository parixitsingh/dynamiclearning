import React from 'react';
import PageNavigationHeader from '../../Controls/PageNavigationHeader';
import "./Partial.css";

function StructsAndInterfaces(props) {
  return (
    <div>
        <h2>Structs and Interfaces</h2>
        <PageNavigationHeader 
            hideNextBtn={props.hideNextBtn} 
            hidePreviousBtn={props.hidePreviousBtn} 
            onPreviousBtn={props.onPreviousBtn} 
            previousBtnTitle={props.previousBtnTitle} 
            onNextBtn={props.onNextBtn} 
            nextBtnTitle={props.nextBtnTitle}
        />
        <div class="section">
            
            <p>Go supports object-oriented programming with structs and interfaces:</p>
            <h3>Structs</h3>
            <p>Structs are composite data types that group together variables under a single name:</p>
            <pre><code>{`type Person struct {
    Name string
    Age  int
}

func (p Person) Greet() {
    fmt.Println("Hello, my name is", p.Name)
}

func main() {
    person := Person{Name: "Alice", Age: 30}
    person.Greet()
}`}</code></pre>
            <h3>Interfaces</h3>
            <p>Interfaces define a set of method signatures that a type must implement:</p>
            <pre><code>{`type Greeter interface {
    Greet()
}

type Person struct {
    Name string
}

func (p Person) Greet() {
    fmt.Println("Hello, my name is", p.Name)
}

func main() {
    var greeter Greeter
    greeter = Person{Name: "Bob"}
    greeter.Greet()
}`}</code></pre>
        </div>
    </div>
  )
}

export default StructsAndInterfaces