import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuestionCardComponent } from './question-card/question-card.component';
import { AppFooterComponent } from './app-footer/app-footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, QuestionCardComponent,AppFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Quix';
}
