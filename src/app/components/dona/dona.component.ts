import { Component, Input } from '@angular/core';
import { ChartData, ChartEvent } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html'
})
export class DonaComponent {

  @Input() tittle: string= 'Sin titulo';
  
  public doughnutChartLabels: string[] = [ 'Preventivos', 'Correctivos', 'Costos' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ] },
    ]
  };


}
