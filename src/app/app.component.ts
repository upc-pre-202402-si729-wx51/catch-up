import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SideNavigationBarComponent} from "./public/components/side-navigation-bar/side-navigation-bar.component";
import {TranslateLoader, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideNavigationBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'catch-up';

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

}
