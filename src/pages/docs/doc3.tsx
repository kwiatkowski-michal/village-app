import React from 'react';
import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent } from '@ionic/react';

interface ContainerProps {
    title: string;
    content: string;
    subtitle: string;
}

const Doc: React.FC<ContainerProps> = ({title, subtitle, content}) => {
    return (
        <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton>Dokumenty</IonBackButton>
          </IonButtons>
          <IonTitle>Wniosek</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <p>{content}</p>
      </IonContent>
    </>
    );
};


export default Doc;