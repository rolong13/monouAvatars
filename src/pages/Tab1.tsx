import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

import {  AssetCreateForm, AssetCollection  } from '../../src/ui-components';


 
const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>


<AssetCreateForm />
<AssetCollection />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
