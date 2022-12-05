import { Component } from '@angular/core';
import { Observable } from "rxjs";
import { QuestionBase } from "./question-base";
import { QuestionService } from "./question.service";

@Component({
  selector: 'app-dynamic-form-example',
  templateUrl: './dynamic-form-example.component.html',
  styleUrls: ['./dynamic-form-example.component.scss'],
  providers:  [QuestionService]
})
export class DynamicFormExampleComponent {
  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
}
