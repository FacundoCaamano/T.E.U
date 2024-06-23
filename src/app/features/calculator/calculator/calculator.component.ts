import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

  display: string = '';

  appendNumber(number: string) {
    if (this.display === '0') {
      this.display = number;
    } else {
      this.display += number;
    }
  }

  appendOperator(operator: string) {
    if (this.display !== '') {
      const lastChar = this.display[this.display.length - 1];
      if ('+-*/'.includes(lastChar)) {
        this.display = this.display.slice(0, -1) + operator;
      } else {
        this.display += operator;
      }
    }
  }

  appendDot() {
    if (this.display === '' || this.display.endsWith(' ')) {
      this.display += '0.';
    } else if (!this.display.includes('.')) {
      this.display += '.';
    }
  }

  clear() {
    this.display = '';
  }

  delete() {
    this.display = this.display.slice(0, -1);
  }

  calculate() {
    try {
      this.display = eval(this.display).toString();
    } catch (e) {
      this.display = 'Error';
    }
  }
}
