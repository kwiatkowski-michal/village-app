import { IonContent, IonHeader, IonNav, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import DokumentyMain from './Dokumenty-main';
const Dokumenty: React.FC = () => {
  return (
    <>
    <IonNav root={() => <DokumentyMain />}></IonNav>
    </>

    
  );
};

export default Dokumenty;
