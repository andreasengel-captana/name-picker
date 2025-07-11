import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-name-picker',
  templateUrl: './name-picker.component.html',
  imports: [
    FormsModule
  ],
  styleUrls: ['./name-picker.component.css']
})
export class NamePickerComponent {
  names: string[] = [];
  inputNames: string = '';
  pickedName: string | null = null;

  addNames() {
    // Namen per Zeilenumbruch oder Komma trennen, leere Einträge entfernen
    const newNames = this.inputNames
      .split(/[\n,]+/)
      .map(name => name.trim())
      .filter(name => name.length > 0);
    this.names.push(...newNames);
    this.inputNames = '';
  }

  pickRandomName() {
    if (this.names.length === 0) {
      this.pickedName = null;
      return;
    }
    const randomIndex = Math.floor(Math.random() * this.names.length);
    this.pickedName = this.names[randomIndex];
    this.names.splice(randomIndex, 1);
  }
}
