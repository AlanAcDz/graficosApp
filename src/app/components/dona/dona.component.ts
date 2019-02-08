import { Component } from '@angular/core';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: []
})
export class DonaComponent {
  public doughnutChartLabels: string[] = ['Tamales', 'Tortillas', 'Chorizo'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType = 'doughnut';
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }
  public chartHovered(e: any): void {
    console.log(e);
  }
  random() {
    this.doughnutChartData = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)
    ];
  }
}
