import {Component, Input} from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage, MatCardTitle,
  MatCardTitleGroup
} from "@angular/material/card";
import {Article} from "../../model/article.entity";
import {NgOptimizedImage} from "@angular/common";
import {MatAnchor} from "@angular/material/button";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-article-item',
  standalone: true,
  imports: [
    MatCardHeader,
    MatCard,
    MatCardTitle,
    MatCardTitleGroup,
    MatCardImage,
    NgOptimizedImage,
    MatCardContent,
    MatCardActions,
    MatAnchor,
    TranslateModule
  ],
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css'
})
export class ArticleItemComponent {
  @Input() article!: Article;

}
