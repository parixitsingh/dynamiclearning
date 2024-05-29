let PythonCourse = {
    Topic: "Python",
    DomainPath: "/python",
    Pages: [
        {
            PageTitle: "Introduction to Python",
            IndexTitle: "Introduction",
            Path: "/introduction",
            Content : <div class="section">
                <p>Python is a high-level, interpreted programming language known for its simplicity and readability. It is widely used in web development, data science, automation, and many other fields. Python supports multiple programming paradigms, including procedural, object-oriented, and functional programming.</p>
                <p>Key features of Python:</p>
                <ul>
                    <li>Simple and easy-to-read syntax</li>
                    <li>Extensive standard library</li>
                    <li>Dynamic typing</li>
                    <li>Memory management</li>
                    <li>Rich ecosystem of third-party packages</li>
                </ul>
            </div> 
        },
        {
            PageTitle: "Setting Up the Python Environment",
            IndexTitle: "Environment",
            Path: "/environment",
            Content : <div class="section">
            <p>To start programming in Python, you need to set up the Python environment on your computer:</p>
            <ul>
                <li>Download and install Python from the official website: <a href="https://www.python.org/downloads/" target="_blank">https://www.python.org/downloads/</a></li>
                <li>Follow the installation instructions for your operating system.</li>
                <li>Verify the installation by running <code>python --version</code> or <code>python3 --version</code> in your terminal.</li>
                <li>Optionally, install an Integrated Development Environment (IDE) such as PyCharm, VSCode, or Jupyter Notebook for a better coding experience.</li>
            </ul>
            <p>Example of setting up Python on a Unix-based system:</p>
            <pre><code>{`# Update package lists
sudo apt update

# Install Python
sudo apt install python3 python3-pip

# Verify the installation
python3 --version

# Install a virtual environment tool
sudo apt install python3-venv`}</code></pre>
        </div> 
        },
        {
            PageTitle: "Your First Python Program",
            IndexTitle: "First Program",
            Path: "/firstprogram",
            Content : <div class="section">
                <p>Let's create a simple "Hello, World!" program in Python. This will help you verify that your Python environment is set up correctly:</p>
                <pre><code>print("Hello, World!")</code></pre>
                <p>Save this code in a file named <code>hello.py</code> and run it using the following command in your terminal:</p>
                <pre><code>python hello.py</code></pre>
                <p>If everything is set up correctly, you should see the output:</p>
                <pre><code>Hello, World!</code></pre>
            </div>
        },
        {
            PageTitle: "Basic Syntax",
            IndexTitle: "Basic Syntax",
            Path: "/basicsyntax",
            Content : <div class="section">
            <p>Python has a simple and clean syntax. Here are some basic elements:</p>
            <h3>Variables</h3>
            <p>Variables in Python are dynamically typed and do not require explicit declaration:</p>
            <pre><code>{`x = 10
y = 20.5
name = "Alice"`}</code></pre>
            <h3>Data Types</h3>
            <p>Python supports several data types, including:</p>
            <ul>
                <li>Integers: <code>x = 10</code></li>
                <li>Floats: <code>y = 20.5</code></li>
                <li>Strings: <code>name = "Alice"</code></li>
                <li>Booleans: <code>is_student = True</code></li>
                <li>Lists: <code>numbers = [1, 2, 3, 4, 5]</code></li>
                <li>Tuples: <code>point = (10, 20)</code></li>
                <li>Dictionaries: <code>person = {'{"name": "Alice", "age": 25}'}</code></li>
            </ul>
            <h3>Control Structures</h3>
            <p>Python provides standard control structures such as:</p>
            <ul>
                <li>If-else: <pre><code>{`if x > 0:
    print("Positive")
else:
    print("Non-positive")`}</code></pre></li>
                <li>For loop: <pre><code>{`for i in range(10):
    print(i)`}</code></pre></li>
                <li>While loop: <pre><code>{`i = 0
while i < 10:
    print(i)
    i += 1`}</code></pre></li>
            </ul>
        </div>
        },
        {
            PageTitle: "Functions",
            IndexTitle: "Functions",
            Path: "/functions",
            Content : <div class="section">
            <p>Functions in Python are defined using the <code>def</code> keyword. They can take parameters and return values:</p>
            <pre><code>{`def add(a, b):
    return a + b

result = add(10, 20)
print("Result:", result)`}</code></pre>
            <p>Functions can return multiple values:</p>
            <pre><code>{`def divide(a, b):
    if b == 0:
        return None, "Division by zero"
    return a / b, None

result, error = divide(10, 0)
if error:
    print("Error:", error)
else:
    print("Result:", result)`}</code></pre>
            <p>Lambda functions (anonymous functions) are also supported:</p>
            <pre><code>{`add = lambda a, b: a + b
print("Sum:", add(3, 4))`}</code></pre>
        </div>
        },
        {
            PageTitle: "Modules and Packages",
            IndexTitle: "Modules and Packages",
            Path: "/modulesandpackages",
            Content : <div class="section">
            <p>Python programs are organized into modules and packages. A module is a single Python file, and a package is a directory of modules:</p>
            <pre><code>{`# Creating a module (mymodule.py)
def greet(name):
    print(f"Hello, {name}!")

# Using the module
import mymodule

mymodule.greet("Alice")`}</code></pre>
            <p>Packages allow for a hierarchical structuring of the module namespace using dot notation. To create a package, you need to include an <code>__init__.py</code> file:</p>
            <pre><code>{`my_package/
    __init__.py
    module1.py
    module2.py

# Using the package
from my_package import module1

module1.greet("Alice")`}</code></pre>
        </div>
        },
        {
            PageTitle: "Object-Oriented Programming",
            IndexTitle: "OOPS",
            Path: "/oops",
            Content :<div class="section">
            <p>Python supports object-oriented programming (OOP) with classes and objects:</p>
            <h3>Classes and Objects</h3>
            <pre><code>{`class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        print(f"Hello, my name is {self.name}")

# Creating an object
person = Person("Alice", 30)
person.greet()`}</code></pre>
            <h3>Inheritance</h3>
            <p>Classes can inherit from other classes, allowing for code reuse and the creation of hierarchical relationships:</p>
            <pre><code>{`class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)
        self.student_id = student_id

    def study(self):
        print(f"{self.name} is studying.")

# Creating an object of the derived class
student = Student("Bob", 20, "S12345")
student.greet()
student.study()`}</code></pre>
        </div>
        },
        {
            PageTitle: "Exception Handling",
            IndexTitle: "Exception Handling",
            Path: "/exceptionhandling",
            Content: <div class="section">
            <p>Python uses exceptions to handle errors and other exceptional events. Exceptions can be caught and handled using try-except blocks:</p>
            <pre><code>{`try:
    result = 10 / 0
except ZeroDivisionError as e:
    print(f"Error: {e}")
else:
    print("Result:", result)
finally:
    print("This block always executes")`}</code></pre>
            <p>You can also define custom exceptions by creating new exception classes:</p>
            <pre><code>{`class CustomError(Exception):
    pass

try:
    raise CustomError("This is a custom error")
except CustomError as e:
    print(f"Caught custom error: {e}")`}</code></pre>
        </div>
        },
        {
            PageTitle: "File I/O",
            IndexTitle: "File I/O",
            Path: "/fileio",
            Content: <div class="section">
        <p>Python provides built-in functions for reading from and writing to files:</p>
        <h3>Reading from a File</h3>
        <pre><code>{`with open("example.txt", "r") as file:
content = file.read()
print(content)`}</code></pre>
        <h3>Writing to a File</h3>
        <pre><code>{`with open("example.txt", "w") as file:
file.write("Hello, World!")`}</code></pre>
        <h3>Appending to a File</h3>
        <pre><code>{`with open("example.txt", "a") as file:
file.write("\nAppending a new line")`}</code></pre>
    </div>
        },
        {
            PageTitle: "Libraries and Frameworks",
            IndexTitle: "Library and Frameworks",
            Path: "/librariesandframeworks",
            Content: <div class="section">
            <p>Python has a rich ecosystem of libraries and frameworks that extend its capabilities. Some popular libraries include:</p>
            <ul>
                <li>NumPy: For numerical computing</li>
                <li>Pandas: For data manipulation and analysis</li>
                <li>Matplotlib: For data visualization</li>
                <li>Requests: For making HTTP requests</li>
                <li>Flask: For web development</li>
                <li>BeautifulSoup: For web scraping</li>
            </ul>
            <p>Example of using the Requests library to make an HTTP GET request:</p>
            <pre><code>{`import requests

response = requests.get("https://api.github.com")
print(response.json())`}</code></pre>
        </div>
        },
        {
            PageTitle: "Data Science with Python",
            IndexTitle: "Data Science",
            Path: "/datascience",
            Content: <div class="section">
            <p>Python is widely used in data science for tasks such as data analysis, visualization, and machine learning. Some key libraries for data science include:</p>
            <ul>
                <li>NumPy: For numerical computing</li>
                <li>Pandas: For data manipulation and analysis</li>
                <li>Matplotlib: For data visualization</li>
                <li>Scikit-learn: For machine learning</li>
                <li>TensorFlow: For deep learning</li>
                <li>Seaborn: For statistical data visualization</li>
            </ul>
            <p>Example of using Pandas and Matplotlib to visualize data:</p>
            <pre><code>{`import pandas as pd
import matplotlib.pyplot as plt

# Load a CSV file into a DataFrame
data = pd.read_csv("data.csv")

# Display basic statistics
print(data.describe())

# Plot a histogram
data['column_name'].hist()
plt.show()`}</code></pre>
        </div>
        },
        {
            PageTitle: "Web Development with Python",
            IndexTitle: "Web Development",
            Path: "/webdevelopment",
            Content: <div class="section">
            <p>Python is used for web development with frameworks such as Django and Flask:</p>
            <h3>Flask Example</h3>
            <pre><code>{`from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return "Hello, Flask!"

@app.route("/about")
def about():
    return "About Page"

if __name__ == "__main__":
    app.run(debug=True)`}</code></pre>
            <p>To run this Flask application, save the code in a file named <code>app.py</code> and run:</p>
            <pre><code>{`python app.py`}</code></pre>
            <p>Then, open <code>http://localhost:5000</code> in your web browser to see the output.</p>
        </div>
        },
        {
            PageTitle: "Testing in Python",
            IndexTitle: "Testing",
            Path: "/testing",
            Content:  <div class="section">
            <p>Testing is an important part of software development. Python includes a built-in module called <code>unittest</code> to support testing:</p>
            <h3>Creating a Test Case</h3>
            <pre><code>{`import unittest

def add(a, b):
    return a + b

class TestMath(unittest.TestCase):
    def test_add(self):
        self.assertEqual(add(10, 5), 15)
        self.assertEqual(add(-1, 1), 0)
        self.assertEqual(add(-1, -1), -2)

if __name__ == "__main__":
    unittest.main()`}</code></pre>
            <p>Save this code in a file named <code>test_math.py</code> and run:</p>
            <pre><code>{`python test_math.py`}</code></pre>
        </div>
        },
        {
            PageTitle: "Working with Databases",
            IndexTitle: "Databases",
            Path: "/databases",
            Content: <div class="section">
            <p>Python can connect to various databases, such as SQLite, MySQL, and PostgreSQL. Here's an example of using SQLite:</p>
            <pre><code>{`import sqlite3

# Connect to the database (or create it if it doesn't exist)
conn = sqlite3.connect('example.db')

# Create a cursor object
cur = conn.cursor()

# Create a table
cur.execute('''CREATE TABLE IF NOT EXISTS students
            (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)''')

# Insert a row of data
cur.execute("INSERT INTO students (name, age) VALUES ('Alice', 21)")

# Save (commit) the changes
conn.commit()

# Query the database
cur.execute("SELECT * FROM students")
print(cur.fetchall())

# Close the connection
conn.close()`}</code></pre>
        </div>
        },
        {
            PageTitle: "Networking with Python",
            IndexTitle: "Networking",
            Path: "/networking",
            Content: <div class="section">
            <p>Python provides libraries to handle network programming. Here's an example using the <code>socket</code> library:</p>
            <h3>Creating a Simple Server</h3>
            <pre><code>{`import socket

# Create a socket object
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Get local machine name
host = socket.gethostname()
port = 9999

# Bind to the port
server_socket.bind((host, port))

# Queue up to 5 requests
server_socket.listen(5)

while True:
    # Establish a connection
    client_socket, addr = server_socket.accept()
    print(f"Got a connection from {addr}")
    message = 'Thank you for connecting'
    client_socket.send(message.encode('ascii'))
    client_socket.close()`}</code></pre>
            <h3>Creating a Simple Client</h3>
            <pre><code>{`import socket

# Create a socket object
client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Get local machine name
host = socket.gethostname()
port = 9999

# Connection to hostname on the port
client_socket.connect((host, port))

# Receive no more than 1024 bytes
message = client_socket.recv(1024)
client_socket.close()

print(message.decode('ascii'))`}</code></pre>
        </div>
        },
        {
            PageTitle: "Multithreading and Multiprocessing",
            IndexTitle: "Multithreading & Multiprocessing",
            Path: "/multithreadingandmultiprocessing",
            Content: <div class="section">
            <p>Python provides support for both multithreading and multiprocessing:</p>
            <h3>Multithreading Example</h3>
            <pre><code>{`import threading

def print_numbers():
    for i in range(10):
        print(i)

def print_letters():
    for letter in 'abcdefghij':
        print(letter)

# Create threads
thread1 = threading.Thread(target=print_numbers)
thread2 = threading.Thread(target=print_letters)

# Start threads
thread1.start()
thread2.start()

# Wait for threads to complete
thread1.join()
thread2.join()`}</code></pre>
            <h3>Multiprocessing Example</h3>
            <pre><code>{`import multiprocessing

def print_numbers():
    for i in range(10):
        print(i)

def print_letters():
    for letter in 'abcdefghij':
        print(letter)

# Create processes
process1 = multiprocessing.Process(target=print_numbers)
process2 = multiprocessing.Process(target=print_letters)

# Start processes
process1.start()
process2.start()

# Wait for processes to complete
process1.join()
process2.join()`}</code></pre>
        </div>
        },
        {
            PageTitle: "Web Scraping with Python",
            IndexTitle: "Web Scraping",
            Path: "/webscrapping",
            Content: <div class="section">
            <p>Web scraping is the process of extracting data from websites. Python provides libraries such as BeautifulSoup and Scrapy for web scraping:</p>
            <h3>BeautifulSoup Example</h3>
            <pre><code>{`import requests
from bs4 import BeautifulSoup

# Send a GET request to a website
response = requests.get('https://example.com')

# Parse the HTML content
soup = BeautifulSoup(response.text, 'html.parser')

# Find and print all the links
for link in soup.find_all('a'):
    print(link.get('href'))`}</code></pre>
        </div>
        },
        {
            PageTitle: "Automating Tasks with Python",
            IndexTitle: "Automating Tasks",
            Path: "/automatingtasks",
            Content:<div class="section">
            <p>Python can be used to automate repetitive tasks. Libraries such as Selenium and PyAutoGUI can help with this:</p>
            <h3>Selenium Example</h3>
            <pre><code>{`from selenium import webdriver

# Create a new instance of the Firefox driver
driver = webdriver.Firefox()

# Go to a website
driver.get('https://www.python.org')

# Find an element and interact with it
search_box = driver.find_element_by_name('q')
search_box.send_keys('getting started with python')
search_box.submit()

# Close the browser window
driver.quit()`}</code></pre>
            <h3>PyAutoGUI Example</h3>
            <pre><code>{`import pyautogui

# Take a screenshot
screenshot = pyautogui.screenshot()

# Save the screenshot
screenshot.save('screenshot.png')

# Move the mouse to a specific position
pyautogui.moveTo(100, 100, duration=1)

# Click the mouse
pyautogui.click()`}</code></pre>
        </div>
        },
        {
            PageTitle: "GUI Development with Python",
            IndexTitle: "GUI Development",
            Path: "/guidevelopment",
            Content: <div class="section">
            <p>Python supports creating graphical user interfaces (GUIs) with libraries such as Tkinter, PyQt, and Kivy:</p>
            <h3>Tkinter Example</h3>
            <pre><code>{`import tkinter as tk

def say_hello():
    print("Hello, World!")

# Create the main window
root = tk.Tk()
root.title("Hello Tkinter")

# Create a button
button = tk.Button(root, text="Click Me", command=say_hello)
button.pack()

# Start the Tkinter event loop
root.mainloop()`}</code></pre>
        </div>
        },
        {
            PageTitle: "Conclusion",
            IndexTitle: "Conclusion",
            Path: "/conclusion",
            Content: <div class="section">
            <p>Python is a versatile and powerful programming language with a wide range of applications. This course has provided a comprehensive overview of Python's capabilities, from basic syntax to advanced topics. Continue exploring Python and its libraries to unlock its full potential!</p>
            <p>For further reading and resources, check out the following links:</p>
            <ul>
                <li><a href="https://docs.python.org/3/" target="_blank">Official Python Documentation</a></li>
                <li><a href="https://realpython.com/" target="_blank">Real Python</a></li>
                <li><a href="https://www.learnpython.org/" target="_blank">LearnPython.org</a></li>
            </ul>
        </div>
        }
    ]
};

export default PythonCourse