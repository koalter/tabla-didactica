import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { TextToSpeech } from '@capacitor-community/text-to-speech';
import { numbers } from '../../assets/texts';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.page.html',
  styleUrls: ['./numbers.page.scss'],
})
export class NumbersPage implements OnInit {

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
      text: numbers.get(this.language.get())[index],
      lang: this.language.get(),
    });
  }
}
