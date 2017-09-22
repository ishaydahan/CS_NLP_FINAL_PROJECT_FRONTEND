import { Component, Input, OnInit } from '@angular/core';
import { QuestionService } from './question.service';
import { Question } from './question';
import {NgForm} from '@angular/forms';
import { AppComponent } from './app.component';

@Component({
  selector: 'question-list',
  templateUrl: './question-list.component.html'
})

export class QuestionListComponent implements OnInit {
    questions: Question[];
    newQuestion: Question = new Question();
    editing = false;
    editingQuestion: Question = new Question();

    constructor(
      private questionService: QuestionService,
      public appComponent: AppComponent

    ) {}

    ngOnInit(): void {
      this.getQuestions();
    }

    getQuestions(): void {
      this.questionService.getQuestions(this.appComponent.test)
        .then(questions => this.questions = questions );
    }

    createQuestion(questionForm: NgForm): void {
      this.questionService.createQuestion(this.appComponent.test, this.newQuestion)
        .then(createQuestion => {
          questionForm.reset();
          this.newQuestion = new Question();
          this.questions.unshift(createQuestion)
        });
    }

    deleteQuestion(id: string): void {
      this.questionService.deleteQuestion(this.appComponent.test, id)
      .then(() => {
        this.questions = this.questions.filter(question => question.id !== id);
      });
    }

    updateQuestion(questionData: Question): void {
      console.log(questionData);
      this.questionService.updateQuestion(this.appComponent.test, questionData)
      .then(updatedQuestion => {
        let existingQuestion = this.questions.find(question => question.id === updatedQuestion.id);
        Object.assign(existingQuestion, updatedQuestion);
        this.clearEditing();
      });
    }

    editQuestion(questionData: Question): void {
      this.editing = true;
      Object.assign(this.editingQuestion, questionData);
    }

    clearEditing(): void {
      this.editingQuestion = new Question();
      this.editing = false;
    }

    buildQuestion(question: Question): void {
      this.appComponent.question = question.id;
      this.appComponent.questionString = question.content;
      this.appComponent.mode = 3;
    }

  checkQuestion(question: Question): void {
    this.questionService.checkQuestion(this.appComponent.test, question.id)
      .then();
  }

}
