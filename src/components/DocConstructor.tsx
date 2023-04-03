import React from 'react';
import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonButton, IonTitle, IonContent } from '@ionic/react';
import { caretBack, chevronBackOutline } from 'ionicons/icons';

interface ContainerProps {
    title: string;
    content: string;
    subtitle: string;
    type: string;
    isButton: string;
    buttonLink: string | undefined,
}

const Doc: React.FC<ContainerProps> = ({title, subtitle, content, type, isButton, buttonLink}) => {
  const buttons= [];
  if (isButton==="true") {
    buttons.push(
      <IonButton target='_blank' href={buttonLink}>
            Pobierz
      </IonButton>
    );
  }
  else {
      buttons.push("");
  }
    return (
        <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="Dokumenty" icon={chevronBackOutline}></IonBackButton>
          </IonButtons>
          <IonTitle>{type}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>{title}</h1>
        <p>{content}</p>
        {buttons.map((button) => (
          button
        ))}
      </IonContent>
    </>
    );
};


export default Doc;