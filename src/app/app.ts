import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NamePickerComponent} from './name-picker/name-picker.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NamePickerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('name-picker');
}
