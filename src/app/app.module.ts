import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TestListComponent } from './test-list.component';
import { TestService } from './test.service';
import { QuestionListComponent } from './question-list.component';
import { QuestionService } from './question.service';
import { AnswerListComponent } from './answer-list.component';
import { AnswerService } from './answer.service';
import { MdButtonModule } from '@angular/material';
import {enableProdMode} from '@angular/core';

enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    TestListComponent,
    QuestionListComponent,
    AnswerListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MdButtonModule
  ],
  providers: [TestService, QuestionService, AnswerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
