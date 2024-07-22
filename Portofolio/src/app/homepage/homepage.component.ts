import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  projects = [
    {
      title: 'Project One',
      description: 'Description for project one.',
      image: 'https://via.placeholder.com/150',
      link: '#'
    },
    {
      title: 'Project Two',
      description: 'Description for project two.',
      image: 'https://via.placeholder.com/150',
      link: '#'
    },
    {
      title: 'Project Three',
      description: 'Description for project three.',
      image: 'https://via.placeholder.com/150',
      link: '#'
    }
  ];
}
