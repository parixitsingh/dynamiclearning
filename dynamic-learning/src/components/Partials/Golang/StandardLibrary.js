import React from 'react';
import PageNavigationHeader from '../../Controls/PageNavigationHeader';
import "./Partial.css";

function StandardLibrary(props) {
  return (
    <div>
        <h2>Standard Library and Useful Packages</h2>
        <PageNavigationHeader 
           hideNextBtn={props.hideNextBtn} 
           hidePreviousBtn={props.hidePreviousBtn} 
           onPreviousBtn={props.onPreviousBtn} 
           previousBtnTitle={props.previousBtnTitle} 
           onNextBtn={props.onNextBtn} 
           nextBtnTitle={props.nextBtnTitle}
        />
        <div class="section">
            <p>Go's standard library is rich and includes packages for various tasks:</p>
            <ul>
                <li>Networking: <code>net/http</code></li>
                <li>File I/O: <code>os</code></li>
                <li>JSON handling: <code>encoding/json</code></li>
            </ul>
            <p>Example of using the <code>net/http</code> package to create a simple web server:</p>
            <pre><code>{`package main

import (
    "fmt"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintln(w, "Hello, World!")
}

func main() {
    http.HandleFunc("/", handler)
    fmt.Println("Starting server on :8080")
    http.ListenAndServe(":8080", nil)
}`}</code></pre>
            <p>To run this server, save the code in a file named <code>server.go</code> and run:</p>
            <pre><code>go run server.go</code></pre>
            <p>Then, open <code>http://localhost:8080</code> in your web browser to see the output.</p>
        </div>
    </div>
  )
}

export default StandardLibrary