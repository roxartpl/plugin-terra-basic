import {
    Component,
    OnInit
} from '@angular/core';
import {
    FormArray,
    FormBuilder,
    FormGroup
} from '@angular/forms';
import { favoriteColorValidator } from '../core/validator/favorite-color-validator';
import { Language } from 'angular-l10n';

export interface FactInterface
{
    favoriteColor:string;
    luckyNumber:number;
}

export interface SomeDudeInterface
{
    firstName:string;
    lastName:string;
    someFacts:Array<FactInterface>
}

@Component({
    selector:    'ptb-reactive-form',
    templateUrl: './reactive-form.component.html',
    styleUrls:   ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit
{
    @Language()
    public lang:string;

    public someDude:SomeDudeInterface = {
        firstName: 'Some',
        lastName: 'Dude',
        someFacts: [{
            favoriteColor: 'Blau',
            luckyNumber: 7
        }]
    };

    public form:FormGroup;

    constructor(private fb:FormBuilder)
    {
    }

    ngOnInit()
    {
        this.form = this.fb.group({
            firstName: [this.someDude.firstName],
            lastName: [''],
            someFacts: this.createSomeFacts(this.someDude.someFacts)
        });
    }

    public add():void
    {
        (this.form.controls.someFacts as FormArray).push(this.createFact());
    }

    public remove(index:number, fact:FactInterface):void
    {
        (this.form.controls.someFacts as FormArray).removeAt(index);
        console.log('These facts: ' + fact.toString() + ' are deleted.')
    }

    public submit():void
    {
        console.log(this.form.valid);
        console.log(this.form.value);
    }

    private createSomeFacts(someFacts:Array<FactInterface>):FormArray
    {
        return this.fb.array(someFacts.map((fact:FactInterface) =>
        {
            const factGroup:FormGroup = this.createFact();
            factGroup.setValue({...fact});
            return factGroup;
        }));
    }

    private createFact():FormGroup
    {
        return this.fb.group({
            favoriteColor: ['', [favoriteColorValidator('pink')]],
            luckyNumber: ['', ]
        })
    }
}
