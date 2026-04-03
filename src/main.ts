// npm install @ionic/angular @capacitor/core @capacitor/cli @capacitor/android
// npm install ionicons
// npx cap init angular-multiplataforma com.amaza.angularmultiplataforma
// npx cap add android

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
