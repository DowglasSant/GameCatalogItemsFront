import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemsComponent } from './app/items/items.component';
import { ItemService } from './app/items/items.component.service';
import { ItemsCreateComponent } from './app/items/items.create.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemsCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
