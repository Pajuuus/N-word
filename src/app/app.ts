import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Heder } from '../app/heder/heder';
import { Foter } from '../app/foter/foter';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Heder, Foter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('jajcaty');
}
