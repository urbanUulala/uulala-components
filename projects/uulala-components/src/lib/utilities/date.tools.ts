


export class DateTools {

  static getDateRequestFormat(date: Date) {
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  }

  static getLocalDateFromUTC(value: Date | string | number) {
    let localDate:Date = new Date(value);
        return new Date(Date.UTC(localDate.getFullYear(), localDate.getMonth(), localDate.getDate(),  localDate.getHours(), localDate.getMinutes(), localDate.getSeconds()));
  }
}
