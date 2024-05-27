import React  from 'react';
import { Routes, Route} from 'react-router-dom';
import PartialLayout from './PartialLayout.js';

// const Index = lazy(() => import('./Index.js'));
function Container(props) {
  return (
    <Routes>
      <Route path="/" element={<PartialLayout headerData={props.headerData}/>}>
      {props.routes.map((item, _) => (
            <Route path={item.path} element={item.element}/>
      ))} 
      </Route>
    </Routes>
  )
}

export default Container