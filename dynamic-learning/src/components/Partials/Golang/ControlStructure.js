import React from 'react';
import PageNavigationHeader from '../../Controls/PageNavigationHeader';
import "./Partial.css";

function ControlStructure(props) {
    return (
        <div>
            <h2>Control Structures</h2>
            <PageNavigationHeader 
                hideNextBtn={props.hideNextBtn} 
                hidePreviousBtn={props.hidePreviousBtn} 
                onPreviousBtn={props.onPreviousBtn} 
                previousBtnTitle={props.previousBtnTitle} 
                onNextBtn={props.onNextBtn} 
                nextBtnTitle={props.nextBtnTitle}
            />   
            <div class="section">
            <p>Go provides standard control structures such as:</p>
            <h3>If-else</h3>
            <pre><code>{`if x {'>'} 0 {
    fmt.Println("Positive")
} else {
    fmt.Println("Non-positive")
}`}</code></pre>
            <h3>For Loop</h3>
            <p>The <code>for</code> loop is the only loop statement in Go, and it can be used in various forms:</p>
            <pre><code>// Basic for loop
{`for i := 0; i < 10; i++ {
    fmt.Println(i)
}

// While-like loop
j := 0
for j < 10 {
    fmt.Println(j)
    j++
}

// Infinite loop
for {
    fmt.Println("Loop forever")
}`}</code></pre>
            <h3>Switch</h3>
            <p>Switch statements provide a convenient way to branch execution based on multiple conditions:</p>
            <pre><code>switch day {`{
case "Monday":
    fmt.Println("Start of the week")
case "Friday":
    fmt.Println("End of the week")
default:
    fmt.Println("Another day")
}`}</code></pre>
        </div>

        </div>
      )
}

export default ControlStructure