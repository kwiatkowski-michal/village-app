import React from "react";
import { IonPage, IonHeader, IonContent, IonToolbar, IonTitle, IonList, IonItem, IonLabel, IonNavLink } from "@ionic/react";
import DocConst from "../components/DocConstructor";
import Dokument from "../components/Dokument";
const Example: React.FC = () => {
    const items = [
        {
            id: 0,
            type: 'Wniosek',
            title: 'Wniosek o uwzględnienie nowych inwestycji',
            content:'Wniosek o przywrócenie wykreślonych z budżetu inwestycji tj. budowy świetlicy wiejskiej czy ścieżki rowerowej na ulicy Gęsiej (w stronę Ciela)'
            ,subtitle: 'finanse gminy',
            isButton: "true",
            buttonLink: "./assets/docs/2023/wniosek-o-uwzglednienie-nowych-inwestycji.jpeg"
        },
        {
            id: 1,
            type: 'Wniosek',
            title: 'Wniosek o wykreślenie inwestycji',
            content: 'Wniosek o wykreślenie zadań w celu zwiększenia finansowania dla kluczowych inwestycji na terenie gminy Białe Błota',
            subtitle: 'finanse gminy',
            isButton: "false"
        },
        {
            id: 2,
            type: 'Zmiana',
            title: 'Zmiany w komunikacji miejskiej',
            content: 'Zmiany na liniach autobusowych nr 42, 91 i 96 polegające na zmianie godzin i tras. Linia 91 wraca do Ciela, a 96 ma zmienione godzny odjazdów',
            subtitle: 'autobusy miejskie w kruszynie',
            isButton: "true",
            buttonLink: "./assets/docs/2023/pismo-autobusy-2.jpg"
        },
        {
            id: 3,
            type: 'Wniosek WPF',
            title: 'Inwestycje - Wieloletnia Prognoza Finansowa',
            content: 'Wniosek dotyczący ujęcia w budżecie na rok 2023 oraz w WPF na lata 2024-2026 budowy kanalizacji i inwestycji drogowych, takich jak budowa dróg, utwardzenie dróg dojazdowych do pól uprawnych oraz wybudowanie oświetlenia na różnych ulicach',
            subtitle: 'finanse gminy',
            isButton: "true",
            buttonLink: "./assets/docs/2022/wpf-pismo.pdf"
        },
        {
            id: 4,
            type: 'Wniosek',
            title: 'Wniosek o uwzględnienie nowych inwestycji',
            content: 'Wniosek o wykreślenie zadań w celu zwiększenia finansowania dla kluczowych inwestycji na terenie gminy Białe Błota',
            subtitle: 'światłowód',
            isButton: "true",
            buttonLink: "./assets/docs/swiatlowod.pdf"
        }
    ];

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
                    <IonNavLink key={index} routerDirection="forward" component={() => <DocConst buttonLink={item.buttonLink} subtitle={item.subtitle} isButton={item.isButton} type={item.type} title={item.title} content={item.content} />}>
                        <Dokument title={item.title} content={item.content} subtitle={item.subtitle} />
                    </IonNavLink>
                ))}
            </IonContent>
        </IonPage>
    );
};

export default Example;
