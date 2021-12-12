import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { Book } from "src/app/shared/models/book";
import { DropdownDirective } from "src/app/shared/directives/dropdown/dropdown.directive";

@Component({
  selector: "app-book-detail",
  templateUrl: "./book-detail.component.html",
  styleUrls: ["./book-detail.component.css"],
})
export class BookDetailComponent implements OnInit {
  @Input() bookDetail: Book | undefined;
  @ViewChild("dropDownVc", { static: true }) vc: DropdownDirective | undefined;

  constructor() {}

  ngOnInit(): void {}
}
