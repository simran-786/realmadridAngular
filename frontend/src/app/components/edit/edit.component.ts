import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';

import { IssueService } from '../../issue.service';
import { Issue } from '../../issue.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id!: String;
  issue: any = {};
  updateForm!: FormGroup;
  form: any;
  
  constructor(private issueService: IssueService, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) { 
    this.createForm();
  }

  createForm() {
    this.updateForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: '',
      Role: '',
      TotalGoals: '',
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.issueService.getIssueById(this.id).subscribe(res => {
        this.issue = res;
        this.form.get('firstname').setValue(this.issue.firstname);
        this.form.get('lastname').setValue(this.issue.lastname);
        this.form.get('Role').setValue(this.issue.Role);
        this.form.get('TotalGoals').setValue(this.issue.TotalGoals);
        
      });
    });
  }

  updateIssue(firstname: any, lastname: any, Role: any, TotalGoals: any) {
    this.issueService.updateIssue(this.id, firstname, lastname, Role, TotalGoals).subscribe(() => {
      this.snackBar.open('Issue updated successfully', 'OK', {
        duration: 3000
      });
    });
  }
}
