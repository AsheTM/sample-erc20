import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CoreModule } from './core';
import { SharedModule } from './shared';

import { environment } from 'src/environments';


@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule.forRoot(environment.configuration.core),
    SharedModule.forRoot(environment.configuration.shared),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
