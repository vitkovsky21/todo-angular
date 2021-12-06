import { Injectable } from '@angular/core';
import { Category } from '../classes/Category';
import { Task } from '../classes/Task'
import { TestData } from '../data/TestData';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor() {}

  getCategories(): Category[] {
    return TestData.categories;
  }

  getTasks(): Task[] {
    return TestData.tasks;
  }
}
