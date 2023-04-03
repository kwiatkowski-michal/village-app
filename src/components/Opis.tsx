import './Opis.css';
import React from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/react';
import village from "./village.json";
const Opis: React.FC = () => {
    return (
        <>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Liczba mieszkańców</IonCardTitle>
                    <IonCardSubtitle>Stan na {village.mieszkancy.data}</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>{village.mieszkancy.osoby} osób</IonCardContent>
            </IonCard>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Powierzchnia</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>{village.powierzchnia} km²</IonCardContent>
            </IonCard>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Sołtys</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>{village.soltys.dane}</IonCardContent>

                <IonButton fill="clear" href={village.soltys.telefon}>
                    Zadzwoń
                </IonButton>

                <IonButton fill="clear" href={village.soltys.mail}>
                    Wyślij e-mail
                </IonButton>
            </IonCard>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Rada sołecka</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                {village.rada_solecka.dane.map((osoba, index) => (
                        <div key={index}>
                            <p>{osoba.imie_nazwisko}</p>
                            <p>{osoba.stanowisko}</p>
                        </div>
                    ))}
                </IonCardContent>
            </IonCard>
        </>
    );
};
export default Opis;