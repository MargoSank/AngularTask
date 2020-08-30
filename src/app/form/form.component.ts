import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  correctInput: boolean;
  input: string;
  output: string;

  constructor() {
    this.correctInput = false;
    this.input = 'Hello';
    this.output = '';
  }

  ngOnInit(): void {
  }

  inputChange(): void {
    const inputValue: number = Number(this.input);
    if (inputValue) {
      this.correctInput = true;
      this.output = this.fooBarCheck(inputValue);
    } else {
      this.correctInput = false;
    }
  }

  fooBarCheck(num: number): string {
    let result = '';
    if (num % 3 === 0) {
      result += 'Foo';
    }
    if (num % 5 === 0) {
      result += 'Bar';
    }
    return result;
  }
}
