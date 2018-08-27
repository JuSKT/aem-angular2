import {Component, Input, ElementRef} from "@angular/core";
import {OnInit} from "@angular/core";

@Component({
    selector: 'formComponent',
    templateUrl: '/apps/ngaem/components/content/formComponent/form.html'
})
export class FormComponent implements OnInit {

    constructor(private elementRef: ElementRef) {
        this.formGroupValue = elementRef.nativeElement.getAttribute('formGroup');
        this.ngSubmitValue = elementRef.nativeElement.getAttribute('ngSubmit');
    }

    ngOnInit() {
        console.log("Form component initialized");
    }
}