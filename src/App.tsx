import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { document, home, trash } from 'ionicons/icons';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import './theme/variables.css';

import StronaGlowna from './pages/MainPage';
import WywozSmieci from './pages/WywozSmieci';
import Dokumenty from './pages/DocMain';
setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
      <IonRouterOutlet>
          <Redirect exact path="/" to="/village-app/home" />
          <Route exact path="/village-app/home">
            <StronaGlowna />
          </Route>
          <Route exact path="/village-app/smeici">
            <WywozSmieci />
          </Route>
          <Route path="/village-app/dokumenty">
            <Dokumenty />
          </Route>
          <Route exact path="/village-app">
            <Redirect to="/village-app/home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom" translucent={true}>
          <IonTabButton tab="StronaGlowna" href="/village-app/home">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Strona głowna</IonLabel>
          </IonTabButton>
          <IonTabButton tab="smieci" href="/village-app/smeici">
            <IonIcon aria-hidden="true" icon={trash} />
            <IonLabel>Wywóz śmieci</IonLabel>
          </IonTabButton>
          <IonTabButton tab="docs" href="/village-app/dokumenty">
            <IonIcon aria-hidden="true" icon={document} />
            <IonLabel>Dokumenty</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
