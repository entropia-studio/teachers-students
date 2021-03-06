import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent  {

  @Input() placeHolder: string;

}
