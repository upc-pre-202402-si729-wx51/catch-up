import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SideNavigationBarComponent} from "./public/components/side-navigation-bar/side-navigation-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideNavigationBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'catch-up';
}
