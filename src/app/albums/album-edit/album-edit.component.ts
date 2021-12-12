import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  EventEmitter,
  Output,
} from "@angular/core";
import { Album } from "src/app/shared/models/album";

@Component({
  selector: "app-album-edit",
  templateUrl: "./album-edit.component.html",
  styleUrls: ["./album-edit.component.css"],
})
export class AlbumEditComponent implements OnInit {
  @ViewChild("nameInput") nameInput: ElementRef | undefined;
  @ViewChild("singerInput") singerInput: ElementRef | undefined;
  @ViewChild("amountInput") amountInput: ElementRef | undefined;

  @Output() albumAdded = new EventEmitter<Album>();
  constructor() {}

  ngOnInit(): void {}

  onAddItem() {
    const albumName = this.nameInput?.nativeElement.value;
    const albumSinger = this.singerInput?.nativeElement.value;
    const albumAmount = this.amountInput?.nativeElement.value;
    const newIngredient = new Album(albumName, albumSinger, albumAmount);
    this.albumAdded.emit(newIngredient);
  }
}
