import {
  Directive,
  HostBinding,
  HostListener,
  Renderer2,
  ElementRef,
} from "@angular/core";

@Directive({
  selector: "[appDropdown]",
  exportAs: "dropDownDir",
})
export class DropdownDirective {
  public isShow = false;

  @HostBinding("class.show") get opened() {
    return this.isShow;
  }

  constructor(private elementRef: ElementRef) {}

  @HostListener("document:click", ["$event"]) open() {
    this.isShow = this.elementRef.nativeElement.contains(event?.target)
      ? !this.isShow
      : false;
  }
}
