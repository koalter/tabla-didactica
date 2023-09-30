import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { TextToSpeech } from '@capacitor-community/text-to-speech';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  language: string = 'es-ES';
  text: string[] = [];

  constructor(
    private auth: AuthService,
    private router: Router,
    private loadingController: LoadingController
  ) {
    // TextToSpeech.getSupportedLanguages().then(res => this.text = res.languages);
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

  async play(message: string) {
    await TextToSpeech.speak({
      text: message,
      lang: this.language,
    });
  }
}
