import { Injectable } from '@angular/core';
import {Source} from "../../news/model/source.entity";

@Injectable({
  providedIn: 'root'
})
export class LogoApiService {
  baseUrl = 'https://logo.clearbit.com/';

  constructor() { }

  geUrlToLogo(source: Source): string {
    return `${this.baseUrl}${new URL(source.url).hostname}`
  }
}
