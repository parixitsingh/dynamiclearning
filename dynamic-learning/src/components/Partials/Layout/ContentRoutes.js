import React  from 'react';
import ContentPage from '../../ContentPages/ContentPage.js';
import DetailsContainer from './DetailsContainer.js';

// const Index = lazy(() => import('./Index.js'));
function ContentRoutes(details) {
  const routes = [];
  for (let i = 0; i < details.Pages.length; i++) {
    let hideNextBtn = false;
    let hidePreviousBtn = false;
    let onNextBtn = "";
    let onPreviousBtn = "";
    if (i === details.Pages.length - 1){
      hideNextBtn = true;
    } else {
      onNextBtn = details.DomainPath + details.Pages[i + 1].Path
    }

    hidePreviousBtn = false;
    if (i === 0){
      hidePreviousBtn = true;
    } else {
      onPreviousBtn = details.DomainPath + details.Pages[i - 1].Path
    }
    routes.push({
      path:  details.Pages[i].Path,
      element: <ContentPage details={details} activeIndex={i} content={<DetailsContainer 
        hidePreviousBtn={hidePreviousBtn} 
        onPreviousBtn={onPreviousBtn}
        hideNextBtn={hideNextBtn}
        onNextBtn={onNextBtn}
        pageTitle={details.Pages[i].PageTitle}
        content={details.Pages[i].Content}
      />}/>
    })
  }
  return routes
}

export default ContentRoutes