import React from 'react';
import AppAppBar from './views/header';
import ProductHero from './views/zenithMain';
import ZenithServices from './views/zenithServices'
import ZenithReviews from './views/zenithReviews';

const App = () => {
  return (
    <div>
      <AppAppBar />
      < ProductHero />
      <ZenithServices />
      <ZenithReviews />
    </div>
  );
}

export default App;