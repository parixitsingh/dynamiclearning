import './App.css';
import Home from './components/Home';
import Layout from './components/Layout';
import About from './components/About';
import NoPage from './components/NoPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import GolangContainer from './components/Partials/Golang/Container';
import PythonContainer from './components/Partials/Python/Container';
import JavascriptContainer from './components/Partials/Javascript/Container';
import ReactJsContainer from './components/Partials/ReactJs/Container';

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
            <Route path="/golang/*" element={<GolangContainer data={data.rows[2]} headerData={data}/>} />
            <Route path="/python/*" element={<PythonContainer data={data.rows[1]} headerData={data}/>} /> 
            <Route path="/javascript/*" element={<JavascriptContainer data={data.rows[0]} headerData={data}/>} /> 
            <Route path="/reactjs/*" element={<ReactJsContainer data={data.rows[3]} headerData={data}/>} /> 
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
