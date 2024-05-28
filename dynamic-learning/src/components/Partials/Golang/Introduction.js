import React from 'react';
import PageNavigationHeader from '../../Controls/PageNavigationHeader';
import "./Partial.css";

function Introduction(props) {
  return (
    <div>
        <h2>Introduction to Go</h2>
        <PageNavigationHeader 
            hideNextBtn={props.hideNextBtn} 
            hidePreviousBtn={props.hidePreviousBtn} 
            onPreviousBtn={props.onPreviousBtn} 
            previousBtnTitle={props.previousBtnTitle} 
            onNextBtn={props.onNextBtn} 
            nextBtnTitle={props.nextBtnTitle}
        />    
        <div class="section">
            <p>Go, also known as Golang, is a statically typed, compiled programming language designed for simplicity and efficiency. It was developed by Google and is known for its performance and ease of use. Go is particularly well-suited for building scalable and high-performance applications, such as web servers and distributed systems.</p>
            <p>Key features of Go:</p>
            <ul>
                <li>Fast compilation and execution</li>
                <li>Garbage collection</li>
                <li>Concurrency support with goroutines and channels</li>
                <li>Strong standard library</li>
                <li>Static typing and rich data types</li>
                <li>Cross-platform compilation</li>
            </ul>
        </div>
    </div>
  )
}

export default Introduction