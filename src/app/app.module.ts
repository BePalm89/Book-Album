import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/header/header.component";
import { BooksComponent } from "./books/books.component";
import { BookListComponent } from "./books/book-list/book-list.component";
import { BookDetailComponent } from "./books/book-detail/book-detail.component";
import { BookItemComponent } from "./books/book-list/book-item/book-item.component";
import { AlbumsComponent } from "./albums/albums.component";
import { AlbumEditComponent } from "./albums/album-edit/album-edit.component";
import { DropdownDirective } from "./shared/directives/dropdown/dropdown.directive";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    BookListComponent,
    BookDetailComponent,
    BookItemComponent,
    AlbumsComponent,
    AlbumEditComponent,
    DropdownDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
