import {
    AbstractControl,
    ValidatorFn
} from '@angular/forms';

export function favoriteColorValidator(forbiddenColor:string):ValidatorFn
{
    return (control:AbstractControl):{ [key:string]:any } | null =>
    {
        const forbidden:boolean = (control.value as string).toLowerCase() === forbiddenColor.toLowerCase();
        return forbidden ? {'forbiddenColor': {value: control.value}} : null;
    };
}
