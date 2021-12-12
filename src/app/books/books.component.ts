import { Component, OnInit } from "@angular/core";
import { Book } from "../shared/models/book";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"],
})
export class BooksComponent implements OnInit {
  selectedBook: Book | undefined;
  constructor() {}

  ngOnInit(): void {}
}
