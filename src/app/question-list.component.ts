import { Component, Input, OnInit } from '@angular/core';
import { QuestionService } from './question.service';
import { Question } from './question';
import {NgForm} from '@angular/forms';
import { AppComponent } from './app.component';
import { NotificationsService } from 'angular2-notifications';
import { ConfirmationService  } from '@jaspero/ng2-confirmations';

export interface ResolveEmit {
  // Returns this if modal resolved with yes or no
  resolved?: boolean;
  // If the modal was closed in some other way this is removed
  closedWithOutResolving?: string;
}

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
      public appComponent: AppComponent,
      private _service: NotificationsService
      , public _confirmation: ConfirmationService
    ) {}

  public options = {
    position: ["bottom", "right"],
    timeOut: 5000,
    lastOnBottom: true,
  };
  public options2 = {
    overlay: true,
    overlayClickToClose: true,
    showCloseButton: false,
    confirmText: '',
    declineText: 'Yes'
  }

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
      if(confirm("Are you sure?")) {
        this.questionService.deleteQuestion(this.appComponent.test, id)
          .then(() => {
            this.questions = this.questions.filter(question => question.id !== id);
          });
      }
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

  checkTest(): void {
    this._service.info(
      'Checking Test',
      'It may take some time...',
      {
        showProgressBar: true,
        pauseOnHover: true,
        clickToClose: true,
        maxLength: 50
      }
    )

    this.questionService.checkTest(this.appComponent.test)
      .then(x=>{
        this._service.success(
          'Done!',
          'grades loading...',
          {
            showProgressBar: true,
            pauseOnHover: true,
            clickToClose: true,
            maxLength: 50
          }
        )

      });
  }

  goBack(): void {
    this.appComponent.test = null;
    this.appComponent.testString = null;
    this.appComponent.mode = 1;
  }

}
