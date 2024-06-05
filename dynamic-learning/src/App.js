import './App.css';
import Home from './components/Home';
import Layout from './components/Layout';
import About from './components/About';
import NoPage from './components/NoPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Container from './components/Partials/Layout/Container';
import ContentRoutes from './components/Partials/Layout/ContentRoutes';
import PythonCourse from './components/Partials/Python/PythonCourse';
import GolangCourse from './components/Partials/Golang/GolangCourse';
import JavascriptCourse from './components/Partials/Javascript/JavascriptCourse';
import ReactJSCourse from './components/Partials/ReactJs/ReactJsCourse';
import JavaCourse from './components/Partials/Java/JavaCourse';
import GiveItTry from './components/ContentPages/GiveItTry';

function App() {
  const headerData = {
    title: "Categories",
    headerTitle: "Topics",
    rows: ["Javascript", "Python", "Go", "Reactjs", "HTML", "CSS", "C", "C++", "Java", "Kotlin", "Ruby", "C#"]
  }
  const data = {
    heading: "Welcome to learning",
    rows: [{
        topic:"Javascript",
      },
      {
        topic:"Go",
      },
      {
        topic:"Reactjs",
      },
      {
        topic:"Python",
      },
      {
        topic:"HTML",
      },
      {
        topic:"CSS",
      },
      {
        topic:"C",
      },
      {
        topic:"C++",
      },
      {
        topic:"Java",
      },
      {
        topic:"Kotlin",
      },
      {
        topic:"Ruby",
      },
      {
        topic:"C#",
      }
    ]
  } ;
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout data = {headerData}/>}>
            <Route index element={<Home data = {data}/>} />
            <Route path="/go/*" element={<Container domain={GolangCourse.DomainPath} data={data.rows[2]} headerData={data} routes={ContentRoutes(GolangCourse)}/>} />
            <Route path="/python/*" element={<Container domain={PythonCourse.DomainPath} data={data.rows[1]} headerData={data} routes={ContentRoutes(PythonCourse)}/>} />
            <Route path="/javascript/*" element={<Container domain={JavascriptCourse.DomainPath} data={data.rows[0]} headerData={data} routes={ContentRoutes(JavascriptCourse)}/>} />
            <Route path="/java/*" element={<Container domain={JavaCourse.DomainPath} data={data.rows[0]} headerData={data} routes={ContentRoutes(JavaCourse)}/>} />
            <Route path="/reactjs/*" element={<Container domain={ReactJSCourse.DomainPath} data={data.rows[3]} headerData={data} routes={ContentRoutes(ReactJSCourse)}/>} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Route>
          <Route path="/letstry/*" element={<GiveItTry />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
