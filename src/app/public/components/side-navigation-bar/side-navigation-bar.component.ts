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
import {ArticleListComponent} from "../../../news/components/article-list/article-list.component";

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
    SourceListComponent,
    ArticleListComponent
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
    this.searchArticlesForSource(source);
  }

  ngOnInit(): void {
    this.newsApi.getSources().subscribe((data: any) => {
      this.sources = data['sources'];

      this.sources.forEach((source: Source) => {
        source.urlToLogo = this.logoApi.geUrlToLogo(source);
      });

      this.searchArticlesForSource(this.sources[0]);
      console.log(this.sources);
    });
  }

  searchArticlesForSource(source: Source) {
    this.newsApi.getArticlesBySourceId(source.id).subscribe((data: any) => {
      this.articles = data['articles'];

      this.articles.forEach((article: Article) => {
        article.source.url = source.url;
        article.source.urlToLogo = source.urlToLogo;
      });

      console.log(this.articles);
    });
  }
}
