import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  selectedLanguageSrc: string = '../../assets/icon/es.png';
  selectedThemeSrc: string = '../../assets/icon/colour.png';

  constructor(
    private auth: AuthService,
    private router: Router,
    private loadingController: LoadingController,
    public language: LanguageService
  ) {}

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

  setThemeSrc(path: string) {
    this.selectedThemeSrc = path;
  }

  setToSpanish() {
    this.language.setToSpanish();
    this.selectedLanguageSrc = '../../assets/icon/es.png';
  }

  setToEnglish() {
    this.language.setToEnglish();
    this.selectedLanguageSrc = '../../assets/icon/en.png';
  }

  setToPortuguese() {
    this.language.setToPortuguese();
    this.selectedLanguageSrc = '../../assets/icon/pt.png';
  }
}
