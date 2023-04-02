import './Opis.css';
import React from 'react';
import { IonButton ,IonCard, IonCardContent, IonCardHeader, IonIcon, IonCardTitle, IonCardSubtitle } from '@ionic/react';
import { call, mailOpen } from 'ionicons/icons';
const Opis: React.FC = () => {
    return (
        <>
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>Liczba mieszkańców</IonCardTitle>
                <IonCardSubtitle>Stan na 2021</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>1598 osób</IonCardContent>
        </IonCard>
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>Powierzchnia</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>15,35 km²</IonCardContent>
        </IonCard>
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>Sołtys</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>Anetta Steltmann</IonCardContent>

            <IonButton fill="clear" href="tel: 123456789">
            <IonIcon slot="start" icon={call} />Zadzwoń
            </IonButton>

            <IonButton fill="clear" href="mailto:kruszynkrajenski@bialeblota.eu">
            <IonIcon slot="start" icon={mailOpen} />Wyślij e-mail
            </IonButton>
        </IonCard>
        <IonCard>
            <IonCardHeader>
            
                <IonCardTitle><IonIcon slot="start" icon={mailOpen} />Rada sołecka</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                Marek Łudziński
                <p>przewodniczący</p>
                Julita Joachimowska
                <p>sekretarz</p>
                Iwona Maj-Imbirska<br/>
                <p>członek</p>
                Helena Bielska <br/>
                <p>członek</p>
                Wiesława Paluch <br/>
                <p>członek</p>
            </IonCardContent>
        </IonCard>
        </>
    );
};
export default Opis;