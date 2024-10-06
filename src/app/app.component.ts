import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
selector: 'app-root',
template: `
    <router-outlet></router-outlet>
`,
standalone: true,
imports: [RouterModule, HttpClientModule, ItemListComponent, ItemFormComponent]
})

export class AppComponent {}