import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { registerLicense } from '@syncfusion/ej2-base';
import { AppComponent } from './app/app.component';
registerLicense(
  'Ngo9BigBOggjHTQxAR8/V1NHaF1cWWhIfEx0Qnxbf1xzZFRHal9WTnVdUj0eQnxTdEZiWH1ZcndWQWNfUk1yXg=='
);
bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
