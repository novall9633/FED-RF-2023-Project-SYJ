import React from 'react';
import {createRoot} from 'react-dom/client';

import "./css/index.css";
import { Layout } from './components/layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './components/pages/Main';
import { Business } from './components/pages/Business';
import { Greeting } from './components/pages/Greeting';
import { Philosophy } from './components/pages/Philosophy';
import { Prequest } from './components/pages/Prequest';
import { GolfTeam } from './components/pages/GolfTeam';
import { Contact } from './components/pages/Contact';
import { DesignCenter } from './components/pages/DesignCenter';



function App(){
  return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='greeting' element={<Greeting cat="greeting" />} />
          <Route path='philosophy' element={<Philosophy cat="philosophy" />} />
          <Route path='request' element={<Prequest cat="request" />} />
          <Route path='b2b' element={<Business cat="b2b"  />} />
          <Route path='import' element={<Business cat="import"  />} />
          <Route path='wall' element={<Business cat="wall"  />} />
          <Route path='design' element={<DesignCenter cat="design"  />} />
          <Route path='golf' element={<GolfTeam cat="golf"  />} />
          <Route path='contact' element={<Contact cat="contact"  />} />
        </Route>
      </Routes>
     </BrowserRouter>
  );
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />)