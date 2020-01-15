import React from 'react';
import AppAppBar from './header';
import ProductHero from './zenithMain';
import ZenithServices from './zenithServices'
import ZenithReviews from './zenithReviews';
import ZenithContact from './zenithContact';

const LandingPage = () => {
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

export default LandingPage;