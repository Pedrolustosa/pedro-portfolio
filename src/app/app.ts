import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ThemeService } from './core/services/theme.service';
import { LanguageService } from './core/services/language.service';
import { Navbar } from './shared/components/navbar/navbar';
import { Footer } from './shared/components/footer/footer';
import { TranslatePipe } from './shared/pipes/translate.pipe';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    Footer,
    TranslatePipe
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  /** Ensures theme and locale are applied as soon as the app boots. */
  private readonly themeService = inject(ThemeService);
  private readonly languageService = inject(LanguageService);
}