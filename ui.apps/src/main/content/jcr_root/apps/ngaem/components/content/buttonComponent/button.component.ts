import {Component, Input, ElementRef} from "@angular/core";
import {OnInit} from "@angular/core";

@Component({
    selector: 'buttonComponent',
    templateUrl: '/apps/ngaem/components/content/buttonComponent/button.html'
})
export class ButtonComponent implements OnInit {

    constructor(private elementRef: ElementRef) {
        this.typeSelection = elementRef.nativeElement.getAttribute('type');
        this.buttonText = elementRef.nativeElement.getAttribute('buttonText');
        this.ngClick = elementRef.nativeElement.getAttribute('ngClick');
        this.buttonId = elementRef.nativeElement.getAttribute('id');
        this.buttonClass = elementRef.nativeElement.getAttribute('class');
    }

    ngOnInit() {
        console.log("Button component initialized");
    }
}