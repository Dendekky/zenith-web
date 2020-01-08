import React from 'react';
import AppAppBar from './views/header';
import ProductHero from './views/zenithMain';
import ZenithServices from './views/zenithServices'
import ZenithReviews from './views/zenithReviews';
import ZenithContact from './views/zenithContact';

const App = () => {
  return (
    <div>
      <AppAppBar />
      < ProductHero />
      <ZenithServices />
      <ZenithReviews />
      <ZenithContact />
    </div>
  );
}

export default App;