import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@capacitor-community/text-to-speech';
import { animals } from '../../assets/texts';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.page.html',
  styleUrls: ['./animals.page.scss'],
})
export class AnimalsPage implements OnInit {

  get width() : number {
    return window.innerWidth;
  }

  get height() : number {
    return window.innerHeight;
  }

  constructor(private language: LanguageService) { }

  ngOnInit() {
  }

  async play(index: number) {
    await TextToSpeech.speak({
      text: animals.get(this.language.get())[index],
      lang: this.language.get(),
    });
  }
}
