import React, { lazy }  from 'react';
import ContentPage from '../../ContentPages/ContentPage.js';
import { Routes, Route} from 'react-router-dom';
import NoPage from '../../NoPage.js';
import Index from './Index.js';
import Introduction from './Introduction.js';
import PartialLayout from '../Layout/PartialLayout.js';

// const Index = lazy(() => import('./Index.js'));
function ReactJsContainer(props) {
  return (
    <Routes>
       <Route path="/" element={<PartialLayout data={props.data} headerData={props.headerData}/>}>
            <Route index element={<ContentPage data={props.data} content={<Index/>}/>} />
            <Route path="/index" element={<ContentPage data={props.data} content={<Index/>}/>} />
            <Route path="/introduction" element={<ContentPage data={props.data} content={<Introduction/>}/>}/>
            <Route path="*" element={<ContentPage data={props.data} content={<NoPage/>}/>} />
        </Route>
    </Routes>
  )
}

export default ReactJsContainer