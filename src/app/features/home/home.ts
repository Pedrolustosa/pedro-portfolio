import { Component } from '@angular/core';

import { Hero } from './hero/hero';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { Projects } from '../projects/projects';
import { Experience } from './experience/experience';
import { Journey } from './journey/journey';
import { Education } from './education/education';
import { Certifications } from './certifications/certifications';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-home',
  imports: [
    Hero,
    About,
    Skills,
    Projects,
    Experience,
    Journey,
    Education,
    Certifications,
    Contact
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}
