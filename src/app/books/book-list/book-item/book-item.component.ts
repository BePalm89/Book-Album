import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Book } from "src/app/shared/models/book";

@Component({
  selector: "app-book-item",
  templateUrl: "./book-item.component.html",
  styleUrls: ["./book-item.component.css"],
})
export class BookItemComponent implements OnInit {
  @Input() book: Book | undefined;
  @Output() selectedBook = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  onSelectedBook() {
    this.selectedBook.emit();
  }
}
