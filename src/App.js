import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Navbar from './components/Navbar.js';
import FooterBanner from './components/FooterBanner.js';
import CollectionBannerElectric from './components/CollectionBannerElectric';
import CollectionHeadingOriginal from './components/CollectionHeadingOriginal.js';
import CollectionHeadingCustom from './components/CollectionHeadingCustom.js';
import CollectionHeadingMurphyLab from './components/CollectionHeadingMurphyLab.js';
import CollectionBannerAcoustic from './components/CollectionBannerAcoustic';
import CollectionHeadingJ45 from './components/CollectionHeadingJ45.js';
import CollectionHeadingHummingbird from './components/CollectionHeadingHummingbird.js';
import CollectionHeadingHistoricCustom from './components/CollectionHeadingHistoricCustom.js';
import CustomShop from './components/CustomShop.js';
import Original from './components/Original.js';
import MurphyLab from './components/MurphyLab.js';
import J45 from './components/J45.js';
import Hummingbird from './components/Hummingbird.js';
import HistoricCustom from './components/HistoricCustom.js';
import Cart from './components/Cart.js';
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter basename='/'>
        <Route>
          <Header />
          <Navbar />
        </Route>
        <Route exact path='/'>
          <CollectionBannerElectric />
          <CollectionHeadingOriginal />
          <Original />
          <CollectionHeadingCustom />
          <CustomShop />
          <CollectionHeadingMurphyLab />
          <MurphyLab />
          <FooterBanner />
        </Route>
        <Route path='/acoustic'>
          <CollectionBannerAcoustic />
          <CollectionHeadingJ45 />
          <J45 />
          <CollectionHeadingHummingbird />
          <Hummingbird />
          <CollectionHeadingHistoricCustom />
          <HistoricCustom />
          <FooterBanner />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        {/* <Route>
          <FooterBanner />
        </Route> */}
  
  
    </HashRouter>
    </div>
  );
}

export default App;
