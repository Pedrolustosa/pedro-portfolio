import { Component } from '@angular/core';

import { Icon } from '../../../shared/icon/icon';

interface HeroTechnology {
  label: string;
  icon: string;
}

@Component({
  selector: 'app-hero',
  imports: [Icon],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  protected readonly technologies: HeroTechnology[] = [
    { label: 'C#', icon: 'csharp' },
    { label: '.NET', icon: 'dotnet' },
    { label: 'Angular', icon: 'angular' },
    { label: 'React', icon: 'react' },
    { label: 'Python', icon: 'python' }
  ];
}
