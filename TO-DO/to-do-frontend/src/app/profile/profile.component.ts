import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  elements: number[] = [];

  constructor() { }

  ngOnInit(): void {
    // Using a callback
    this.fetchNumbersWithCallback((numbers) => {
      console.log('Callback: Numbers fetched', numbers);
      this.elements = numbers;
    });

    // Using a Promise
    this.fetchNumbersWithPromise()
      .then(numbers => {
        console.log('Promise: Numbers fetched', numbers);
        this.elements = numbers;
      })
      .catch(error => {
        console.error('Promise: Error fetching numbers', error);
      });

    // Using async/await
    this.fetchNumbersWithAsyncAwait();
  }

  // Fetch numbers using a callback
  fetchNumbersWithCallback(callback: (numbers: number[]) => void): void {
    setTimeout(() => {
      const numbers = [1, 2, 3, 4, 5];
      callback(numbers);
    }, 1000);
  }

  // Fetch numbers using a Promise
  fetchNumbersWithPromise(): Promise<number[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const numbers = [1, 2, 3, 4, 5];
        resolve(numbers);
      }, 1000);
    });
  }

  // Fetch numbers using async/await
  async fetchNumbersWithAsyncAwait(): Promise<void> {
    try {
      const numbers = await this.fetchNumbersWithPromise();
      console.log('Async/Await: Numbers fetched', numbers);
      this.elements = numbers;
    } catch (error) {
      console.error('Async/Await: Error fetching numbers', error);
    }
  }
}
