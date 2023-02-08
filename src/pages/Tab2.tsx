import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import OpenCapacitorSite from '../components/OpenCapacitorSite';
import './Tab2.css';



const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Unity</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <iframe  src="webgl/index.html" width="100%" height="100%"></iframe>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;    
