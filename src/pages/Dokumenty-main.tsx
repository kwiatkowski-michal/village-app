import React from "react";
import { IonPage, IonHeader, IonContent, IonToolbar, IonTitle, IonNavLink } from "@ionic/react";
import Docs from "../components/DocAllCards";


const Example: React.FC = () => {
    return (
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Dokumenty</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
            <IonHeader collapse="condense">
              <IonToolbar>
                <IonTitle size="large">Dokumenty</IonTitle>
              </IonToolbar>
              </IonHeader>
              <Docs />  
          </IonContent>
        </IonPage>
      );
};

export default Example;
