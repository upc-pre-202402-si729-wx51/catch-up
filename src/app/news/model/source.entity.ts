/**
 * Source entity class
 * @class Source
 * @description Source entity class to hold source information
 * @property {string} id - The id of the source
 * @property {string} name - The name of the source
 * @property {string} url - The url of the source
 * @property {string} urlToLogo - The url to the logo of the source
 *
 */
export class Source {
  id: string;
  name: string;
  url: string;
  urlToLogo: string;

  constructor() {
    this.id = '';
    this.name = '';
    this.url = '';
    this.urlToLogo = '';
  }

}
