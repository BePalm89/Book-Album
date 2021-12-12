import { Component, OnInit } from "@angular/core";
import { Album } from "../shared/models/album";

@Component({
  selector: "app-albums",
  templateUrl: "./albums.component.html",
  styleUrls: ["./albums.component.css"],
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [
    new Album("Ground", "Idles", 1),
    new Album("Argentina", "TeCanela", 1),
  ];
  constructor() {}

  ngOnInit(): void {}

  onAlbumAdded(album: Album) {
    this.albums.push(album);
  }
}
