import './App.css';
import Home from './components/Home';
import Layout from './components/Layout';
import About from './components/About';
import NoPage from './components/NoPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Container from './components/Partials/Layout/Container';
import GolangRoutes from './components/Partials/Golang/Routes';
import PythonRoutes from './components/Partials/Python/Routes';
import ReactJsRoutes from './components/Partials/ReactJs/Routes';
import JavascriptRoutes from './components/Partials/Javascript/Routes';

function App() {
  const headerData = {
    title: "Categories",
    headerTitle: "Topics",
    rows: ["Javascript", "Python", "Golang", "Reactjs"]
  }
  const data = {
    heading: "Welcome to learning",
    rows: [{
        topic:"Javascript",
        topicList: [
          {
            topic:"Home",
            page: "index"
          },
          {
            topic:"JS Introduction",
            page:"introduction"
          },
          {
            topic:"JS Functions and Variables",
            page:"functions_and_variables"
          },
          {
            topic: "JS Data Types",
            page:"data_types"
          }
        ]
      },
      {
        topic:"Python",
        topicList: [
          {
            topic:"Home",
            page: "index"
          },
          {
            topic:"Introduction",
            page:"introduction"
          },
          {
            topic:"Functions and Variables",
            page:"functions_and_variables"
          },
          {
            topic: "Data Types",
            page:"data_types"
          }
        ]
      },
      {
        topic:"Golang",
        topicList: [
          {
            topic:"Introduction",
            page: "introduction"
          },
          {
            topic:"Environment",
            page:"environment"
          },
          {
            topic:"First Program",
            page:"firstprogram"
          },
          {
            topic: "Basic Syntax",
            page:"basicsyntax"
          },
          {
            topic:"Data Types",
            page: "datatypes"
          },
          {
            topic:"Control Structures",
            page:"controlstructures"
          },
          {
            topic:"Functions",
            page:"functions"
          },
          {
            topic: "Packages and Modules",
            page:"packagesandmodules"
          },
          {
            topic:"Structs and Interfaces",
            page:"structsandinterfaces"
          },
          {
            topic:"Concurrency",
            page:"concurrency"
          },
          {
            topic: "Error Handling",
            page:"errorhandling"
          },
          {
            topic: "Standard Library",
            page:"standardlibrary"
          }
        ]
      },
      {
        topic:"Reactjs",
        topicList: [
          {
            topic:"Home",
            page: "index"
          },
          {
            topic:"Introduction",
            page:"introduction"
          },
          {
            topic:"Functions and Variables",
            page:"functions_and_variables"
          },
          {
            topic: "Data Types",
            page:"data_types"
          }
        ]
      }
    ]
  } ;
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout data = {headerData}/>}>
            <Route index element={<Home data = {data}/>} />
            <Route path="/golang/*" element={<Container data={data.rows[2]} headerData={data} routes={GolangRoutes(data.rows[2])}/>} />
            <Route path="/python/*" element={<Container data={data.rows[1]} headerData={data} routes={PythonRoutes(data.rows[1])}/>} />
            <Route path="/javascript/*" element={<Container data={data.rows[0]} headerData={data} routes={JavascriptRoutes(data.rows[0])}/>} />
            <Route path="/reactjs/*" element={<Container data={data.rows[3]} headerData={data} routes={ReactJsRoutes(data.rows[3])}/>} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
