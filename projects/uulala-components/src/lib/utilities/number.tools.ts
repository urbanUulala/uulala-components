export class NumberTools {

  static generateRandomNumber(base: number) {
    return Math.round(Math.random() * base);
  }
  static  moneyFormatter = (amount = 0) => {
    const fixedAmount = (Math.floor(amount * 100) / 100).toFixed(2);
    return '$' + fixedAmount.replace(/\d(?=(\d{3})+\.)/g, '$&,');
  };

}
