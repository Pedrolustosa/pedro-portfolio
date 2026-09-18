import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  protected readonly technologies = [
    '.NET',
    'Angular',
    'React',
    'Node.js',
    'TypeScript',
    'AWS',
    'Azure'
  ];
}
