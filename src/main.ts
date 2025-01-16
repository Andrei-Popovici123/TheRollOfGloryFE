import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter} from '@angular/router';
import routeConfig from './app/app.routes';
import { firebaseConfig } from './firebase-config';
import { initializeApp } from 'firebase/app';
import { provideFirebaseApp, initializeApp as initializeFirebaseApp } from '@angular/fire/app';
import { getAnalytics, provideAnalytics } from '@angular/fire/analytics'

bootstrapApplication(AppComponent,
  {
    providers:[
      provideRouter(routeConfig),
      provideFirebaseApp(() => initializeFirebaseApp(firebaseConfig)),
      provideAnalytics(() => getAnalytics()),
    ],

  })
  .catch((err) => console.error(err));
