import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
} from "@angular/core";
import { DropdownDirective } from "../directives/dropdown/dropdown.directive";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  @Output() selectedFeature = new EventEmitter<string>();

  @ViewChild("dropDownVc", { static: true }) vc: DropdownDirective | undefined;

  constructor() {}

  ngOnInit(): void {}

  onSelectedFeature(feature: string) {
    this.selectedFeature.emit(feature);
  }
}
