import { Component, OnInit, ɵPlayer } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Issue } from '../../issue.model';

import { IssueService } from '../../issue.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  issues!: Issue[];
  displayedColumns = ['firstname', 'lastname', 'Role', 'TotalGoals'];

  constructor(private issueService: IssueService, private router: Router) { }

  ngOnInit(): void {
    this.fetchIssues();
  }

  fetchIssues() {
    this.issueService
      .getIssues()
      .subscribe((data: Issue[]) => {
        this.issues = data;
        console.log('Data requested ...');
        console.log(this.issues);
      });
  }

  editIssue(id: any) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteIssue(id: any) {
    this.issueService.deleteIssue(id).subscribe(() => {
      this.fetchIssues();
    });
  }
}
