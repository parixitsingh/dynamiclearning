import React from 'react';
import PageNavigationHeader from '../../Controls/PageNavigationHeader';
import "./Partial.css";

function Concurrency(props) {
    return (
        <div>
            <h2>Concurrency</h2>
            <PageNavigationHeader 
                hideNextBtn={props.hideNextBtn} 
                hidePreviousBtn={props.hidePreviousBtn} 
                onPreviousBtn={props.onPreviousBtn} 
                previousBtnTitle={props.previousBtnTitle} 
                onNextBtn={props.onNextBtn} 
                nextBtnTitle={props.nextBtnTitle}
            /> 
            <div class="section">
                <p>Go has built-in support for concurrent programming with goroutines and channels:</p>
                <h3>Goroutines</h3>
                <p>Goroutines are lightweight threads managed by the Go runtime:</p>
                <pre><code>{`go func() {
        fmt.Println("Hello from a goroutine")
    }()

    // Let the goroutine run for a while
    time.Sleep(time.Second)`}</code></pre>
                <h3>Channels</h3>
                <p>Channels are used to communicate between goroutines:</p>
                <pre><code>{`ch := make(chan int)

    go func() {
        ch <- 42
    }()

    value := <-ch
    fmt.Println("Received:", value)`}</code></pre>
            </div>

        </div>
      )
}

export default Concurrency