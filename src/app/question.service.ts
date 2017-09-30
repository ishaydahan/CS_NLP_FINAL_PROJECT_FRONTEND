import { Injectable } from '@angular/core';
import { Question } from './question';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class QuestionService {
  // private baseUrl = 'http://localhost:8080';
  private baseUrl = 'http://bgucsproject.azurewebsites.net';

  constructor(private http: Http) {
  }

  getQuestions(tid: string):  Promise<Question[]> {
    return this.http.get(this.baseUrl + '/api/tests/' + tid + '/questions/')
      .toPromise()
      .then(response => response.json() as Question[])
      .catch(this.handleError);
  }

  createQuestion(tid: string, questionData: Question): Promise<Question> {
    return this.http.post(this.baseUrl + '/api/tests/' + tid + '/questions/', questionData)
      .toPromise().then(response => response.json() as Question)
      .catch(this.handleError);
  }

  updateQuestion(tid: string, questionData: Question): Promise<Question> {
    return this.http.put(this.baseUrl + '/api/tests/' + tid + '/questions/' + questionData.id, questionData)
      .toPromise()
      .then(response => response.json() as Question)
      .catch(this.handleError);
  }

  deleteQuestion(tid: string, id: string): Promise<any> {
    return this.http.delete(this.baseUrl + '/api/tests/' + tid + '/questions/' + id)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }

  checkTest(tid: string):  Promise<any> {
    return this.http.get(this.baseUrl + '/api/tests/' + tid + '/check')
      .toPromise()
      .then(response => {})
      .catch(this.handleError);
  }

}
