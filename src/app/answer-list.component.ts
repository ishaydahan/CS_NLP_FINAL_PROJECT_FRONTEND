import { Component, Input, OnInit } from '@angular/core';
import { AnswerService } from './answer.service';
import { Answer } from './answer';
import {NgForm} from '@angular/forms';
import { AppComponent } from './app.component';


import { NgModule } from '@angular/core';
import { MdButtonModule } from '@angular/material';
@NgModule({
  imports: [
    MdButtonModule
  ]
})



@Component({
  selector: 'answer-list',
  templateUrl: './answer-list.component.html'
})

export class AnswerListComponent implements OnInit {
    answers: Answer[];
    newAnswer: Answer = new Answer();
    editing = false;
    editingAnswer: Answer = new Answer();
    public tempGrade: number;
    constructor(
      private answerService: AnswerService,
      public appComponent: AppComponent

    ) {}

    ngOnInit(): void {
      this.getAnswers();
    }

    getAnswers(): void {
      this.answerService.getAnswers(this.appComponent.test, this.appComponent.question)
        .then(answers => this.answers = answers );
    }

    createAnswer(answerForm: NgForm): void {
      if (this.tempGrade > -1) {
        this.newAnswer.grade = this.tempGrade;
        this.newAnswer.writer = 'TEACHER';
      }else {
        this.newAnswer.grade = -2;
        this.newAnswer.writer = 'STUDENT';
      }
      this.answerService.createAnswer(this.appComponent.test, this.appComponent.question, this.newAnswer)
        .then(createAnswer => {
          answerForm.reset();
          this.newAnswer = new Answer();
          this.answers.unshift(createAnswer)
        });
    }

    deleteAnswer(id: string): void {
      this.answerService.deleteAnswer(this.appComponent.test, this.appComponent.question, id)
      .then(() => {
        this.answers = this.answers.filter(answer => answer.id !== id);
      });
    }

    updateAnswer(answerData: Answer): void {
      answerData.verified = true;
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
      this.editing = false;
    }

}
