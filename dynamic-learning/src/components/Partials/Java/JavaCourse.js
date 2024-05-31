let JavaCourse = {
    Topic: "Java",
    DomainPath: "/java",
    Pages: [
        {
            PageTitle: "Introduction to Java",
            IndexTitle: "Introduction",
            Path: "/introduction",
            Content : <div class="section">
                <p>Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let application developers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.</p>
            </div> 
        },
        {
            PageTitle: "Variables and Data Types",
            IndexTitle: "Variables and Data Types",
            Path: "/variablesanddatatypes",
            Content : <div class="section">
                <p>Java has several built-in data types, such as int, double, boolean, and char. Variables are used to store data that can be used and manipulated in the program.</p>
                <div class="code-example">
                    <pre>
<code>{`
public class Main {
    public static void main(String[] args) {
        int number = 10;
        double price = 19.99;
        boolean isAvailable = true;
        char letter = 'A';
        
        System.out.println("Number: " + number);
        System.out.println("Price: " + price);
        System.out.println("Available: " + isAvailable);
        System.out.println("Letter: " + letter);
    }
}
`}</code>
                    </pre>
                </div>
            </div> 
        },
        {
            PageTitle: "Control Structures",
            IndexTitle: "Control Structures",
            Path: "/controlstructures",
            Content : <div class="section">
                <p>Java provides several control structures for decision making and loops, such as if-else statements, for loops, and while loops.</p>
        <div class="code-example">
            <pre>
<code>{`
public class Main {
    public static void main(String[] args) {
        int number = 5;
        
        if (number > 0) {
            System.out.println("Number is positive");
        } else {
            System.out.println("Number is not positive");
        }
        
        for (int i = 0; i < 5; i++) {
            System.out.println("Iteration: " + i);
        }
        
        int count = 0;
        while (count < 5) {
            System.out.println("Count: " + count);
            count++;
        }
    }
}`}
</code>
            </pre>
        </div>
            </div>
        },
        {
            PageTitle: "Methods",
            IndexTitle: "Methods",
            Path: "/methods",
            Content : <div class="section">
                 <p>Methods are blocks of code that perform a specific task. They are defined within a class and can be called on objects of that class.</p>
        <div class="code-example">
            <pre>
<code>{`
public class Main {
    public static void main(String[] args) {
        greet();
        int result = add(5, 3);
        System.out.println("Sum: " + result);
    }
    
    public static void greet() {
        System.out.println("Hello, World!");
    }
    
    public static int add(int a, int b) {
        return a + b;
    }
}`}
</code>
            </pre>
        </div>
            </div>
        },
        {
            PageTitle: "Classes and Objects",
            IndexTitle: "Classes and Objects",
            Path: "/classesandobjects",
            Content: <div class="section">
                 <p>In Java, a class is a blueprint for creating objects. An object is an instance of a class. Classes contain fields (variables) and methods (functions).</p>
        <div class="code-example">
            <pre>
<code>{`
class Car {
    String color;
    int speed;
    
    void display() {
        System.out.println("Color: " + color);
        System.out.println("Speed: " + speed);
    }
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car();
        myCar.color = "Red";
        myCar.speed = 120;
        myCar.display();
    }
}`}
</code>
            </pre>
        </div>
            </div>
        },
        {
            PageTitle: "Inheritance",
            IndexTitle: "Inheritance",
            Path: "/inheritance",
            Content : <div class="section">
                <p>Inheritance is a mechanism in Java where one class inherits the properties and behaviors of another class. It helps to reuse code and establish a hierarchical relationship between classes.</p>
        <div class="code-example">
            <pre>
<code>{`
class Animal {
    void eat() {
        System.out.println("This animal eats food");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Dog barks");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog myDog = new Dog();
        myDog.eat();
        myDog.bark();
    }
}`}
</code>
            </pre>
        </div>
            </div>
        },
        {
            PageTitle: "Polymorphism",
            IndexTitle: "Polymorphism",
            Path: "/polymorphism",
            Content :<div class="section">
                <p>Polymorphism allows methods to do different things based on the object it is acting upon. It is achieved through method overriding and method overloading.</p>
        <div class="code-example">
            <pre>
<code>{`
class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}

class Cat extends Animal {
    @Override
    void sound() {
        System.out.println("Cat meows");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myAnimal = new Animal();
        Animal myCat = new Cat();
        Animal myDog = new Dog();
        
        myAnimal.sound();
        myCat.sound();
        myDog.sound();
    }
}`}
</code>
            </pre>
        </div>
            </div>
        },
        {
            PageTitle: "Encapsulation",
            IndexTitle: "Encapsulation",
            Path: "/encapsulation",
            Content: <div class="section">
                <p>Encapsulation is the technique of wrapping the data (variables) and code (methods) together as a single unit. In encapsulation, the variables of a class will be hidden from other classes and can be accessed only through the methods of their current class.</p>
        <div class="code-example">
            <pre>
<code>{`
class Person {
    private String name;
    private int age;
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public int getAge() {
        return age;
    }
    
    public void setAge(int age) {
        this.age = age;
    }
}

public class Main {
    public static void main(String[] args) {
        Person p = new Person();
        p.setName("John");
        p.setAge(30);
        
        System.out.println("Name: " + p.getName());
        System.out.println("Age: " + p.getAge());
    }
}`}
</code>
            </pre>
        </div>
            </div>
        },
        {
            PageTitle: "List",
            IndexTitle: "List",
            Path: "/list",
            Content: <div class="section">
                <p>The List interface is a part of the Java Collections Framework. It is an ordered collection of elements that can contain duplicates.</p>
        <div class="code-example">
            <pre>
<code>{`
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<String> fruits = new ArrayList<>();
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Cherry");
        
        for (String fruit : fruits) {
            System.out.println(fruit);
        }
    }
}`}
</code>
            </pre>
        </div>
            </div>
        },
        {
            PageTitle: "Map",
            IndexTitle: "Map",
            Path: "/map",
            Content: <div class="section">
               <p>The Map interface represents a collection of key-value pairs, where each key is associated with a specific value.</p>
        <div class="code-example">
            <pre>
<code>{`
import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        Map<String, Integer> scores = new HashMap<>();
        scores.put("Alice", 90);
        scores.put("Bob", 85);
        scores.put("Charlie", 88);
        
        for (Map.Entry<String, Integer> entry : scores.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
    }
}`}
</code>
            </pre>
        </div>
            </div>
        },
        {
            PageTitle: "Set",
            IndexTitle: "Set",
            Path: "/set",
            Content: <div class="section">
                <p>The Set interface is a collection that does not allow duplicate elements. It models the mathematical set abstraction.</p>
        <div class="code-example">
            <pre>
<code>{`
import java.util.HashSet;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        Set<String> names = new HashSet<>();
        names.add("Alice");
        names.add("Bob");
        names.add("Charlie");
        names.add("Alice"); // Duplicate, won't be added
        
        for (String name : names) {
            System.out.println(name);
        }
    }
}`}
</code>
            </pre>
        </div>
            </div>
        },
        {
            PageTitle: "File Handling",
            IndexTitle: "File Handling",
            Path: "/filehandling",
            Content: <div class="section">
               <p>Java provides the java.io package for file handling, which includes classes like File, FileReader, FileWriter, BufferedReader, and BufferedWriter.</p>
        <div class="code-example">
            <pre>
<code>{`
import java.io.File;
import java.io.FileWriter;
import java.io.FileReader;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        // Write to a file
        try (BufferedWriter writer = new BufferedWriter(new FileWriter("example.txt"))) {
            writer.write("Hello, World!");
        } catch (IOException e) {
            e.printStackTrace();
        }
        
        // Read from a file
        try (BufferedReader reader = new BufferedReader(new FileReader("example.txt"))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}`}
</code>
            </pre>
        </div>
            </div>
        },
        {
            PageTitle: "Serialization",
            IndexTitle: "Serialization",
            Path: "/serialization",
            Content: <div class="section">
               <p>Serialization is the process of converting an object into a byte stream, and deserialization is the reverse process. Java provides the Serializable interface for this purpose.</p>
        <div class="code-example">
            <pre>
<code>{`
import java.io.FileOutputStream;
import java.io.FileInputStream;
import java.io.ObjectOutputStream;
import java.io.ObjectInputStream;
import java.io.Serializable;
import java.io.IOException;

class Person implements Serializable {
    private static final long serialVersionUID = 1L;
    String name;
    int age;
    
    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public String toString() {
        return "Name: " + name + ", Age: " + age;
    }
}

public class Main {
    public static void main(String[] args) {
        Person person = new Person("Alice", 30);
        
        // Serialize
        try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("person.ser"))) {
            oos.writeObject(person);
        } catch (IOException e) {
            e.printStackTrace();
        }
        
        // Deserialize
        try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream("person.ser"))) {
            Person deserializedPerson = (Person) ois.readObject();
            System.out.println(deserializedPerson);
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}`}
</code>
            </pre>
        </div>
            </div>
        },
        {
            PageTitle: "Exception Handling",
            IndexTitle: "Exception Handling",
            Path: "/exceptionhandling",
            Content: <div class="section">
               <p>Exception handling in Java is managed via five keywords: try, catch, throw, throws, and finally. It allows a program to handle runtime errors and maintain normal flow.</p>
        <div class="code-example">
            <pre>
<code>{`
public class Main {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Error: " + e.getMessage());
        } finally {
            System.out.println("Finally block executed");
        }
    }
}`}
</code>
            </pre>
        </div>
            </div>
        },
        {
            PageTitle: "Custom Exceptions",
            IndexTitle: "Custom Exceptions",
            Path: "/customexceptions",
            Content: <div class="section">
               <p>Java allows you to create your own exceptions by extending the Exception class.</p>
        <div class="code-example">
            <pre>
<code>{`
class CustomException extends Exception {
    public CustomException(String message) {
        super(message);
    }
}

public class Main {
    public static void main(String[] args) {
        try {
            validateAge(15);
        } catch (CustomException e) {
            System.out.println("Caught: " + e.getMessage());
        }
    }
    
    static void validateAge(int age) throws CustomException {
        if (age < 18) {
            throw new CustomException("Age less than 18 is not allowed");
        } else {
            System.out.println("Valid age");
        }
    }
}`}
</code>
            </pre>
        </div>
            </div>
        },
        {
            PageTitle: "Common Stream Operations",
            IndexTitle: "Stream Operations",
            Path: "/streamoperations",
            Content: <div class="section">
              <p>Some common stream operations include filter, map, reduce, collect, and forEach.</p>
        <div class="code-example">
            <pre>
<code>{`
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

public class Main {
    public static void main(String[] args) {
        List<String> words = Arrays.asList("apple", "banana", "cherry", "date", "elderberry");
        
        // Filter
        List<String> longWords = words.stream()
                                        .filter(word -> word.length() > 5)
                                        .collect(Collectors.toList());
        System.out.println(longWords);
        
        // Map
        List<String> upperCaseWords = words.stream()
                                            .map(String::toUpperCase)
                                            .collect(Collectors.toList());
        System.out.println(upperCaseWords);
        
        // Reduce
        Optional<String> concatenatedWords = words.stream()
                                                    .reduce((word1, word2) -> word1 + ", " + word2);
        concatenatedWords.ifPresent(System.out::println);
    }
}`}
</code>
            </pre>
        </div>
            </div>
        },
        {
            PageTitle: "Concurrency",
            IndexTitle: "Concurrency",
            Path: "/concurrency",
            Content: <div class="section">
              <p>Java provides built-in support for multithreaded programming. A thread is a lightweight process, and Java uses threads to enable concurrent execution of two or more parts of a program.</p>
        <div class="code-example">
            <pre>
<code>{`
class MyThread extends Thread {
    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println(Thread.currentThread().getId() + " Value " + i);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        MyThread t1 = new MyThread();
        MyThread t2 = new MyThread();
        
        t1.start();
        t2.start();
    }
}`}
</code>
            </pre>
        </div>
            </div>
        },
        {
            PageTitle: "Synchronization",
            IndexTitle: "Synchronization",
            Path: "/synchronization",
            Content: <div class="section">
              <p>Synchronization is a mechanism that ensures that two or more concurrent threads do not simultaneously execute some particular program segment known as a critical section.</p>
        <div class="code-example">
            <pre>
<code>{`
class Counter {
    private int count = 0;
    
    public synchronized void increment() {
        count++;
    }
    
    public int getCount() {
        return count;
    }
}

public class Main {
    public static void main(String[] args) throws InterruptedException {
        Counter counter = new Counter();
        
        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                counter.increment();
            }
        });
        
        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                counter.increment();
            }
        });
        
        t1.start();
        t2.start();
        
        t1.join();
        t2.join();
        
        System.out.println("Count: " + counter.getCount());
    }
}`}
</code>
            </pre>
        </div>
            </div>
        },
        {
            PageTitle: "Introduction to Networking",
            IndexTitle: "Networking",
            Path: "/networking",
            Content: <div class="section">
              <p>Java provides the java.net package for networking applications. This package provides support for the two common network protocols: TCP and UDP.</p>
            </div>
        },
        {
            PageTitle: "Socket Programming",
            IndexTitle: "Socket Programming",
            Path: "/socketprogramming",
            Content: <div class="section">
              <p>Sockets provide the communication mechanism between two computers using TCP. A client program creates a socket on its end of the communication and attempts to connect that socket to a server.</p>
        <div class="code-example">
            <pre>
<code>{`
import java.io.*;
import java.net.*;

// Client
public class Client {
    public static void main(String[] args) {
        try (Socket socket = new Socket("localhost", 1234);
                PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
                BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()))) {
            out.println("Hello Server");
            System.out.println("Server says: " + in.readLine());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

// Server
public class Server {
    public static void main(String[] args) {
        try (ServerSocket serverSocket = new ServerSocket(1234)) {
            System.out.println("Server is listening on port 1234");
            while (true) {
                try (Socket socket = serverSocket.accept();
                        PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
                        BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()))) {
                    String message = in.readLine();
                    System.out.println("Client says: " + message);
                    out.println("Hello Client");
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}`}
</code>
            </pre>
        </div>
            </div>
        },
        {
            PageTitle: "Lambda Expressions",
            IndexTitle: "Lambda Expressions",
            Path: "/lambda",
            Content: <div class="section">
              <p>Lambda expressions are a feature of Java 8 that provide a clear and concise way to represent one method interface using an expression.</p>
        <div class="code-example">
            <pre>
<code>{`
import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
        numbers.forEach(n -> System.out.println(n));
    }
}`}
</code>
            </pre>
        </div>
            </div>
        },
        {
            PageTitle: "Streams API",
            IndexTitle: "Streams API",
            Path: "/streamsapi",
            Content: <div class="section">
              <p>The Streams API is another key feature of Java 8. It allows functional-style operations on streams of elements, such as map-reduce transformations.</p>
        <div class="code-example">
            <pre>
<code>{`
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("John", "Jane", "Jack", "Doe");
        List<String> filteredNames = names.stream()
                                            .filter(name -> name.startsWith("J"))
                                            .collect(Collectors.toList());
        System.out.println(filteredNames);
    }
}`}
</code>
            </pre>
        </div>
            </div>
        },
        {
            PageTitle: "Optional",
            IndexTitle: "Optional",
            Path: "/optional",
            Content: <div class="section">
              <p>Optional is a container object which may or may not contain a non-null value. If a value is present, isPresent() returns true and get() returns the value.</p>
        <div class="code-example">
            <pre>
<code>{`
import java.util.Optional;

public class Main {
    public static void main(String[] args) {
        Optional<String> optional = Optional.ofNullable("Hello");
        optional.ifPresent(System.out::println);
        
        Optional<String> emptyOptional = Optional.empty();
        System.out.println(emptyOptional.orElse("Default Value"));
    }
}`}
</code>
            </pre>
        </div>
            </div>
        }
    ]
};

export default JavaCourse
