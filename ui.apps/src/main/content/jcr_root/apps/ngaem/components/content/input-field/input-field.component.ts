import {Component, Input, ElementRef} from "@angular/core";
import {OnInit} from "@angular/core";

@Component({
    selector: 'input-field',
    templateUrl: '/apps/ngaem/components/content/input-field/input.html'
})
export class InputFieldComponent implements OnInit {

    constructor(private elementRef: ElementRef) {
        this.placeholder = elementRef.nativeElement.getAttribute('placeholder');
        this.ngModelValue = elementRef.nativeElement.getAttribute('ngModel');
        this.inputId = elementRef.nativeElement.getAttribute('id');
        this.inputClass = elementRef.nativeElement.getAttribute('class');
        this.typeSelection = elementRef.nativeElement.getAttribute('type');
    }

    ngOnInit() {
        console.log("InputFieldComponent initialized");
    }
}