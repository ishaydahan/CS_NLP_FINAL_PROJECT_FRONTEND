import { Injectable } from '@angular/core';
import { Test } from './test';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TestService {
  private baseUrl = 'http://bgucsproject.azurewebsites.net';
  private mode = 0;

  constructor(private http: Http) {}

  getTests():  Promise<Test[]> {
    return this.http.get(this.baseUrl + '/api/tests/')
      .toPromise()
      .then(response => response.json() as Test[])
      .catch(this.handleError);
  }

  createTest(testData: Test): Promise<Test> {
    return this.http.post(this.baseUrl + '/api/tests/', testData)
      .toPromise().then(response => response.json() as Test)
      .catch(this.handleError);
  }

  updateTest(testData: Test): Promise<Test> {
    return this.http.put(this.baseUrl + '/api/tests/' + testData.id, testData)
      .toPromise()
      .then(response => response.json() as Test)
      .catch(this.handleError);
  }

  deleteTest(id: string): Promise<any> {
    return this.http.delete(this.baseUrl + '/api/tests/' + id)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }

  checkTest(tid: string):  Promise<Test[]> {
    return this.http.get(this.baseUrl + '/api/tests/' + tid + '/check')
      .toPromise()
      .then(response => {})
      .catch(this.handleError);
  }

}
