import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
// import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit  {
  ngOnInit(){
  }



}
