import React from 'react';

import ContainerLayout from './layouts/ContainerLayout'

import Catalog from './containers/Catalog'
import Settings from './containers/Settings'

import PrimaryHeader from './components/PrimaryHeader'
import Header from './components/Header'
import Title from './components/Title'

import { titles, kitchens, sizes, settingsSelect } from './data'

function App() {
  return (
    <>
      <ContainerLayout colorStyle='grey'>
        <PrimaryHeader titles={titles} />
      </ContainerLayout>
      <ContainerLayout colorStyle='white'>
        <Header />
      </ContainerLayout>
      <ContainerLayout colorStyle='grey'>
        <Title />
      </ContainerLayout>
      <ContainerLayout colorStyle='white'>
        <Settings settingsSelect={settingsSelect} />
      </ContainerLayout>
      <ContainerLayout colorStyle='grey'>
        <Catalog kitchens={kitchens} sizes={sizes} />
      </ContainerLayout>
    </>
  );
}

export default App;
