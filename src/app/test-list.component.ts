import { Component, Input, OnInit } from '@angular/core';
import { TestService } from './test.service';
import { Test } from './test';
import {NgForm} from '@angular/forms';
import { AppComponent } from './app.component';

@Component({
  selector: 'test-list',
  templateUrl: './test-list.component.html'
})

export class TestListComponent implements OnInit {
    tests: Test[];
    newTest: Test = new Test();
    editing = false;
    editingTest: Test = new Test();
    constructor(private testService: TestService
      , private appComponent: AppComponent
    ) {
    }

    ngOnInit(): void {
      this.getTests();
    }

    getTests(): void {
      this.testService.getTests()
        .then(tests => this.tests = tests );
    }

    createTest(testForm: NgForm): void {
      this.testService.createTest(this.newTest)
        .then(createTest => {
          testForm.reset();
            this.newTest = new Test();
            this.tests.unshift(createTest)
        });
    }

    deleteTest(id: string): void {
        this.testService.deleteTest(id)
        .then(() => {
          this.tests = this.tests.filter(test => test.id != id);
        });
    }

    updateTest(testData: Test): void {
      console.log(testData);
      this.testService.updateTest(testData)
      .then(updatedTest => {
        let existingTest = this.tests.find(test => test.id === updatedTest.id);
        Object.assign(existingTest, updatedTest);
        this.clearEditing();
      });
    }

    editTest(testData: Test): void {
      this.editing = true;
      Object.assign(this.editingTest, testData);
    }

    clearEditing(): void {
      this.editingTest = new Test();
      this.editing = false;
    }

    buildTest(test: Test): void {
      this.appComponent.test = test.id;
      this.appComponent.testString = test.content;
      this.appComponent.mode = 2;
    }

    checkTest(test: Test): void {
      this.testService.checkTest(test.id)
        .then();
    }

}
