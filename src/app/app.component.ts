import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ErrorMessageComponent} from "./error-message/error-message.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ErrorMessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-test';
}
