let GolangCourse = {
    Topic: "Go",
    DomainPath: "/go",
    Pages: [
        {
            PageTitle: "Introduction to Go",
            IndexTitle: "Introduction",
            Path: "/introduction",
            Content : <div class="section">
                <p>Go (also known as Golang) is a statically typed, compiled programming language designed at Google. It is known for its simplicity, performance, and concurrency support. This course will guide you through learning Go from basics to advanced topics.</p>
            </div> 
        },
        {
            PageTitle: "Setting Up the Go Environment",
            IndexTitle: "Getting Started",
            Path: "/environment",
            Content : <div class="section">
                <ul>
                            <li>
                                <strong>Installing Go:</strong>
                                <p>Go to the <a href="https://golang.org/dl/" target="_blank">official Go download page</a> and follow the instructions for your operating system. Installation involves downloading the Go compiler and setting up the Go environment variables.</p>
                            </li>
                            <li>
                                <strong>Setting up the Go workspace:</strong>
                                <p>Go programs are organized in a specific workspace structure. Set the <code>GOPATH</code> environment variable, which is a directory where your Go code resides. The workspace typically has three directories: <code>src</code> (source files), <code>pkg</code> (package objects), and <code>bin</code> (executables).</p>
                            </li>
                            <li>
                                <strong>Your first Go program: "Hello, World!":</strong>
                                <pre class="code">{`
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
                                `}</pre>
                                <p>Save this code in a file named <code>hello.go</code>, and run it using <code>go run hello.go</code>. This is the simplest Go program that prints "Hello, World!" to the console.</p>
                            </li>
                        </ul>
            </div> 
        },
        {
            PageTitle: "Basic Syntax",
            IndexTitle: "Basic Syntax",
            Path: "/basicsyntax",
            Content : <div class="section">
                <ul>
                            <li>
                                <strong>Variables and Constants:</strong>
                                <p>In Go, variables are explicitly declared and used by the compiler to check the type-correctness of function calls. Constants, like variables, hold values but their values cannot be changed.</p>
                                <pre class="code">{`
var name string = "John"
var age int = 30
const pi = 3.14
                                `}</pre>
                            </li>
                            <li>
                                <strong>Data Types:</strong>
                                <p>Go has several basic data types including <code>int</code> (integers), <code>float64</code> (floating-point numbers), <code>string</code> (strings of text), and <code>bool</code> (boolean values).</p>
                            </li>
                            <li>
                                <strong>Operators:</strong>
                                <p>Operators in Go include arithmetic operators (<code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>), comparison operators (<code>==</code>, <code>!=</code>, <code>&lt;</code>, <code>&gt;</code>), logical operators (<code>&amp;&amp;</code>, <code>||</code>, <code>!</code>), and bitwise operators (<code>&amp;</code>, <code>|</code>, <code>^</code>).</p>
                            </li>
                        </ul>
            </div>
        },
        {
            PageTitle: "Control Structures",
            IndexTitle: "Control Structures",
            Path: "/controlstructures",
            Content: <div class="section">
                <ul>
                            <li>
                                <strong>Conditional Statements:</strong>
                                <p>Conditional statements are used to perform different actions based on different conditions. The most common conditional statements are <code>if</code>, <code>else if</code>, <code>else</code>, and <code>switch</code>.</p>
                                <pre class="code">{`
if age >= 18 {
    fmt.Println("Adult")
} else {
    fmt.Println("Minor")
}

switch day := 3; day {
case 1:
    fmt.Println("Monday")
case 2:
    fmt.Println("Tuesday")
default:
    fmt.Println("Other day")
}
                                `}</pre>
                            </li>
                            <li>
                                <strong>Loops:</strong>
                                <p>Go only has one looping construct, the <code>for</code> loop, which can be used in various forms. <code>for</code> loops are used to iterate over a sequence (like an array, slice, map, or string).</p>
                                <pre class="code">{`
for i := 0; i < 10; i++ {
    fmt.Println(i)
}

numbers := []int{1, 2, 3, 4, 5}
for index, value := range numbers {
    fmt.Println(index, value)
}
                                `}</pre>
                            </li>
                        </ul>
            </div>
        },
        {
            PageTitle: "Functions",
            IndexTitle: "Functions",
            Path: "/functions",
            Content : <div class="section">
                <ul>
                            <li>
                                <strong>Defining and Calling Functions:</strong>
                                <p>Functions are blocks of code that perform a specific task. They can take parameters and return results. Functions in Go are defined using the <code>func</code> keyword.</p>
                                <pre class="code">{`
func greet(name string) string {
    return "Hello, " + name
}

func main() {
    message := greet("Alice")
    fmt.Println(message)
}
                                `}</pre>
                            </li>
                            <li>
                                <strong>Multiple Return Values:</strong>
                                <p>Functions in Go can return multiple values, which is useful for returning both result and error values from functions.</p>
                                <pre class="code">{`
func swap(a, b int) (int, int) {
    return b, a
}

func main() {
    x, y := swap(3, 4)
    fmt.Println(x, y)
}
                                `}</pre>
                            </li>
                            <li>
                                <strong>Variadic Functions:</strong>
                                <p>Variadic functions can accept a variable number of arguments. The function parameter is preceded by <code>...</code> to indicate that it can take zero or more of those arguments.</p>
                                <pre class="code">{`
func sum(numbers ...int) int {
    total := 0
    for _, number := range numbers {
        total += number
    }
    return total
}

func main() {
    result := sum(1, 2, 3, 4, 5)
    fmt.Println(result)
}
                                `}</pre>
                            </li>
                        </ul>
            </div>
        },
        {
            PageTitle: "Data Structures",
            IndexTitle: "Data Structures",
            Path: "/datastructures",
            Content : <div class="section">
                <ul>
                            <li>
                                <strong>Arrays and Slices:</strong>
                                <p>Arrays in Go have a fixed length, whereas slices are more flexible and can grow and shrink in size. Slices are built on top of arrays and provide a more convenient and powerful interface.</p>
                                <pre class="code">{`
// Array
var arr [3]int
arr[0] = 1
arr[1] = 2
arr[2] = 3

// Slice
s := []int{1, 2, 3, 4}
s = append(s, 5)
                                `}</pre>
                            </li>
                            <li>
                                <strong>Maps:</strong>
                                <p>Maps are unordered collections of key-value pairs. They are optimized for fast lookups by keys. Maps are declared using the <code>make</code> function or by using map literals.</p>
                                <pre class="code">{`
// Declare and initialize a map
ages := map[string]int{
    "Alice": 30,
    "Bob": 25,
}

// Add a new key-value pair
ages["Charlie"] = 35

// Retrieve a value
fmt.Println(ages["Alice"])
                                `}</pre>
                            </li>
                            <li>
                                <strong>Structs:</strong>
                                <p>Structs are used to group together data elements. They are defined with the <code>type</code> keyword and a struct literal. Structs can have fields, which can be accessed using the dot notation.</p>
                                <pre class="code">{`
type Person struct {
    Name string
    Age  int
}

func main() {
    p := Person{Name: "Alice", Age: 30}
    fmt.Println(p.Name)
}
                                `}</pre>
                            </li>
                        </ul>
            </div>
        },
        {
            PageTitle: "Methods",
            IndexTitle: "Methods",
            Path: "/methods",
            Content :<div class="section">
            <ul>
                            <li>
                                <strong>Defining Methods:</strong>
                                <p>Methods are functions with a special receiver argument. The receiver can be a value or a pointer. Methods allow you to define behaviors for your structs.</p>
                                <pre class="code">{`
type Rectangle struct {
    Width, Height int
}

// Method with a value receiver
func (r Rectangle) Area() int {
    return r.Width * r.Height
}

func main() {
    r := Rectangle{Width: 10, Height: 5}
    fmt.Println(r.Area())
}
                                `}</pre>
                            </li>
                            <li>
                                <strong>Pointer Receivers:</strong>
                                <p>Pointer receivers allow methods to modify the value that the receiver points to. They also avoid copying the value on each method call, which can be more efficient for large structs.</p>
                                <pre class="code">{`
func (r *Rectangle) Scale(factor int) {
    r.Width *= factor
    r.Height *= factor
}

func main() {
    r := Rectangle{Width: 10, Height: 5}
    r.Scale(2)
    fmt.Println(r.Width, r.Height)
}
                                `}</pre>
                            </li>
                        </ul>
        </div>
        },
        {
            PageTitle: "Interfaces",
            IndexTitle: "Interfaces",
            Path: "/interfaces",
            Content: <div class="section">
            <ul>
                            <li>
                                <strong>Defining Interfaces:</strong>
                                <p>Interfaces are types that specify a set of method signatures. Any type that implements these methods is considered to implement the interface. Interfaces enable polymorphism in Go.</p>
                                <pre class="code">{`
type Shape interface {
    Area() int
}

type Rectangle struct {
    Width, Height int
}

func (r Rectangle) Area() int {
    return r.Width * r.Height
}

func printArea(s Shape) {
    fmt.Println("Area:", s.Area())
}

func main() {
    r := Rectangle{Width: 10, Height: 5}
    printArea(r)
}
                                `}</pre>
                            </li>
                            <li>
                                <strong>Type Assertions:</strong>
                                <p>Type assertions provide access to an interface's underlying concrete value. It can be used to convert an interface type to its concrete type.</p>
                                <pre class="code">{`
var i interface{} = "hello"

s, ok := i.(string)
fmt.Println(s, ok)
                                `}</pre>
                            </li>
                        </ul>
            </div>
        },
        {
            PageTitle: "Concurrency",
            IndexTitle: "Concurrency",
            Path: "/concurrency",
            Content: <div class="section">
                <ul>
                            <li>
                                <strong>Goroutines:</strong>
                                <p>Goroutines are functions or methods that run concurrently with other functions or methods. They are extremely lightweight and are managed by the Go runtime.</p>
                                <pre class="code">{`
go func() {
    fmt.Println("In a goroutine")
}()

fmt.Println("In main function")
                                `}</pre>
                            </li>
                            <li>
                                <strong>Channels:</strong>
                                <p>Channels are a way for goroutines to communicate with each other and synchronize their execution. Channels can be buffered or unbuffered and are typed by the values they convey.</p>
                                <pre class="code">{`
ch := make(chan int)

go func() {
    ch <- 42
}()

value := <-ch
fmt.Println(value)
                                `}</pre>
                            </li>
                            <li>
                                <strong>Select Statement:</strong>
                                <p>The <code>select</code> statement lets a goroutine wait on multiple communication operations. It blocks until one of its cases can run, then it executes that case.</p>
                                <pre class="code">{`
ch1 := make(chan string)
ch2 := make(chan string)

go func() {
    ch1 <- "from ch1"
}()

go func() {
    ch2 <- "from ch2"
}()

select {
case msg1 := <-ch1:
    fmt.Println(msg1)
case msg2 := <-ch2:
    fmt.Println(msg2)
}
                                `}</pre>
                            </li>
                        </ul>
            </div>
        },
        {
            PageTitle: "Error Handling",
            IndexTitle: "Error Handling",
            Path: "/errorhandling",
            Content: <div class="section">
                <ul>
                            <li>
                                <strong>Error Types:</strong>
                                <p>In Go, errors are represented by the built-in <code>error</code> type. Error handling is explicit, which means errors must be checked and handled by the programmer.</p>
                                <pre class="code">{`
if err != nil {
    fmt.Println("Error:", err)
}
                                `}</pre>
                            </li>
                            <li>
                                <strong>Handling Errors:</strong>
                                <p>Errors are often returned as the last return value of a function. The caller is responsible for checking the error value to determine if the function succeeded.</p>
                                <pre class="code">{`
file, err := os.Open("test.txt")
if err != nil {
    log.Fatal(err)
}
defer file.Close()
                                `}</pre>
                            </li>
                            <li>
                                <strong>Custom Errors:</strong>
                                <p>Custom error types can be created by implementing the <code>Error()</code> method from the <code>error</code> interface. This allows for more detailed and specific error messages.</p>
                                <pre class="code">{`
type MyError struct {
    Msg string
}

func (e *MyError) Error() string {
    return e.Msg
}

func main() {
    err := &MyError{Msg: "Something went wrong"}
    fmt.Println(err)
}
                                `}</pre>
                            </li>
                        </ul>
            </div>
        },
        {
            PageTitle: "Packages and Modules",
            IndexTitle: "Packages and Modules",
            Path: "/packagesandmodules",
            Content: <div class="section">
                <ul>
                            <li>
                                <strong>Creating Packages:</strong>
                                <p>Packages in Go allow you to group related code together and make it reusable. A package consists of one or more .go source files in a single directory.</p>
                                <pre class="code">{`
// mathutils/mathutils.go
package mathutils

func Add(a, b int) int {
    return a + b
}

// main.go
package main

import (
    "fmt"
    "mathutils"
)

func main() {
    result := mathutils.Add(2, 3)
    fmt.Println(result)
}
`}</pre>
                            </li>
                            <li>
                                <strong>Managing Dependencies with Go Modules:</strong>
                                <p>Go modules are used to manage dependencies and versions in your Go projects. A module is a collection of related Go packages that are versioned together.</p>
                                <pre class="code">{`
go mod init mymodule
go get -u github.com/some/dependency
`}</pre>
                            </li>
                        </ul>
            </div>
        },
        {
            PageTitle: "Testing in Go",
            IndexTitle: "Testing",
            Path: "/testing",
            Content:  <div class="section">
                <ul>
                            <li>
                                <strong>Writing Tests:</strong>
                                <p>Testing is an important part of software development. Go provides a testing framework in the <code>testing</code> package, which is used to write and run tests.</p>
                                <pre class="code">{`
package mathutils

import "testing"

func TestAdd(t *testing.T) {
    result := Add(2, 3)
    if result != 5 {
        t.Errorf("Add(2, 3) = %d; want 5", result)
    }
}
                                `}</pre>
                            </li>
                            <li>
                                <strong>Benchmarking:</strong>
                                <p>Benchmark tests are used to measure the performance of your code. They are written similarly to normal tests but with a special <code>testing.B</code> type.</p>
                                <pre class="code">{`
func BenchmarkAdd(b *testing.B) {
    for i := 0; i < b.N; i++ {
        Add(2, 3)
    }
}
                                `}</pre>
                            </li>
                            <li>
                                <strong>Example Tests:</strong>
                                <p>Example tests are used to document the usage of your code. They are written as functions that start with <code>Example</code> and contain calls to <code>fmt.Println</code>.</p>
                                <pre class="code">{`
func ExampleAdd() {
    fmt.Println(Add(2, 3))
    // Output: 5
}
                                `}</pre>
                            </li>
                        </ul>
            </div>
        },
        {
            PageTitle: "Reflection",
            IndexTitle: "Reflection",
            Path: "/reflection",
            Content: <div class="section">
                <ul>
                            <li>
                                <strong>Understanding Reflection:</strong>
                                <p>Reflection in Go allows you to inspect the type and value of variables at runtime. It is particularly useful for writing functions that can operate on variables of unknown types.</p>
                                <pre class="code">{`
import (
    "fmt"
    "reflect"
)

func main() {
    var x float64 = 3.4
    fmt.Println("type:", reflect.TypeOf(x))
    fmt.Println("value:", reflect.ValueOf(x))
}
                                `}</pre>
                            </li>
                            <li>
                                <strong>Using Reflect Package:</strong>
                                <p>The <code>reflect</code> package provides various methods to examine and manipulate the internals of a program.</p>
                                <pre class="code">{`
v := reflect.ValueOf(3.4)
fmt.Println("kind:",v.Kind()) // kind: float64
                                `}</pre>
                            </li>
                        </ul>
            </div>
        },
        {
            PageTitle: "Advanced Concurrency",
            IndexTitle: "Advanced Concurrency",
            Path: "/advancedconcurrency",
            Content: <div class="section">
                <ul>
                            <li>
                                <strong>Mutexes:</strong>
                                <p>Mutexes are used to synchronize access to shared resources. They ensure that only one goroutine accesses the critical section of code at a time.</p>
                                <pre class="code">{`
import (
    "fmt"
    "sync"
)

var (
    counter int
    mu sync.Mutex
)

func increment() {
    mu.Lock()
    counter++
    mu.Unlock()
}

func main() {
    var wg sync.WaitGroup
    for i := 0; i < 1000; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            increment()
        }()
    }
    wg.Wait()
    fmt.Println("Final counter value:", counter)
}
                                `}</pre>
                            </li>
                            <li>
                                <strong>WaitGroups:</strong>
                                <p>WaitGroups are used to wait for a collection of goroutines to finish executing. They provide a simple way to synchronize goroutines.</p>
                                <pre class="code">{`
import (
    "fmt"
    "sync"
)

func worker(id int, wg *sync.WaitGroup) {
    defer wg.Done()
    fmt.Printf("Worker %d starting", id)
    // Simulate work
    fmt.Printf("Worker %d done", id)
}

func main() {
    var wg sync.WaitGroup
    for i := 1; i <= 5; i++ {
        wg.Add(1)
        go worker(i, &wg)
    }
    wg.Wait()
    fmt.Println("All workers done")
}
                                `}</pre>
                            </li>
                            <li>
                                <strong>Concurrency Patterns:</strong>
                                <p>Go supports various concurrency patterns like worker pools, pipelines, and fan-in/fan-out to efficiently manage concurrent tasks.</p>
                                <pre class="code">{`
// Worker Pool Example
func worker(id int, jobs <-chan int, results chan<- int) {
    for j := range jobs {
        fmt.Printf("Worker %d started job %d", id, j)
        // Simulate work
        results <- j * 2
    }
}

func main() {
    const numJobs = 5
    jobs := make(chan int, numJobs)
    results := make(chan int, numJobs)

    for w := 1; w <= 3; w++ {
        go worker(w, jobs, results)
    }

    for j := 1; j <= numJobs; j++ {
        jobs <- j
    }
    close(jobs)

    for a := 1; a <= numJobs; a++ {
        <-results
    }
}
                                `}</pre>
                            </li>
                        </ul>
            </div>
        },
        {
            PageTitle: "Web Development",
            IndexTitle: "Web Development",
            Path: "/webdevelopment",
            Content: <div class="section">
                <ul>
                            <li>
                                <strong>Creating a Basic Web Server:</strong>
                                <p>Go provides a powerful <code>net/http</code> package for building web servers. You can create a simple web server by defining handlers for different routes.</p>
                                <pre class="code">{`
import (
    "fmt"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello, World!")
}

func main() {
    http.HandleFunc("/", handler)
    http.ListenAndServe(":8080", nil)
}
                                `}</pre>
                            </li>
                            <li>
                                <strong>Using Templates:</strong>
                                <p>Templates in Go are used to generate HTML dynamically. They allow you to embed Go code within your HTML to render data.</p>
                                <pre class="code">{`
import (
    "html/template"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    t, _ := template.ParseFiles("template.html")
    t.Execute(w, "Hello, World!")
}

func main() {
    http.HandleFunc("/", handler)
    http.ListenAndServe(":8080", nil)
}
                                `}</pre>
                                <pre class="code">{`
<!-- template.html -->
<!DOCTYPE html>
<html>
<head>
    <title>Go Web Server</title>
</head>
<body>
    <h1>{{.}}</h1>
</body>
</html>
                                `}</pre>
                            </li>
                        </ul>
            </div>
        }
    ]
};

export default GolangCourse