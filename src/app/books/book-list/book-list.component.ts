import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Book } from "src/app/shared/models/book";

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.css"],
})
export class BookListComponent implements OnInit {
  @Output() selectedBook = new EventEmitter<Book>();
  books: Book[] = [
    new Book(
      "Eat that Frog!",
      "How to avoid procrastination",
      "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg"
    ),
    new Book(
      "1Q84!",
      "A world with two moons!",
      "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg"
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onSelectedBook(book: Book) {
    this.selectedBook.emit(book);
  }
}
