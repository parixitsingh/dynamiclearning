import React from 'react';
import PageNavigationHeader from '../../Controls/PageNavigationHeader';
import "./Partial.css";

function FirstProgram(props) {
  return (
    <div>
        <h2>Your First Go Program</h2>
        <PageNavigationHeader 
            hideNextBtn={props.hideNextBtn} 
            hidePreviousBtn={props.hidePreviousBtn} 
            onPreviousBtn={props.onPreviousBtn} 
            previousBtnTitle={props.previousBtnTitle} 
            onNextBtn={props.onNextBtn} 
            nextBtnTitle={props.nextBtnTitle}
        />
        <div class="section">
            <p>Let's create a simple "Hello, World!" program in Go. This will help you verify that your Go environment is set up correctly:</p>
            <pre><code>{`package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}`}</code></pre>
            <p>Save this code in a file named <code>main.go</code> and run it using the following command in your terminal:</p>
            <pre><code>go run main.go</code></pre>
            <p>If everything is set up correctly, you should see the output:</p>
            <pre><code>Hello, World!</code></pre>
        </div>
    </div>
  )
}

export default FirstProgram