


export class DateTools {

  static getDateRequestFormat(date: Date) {
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  }

  static getLocalDateFromUTC(value: Date | string | number) {
    let localDate:Date = new Date(value);
    return new Date(Date.UTC(localDate.getFullYear(), localDate.getMonth(), localDate.getDate(),  localDate.getHours(), localDate.getMinutes(), localDate.getSeconds()));
  }

  static getLocalHourFromUTC(value: string) {
    let localDate:Date = new Date();
    let arrayHour: string[] = value.split(':');
    return new Date(Date.UTC(localDate.getFullYear(), localDate.getMonth(), localDate.getDate(),  +arrayHour[0], +arrayHour[1], +arrayHour[2]));
  }

  static getLocalHourFromUTCAddHours(value: string, value2: string) {
    let localDate:Date = new Date();
    let arrayHour: string[] = value.split(':');
    let arrayHour2: string[] = value2.split(':');

    let initialDate: Date = new Date(Date.UTC(localDate.getFullYear(), localDate.getMonth(), localDate.getDate(), +arrayHour[0], +arrayHour[1], +arrayHour[2]));
    initialDate.setTime( initialDate.getTime() + ( +arrayHour2[0] *60*60*1000 ))
    return initialDate;
  }
  static getLocalHourFromUTCAddDays(value: string, days: number) {
    let localDate:Date = new Date();
    let arrayHour: string[] = value.split(':');
    return new Date(Date.UTC(localDate.getFullYear(), localDate.getMonth(), localDate.getDate() + days,  +arrayHour[0], +arrayHour[1], +arrayHour[2]));
  }

  static getLocalDateFromUTCAddDays(inputDate: Date, days: number) {
    let localDate: Date = new Date(inputDate);
    return new Date(Date.UTC(localDate.getFullYear(), localDate.getMonth(), localDate.getDate() + days,  localDate.getHours(), localDate.getMinutes(), localDate.getSeconds()));
  }

  static dateToYMD(date: Date) {
    var d = date.getDate();
    var m = date.getMonth() + 1; //Month from 0 to 11
    var y = date.getFullYear();
    return '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
}


}
