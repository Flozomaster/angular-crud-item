import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
selector: 'app-item-form',
templateUrl: './item-form.component.html',
styleUrls: ['./item-form.component.css'],
standalone: true,
imports: [HttpClientModule, FormsModule, CommonModule, RouterLink]
})
export class ItemFormComponent implements OnInit {
    item: any = { name: '' };
    id: number | null = null;

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.id = +this.route.snapshot.paramMap.get('id')!;
        if (this.id) {
        this.itemService.getItem(this.id).subscribe(data => {
            this.item = data;
        });
        }
    }

    saveItem(): void {
        if (this.id) {
        this.itemService.updateItem(this.id, this.item).subscribe(() => {
            this.router.navigate(['/']);
        });
        } else {
        this.itemService.createItem(this.item).subscribe(() => {
            this.router.navigate(['/']);
        });
        }
    }
}