import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ItemService } from '../../services/item.service';
import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
selector: 'app-item-list',
templateUrl: './item-list.component.html',
styleUrls: ['./item-list.component.css'],
standalone: true,
imports: [HttpClientModule, CommonModule, RouterLink]
})

export class ItemListComponent implements OnInit {
    items: any[] = [];

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.itemService.getItems().subscribe(data => {
        this.items = data;
        });
    }

    deleteItem(id: number): void {
        this.itemService.deleteItem(id).subscribe(() => {
        this.items = this.items.filter(item => item.id !== id);
        });
    }
}