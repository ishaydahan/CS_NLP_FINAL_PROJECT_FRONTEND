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

module.exports = "<div class=\"answer-content\">\n  <h1 class=\"page-title\">{{this.appComponent.questionString}}</h1>\n  <h3 class=\"page-title\">Add Answer:</h3>\n  <div class=\"answer-create\">\n\n    <form #answerForm=\"ngForm\" novalidate>\n      <input type=\"text\" id=\"title\" class=\"form-control\" placeholder=\"Type an answer\"\n             required\n             name=\"title\" [(ngModel)]=\"newAnswer.content\"\n             #title=\"ngModel\" >\n      <input type=\"number\" id=\"grade\" class=\"form-control\" placeholder=\"Type a grade [0-100] or leave empty for student\"\n             name=\"grade\" [(ngModel)]=\"tempGrade\"\n             #grade=\"ngModel\" >\n      <div class=\"answer-buttons\">\n        <button (click)= \"createAnswer(answerForm)\" [disabled]=\"!title.valid || tempGrade<0 || tempGrade>100\" md-raised-button color=\"primary\">Add Answer</button>\n        <div class=\"divider\"></div>\n        <button (click)=\"checkQuestion()\" md-raised-button color=\"primary\">Check Question</button>\n        <simple-notifications [options]=\"options\"></simple-notifications>\n        <div class=\"divider\"></div>\n        <button (click)=\"goBack()\" md-raised-button color=\"primary\">Go back</button>\n      </div>\n    </form>\n  </div>\n\n\n\n  <h3 class=\"page-title\">All Answers:</h3>\n  <ul class=\"answer-list\">\n    <li *ngFor=\"let answer of answers; let i = index\">\n      <div class=\"answer-row-good\" *ngIf=\"(!editing || editingAnswer.id != answer.id) && answer.grade>=50\">\n        <span class=\"answer-prop\">\n            <a title=\"WRITER\">\n              <i class=\"material-icons school\" *ngIf=\"answer.writer==='TEACHER'\">school</i>\n              <i class=\"material-icons face\" *ngIf=\"answer.writer==='STUDENT'\">face</i>\n            </a>\n        </span>\n        <span class=\"answer-title\">\n          {{answer.content}} {{answer.grade>-1 ? '(' + answer.grade/100 + ')' : ''}}\n        </span>\n        <span class=\"answer-actions\">\n          <a (click)=\"approveAnswer(answer)\" title=\"APPROVE\" *ngIf=\"answer.grade>-1 && answer.writer==='STUDENT'\">\n            <i class=\"material-icons thumb_up\" *ngIf=\"answer.verified\">thumb_up</i>\n            <i class=\"material-icons thumb_down\" *ngIf=\"!answer.verified\">thumb_down</i>\n          </a>\n          <a (click)=\"editAnswer(answer)\" title=\"EDIT GRADE\">\n            <i class=\"material-icons edit\">edit</i>\n          </a>\n          <a (click)=\"deleteAnswer(answer.id)\" title=\"DELETE\">\n            <i class=\"material-icons delete\">clear</i>\n          </a>\n           <jaspero-confirmations [defaultSettings]=\"options2\"></jaspero-confirmations>\n        </span>\n      </div>\n      <div class=\"answer-row-bad\" *ngIf=\"(!editing || editingAnswer.id != answer.id)&& answer.grade<50 && answer.grade>-1\">\n        <span class=\"answer-prop\">\n            <a title=\"WRITER\">\n              <i class=\"material-icons school\" *ngIf=\"answer.writer==='TEACHER'\">school</i>\n              <i class=\"material-icons face\" *ngIf=\"answer.writer==='STUDENT'\">face</i>\n            </a>\n        </span>\n        <span class=\"answer-title\">\n          {{answer.content}} {{answer.grade>-1 ? '(' + answer.grade/100 + ')' : ''}}\n        </span>\n        <span class=\"answer-actions\">\n                <a (click)=\"approveAnswer(answer)\" *ngIf=\"answer.grade>-1 && answer.writer==='STUDENT'\">\n                  <i class=\"material-icons thumb_up\" *ngIf=\"answer.verified\">thumb_up</i>\n                  <i class=\"material-icons thumb_down\" *ngIf=\"!answer.verified\">thumb_down</i>\n                </a>\n                <a (click)=\"editAnswer(answer)\">\n                \t<i class=\"material-icons edit\">edit</i>\n                </a>\n                <a (click)=\"deleteAnswer(answer.id)\">\n                \t<i class=\"material-icons delete\">clear</i>\n                </a>\n           <jaspero-confirmations [defaultSettings]=\"options2\"></jaspero-confirmations>\n            </span>\n      </div>\n\n      <div class=\"answer-row-ungraded\" *ngIf=\"(!editing || editingAnswer.id != answer.id) && answer.grade<0\">\n        <span class=\"answer-prop\">\n            <a title=\"WRITER\">\n              <i class=\"material-icons school\" *ngIf=\"answer.writer==='TEACHER'\">school</i>\n              <i class=\"material-icons face\" *ngIf=\"answer.writer==='STUDENT'\">face</i>\n            </a>\n        </span>\n        <span class=\"answer-title\">\n          {{answer.content}} {{answer.grade>-1 ? '(' + answer.grade/100 + ')' : ''}}\n        </span>\n        <span class=\"answer-actions\">\n                <a (click)=\"editAnswer(answer)\">\n                \t<i class=\"material-icons edit\">edit</i>\n                </a>\n                <a (click)=\"deleteAnswer(answer.id)\">\n                \t<i class=\"material-icons delete\">clear</i>\n                </a>\n           <jaspero-confirmations [defaultSettings]=\"options2\"></jaspero-confirmations>\n            </span>\n      </div>\n\n\n      <div class=\"answer-edit\" *ngIf=\"editing && editingAnswer.id === answer.id\">\n        <input class=\"form-control\" type=\"text\"\n               [(ngModel)]=\"editingAnswer.grade\" required>\n        <span class=\"edit-actions\">\n                <a (click)=\"updateAnswer(editingAnswer)\">\n                  <i class=\"material-icons\">done</i>\n                </a>\n                <a (click)=\"clearEditing()\">\n                  <i class=\"material-icons\">clear</i>\n                </a>\n            </span>\n      </div>\n\n      <div class=\"bottom-divider\" *ngIf=\"answer.writer==='TEACHER' && answers[i+1]!==undefined && answers[i+1].writer==='STUDENT'\" style=\"color:#ffffff; font-size: xx-small\">\n        *\n      </div>\n\n    </li>\n  </ul>\n  <div class=\"no-answers\" *ngIf=\"answers && answers.length == 0\">\n    <p>No Answers Found!</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/answer-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__answer_service__ = __webpack_require__("../../../../../src/app/answer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__answer__ = __webpack_require__("../../../../../src/app/answer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jaspero_ng2_confirmations__ = __webpack_require__("../../../../@jaspero/ng2-confirmations/ng2-confirmations.es5.js");
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
    function AnswerListComponent(answerService, appComponent, _service, _confirmation) {
        this.answerService = answerService;
        this.appComponent = appComponent;
        this._service = _service;
        this._confirmation = _confirmation;
        this.prevWasTeacher = false;
        this.newAnswer = new __WEBPACK_IMPORTED_MODULE_2__answer__["a" /* Answer */]();
        this.editing = false;
        this.editingAnswer = new __WEBPACK_IMPORTED_MODULE_2__answer__["a" /* Answer */]();
        this.tempGrade = null;
        this.options = {
            position: ["bottom", "right"],
            timeOut: 5000,
            lastOnBottom: true,
        };
        this.options2 = {
            overlay: true,
            overlayClickToClose: true,
            showCloseButton: false,
            confirmText: '',
            declineText: 'Yes'
        };
    }
    AnswerListComponent.prototype.ngOnInit = function () {
        this.getAnswers();
    };
    AnswerListComponent.prototype.getAnswers = function () {
        var _this = this;
        this.answerService.getAnswers(this.appComponent.test, this.appComponent.question)
            .then(function (answers) {
            _this.answers = answers;
        });
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
        this.answerService.createAnswer(this.appComponent.test, this.appComponent.question, this.newAnswer)
            .then(function (createAnswer) {
            answerForm.reset();
            _this.newAnswer = new __WEBPACK_IMPORTED_MODULE_2__answer__["a" /* Answer */]();
            if (createAnswer.writer === 'STUDENT')
                _this.answers.push(createAnswer);
            else
                _this.answers.unshift(createAnswer);
        });
    };
    AnswerListComponent.prototype.deleteAnswer = function (id) {
        var _this = this;
        if (confirm("Are you sure?")) {
            this.answerService.deleteAnswer(this.appComponent.test, this.appComponent.question, id)
                .then(function () {
                _this.answers = _this.answers.filter(function (answer) { return answer.id !== id; });
            });
        }
    };
    AnswerListComponent.prototype.updateAnswer = function (answerData) {
        var _this = this;
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
        answerData.verified = !answerData.verified;
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
    AnswerListComponent.prototype.goBack = function () {
        this.appComponent.question = null;
        this.appComponent.questionString = null;
        this.appComponent.mode = 2;
    };
    AnswerListComponent.prototype.checkQuestion = function () {
        var _this = this;
        this._service.info('Checking Question', 'It may take some time...', {
            showProgressBar: true,
            pauseOnHover: true,
            clickToClose: true,
            maxLength: 50
        });
        this.answerService.checkQuestion(this.appComponent.test, this.appComponent.question)
            .then(function (x) {
            _this._service.success('Done!', 'grades loading...', {
                showProgressBar: true,
                pauseOnHover: true,
                clickToClose: true,
                maxLength: 50
            });
            _this.getAnswers();
        }).catch(function (x) {
            _this._service.error('Error!', 'please report...', {
                showProgressBar: true,
                pauseOnHover: true,
                clickToClose: true,
                maxLength: 50
            });
            _this.getAnswers();
        });
    };
    return AnswerListComponent;
}());
AnswerListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'answer-list',
        template: __webpack_require__("../../../../../src/app/answer-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__answer_service__["a" /* AnswerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__answer_service__["a" /* AnswerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__jaspero_ng2_confirmations__["b" /* ConfirmationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__jaspero_ng2_confirmations__["b" /* ConfirmationService */]) === "function" && _d || Object])
], AnswerListComponent);

var _a, _b, _c, _d;
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
        // private baseUrl = 'http://localhost:8080';
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
    AnswerService.prototype.checkQuestion = function (tid, id) {
        return this.http.get(this.baseUrl + '/api/tests/' + tid + '/questions/' + id + '/check')
            .toPromise()
            .then(function (response) { })
            .catch(this.handleError);
    };
    return AnswerService;
}());
AnswerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
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

module.exports = "<main>\n  <test-list *ngIf=\"mode===1\"></test-list>\n  <question-list *ngIf=\"mode===2\"></question-list>\n  <answer-list *ngIf=\"mode===3\"></answer-list>\n</main>\n"

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.mode = 1;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__jaspero_ng2_confirmations__ = __webpack_require__("../../../../@jaspero/ng2-confirmations/ng2-confirmations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__test_list_component__["a" /* TestListComponent */],
            __WEBPACK_IMPORTED_MODULE_7__question_list_component__["a" /* QuestionListComponent */],
            __WEBPACK_IMPORTED_MODULE_9__answer_list_component__["a" /* AnswerListComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_14__jaspero_ng2_confirmations__["a" /* JasperoConfirmationsModule */],
            __WEBPACK_IMPORTED_MODULE_13_angular2_notifications__["SimpleNotificationsModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__test_service__["a" /* TestService */], __WEBPACK_IMPORTED_MODULE_8__question_service__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_10__answer_service__["a" /* AnswerService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/question-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"question-content\">\n  <h1 class=\"page-title\">{{this.appComponent.testString}}</h1>\n  <h3 class=\"page-title\">Add Question:</h3>\n    <div class=\"question-create\">\n      <form #questionForm=\"ngForm\" novalidate>\n        <input type=\"text\" id=\"title\" class=\"form-control\" placeholder=\"Type a question\"\n               required\n               name=\"title\" [(ngModel)]=\"newQuestion.content\"\n               #title=\"ngModel\" >\n        <div class=\"question-buttons\">\n          <button  (click) = \"createQuestion(questionForm)\" [disabled]=\"!title.valid\" md-raised-button color=\"primary\">Add Question</button>\n          <div class=\"divider\"></div>\n          <button (click)=\"checkTest()\" md-raised-button color=\"primary\">Check Test</button>\n            <simple-notifications [options]=\"options\"></simple-notifications>\n          <div class=\"divider\"></div>\n          <button (click)=\"goBack()\" md-raised-button color=\"primary\">Go back</button>\n        </div>\n      </form>\n    </div>\n  <h3 class=\"page-title\">All Questions:</h3>\n  <ul class=\"question-list\">\n      <li *ngFor=\"let question of questions\"  >\n        <div class=\"question-row\" *ngIf=\"!editing || editingQuestion.id != question.id\">\n                      <span class=\"question-title\">\n            \t{{question.content}}\n            </span>\n            <span class=\"question-actions\">\n                <a (click)=\"editQuestion(question)\">\n                \t<i class=\"material-icons edit\">edit</i>\n                </a>\n                <a (click)=\"buildQuestion(question)\">\n                \t<i class=\"material-icons build\">build</i>\n                </a>\n                <a (click)=\"deleteQuestion(question.id)\">\n                \t<i class=\"material-icons delete\">clear</i>\n                </a>\n                <jaspero-confirmations [defaultSettings]=\"options2\"></jaspero-confirmations>\n\n            </span>\n        </div>\n        <div class=\"question-edit\" *ngIf=\"editing && editingQuestion.id === question.id\">\n            <input class=\"form-control\" type=\"text\"\n             [(ngModel)]=\"editingQuestion.content\" required>\n            <span class=\"edit-actions\">\n                <a (click)=\"updateQuestion(editingQuestion)\">\n                  <i class=\"material-icons\">done</i>\n                </a>\n                <a (click)=\"clearEditing()\">\n                  <i class=\"material-icons\">clear</i>\n                </a>\n            </span>\n        </div>\n      </li>\n    </ul>\n    <div class=\"no-questions\" *ngIf=\"questions && questions.length == 0\">\n        <p>No Questions Found!</p>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/question-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question__ = __webpack_require__("../../../../../src/app/question.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jaspero_ng2_confirmations__ = __webpack_require__("../../../../@jaspero/ng2-confirmations/ng2-confirmations.es5.js");
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
    function QuestionListComponent(questionService, appComponent, _service, _confirmation) {
        this.questionService = questionService;
        this.appComponent = appComponent;
        this._service = _service;
        this._confirmation = _confirmation;
        this.newQuestion = new __WEBPACK_IMPORTED_MODULE_2__question__["a" /* Question */]();
        this.editing = false;
        this.editingQuestion = new __WEBPACK_IMPORTED_MODULE_2__question__["a" /* Question */]();
        this.options = {
            position: ["bottom", "right"],
            timeOut: 5000,
            lastOnBottom: true,
        };
        this.options2 = {
            overlay: true,
            overlayClickToClose: true,
            showCloseButton: false,
            confirmText: '',
            declineText: 'Yes'
        };
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
        if (confirm("Are you sure?")) {
            this.questionService.deleteQuestion(this.appComponent.test, id)
                .then(function () {
                _this.questions = _this.questions.filter(function (question) { return question.id !== id; });
            });
        }
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
    QuestionListComponent.prototype.checkTest = function () {
        var _this = this;
        this._service.info('Checking Test', 'It may take some time...', {
            showProgressBar: true,
            pauseOnHover: true,
            clickToClose: true,
            maxLength: 50
        });
        this.questionService.checkTest(this.appComponent.test)
            .then(function (x) {
            _this._service.success('Done!', 'grades loading...', {
                showProgressBar: true,
                pauseOnHover: true,
                clickToClose: true,
                maxLength: 50
            });
        });
    };
    QuestionListComponent.prototype.goBack = function () {
        this.appComponent.test = null;
        this.appComponent.testString = null;
        this.appComponent.mode = 1;
    };
    return QuestionListComponent;
}());
QuestionListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'question-list',
        template: __webpack_require__("../../../../../src/app/question-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__jaspero_ng2_confirmations__["b" /* ConfirmationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__jaspero_ng2_confirmations__["b" /* ConfirmationService */]) === "function" && _d || Object])
], QuestionListComponent);

var _a, _b, _c, _d;
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
        // private baseUrl = 'http://localhost:8080';
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
    QuestionService.prototype.checkTest = function (tid) {
        return this.http.get(this.baseUrl + '/api/tests/' + tid + '/check')
            .toPromise()
            .then(function (response) { })
            .catch(this.handleError);
    };
    return QuestionService;
}());
QuestionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
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

module.exports = "<div class=\"test-content\">\n    <h1 class=\"page-title\">My Tests</h1>\n    <div class=\"test-create\">\n      <form #testForm=\"ngForm\" novalidate>\n    \t\t<input type=\"text\" id=\"title\" class=\"form-control\" placeholder=\"Give a name to this Test\"\n    \t\t       required\n    \t\t       name=\"title\" [(ngModel)]=\"newTest.content\"\n    \t\t       #title=\"ngModel\" >\n        <div class=\"test-buttons\">\n          <button (click) = \"createTest(testForm)\" [disabled]=\"!title.valid\" md-raised-button color=\"primary\">Add Test</button>\n        </div>\n      </form>\n    </div>\n    <ul class=\"test-list\">\n      <li *ngFor=\"let test of tests\"  >\n        <div class=\"test-row\" *ngIf=\"!editing || editingTest.id != test.id\">\n                      <span class=\"test-title\">\n            \t{{test.content}}\n            </span>\n            <span class=\"test-actions\">\n                <a (click)=\"editTest(test)\">\n                \t<i class=\"material-icons edit\">edit</i>\n                </a>\n                <a (click)=\"buildTest(test)\">\n                \t<i class=\"material-icons build\">build</i>\n                </a>\n                <a (click)=\"deleteTest(test.id)\">\n                \t<i class=\"material-icons delete\">clear</i>\n                </a>\n                <jaspero-confirmations [defaultSettings]=\"options2\"></jaspero-confirmations>\n\n            </span>\n        </div>\n        <div class=\"test-edit\" *ngIf=\"editing && editingTest.id === test.id\">\n            <input class=\"form-control\" type=\"text\"\n             [(ngModel)]=\"editingTest.content\" required>\n            <span class=\"edit-actions\">\n                <a (click)=\"updateTest(editingTest)\">\n                  <i class=\"material-icons\">done</i>\n                </a>\n                <a (click)=\"clearEditing()\">\n                  <i class=\"material-icons\">clear</i>\n                </a>\n            </span>\n        </div>\n      </li>\n    </ul>\n    <div class=\"no-tests\" *ngIf=\"tests && tests.length == 0\">\n        <p>No Tests Found!</p>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/test-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__test_service__ = __webpack_require__("../../../../../src/app/test.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test__ = __webpack_require__("../../../../../src/app/test.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jaspero_ng2_confirmations__ = __webpack_require__("../../../../@jaspero/ng2-confirmations/ng2-confirmations.es5.js");
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
    function TestListComponent(testService, appComponent, _confirmation) {
        this.testService = testService;
        this.appComponent = appComponent;
        this._confirmation = _confirmation;
        this.newTest = new __WEBPACK_IMPORTED_MODULE_2__test__["a" /* Test */]();
        this.editing = false;
        this.editingTest = new __WEBPACK_IMPORTED_MODULE_2__test__["a" /* Test */]();
        this.options2 = {
            overlay: true,
            overlayClickToClose: true,
            showCloseButton: false,
            confirmText: '',
            declineText: 'Yes'
        };
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
        if (confirm("Are you sure?")) {
            this.testService.deleteTest(id)
                .then(function () {
                _this.tests = _this.tests.filter(function (test) { return test.id != id; });
            });
        }
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
    return TestListComponent;
}());
TestListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'test-list',
        template: __webpack_require__("../../../../../src/app/test-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__test_service__["a" /* TestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__test_service__["a" /* TestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__jaspero_ng2_confirmations__["b" /* ConfirmationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__jaspero_ng2_confirmations__["b" /* ConfirmationService */]) === "function" && _c || Object])
], TestListComponent);

var _a, _b, _c;
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
        // private baseUrl = 'http://localhost:8080';
        this.baseUrl = 'http://bgucsproject.azurewebsites.net';
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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