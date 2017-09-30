import { Component, Input, OnInit } from '@angular/core';
import { AnswerService } from './answer.service';
import { Answer } from './answer';
import {NgForm} from '@angular/forms';
import { AppComponent } from './app.component';
import { MdButtonModule } from '@angular/material';
import { NotificationsService } from 'angular2-notifications';
import { ConfirmationService  } from '@jaspero/ng2-confirmations';

export interface ResolveEmit {
  // Returns this if modal resolved with yes or no
  resolved?: boolean;
  // If the modal was closed in some other way this is removed
  closedWithOutResolving?: string;
}

@Component({
  selector: 'answer-list',
  templateUrl: './answer-list.component.html'
})


export class AnswerListComponent implements OnInit {
    answers: Answer[];
    newAnswer: Answer = new Answer();
    editing = false;
    editingAnswer: Answer = new Answer();
    public tempGrade = null;
    constructor(
      private answerService: AnswerService,
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
      this.getAnswers();
    }

    getAnswers(): void {
      this.answerService.getAnswers(this.appComponent.test, this.appComponent.question)
        .then(answers => this.answers = answers );
    }

    createAnswer(answerForm: NgForm): void {
      if (this.tempGrade === null) {
        this.newAnswer.grade = -2;
        this.newAnswer.writer = 'STUDENT';
      }else {
        this.newAnswer.grade = this.tempGrade;
        this.newAnswer.writer = 'TEACHER';
      }
      this.answerService.createAnswer(this.appComponent.test, this.appComponent.question, this.newAnswer)
        .then(createAnswer => {
          answerForm.reset();
          this.newAnswer = new Answer();
          this.answers.unshift(createAnswer)
        });
    }

    deleteAnswer(id: string): void {
      if(confirm("Are you sure?")) {
            this.answerService.deleteAnswer(this.appComponent.test, this.appComponent.question, id)
              .then(() => {
                this.answers = this.answers.filter(answer => answer.id !== id);
              });
          }
    }

    updateAnswer(answerData: Answer): void {
      console.log(answerData);
      this.answerService.updateAnswer(this.appComponent.test, this.appComponent.question, answerData)
      .then(updatedAnswer => {
        let existingAnswer = this.answers.find(answer => answer.id === updatedAnswer.id);
        Object.assign(existingAnswer, updatedAnswer);
        this.clearEditing();
      });
    }

    editAnswer(answerData: Answer): void {
      this.editing = true;
      Object.assign(this.editingAnswer, answerData);
    }

  approveAnswer(answerData: Answer): void {
    answerData.verified = true;
    this.answerService.updateAnswer(this.appComponent.test, this.appComponent.question, answerData)
      .then(updatedAnswer => {
        let existingAnswer = this.answers.find(answer => answer.id === updatedAnswer.id);
        Object.assign(existingAnswer, updatedAnswer);
      });
  }

  clearEditing(): void {
      this.editingAnswer = new Answer();
      this.tempGrade = null;
      this.editing = false;
    }

  goBack(): void {
    this.appComponent.question = null;
    this.appComponent.questionString = null;
    this.appComponent.mode = 2;
  }

  checkQuestion(): void {
    this._service.info(
      'Checking Question',
      'It may take some time...',
      {
        showProgressBar: true,
        pauseOnHover: true,
        clickToClose: true,
        maxLength: 50
      }
    )

    this.answerService.checkQuestion(this.appComponent.test, this.appComponent.question)
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
        this.getAnswers();
        }
      ).catch(x=>{
        this._service.error(
          'Error!',
          'please report...',
          {
            showProgressBar: true,
            pauseOnHover: true,
            clickToClose: true,
            maxLength: 50
          }
        )
        this.getAnswers();
      }
    );
  }
}
