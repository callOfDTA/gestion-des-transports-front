/*global google*/
import { Directive, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';

declare let google:any;

@Directive({
  selector: "[Googleplace]"
})
export class GoogleplaceDirective implements OnInit {
  @Output() onSelect: EventEmitter<any> = new EventEmitter();

  private element: HTMLInputElement;

  constructor(el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit() {
    const autocomplete = new google.maps.places.Autocomplete(this.element, {
      types: ['address'],
      componentRestrictions: {country: 'fr'}
    });
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const place = autocomplete.getPlace();
      this.onSelect.emit(place);
    });
  }
}
