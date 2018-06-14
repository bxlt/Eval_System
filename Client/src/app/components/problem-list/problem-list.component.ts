import { Component, OnInit } from '@angular/core';
import {Problem} from "../../models/problem.model"

const PROBLEMS: Problem[] = [{
  id:1, 
  name: "2sum",
  des:"this is 2 sum question",
  difficulty:"easy"
},{
  id:2, 
  name: "3sum",
  des:"this is 3 sum question",
  difficulty:"hard"
},{
  id:3, 
  name: "4sum",
  des:"this is 4 sum question",
  difficulty:"hard"
},{
  id:4, 
  name: "5sum",
  des:"this is 2 sum question",
  difficulty:"medium"
}];

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {

  problems: Problem[];

  constructor() { }

  ngOnInit() {
    this.problems = PROBLEMS;
  }

}
