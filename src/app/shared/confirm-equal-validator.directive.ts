    import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
    import { Directive ,Attribute} from '@angular/core';
    
    @Directive({
        selector: '[appConfirmEqualValidator]',
        providers: [{
            provide: NG_VALIDATORS,
            useExisting: ConfirmEqualValidatorDirective,
            multi: true
        }]
    })
    export class ConfirmEqualValidatorDirective implements Validator {
        // constructor(@Attribute('parent') public parent: string){}

        // isParent() {
        //     if (!this.parent) 
        //       return false;
        
        //     return this.parent === 'true' ? true: false;
        // }

        validate(passwordGroup: AbstractControl): { [key: string]: any } | null {
            const passwordField = passwordGroup.get('password');
            const confirmPasswordField = passwordGroup.get('confirmPassword');

            if (passwordField && confirmPasswordField &&
                passwordField.value !== confirmPasswordField.value) {
                return { 'notEqual': true };
            }
            // if (confirmPasswordField.value.length <= 0) {
            //     return null;
            // }
              // value equal and reverse
        // if (passwordField && confirmPasswordField === passwordField.value && this.isParent) {
        //     delete passwordField.errors['appConfirmEqualValidator'];
        //     if (!Object.keys(passwordField.errors).length) passwordField.setErrors(null);
        // }

        // // value not equal and reverse
        // if (passwordField && confirmPasswordField !== passwordField.value && this.isParent) {
        //     passwordField.setErrors({ appConfirmEqualValidator : false });
        // }
    
            return null;
        }
    }
    
  