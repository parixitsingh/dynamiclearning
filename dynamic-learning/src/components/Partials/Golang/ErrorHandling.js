import React from 'react';
import PageNavigationHeader from '../../Controls/PageNavigationHeader';
import "./Partial.css";

function ErrorHandling(props) {
    return (
        <div>
            <h2>Error Handling</h2>
            <PageNavigationHeader 
                hideNextBtn={props.hideNextBtn} 
                hidePreviousBtn={props.hidePreviousBtn} 
                onPreviousBtn={props.onPreviousBtn} 
                previousBtnTitle={props.previousBtnTitle} 
                onNextBtn={props.onNextBtn} 
                nextBtnTitle={props.nextBtnTitle}
            />  
            <div class="section">
            <p>Go uses explicit error handling with the <code>error</code> type. Functions that can fail return an error as their last return value:</p>
            <pre><code>{`func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("division by zero")
    }
    return a / b, nil
}

func main() {
    result, err := divide(10, 0)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println("Result:", result)
    }
}`}</code></pre>
            <p>Errors can be created using the <code>errors.New</code> function or the <code>fmt.Errorf</code> function for formatted error messages:</p>
            <pre><code>{`if err != nil {
    fmt.Printf("An error occurred: %v\n", err)
}`}</code></pre>
        </div>

        </div>
      )
}

export default ErrorHandling