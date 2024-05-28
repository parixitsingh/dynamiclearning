import React from 'react';
import PageNavigationHeader from '../../Controls/PageNavigationHeader';
import "./Partial.css";

function Environment(props) {
  return (
    <div>
        <h2>Setting Up the Go Environment</h2>
        <PageNavigationHeader 
            hideNextBtn={props.hideNextBtn} 
            hidePreviousBtn={props.hidePreviousBtn} 
            onPreviousBtn={props.onPreviousBtn} 
            previousBtnTitle={props.previousBtnTitle} 
            onNextBtn={props.onNextBtn} 
            nextBtnTitle={props.nextBtnTitle}
        />
        <div class="section">
            <p>To start programming in Go, you need to set up the Go environment on your computer:</p>
            <ul>
                <li>Download and install Go from the official website: <a href="https://golang.org/dl/" target="_blank">https://golang.org/dl/</a></li>
                <li>Follow the installation instructions for your operating system.</li>
                <li>Set up your workspace by creating a directory for your Go projects. By convention, Go projects are stored in the <code>$HOME/go</code> directory.</li>
                <li>Verify the installation by running <code>go version</code> in your terminal.</li>
            </ul>
            <p>Example of setting up Go on a Unix-based system:</p>
            <pre><code># Download the Go installation package
wget https://dl.google.com/go/go1.17.5.linux-amd64.tar.gz

# Extract the package to /usr/local
sudo tar -C /usr/local -xzf go1.17.5.linux-amd64.tar.gz

# Add Go to the PATH environment variable
echo "export PATH=\$PATH:/usr/local/go/bin" {'>'}{'>'} ~/.profile
source ~/.profile

# Verify the installation
go version</code></pre>
        </div>
    </div>
  )
}

export default Environment