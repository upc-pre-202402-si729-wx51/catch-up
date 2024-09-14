import {Component, inject, OnInit} from '@angular/core';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {LanguageSwitcherComponent} from "../language-switcher/language-switcher.component";
import {FooterContentComponent} from "../footer-content/footer-content.component";
import {SourceListComponent} from "../../../news/components/source-list/source-list.component";
import {Source} from "../../../news/model/source.entity";
import {NewsApiService} from "../../../news/services/news-api.service";
import {LogoApiService} from "../../../shared/services/logo-api.service";
import {Article} from "../../../news/model/article.entity";

@Component({
  selector: 'app-side-navigation-bar',
  standalone: true,
  imports: [
    MatSidenavContainer,
    MatSidenavContent,
    MatSidenav,
    MatNavList,
    MatListItem,
    MatToolbar,
    MatIcon,
    MatIconButton,
    LanguageSwitcherComponent,
    FooterContentComponent,
    SourceListComponent
  ],
  templateUrl: './side-navigation-bar.component.html',
  styleUrl: './side-navigation-bar.component.css'
})
export class SideNavigationBarComponent implements OnInit{
  sources!: Array<Source>;
  articles!: Array<Article>;

  private newsApi = inject(NewsApiService);
  private logoApi = inject(LogoApiService);

  onSourceSelected(source: Source) {
    console.log(source);
  }

  ngOnInit(): void {
    this.newsApi.getSources().subscribe((data: any) => {
      this.sources = data['sources'];

      this.sources.forEach((source: Source) => {
        source.urlToLogo = this.logoApi.geUrlToLogo(source);
      });

      console.log(this.sources);
    });
  }

  searchArticlesForSource(source: Source) {
    //get articles for source
    //this.newsApi.getArticlesBySourceId()
    //console.log(this.articles);
  }
}
