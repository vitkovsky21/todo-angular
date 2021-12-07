import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/classes/Category';
import { DataHandlerService } from 'src/app/service/data-handler.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: Category[] = [];
  selectedCategory!: any;
  constructor(private dataHandler: DataHandlerService) { }

  ngOnInit(): void {
    this.dataHandler.categoriesSubject.subscribe(categories => this.categories = categories);
  }

  showTaskByCategory(category: Category) {
    this.selectedCategory = category;
    this.dataHandler.fillTaskByCategory(category);
  }

}
