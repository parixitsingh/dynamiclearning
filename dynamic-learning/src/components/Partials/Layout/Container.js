import React  from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import PartialLayout from './PartialLayout.js';

// const Index = lazy(() => import('./Index.js'));
function Container(props) {
  let indexRoute = props.domain + "/introduction"
  return (
    <Routes>
      <Route path="/" element={<PartialLayout headerData={props.headerData}/>}>
        <Route path="/" element={<Navigate replace to={indexRoute} />} />
      {props.routes.map((item, _) => (
            <Route path={item.path} element={item.element}/>
      ))} 
      </Route>
    </Routes>
  )
}

export default Container