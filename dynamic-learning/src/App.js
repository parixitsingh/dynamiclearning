import './App.css';
import Home from './components/Home';
import Layout from './components/Layout';
import About from './components/About';
import NoPage from './components/NoPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Container from './components/Partials/Layout/Container';
import ContentRoutes from './components/Partials/Layout/ContentRoutes';
import ReactJsRoutes from './components/Partials/ReactJs/Routes';
import JavascriptRoutes from './components/Partials/Javascript/Routes';
import PythonCourse from './components/Partials/Python/PythonCourse';
import GolangCourse from './components/Partials/Golang/GolangCourse';

function App() {
  const headerData = {
    title: "Categories",
    headerTitle: "Topics",
    rows: ["Javascript", "Python", "Go", "Reactjs"]
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
            {/* <Route path="/javascript/*" element={<Container  data={data.rows[0]} headerData={data} routes={JavascriptRoutes(data.rows[0])}/>} />
            <Route path="/reactjs/*" element={<Container domain={"/go"} data={data.rows[3]} headerData={data} routes={ReactJsRoutes(data.rows[3])}/>} /> */}
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
