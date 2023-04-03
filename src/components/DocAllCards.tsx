import React from "react";
import items from "../components/docs.json"
import { IonNavLink } from "@ionic/react";
import DocConst from "../components/DocConstructor";
import DocCardConst from "../components/DocCardCostructor";

const Example: React.FC = () => {
    return (
        <>
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
                    <DocCardConst
                        title={item.title}
                        content={item.content}
                        subtitle={item.subtitle}
                    />
                </IonNavLink>
            ))}
        </>
    );
};

export default Example;