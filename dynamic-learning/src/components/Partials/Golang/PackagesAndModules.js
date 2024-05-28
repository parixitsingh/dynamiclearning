import React from 'react';
import PageNavigationHeader from '../../Controls/PageNavigationHeader';
import "./Partial.css";

function PackagesAndModules(props) {
  return (
    <div>
        <h2>Packages and Modules</h2>
        <PageNavigationHeader 
            hideNextBtn={props.hideNextBtn} 
            hidePreviousBtn={props.hidePreviousBtn} 
            onPreviousBtn={props.onPreviousBtn} 
            previousBtnTitle={props.previousBtnTitle} 
            onNextBtn={props.onNextBtn} 
            nextBtnTitle={props.nextBtnTitle}
        />
        <div class="section">
            <p>Go programs are organized into packages, and modules help manage dependencies. A package is a collection of related Go source files:</p>
            <pre><code>{`package main

import (
    "fmt"
    "math"
)

func main() {
    fmt.Println("Square root of 16 is", math.Sqrt(16))
}`}</code></pre>
            <p>Modules are a way to manage dependencies in Go. You can create a new module with the following command:</p>
            <pre><code>go mod init mymodule</code></pre>
            <p>This command creates a <code>go.mod</code> file that tracks the module's dependencies.</p>
        </div>
    </div>
  )
}

export default PackagesAndModules