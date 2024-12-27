import { Component } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { API_BASE_URL } from '../../api';
import { HttpClientModule, HttpClient } from '@angular/common/http';

interface QuizResult {
  type: string; 
  difficulty: string; 
  category: string; 
  question: string; 
  correct_answer: string; 
  incorrect_answers: string[];
}

interface QuizResponse {
  response_code: number; 
  results: QuizResult[];
}

@Component({
  selector: 'app-question-card',
  imports: [HttpClientModule, MatRadioModule, FormsModule, MatButtonModule, MatButtonToggleModule],
  templateUrl: './question-card.component.html',
  styleUrl: './question-card.component.css'
})
export class QuestionCardComponent {
  question: string | undefined;

  optionsList: string[] = [];
  correctOption: string | undefined;

  selectedOption: string | undefined;

  correctAnswer: number = 0;
  wrongAnswer: number = 0;

  constructor(private http: HttpClient) { }


  rehydrateQuestion() {
    this.selectedOption = undefined;
    this.correctOption = undefined;
    this.http.get<QuizResponse>(API_BASE_URL).subscribe((data) => {
      this.question = this.decodeHtmlEntities(data?.results[0]?.question) ?? ""
      this.correctOption = data?.results[0]?.correct_answer
      this.optionsList = this.shuffleArray([...data?.results[0]?.incorrect_answers, data?.results[0]?.correct_answer])
    })
  }


  shuffleArray(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array.map((item) => this.decodeHtmlEntities(item));
  }


  ngOnInit() {
    this.rehydrateQuestion()
  }

  async handleSubmit() {
    if(this.selectedOption === this.correctOption){
      const button_id = this.correctOption + "-button"
      const button = document.getElementById(button_id);
      if (button) {
        button.style.backgroundColor = "green"
        button.style.color = "white"
      }
      this.correctAnswer += 1
      await this.waitFor(1)
    }else{
      let correct_btn_id = this.correctOption + "-button"
      let selected_btn_id = this.selectedOption + '-button'

      let correct_btn = document.getElementById(correct_btn_id);
      let selected_btn = document.getElementById(selected_btn_id);

      if(correct_btn && selected_btn){
        correct_btn.style.backgroundColor = "green"
        correct_btn.style.color = "white"
        selected_btn.style.backgroundColor = "red"
        selected_btn.style.color = "white"
      }
      this.wrongAnswer += 1
      await this.waitFor(1.5)

    }
    this.rehydrateQuestion()
  }
  
  

  handleOnSelect(data: string) {
    this.selectedOption = data
  }

  async waitFor(seconds:number){
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true)
      },seconds * 1000)
    })
  }

  decodeHtmlEntities(str: string): string {
    return str.replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&apos;/g, "'");
  }
}
