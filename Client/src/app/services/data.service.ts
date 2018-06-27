import { Injectable } from '@angular/core';
import { Problem } from  "../models/problem.model";
import { PROBLEMS } from '../mock_problems'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getProbs(): Problem[]{
    return PROBLEMS;
  }

  getProb(id:  number): Problem {
    return PROBLEMS.find((problem) => problem.id === id);
  }
}
