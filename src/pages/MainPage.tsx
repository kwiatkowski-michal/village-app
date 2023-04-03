import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import Opis from '../components/Description';

import './MainPage.css';

const StronaGlowna: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Strona główna</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Witaj!</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Opis />
      </IonContent>
    </IonPage>
  );
};

export default StronaGlowna;
