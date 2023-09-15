import {Component, Input} from '@angular/core';
import {SpinnerService} from "../services/spinner.service";

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  @Input() public showSpinner: boolean = true;

  constructor(public spinnerService: SpinnerService) {
  }
}
