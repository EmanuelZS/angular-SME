
import { Component } from '@angular/core';

@Component({
  selector: 'app-pvsc',
  templateUrl: './pvsc.component.html'
})
export class PvscComponent {

  public labels1: string[] = [ 'Preventivos', 'Correctivos', 'Costos' ];

  public data1 = [
    [350,450,100],
  ];

}
