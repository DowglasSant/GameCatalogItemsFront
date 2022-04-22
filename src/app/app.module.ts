import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { ItemsComponent } from './app/items/items.component';
import { ItemService } from './app/items/items.component.service';
import { ItemsCreateComponent } from './app/items/items.create.component';
import { ItemsUpdateComponent } from './app/items/items.update.component';

const routes: Routes = [
  { path: '', component: ItemsComponent },
  { path: 'create', component: ItemsCreateComponent },
  { path: 'update', component: ItemsUpdateComponent },
  { path: 'home', component: ItemsComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemsCreateComponent,
    ItemsUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
