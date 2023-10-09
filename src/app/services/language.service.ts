import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  static readonly ES: string = 'es-ES';
  static readonly EN: string = 'en-US';
  static readonly PT: string = 'pt-PT';

  private _language: string = LanguageService.ES;

  constructor() { }

  set(language: string = LanguageService.ES): void {
    this._language = language;
  }

  setToEnglish(): void {
    this.set(LanguageService.EN);
  }

  setToSpanish(): void {
    this.set(LanguageService.ES);
  }

  setToPortuguese(): void {
    this.set(LanguageService.PT);
  }

  get(): string {
    return this._language;
  }
}
