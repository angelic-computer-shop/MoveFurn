import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private results: string[] = [];

  constructor() {}

  addResult(result: string) {
    this.results.push(result);
  }

  getResults() {
    return this.results;
  }
}
