import React from 'react';
import PageNavigationHeader from '../../Controls/PageNavigationHeader';
import "./Partial.css";

function Functions(props) {
    return (
        <div>
            <h2>Functions</h2>
            <PageNavigationHeader 
               hideNextBtn={props.hideNextBtn} 
               hidePreviousBtn={props.hidePreviousBtn} 
               onPreviousBtn={props.onPreviousBtn} 
               previousBtnTitle={props.previousBtnTitle} 
               onNextBtn={props.onNextBtn} 
               nextBtnTitle={props.nextBtnTitle}
            />    
            <div class="section">
            <p>Functions in Go are defined using the <code>func</code> keyword. They can take parameters and return values:</p>
            <pre><code>{`func add(a int, b int) int {
    return a + b
}

func main() {
    result := add(10, 20)
    fmt.Println("Result:", result)
}`}</code></pre>
            <p>Functions can return multiple values:</p>
            <pre><code>{`func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("division by zero")
    }
    return a / b, nil
}

func main() {
    result, err := divide(10, 2)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println("Result:", result)
    }
}`}</code></pre>
            <p>Anonymous functions (lambdas) and closures are also supported:</p>
            <pre><code>{`add := func(a, b int) int {
    return a + b
}

fmt.Println("Sum:", add(3, 4))`}</code></pre>
        </div>
        </div>
      )
}

export default Functions