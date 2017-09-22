webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/answer-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"answer-content\">\n    <h1 class=\"page-title\">{{this.appComponent.questionString + '?'}}</h1>\n    <h3 class=\"page-title\">Add Answer:</h3>\n  <div class=\"answer-create\">\n      <form #answerForm=\"ngForm\" (ngSubmit) = \"createAnswer(answerForm)\" novalidate>\n    \t\t<input type=\"text\" id=\"title\" class=\"form-control\" placeholder=\"Type an answer\"\n    \t\t       required\n    \t\t       name=\"title\" [(ngModel)]=\"newAnswer.content\"\n    \t\t       #title=\"ngModel\" >\n        <input type=\"number\" id=\"grade\" class=\"form-control\" placeholder=\"Type a grade or leave empty for student ans\"\n               name=\"grade\" [(ngModel)]=\"tempGrade\"\n               #title=\"ngModel\" >\n\n        <div align=\"center\">\n          <button type=\"submit\" md-raised-button color=\"primary\">SUBMIT</button>\n\n        </div>\n        <h3 class=\"page-title\">All Answers:</h3>\n\n    \t\t<div *ngIf=\"title.errors && title.dirty\"\n    \t\t     class=\"alert alert-danger\">\n    \t\t    <div [hidden]=\"!title.errors.required\">\n    \t\t      Title is required.\n    \t\t    </div>\n    \t\t</div>\n    \t</form>\n    </div>\n    <ul class=\"answer-list\">\n      <li *ngFor=\"let answer of answers\"  >\n        <div class=\"answer-row\" *ngIf=\"!editing || editingAnswer.id != answer.id\">\n                        <span class=\"answer-title\">\n                            <p>Wrriten by: {{answer.writer}}</p>\n                            <p>Grade: {{answer.grade>-1 ? answer.grade : 'Ungraded'}}</p>\n                            <p>{{answer.content}}</p>\n                      </span>\n            <span class=\"answer-actions\">\n                <a (click)=\"editAnswer(answer)\">\n                \t<i class=\"material-icons edit\">edit</i>\n                </a>\n                <a (click)=\"approveAnswer(answer)\">\n                \t<i class=\"material-icons done\">done</i>\n                </a>\n                <a (click)=\"deleteAnswer(answer.id)\">\n                \t<i class=\"material-icons delete\">clear</i>\n                </a>\n            </span>\n        </div>\n        <div class=\"answer-edit\" *ngIf=\"editing && editingAnswer.id === answer.id\">\n            <input class=\"form-control\" type=\"number\"\n                 [(ngModel)]=\"editingAnswer.grade\" required>\n            <span class=\"edit-actions\">\n                <a (click)=\"updateAnswer(editingAnswer)\">\n                  <i class=\"material-icons\">done</i>\n                </a>\n                <a (click)=\"clearEditing()\">\n                  <i class=\"material-icons\">clear</i>\n                </a>\n            </span>\n        </div>\n      </li>\n    </ul>\n    <div class=\"no-answers\" *ngIf=\"answers && answers.length == 0\">\n        <p>No Answers Found!</p>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/answer-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__answer_service__ = __webpack_require__("../../../../../src/app/answer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__answer__ = __webpack_require__("../../../../../src/app/answer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AnswerListComponent = (function () {
    function AnswerListComponent(answerService, appComponent) {
        this.answerService = answerService;
        this.appComponent = appComponent;
        this.newAnswer = new __WEBPACK_IMPORTED_MODULE_2__answer__["a" /* Answer */]();
        this.editing = false;
        this.editingAnswer = new __WEBPACK_IMPORTED_MODULE_2__answer__["a" /* Answer */]();
        this.tempGrade = null;
    }
    AnswerListComponent.prototype.ngOnInit = function () {
        this.getAnswers();
    };
    AnswerListComponent.prototype.getAnswers = function () {
        var _this = this;
        this.answerService.getAnswers(this.appComponent.test, this.appComponent.question)
            .then(function (answers) { return _this.answers = answers; });
    };
    AnswerListComponent.prototype.createAnswer = function (answerForm) {
        var _this = this;
        if (this.tempGrade === null) {
            this.newAnswer.grade = -2;
            this.newAnswer.writer = 'STUDENT';
        }
        else {
            this.newAnswer.grade = this.tempGrade;
            this.newAnswer.writer = 'TEACHER';
        }
        this.clearEditing();
        this.answerService.createAnswer(this.appComponent.test, this.appComponent.question, this.newAnswer)
            .then(function (createAnswer) {
            answerForm.reset();
            _this.newAnswer = new __WEBPACK_IMPORTED_MODULE_2__answer__["a" /* Answer */]();
            _this.answers.unshift(createAnswer);
        });
    };
    AnswerListComponent.prototype.deleteAnswer = function (id) {
        var _this = this;
        this.answerService.deleteAnswer(this.appComponent.test, this.appComponent.question, id)
            .then(function () {
            _this.answers = _this.answers.filter(function (answer) { return answer.id !== id; });
        });
    };
    AnswerListComponent.prototype.updateAnswer = function (answerData) {
        var _this = this;
        answerData.verified = true;
        console.log(answerData);
        this.answerService.updateAnswer(this.appComponent.test, this.appComponent.question, answerData)
            .then(function (updatedAnswer) {
            var existingAnswer = _this.answers.find(function (answer) { return answer.id === updatedAnswer.id; });
            Object.assign(existingAnswer, updatedAnswer);
            _this.clearEditing();
        });
    };
    AnswerListComponent.prototype.editAnswer = function (answerData) {
        this.editing = true;
        Object.assign(this.editingAnswer, answerData);
    };
    AnswerListComponent.prototype.approveAnswer = function (answerData) {
        var _this = this;
        answerData.verified = true;
        this.answerService.updateAnswer(this.appComponent.test, this.appComponent.question, answerData)
            .then(function (updatedAnswer) {
            var existingAnswer = _this.answers.find(function (answer) { return answer.id === updatedAnswer.id; });
            Object.assign(existingAnswer, updatedAnswer);
        });
    };
    AnswerListComponent.prototype.clearEditing = function () {
        this.editingAnswer = new __WEBPACK_IMPORTED_MODULE_2__answer__["a" /* Answer */]();
        this.tempGrade = null;
        this.editing = false;
    };
    return AnswerListComponent;
}());
AnswerListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MdButtonModule */]
        ]
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'answer-list',
        template: __webpack_require__("../../../../../src/app/answer-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__answer_service__["a" /* AnswerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__answer_service__["a" /* AnswerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]) === "function" && _b || Object])
], AnswerListComponent);

var _a, _b;
//# sourceMappingURL=answer-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/answer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnswerService = (function () {
    function AnswerService(http) {
        this.http = http;
        this.baseUrl = 'http://bgucsproject.azurewebsites.net';
    }
    AnswerService.prototype.getAnswers = function (tid, qid) {
        return this.http.get(this.baseUrl + '/api/tests/' + tid + '/questions/' + qid + '/answers/')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AnswerService.prototype.createAnswer = function (tid, qid, answerData) {
        return this.http.post(this.baseUrl + '/api/tests/' + tid + '/questions/' + qid + '/answers/', answerData)
            .toPromise().then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AnswerService.prototype.updateAnswer = function (tid, qid, answerData) {
        return this.http.put(this.baseUrl + '/api/tests/' + tid + '/questions/' + qid + '/answers/' + answerData.id, answerData)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AnswerService.prototype.deleteAnswer = function (tid, qid, id) {
        return this.http.delete(this.baseUrl + '/api/tests/' + tid + '/questions/' + qid + '/answers/' + id)
            .toPromise()
            .catch(this.handleError);
    };
    AnswerService.prototype.handleError = function (error) {
        console.error('Some error occured', error);
        return Promise.reject(error.message || error);
    };
    return AnswerService;
}());
AnswerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AnswerService);

var _a;
//# sourceMappingURL=answer.service.js.map

/***/ }),

/***/ "../../../../../src/app/answer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Answer; });
var Answer = (function () {
    function Answer() {
    }
    return Answer;
}());

//# sourceMappingURL=answer.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<main>\n  <button (click)=\"back()\" md-raised-button color=\"primary\">GO BACK</button>\n\n\n  <test-list *ngIf=\"mode===1\"></test-list>\n  <question-list *ngIf=\"mode===2\"></question-list>\n  <answer-list *ngIf=\"mode===3\"></answer-list>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.mode = 1;
    }
    AppComponent.prototype.back = function () {
        if (this.mode > 1) {
            this.mode--;
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__test_list_component__ = __webpack_require__("../../../../../src/app/test-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__test_service__ = __webpack_require__("../../../../../src/app/test.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__question_list_component__ = __webpack_require__("../../../../../src/app/question-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__answer_list_component__ = __webpack_require__("../../../../../src/app/answer-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__answer_service__ = __webpack_require__("../../../../../src/app/answer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// import {enableProdMode} from '@angular/core';
//
// enableProdMode();
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__test_list_component__["a" /* TestListComponent */],
            __WEBPACK_IMPORTED_MODULE_7__question_list_component__["a" /* QuestionListComponent */],
            __WEBPACK_IMPORTED_MODULE_9__answer_list_component__["a" /* AnswerListComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["a" /* MdButtonModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__test_service__["a" /* TestService */], __WEBPACK_IMPORTED_MODULE_8__question_service__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_10__answer_service__["a" /* AnswerService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/question-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"question-content\">\n  <h1 class=\"page-title\">{{this.appComponent.testString}}</h1>\n  <h3 class=\"page-title\">Add Question:</h3>\n    <div class=\"question-create\">\n      <form #questionForm=\"ngForm\" (ngSubmit) = \"createQuestion(questionForm)\" novalidate>\n    \t\t<input type=\"text\" id=\"title\" class=\"form-control\" placeholder=\"Type a question and press enter...\"\n    \t\t       required\n    \t\t       name=\"title\" [(ngModel)]=\"newQuestion.content\"\n    \t\t       #title=\"ngModel\" >\n\n    \t\t<div *ngIf=\"title.errors && title.dirty\"\n    \t\t     class=\"alert alert-danger\">\n    \t\t    <div [hidden]=\"!title.errors.required\">\n    \t\t      Title is required.\n    \t\t    </div>\n    \t\t</div>\n    \t</form>\n    </div>\n  <h3 class=\"page-title\">All Questions:</h3>\n  <ul class=\"question-list\">\n      <li *ngFor=\"let question of questions\"  >\n        <div class=\"question-row\" *ngIf=\"!editing || editingQuestion.id != question.id\">\n                      <span class=\"question-title\">\n            \t{{question.content}}\n            </span>\n            <span class=\"question-actions\">\n                <a (click)=\"editQuestion(question)\">\n                \t<i class=\"material-icons edit\">edit</i>\n                </a>\n                <a (click)=\"buildQuestion(question)\">\n                \t<i class=\"material-icons build\">build</i>\n                </a>\n                <a (click)=\"checkQuestion(question)\">\n                \t<i class=\"material-icons school\">school</i>\n                </a>\n                <a (click)=\"deleteQuestion(question.id)\">\n                \t<i class=\"material-icons delete\">clear</i>\n                </a>\n            </span>\n        </div>\n        <div class=\"question-edit\" *ngIf=\"editing && editingQuestion.id === question.id\">\n            <input class=\"form-control\" type=\"text\"\n             [(ngModel)]=\"editingQuestion.content\" required>\n            <span class=\"edit-actions\">\n                <a (click)=\"updateQuestion(editingQuestion)\">\n                  <i class=\"material-icons\">done</i>\n                </a>\n                <a (click)=\"clearEditing()\">\n                  <i class=\"material-icons\">clear</i>\n                </a>\n            </span>\n        </div>\n      </li>\n    </ul>\n    <div class=\"no-questions\" *ngIf=\"questions && questions.length == 0\">\n        <p>No Questions Found!</p>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/question-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question__ = __webpack_require__("../../../../../src/app/question.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestionListComponent = (function () {
    function QuestionListComponent(questionService, appComponent) {
        this.questionService = questionService;
        this.appComponent = appComponent;
        this.newQuestion = new __WEBPACK_IMPORTED_MODULE_2__question__["a" /* Question */]();
        this.editing = false;
        this.editingQuestion = new __WEBPACK_IMPORTED_MODULE_2__question__["a" /* Question */]();
    }
    QuestionListComponent.prototype.ngOnInit = function () {
        this.getQuestions();
    };
    QuestionListComponent.prototype.getQuestions = function () {
        var _this = this;
        this.questionService.getQuestions(this.appComponent.test)
            .then(function (questions) { return _this.questions = questions; });
    };
    QuestionListComponent.prototype.createQuestion = function (questionForm) {
        var _this = this;
        this.questionService.createQuestion(this.appComponent.test, this.newQuestion)
            .then(function (createQuestion) {
            questionForm.reset();
            _this.newQuestion = new __WEBPACK_IMPORTED_MODULE_2__question__["a" /* Question */]();
            _this.questions.unshift(createQuestion);
        });
    };
    QuestionListComponent.prototype.deleteQuestion = function (id) {
        var _this = this;
        this.questionService.deleteQuestion(this.appComponent.test, id)
            .then(function () {
            _this.questions = _this.questions.filter(function (question) { return question.id !== id; });
        });
    };
    QuestionListComponent.prototype.updateQuestion = function (questionData) {
        var _this = this;
        console.log(questionData);
        this.questionService.updateQuestion(this.appComponent.test, questionData)
            .then(function (updatedQuestion) {
            var existingQuestion = _this.questions.find(function (question) { return question.id === updatedQuestion.id; });
            Object.assign(existingQuestion, updatedQuestion);
            _this.clearEditing();
        });
    };
    QuestionListComponent.prototype.editQuestion = function (questionData) {
        this.editing = true;
        Object.assign(this.editingQuestion, questionData);
    };
    QuestionListComponent.prototype.clearEditing = function () {
        this.editingQuestion = new __WEBPACK_IMPORTED_MODULE_2__question__["a" /* Question */]();
        this.editing = false;
    };
    QuestionListComponent.prototype.buildQuestion = function (question) {
        this.appComponent.question = question.id;
        this.appComponent.questionString = question.content;
        this.appComponent.mode = 3;
    };
    QuestionListComponent.prototype.checkQuestion = function (question) {
        this.questionService.checkQuestion(this.appComponent.test, question.id)
            .then();
    };
    return QuestionListComponent;
}());
QuestionListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'question-list',
        template: __webpack_require__("../../../../../src/app/question-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]) === "function" && _b || Object])
], QuestionListComponent);

var _a, _b;
//# sourceMappingURL=question-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/question.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionService = (function () {
    function QuestionService(http) {
        this.http = http;
        this.baseUrl = 'http://bgucsproject.azurewebsites.net';
    }
    QuestionService.prototype.getQuestions = function (tid) {
        return this.http.get(this.baseUrl + '/api/tests/' + tid + '/questions/')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    QuestionService.prototype.createQuestion = function (tid, questionData) {
        return this.http.post(this.baseUrl + '/api/tests/' + tid + '/questions/', questionData)
            .toPromise().then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    QuestionService.prototype.updateQuestion = function (tid, questionData) {
        return this.http.put(this.baseUrl + '/api/tests/' + tid + '/questions/' + questionData.id, questionData)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    QuestionService.prototype.deleteQuestion = function (tid, id) {
        return this.http.delete(this.baseUrl + '/api/tests/' + tid + '/questions/' + id)
            .toPromise()
            .catch(this.handleError);
    };
    QuestionService.prototype.handleError = function (error) {
        console.error('Some error occured', error);
        return Promise.reject(error.message || error);
    };
    QuestionService.prototype.checkQuestion = function (tid, id) {
        return this.http.get(this.baseUrl + '/api/tests/' + tid + '/questions/' + id + '/check')
            .toPromise()
            .then(function (response) { })
            .catch(this.handleError);
    };
    return QuestionService;
}());
QuestionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], QuestionService);

var _a;
//# sourceMappingURL=question.service.js.map

/***/ }),

/***/ "../../../../../src/app/question.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question; });
var Question = (function () {
    function Question() {
    }
    return Question;
}());

//# sourceMappingURL=question.js.map

/***/ }),

/***/ "../../../../../src/app/test-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"test-content\">\n    <h1 class=\"page-title\">My Tests</h1>\n    <div class=\"test-create\">\n      <form #testForm=\"ngForm\" (ngSubmit) = \"createTest(testForm)\" novalidate>\n    \t\t<input type=\"text\" id=\"title\" class=\"form-control\" placeholder=\"Type a test and press enter...\"\n    \t\t       required\n    \t\t       name=\"title\" [(ngModel)]=\"newTest.content\"\n    \t\t       #title=\"ngModel\" >\n\n    \t\t<div *ngIf=\"title.errors && title.dirty\"\n    \t\t     class=\"alert alert-danger\">\n    \t\t    <div [hidden]=\"!title.errors.required\">\n    \t\t      Title is required.\n    \t\t    </div>\n    \t\t</div>\n    \t</form>\n    </div>\n    <ul class=\"test-list\">\n      <li *ngFor=\"let test of tests\"  >\n        <div class=\"test-row\" *ngIf=\"!editing || editingTest.id != test.id\">\n                      <span class=\"test-title\">\n            \t{{test.content}}\n            </span>\n            <span class=\"test-actions\">\n                <a (click)=\"editTest(test)\">\n                \t<i class=\"material-icons edit\">edit</i>\n                </a>\n                <a (click)=\"buildTest(test)\">\n                \t<i class=\"material-icons build\">build</i>\n                </a>\n                <a (click)=\"checkTest(test)\">\n                \t<i class=\"material-icons school\">school</i>\n                </a>\n                <a (click)=\"deleteTest(test.id)\">\n                \t<i class=\"material-icons delete\">clear</i>\n                </a>\n            </span>\n        </div>\n        <div class=\"test-edit\" *ngIf=\"editing && editingTest.id === test.id\">\n            <input class=\"form-control\" type=\"text\"\n             [(ngModel)]=\"editingTest.content\" required>\n            <span class=\"edit-actions\">\n                <a (click)=\"updateTest(editingTest)\">\n                  <i class=\"material-icons\">done</i>\n                </a>\n                <a (click)=\"clearEditing()\">\n                  <i class=\"material-icons\">clear</i>\n                </a>\n            </span>\n        </div>\n      </li>\n    </ul>\n    <div class=\"no-tests\" *ngIf=\"tests && tests.length == 0\">\n        <p>No Tests Found!</p>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/test-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__test_service__ = __webpack_require__("../../../../../src/app/test.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test__ = __webpack_require__("../../../../../src/app/test.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestListComponent = (function () {
    function TestListComponent(testService, appComponent) {
        this.testService = testService;
        this.appComponent = appComponent;
        this.newTest = new __WEBPACK_IMPORTED_MODULE_2__test__["a" /* Test */]();
        this.editing = false;
        this.editingTest = new __WEBPACK_IMPORTED_MODULE_2__test__["a" /* Test */]();
    }
    TestListComponent.prototype.ngOnInit = function () {
        this.getTests();
    };
    TestListComponent.prototype.getTests = function () {
        var _this = this;
        this.testService.getTests()
            .then(function (tests) { return _this.tests = tests; });
    };
    TestListComponent.prototype.createTest = function (testForm) {
        var _this = this;
        this.testService.createTest(this.newTest)
            .then(function (createTest) {
            testForm.reset();
            _this.newTest = new __WEBPACK_IMPORTED_MODULE_2__test__["a" /* Test */]();
            _this.tests.unshift(createTest);
        });
    };
    TestListComponent.prototype.deleteTest = function (id) {
        var _this = this;
        this.testService.deleteTest(id)
            .then(function () {
            _this.tests = _this.tests.filter(function (test) { return test.id != id; });
        });
    };
    TestListComponent.prototype.updateTest = function (testData) {
        var _this = this;
        console.log(testData);
        this.testService.updateTest(testData)
            .then(function (updatedTest) {
            var existingTest = _this.tests.find(function (test) { return test.id === updatedTest.id; });
            Object.assign(existingTest, updatedTest);
            _this.clearEditing();
        });
    };
    TestListComponent.prototype.editTest = function (testData) {
        this.editing = true;
        Object.assign(this.editingTest, testData);
    };
    TestListComponent.prototype.clearEditing = function () {
        this.editingTest = new __WEBPACK_IMPORTED_MODULE_2__test__["a" /* Test */]();
        this.editing = false;
    };
    TestListComponent.prototype.buildTest = function (test) {
        this.appComponent.test = test.id;
        this.appComponent.testString = test.content;
        this.appComponent.mode = 2;
    };
    TestListComponent.prototype.checkTest = function (test) {
        this.testService.checkTest(test.id)
            .then();
    };
    return TestListComponent;
}());
TestListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'test-list',
        template: __webpack_require__("../../../../../src/app/test-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__test_service__["a" /* TestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__test_service__["a" /* TestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]) === "function" && _b || Object])
], TestListComponent);

var _a, _b;
//# sourceMappingURL=test-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/test.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TestService = (function () {
    function TestService(http) {
        this.http = http;
        this.baseUrl = 'http://bgucsproject.azurewebsites.net';
        this.mode = 0;
    }
    TestService.prototype.getTests = function () {
        return this.http.get(this.baseUrl + '/api/tests/')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TestService.prototype.createTest = function (testData) {
        return this.http.post(this.baseUrl + '/api/tests/', testData)
            .toPromise().then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TestService.prototype.updateTest = function (testData) {
        return this.http.put(this.baseUrl + '/api/tests/' + testData.id, testData)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TestService.prototype.deleteTest = function (id) {
        return this.http.delete(this.baseUrl + '/api/tests/' + id)
            .toPromise()
            .catch(this.handleError);
    };
    TestService.prototype.handleError = function (error) {
        console.error('Some error occured', error);
        return Promise.reject(error.message || error);
    };
    TestService.prototype.checkTest = function (tid) {
        return this.http.get(this.baseUrl + '/api/tests/' + tid + '/check')
            .toPromise()
            .then(function (response) { })
            .catch(this.handleError);
    };
    return TestService;
}());
TestService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TestService);

var _a;
//# sourceMappingURL=test.service.js.map

/***/ }),

/***/ "../../../../../src/app/test.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Test; });
var Test = (function () {
    function Test() {
    }
    return Test;
}());

//# sourceMappingURL=test.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map