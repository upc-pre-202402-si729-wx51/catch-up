import {inject, Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  private apiKey: string = `${environment.key}`;
  private baseUrl: string = 'https://newsapi.org/v2';
  private http: HttpClient = inject(HttpClient);

  getSources() {
    return this.http.get(`${this.baseUrl}/top-headlines/sources?apiKey=${this.apiKey}`);
  }

  getArticlesBySourceId(sourceId: string) {
    return this.http.get(`${this.baseUrl}/top-headlines?sources=${sourceId}&apiKey=${this.apiKey}`);
  }

  initArticles() {
    return this.getArticlesBySourceId('bbc-news');
  }

}
