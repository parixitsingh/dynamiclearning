import React from 'react'
import PageNavigationHeader from '../../Controls/PageNavigationHeader'

function Index(props) {
  return (
    <div>
        <h2>What is Go?</h2>
        <PageNavigationHeader hidePreviousBtn={true} onNextBtn={"golang/introduction"} nextBtnTitle={"Introduction"}/>
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

export default Index