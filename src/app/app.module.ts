import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'
import {MatCardModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatButtonModule, MatInputModule, MatMenuModule, MatToolbarModule, MatSnackBarModule, MatDividerModule} from '@angular/material';
import { MatpollformComponent } from './matpollform/matpollform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ModelComponent } from './model/model.component';
import { ResponseComponent } from './response/response.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ThankyoupageComponent } from './thankyoupage/thankyoupage.component';


@NgModule({
  declarations: [
    AppComponent,
    MatpollformComponent,
    FooterComponent,
    HeaderComponent,
    ModelComponent,
    ResponseComponent,
    SpinnerComponent,
    ThankyoupageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatToolbarModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatMenuModule,
    MatDividerModule,
    BrowserAnimationsModule, 
    FormsModule
    
  ],
  exports: [HeaderComponent, FooterComponent],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
