import React from 'react';
import { Browser } from '@capacitor/browser';

const OpenCapacitorSite: React.FC = () => {
    
    return (
        <>
     async function OpenCapacitorSiteFunction() {

Browser.open({ url: 'webgl/index.html' })
}   
        </>
     
     
    
    );
 
};

export default OpenCapacitorSite;