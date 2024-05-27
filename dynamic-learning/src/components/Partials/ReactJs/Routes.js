import React  from 'react';
import ContentPage from '../../ContentPages/ContentPage.js';
import NoPage from '../../NoPage.js';
import Index from './Index.js';
import Introduction from './Introduction.js';

// const Index = lazy(() => import('./Index.js'));
function ReactJsRoutes(data) {
  const routes = [{
      path: "",
      element: <ContentPage data={data} content={<Index/>}/>
    },
    {
      path: "/index",
      element: <ContentPage data={data} content={<Index/>}/>
    },
    {
      path: "/introduction",
      element: <ContentPage data={data} content={<Introduction/>}/>
    },
    {
      path: "*",
      element: <ContentPage data={data} content={<NoPage/>}/>
    }
  ]
  return routes
}

export default ReactJsRoutes