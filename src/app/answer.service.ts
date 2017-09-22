import { Injectable } from '@angular/core';
import { Answer } from './answer';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AnswerService {
  private baseUrl = 'http://bgucsproject.azurewebsites.net';

  constructor(private http: Http) {
  }

  getAnswers(tid: string, qid: string):  Promise<Answer[]> {
    return this.http.get(this.baseUrl + '/api/tests/' + tid + '/questions/' + qid + '/answers/')
      .toPromise()
      .then(response => response.json() as Answer[])
      .catch(this.handleError);
  }

  createAnswer(tid: string, qid: string,  answerData: Answer): Promise<Answer> {
    return this.http.post(this.baseUrl + '/api/tests/' + tid + '/questions/'  + qid + '/answers/', answerData)
      .toPromise().then(response => response.json() as Answer)
      .catch(this.handleError);
  }

  updateAnswer(tid: string, qid: string, answerData: Answer): Promise<Answer> {
    return this.http.put(this.baseUrl + '/api/tests/' + tid + '/questions/'  + qid + '/answers/' + answerData.id, answerData)
      .toPromise()
      .then(response => response.json() as Answer)
      .catch(this.handleError);
  }

  deleteAnswer(tid: string, qid: string, id: string): Promise<any> {
    return this.http.delete(this.baseUrl + '/api/tests/' + tid + '/questions/' + qid + '/answers/' + id)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}
