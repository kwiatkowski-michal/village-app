import React from "react";
import { IonPage, IonHeader, IonContent, IonToolbar, IonTitle, IonNavLink } from "@ionic/react";
import DocConst from "../components/DocConstructor";
import Dokument from "../components/Dokument";
import items from "../components/docs.json"

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
            {items.map((item, index) => (
              <IonNavLink
                key={index}
                routerDirection="forward"
                component={() => (
                  <DocConst
                    buttonLink={item.buttonLink}
                    subtitle={item.subtitle}
                    isButton={item.isButton}
                    type={item.type}
                    title={item.title}
                    content={item.content}
                  />
                )}
              >
                <Dokument
                  title={item.title}
                  content={item.content}
                  subtitle={item.subtitle}
                />
              </IonNavLink>
            ))}
          </IonContent>
        </IonPage>
      );
};

export default Example;
