import React  from 'react';
import ContentPage from '../../ContentPages/ContentPage.js';
import NoPage from '../../NoPage.js';
import Introduction from './Introduction.js';
import Environment from './Environment.js';
import FirstProgram from './FirstProgram.js';
import BasicSyntax from './BasicSyntax.js';
import DataTypes from './DataTypes.js';
import ControlStructure from './ControlStructure.js';
import Functions from './Functions.js';
import PackagesAndModules from './PackagesAndModules.js';
import StructsAndInterfaces from './StructsAndInterfaces.js';
import Concurrency from './Concurrency.js';
import ErrorHandling from './ErrorHandling.js';
import StandardLibrary from './StandardLibrary.js';

// const Index = lazy(() => import('./Index.js'));
function GolangRoutes(data) {
  const routes = [{
      path: "",
      element: <ContentPage data={data} activeIndex={0} content={<Introduction 
          hidePreviousBtn={true} 
          onNextBtn={"golang/environment"}
        />}/>
    },
    {
      path: "/introduction",
      element: <ContentPage data={data} activeIndex={0} content={<Introduction 
        hidePreviousBtn={true} 
        onNextBtn={"golang/environment"}
      />}/>
    },
    {
      path: "/environment",
      element: <ContentPage data={data} activeIndex={1} content={<Environment 
          onPreviousBtn={"golang/introduction"}
          onNextBtn={"golang/firstprogram"}            
      />}/>
    },
    {
      path: "/firstprogram",
      element: <ContentPage data={data} activeIndex={2} content={<FirstProgram 
          onPreviousBtn={"golang/environment"}
          onNextBtn={"golang/basicsyntax"}            
      />}/>
    },
    {
      path: "/basicsyntax",
      element: <ContentPage data={data} activeIndex={3} content={<BasicSyntax 
          onPreviousBtn={"golang/firstprogram"}
          onNextBtn={"golang/datatypes"}            
      />}/>
    },
    {
      path: "/datatypes",
      element: <ContentPage data={data} activeIndex={4} content={<DataTypes 
          onPreviousBtn={"golang/basicsyntax"}
          onNextBtn={"golang/controlstructure"}            
      />}/>
    },
    {
      path: "/controlstructure",
      element: <ContentPage data={data} activeIndex={5} content={<ControlStructure 
          onPreviousBtn={"golang/datatypes"}
          onNextBtn={"golang/functions"}            
      />}/>
    },
    {
      path: "/functions",
      element: <ContentPage data={data} activeIndex={6} content={<Functions 
          onPreviousBtn={"golang/controlstructure"}
          onNextBtn={"golang/packagesandmodules"}            
      />}/>
    },
    {
      path: "/packagesandmodules",
      element: <ContentPage data={data} activeIndex={7} content={<PackagesAndModules 
          onPreviousBtn={"golang/functions"}
          onNextBtn={"golang/structsandinterfaces"}            
      />}/>
    },
    {
      path: "/structsandinterfaces",
      element: <ContentPage data={data} activeIndex={8} content={<StructsAndInterfaces 
          onPreviousBtn={"golang/packagesandmodules"}
          onNextBtn={"golang/concurrency"}            
      />}/>
    },
    {
      path: "/concurrency",
      element: <ContentPage data={data} activeIndex={9} content={<Concurrency 
          onPreviousBtn={"golang/structsandinterfaces"}
          onNextBtn={"golang/errorhandling"}            
      />}/>
    },
    {
      path: "/errorhandling",
      element: <ContentPage data={data} activeIndex={10} content={<ErrorHandling 
          onPreviousBtn={"golang/concurrency"}
          onNextBtn={"golang/standardlibrary"}            
      />}/>
    },
    {
      path: "/standardlibrary",
      element: <ContentPage data={data} activeIndex={11} content={<StandardLibrary 
          onPreviousBtn={"golang/errorhandling"}
          hideNextBtn={true}            
      />}/>
    },
    {
      path: "*",
      element: <ContentPage data={data} content={<NoPage/>}/>
    }
  ]
  return routes
}

export default GolangRoutes