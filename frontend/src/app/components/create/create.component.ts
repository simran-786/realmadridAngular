import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IssueService } from '../../issue.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;

  constructor(private issueService: IssueService, private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: '',
      Role: '',
      TotalGoals: ''
    });
  }

  addIssue(firstname: any, lastname: any, Role: any, TotalGoals: any) {
    this.issueService.addIssue(firstname, lastname, Role, TotalGoals).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }

  ngOnInit(): void {
  }

}
