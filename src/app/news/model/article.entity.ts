import {Source} from "./source.entity";

/**
 * Article entity class
 * @class Article
 * @description Article entity class to hold article information
 * @property {string} title - The title of the article
 * @property {string} description - The description of the article
 * @property {string} url - The url of the article
 * @property {string} urlToImage - The url to the image of the article
 * @property {string} publishedAt - The date the article was published
 * @property {Source} source - The source of the article
 */
export class Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: Source;

  constructor() {
    this.title = '';
    this.description = '';
    this.url = '';
    this.urlToImage = '';
    this.publishedAt = '';
    this.source = new Source();
  }
}
