import { Component, OnInit } from '@angular/core';
import { Problem } from '../../models/problem.model';

@Component({
  selector: 'app-problem-detail',
  templateUrl: './problem-detail.component.html',
  styleUrls: ['./problem-detail.component.css']
})
export class ProblemDetailComponent implements OnInit {

  problem: Problem[];

  constructor(
  ) { }

  ngOnInit() {
  
  }

 
}
