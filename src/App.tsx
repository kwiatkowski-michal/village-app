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

import StronaGlowna from './pages/StronaGlowna';
import WywozSmieci from './pages/WywozSmieci';
import Dokumenty from './pages/Dokumenty';
setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/StronaGlowna">
            <StronaGlowna />
          </Route>
          <Route exact path="/WywozSmieci">
            <WywozSmieci />
          </Route>
          <Route path="/Dokumenty">
            <Dokumenty />
          </Route>
          <Route exact path="/">
            <Redirect to="/StronaGlowna" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom" translucent={true}>
          <IonTabButton tab="StronaGlowna" href="/StronaGlowna">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Strona głowna</IonLabel>
          </IonTabButton>
          <IonTabButton tab="WywozSmieci" href="/WywozSmieci">
            <IonIcon aria-hidden="true" icon={trash} />
            <IonLabel>Wywóz śmieci</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Dokumenty" href="/Dokumenty">
            <IonIcon aria-hidden="true" icon={document} />
            <IonLabel>Dokumenty</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
