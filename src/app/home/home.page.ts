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
  text: any[] = [
    {
      "es-ES": "rojo",
      "en-US": "red",
      "pt-PT": "vermelho"
    },
    {
      "es-ES": "verde",
      "en-US": "green",
      "pt-PT": "verde"
    },
    {
      "es-ES": "amarillo",
      "en-US": "yellow",
      "pt-PT": "amarelo"
    },
    {
      "es-ES": "blanco",
      "en-US": "white",
      "pt-PT": "branco"
    },
    {
      "es-ES": "negro",
      "en-US": "black",
      "pt-PT": "preto"
    },
  ]

  constructor(
    private auth: AuthService,
    private router: Router,
    private loadingController: LoadingController
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

  async play(index: number) {
    await TextToSpeech.speak({
      text: this.text[index][this.language],
      lang: this.language,
    });
  }
}
