import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { Action, StoreModule } from '@ngrx/store';
import { CollectionComponent } from './collection/collection.component';
import { EffectsModule } from '@ngrx/effects';
import effects from './effects';
import { HttpClientModule } from '@angular/common/http';
import { CollectionService } from './services/collection.service';
import {
  MatInputModule, MatPaginatorModule, MatTableModule, MatProgressBarModule,
  MatButtonModule, MatCardModule, MatToolbarModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressComponent } from './progress/progress.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { LoginContainerComponent } from './login/login-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
// -- reducers --
import { routerReducer as router, StoreRouterConnectingModule } from '@ngrx/router-store';
import { reducer as collection } from './reducers/collection.reducer';
import { reducer as auth } from './reducers/auth.reducer';
import { reducer as progress } from './reducers/progress.reducer';
// -- models --
import { Collection } from './models/collection';
import { Auth } from './models/auth';
import { CollectionContainerComponent } from './collection/collection-container.component';
import { HeaderComponent } from './header/header.component';

export interface State {
  collection;
  progress;
  auth;
  router;
}

@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
    ProgressComponent,
    LoginComponent,
    LoginContainerComponent,
    CollectionContainerComponent,
    HeaderComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      collection,
      progress,
      auth,
      router,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([...effects]),
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
    })
  ],
  providers: [
    CollectionService,
    AuthService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
