import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})

export class CalculatorComponent {
  public firstValue : number = 1;
  public secondValue : number = 1;

  public operation : string = '+';
  public operations : string[] = ['+', "-", "*", "/"];

  public result?: number; // result : number | undefined = undefined;
  public calc() {
        switch (this.operation) {
          case ("+"):
            this.result = this.firstValue + this.secondValue;
            break;
          case ("-"):
            this.result = this.firstValue - this.secondValue;
            break;
          case ("*"):
            this.result = this.firstValue * this.secondValue;
            break;
          case ("/"):
            this.result = this.firstValue / this.secondValue;
            break;
        }
  }
}
