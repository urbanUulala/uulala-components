
import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { CapitalizeTypes } from '../types/capitalize.type';
import { StringTools } from '../utilities';

@Directive({
    selector: '[value-editor]',
    host: {
        '(input)': '$event'
    }
})
export class ValueEditorInputDirective {
    @Input() typeCap: CapitalizeTypes = 'none';

    value: any;

    @HostListener('input', ['$event']) onInput($event) {

        switch (this.typeCap) {
            case 'first-letter':
                $event.target.value = StringTools.capitalizeFirstLetter($event.target.value);
                break;
            case 'first-letter-each-word':
                $event.target.value = StringTools.capitalizeFirstLetterEachWord($event.target.value);
                break;
            case 'upper-case':
                $event.target.value = ($event.target.value as string).toUpperCase();
                break;
            case 'lower-case':
                $event.target.value = ($event.target.value as string).toLowerCase();
                break;
        }

    }
}