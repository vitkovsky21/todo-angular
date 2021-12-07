import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from 'src/app/service/data-handler.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private dataHandler: DataHandlerService) {}

  ngOnInit(): void {
  }

}
