import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@capacitor-community/text-to-speech';
import { LanguageService } from '../services/language.service';
import { colors } from '../../assets/texts';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.page.html',
  styleUrls: ['./colors.page.scss'],
})
export class ColorsPage implements OnInit {

  get width() : number {
    return window.innerWidth;
  }

  get height() : number {
    return window.innerHeight;
  }

  constructor(private language: LanguageService) { }

  ngOnInit() { }

  async play(index: number) {
    await TextToSpeech.speak({
      text: colors.get(this.language.get())[index],
      lang: this.language.get(),
    });
  }
}
