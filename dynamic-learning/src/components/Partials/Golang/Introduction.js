import React from 'react'
import PageNavigationHeader from '../../Controls/PageNavigationHeader'

function Introduction() {
  return (
    <div>
        <h2>Introduction to Golang</h2>
        <PageNavigationHeader hideNextBtn={true} onPreviousBtn={"golang/index"} previousBtnTitle={"Home"}/>
        <ul>
            <li>Go is a cross-platform, open source programming language</li><li>Go can be used 
            to create high-performance applications</li>
            <li>Go is a fast, statically typed, compiled language known for its simplicity 
            and efficiency</li>
            <li>Go was developed at Google by Robert Griesemer, Rob Pike, and Ken Thompson in 2007</li>
            <li>Go's syntax is similar to C++</li>
        </ul>
    </div>
  )
}

export default Introduction