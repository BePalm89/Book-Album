import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Book-Album-Angular";
  featureSelected = "books";

  onNavigate(feature: string) {
    this.featureSelected = feature;
  }
}
