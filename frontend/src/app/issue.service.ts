import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class IssueService {

  uri = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getIssues() {
    return this.http.get(`${this.uri}/issues`);
  }

getIssueById(id: any) {
  return this.http.get(`${this.uri}/issues/${id}`);
}

addIssue(firstname: any, lastname: any, Role: any, TotalGoals: any) {
  const issue = {
    firstname: firstname,
    lastname: lastname,
    Role: Role,
    TotalGoals: TotalGoals
  };
  return this.http.post(`${this.uri}/issues/add`, issue);
}

updateIssue(id: any, firstname: any, lastname: any, Role: any, TotalGoals: any) {
  const issue = {
    firstname: firstname,
    lastname: lastname,
    Role: Role,
    TotalGoals: TotalGoals
  };
  return this.http.post(`${this.uri}/issues/update/${id}`, issue);
}

deleteIssue(id: any) {
  return this.http.get(`${this.uri}/issues/delete/${id}`);
}
}
