
import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

export class ValidatorsTools {
  static equalValueValidator(targetKey: string, toMatchKey: string): ValidatorFn {

    return (group: FormGroup): { [key: string]: string } => {
      const target = group.controls[targetKey];
      const toMatch = group.controls[toMatchKey];
      console.log('target', target.value, 'To match', toMatch.value);
      const isMatch = target.value === toMatch.value;

      if (!isMatch && target.valid && toMatch.valid) {
        toMatch.setErrors({ equalValue: targetKey });
        const message = targetKey + ' != ' + toMatchKey;
        return { 'equalValue': message };
      }
      if (isMatch && toMatch.hasError('equalValue')) {
        toMatch.setErrors(null);
      }

      return null;
    };
  }

  static checkValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value)
      return { 'checkValidator': true }

    return null;

  }

  static numericCodeValidatorArray(length: number) {
    return [
      Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.minLength(length),
      Validators.maxLength(length)
    ]
  }

  static passwordValidatorArray(minLength: number = 8) {
    return [Validators.required, Validators.pattern(`^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-\+]).{${ minLength },}$`)]
  }

}
