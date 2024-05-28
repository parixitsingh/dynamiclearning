import React from 'react';
import PageNavigationHeader from '../../Controls/PageNavigationHeader';
import "./Partial.css";

function DataTypes(props) {
    return (
      <div>
         <h2>Data Types</h2>
         <PageNavigationHeader 
            hideNextBtn={props.hideNextBtn} 
            hidePreviousBtn={props.hidePreviousBtn} 
            onPreviousBtn={props.onPreviousBtn} 
            previousBtnTitle={props.previousBtnTitle} 
            onNextBtn={props.onNextBtn} 
            nextBtnTitle={props.nextBtnTitle}
        />      
          <div class="section">
            <p>Go supports several data types, including:</p>
            <h3>Basic Types</h3>
            <ul>
                <li><code>int</code>, <code>int8</code>, <code>int16</code>, <code>int32</code>, <code>int64</code></li>
                <li><code>uint</code>, <code>uint8</code>, <code>uint16</code>, <code>uint32</code>, <code>uint64</code></li>
                <li><code>float32</code>, <code>float64</code></li>
                <li><code>string</code></li>
                <li><code>bool</code></li>
            </ul>
            <h3>Composite Types</h3>
            <ul>
                <li>Array: <code>var arr [5]int</code></li>
                <li>Slice: <code>var s []int</code></li>
                <li>Map: <code>var m map[string]int</code></li>
                <li>Struct: <code>type Person struct {`{ Name string; Age int }`}</code></li>
            </ul>
        </div>

      </div>
    )
  }
  
  export default DataTypes