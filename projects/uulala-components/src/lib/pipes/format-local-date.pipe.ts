import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform, LOCALE_ID, Inject } from '@angular/core';
import { DateTools } from 'uulala-components/projects/uulala-components/src/lib/utilities/date.tools';
import { FormatCardTypes } from '../models/types';


@Pipe({
  name: 'localDate'
})
export class FormatLocalDate extends DatePipe implements PipeTransform {
    transform(value: Date|string|number): string|null;
    transform(value: null|undefined): null;
    transform(value: Date|string|number|null|undefined): string|null;
    transform(value: Date | string | number, format?: string, timezone?: string, locale?: string): string|null {
        let transformDate: Date = DateTools.getLocalDateFromUTC(value)
        return super.transform(transformDate, format, timezone, locale)   
    }
}