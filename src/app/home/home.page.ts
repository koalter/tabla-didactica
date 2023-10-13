import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  readonly assets = {
    languages: {
      es: '../../assets/icon/es.png',
      en: '../../assets/icon/en.png',
      pt: '../../assets/icon/pt.png'
    },
    themes: {
      animal: '../../assets/icon/animal.png',
      color: '../../assets/icon/colour.png',
      number: '../../assets/icon/number.png'
    }
  };

  langSrc: string = this.assets.languages.es;
  themeSrc: string = this.assets.themes.color;

  constructor(
    private auth: AuthService,
    private router: Router,
    private loadingController: LoadingController,
    private language: LanguageService
  ) {}

  ngOnInit(): void {
    const url = this.router.routerState.snapshot.url.split('/');
    switch (this.language.get()) {
      case LanguageService.EN:
        this.langSrc = this.assets.languages.en;
        break;
      case LanguageService.PT:
        this.langSrc = this.assets.languages.pt;
        break;
      case LanguageService.ES:
      default:
        this.langSrc = this.assets.languages.es;
        break;
    }
    
    switch (url[2]) {
      case 'animals':
        this.themeSrc = this.assets.themes.animal;
        break;
      case 'numbers':
        this.themeSrc = this.assets.themes.number;
        break;
      case 'colors':
      default:
        this.themeSrc = this.assets.themes.color;
        break;
    }
  }

  async logout() {
    const loadingElement = await this.loadingController
      .create({ message: 'Cerrando sesión...' });
      
    await loadingElement.present();
    const result = await this.auth.logout();
    await loadingElement.dismiss();

    if (result) {
      this.router.navigate(['login']);
    }
  }

  setToSpanish() {
    this.language.setToSpanish();
    this.langSrc = this.assets.languages.es;
  }

  setToEnglish() {
    this.language.setToEnglish();
    this.langSrc = this.assets.languages.en;
  }

  setToPortuguese() {
    this.language.setToPortuguese();
    this.langSrc = this.assets.languages.pt;
  }
  
  playAnimals() {
    this.themeSrc = this.assets.themes.animal;
  }

  playColors() {
    this.themeSrc = this.assets.themes.color;
  }

  playNumbers() {
    this.themeSrc = this.assets.themes.number;
  }
}
