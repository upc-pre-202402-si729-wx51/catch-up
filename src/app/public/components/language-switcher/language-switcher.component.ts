import { Component } from '@angular/core';
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [
    MatButtonToggleGroup,
    MatButtonToggle
  ],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css'
})
export class LanguageSwitcherComponent {

  currentLang = 'en';
  languages = ['es', 'en'];

  constructor(private translate: TranslateService) {
    this.currentLang = translate.currentLang;
  }

  useLanguage(language: string): void {
    this.currentLang= language;
    this.translate.use(language);
  }

}
