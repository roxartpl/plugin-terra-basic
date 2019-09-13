import {
    Component,
    OnInit
} from '@angular/core';
import { Language } from 'angular-l10n';
import {
    FormArray,
    FormBuilder,
    FormGroup
} from '@angular/forms';

export interface SomeFactsInterface
{
    favoriteColor:string;
    luckyNumber:number;
}

export interface SomeDudeInterface
{
    firstName:string;
    lastName:string;
    someFacts:SomeFactsInterface
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
        lastName:  'Dude',
        someFacts: {
            favoriteColor: 'Blau',
            luckyNumber:   7
        }
    };

    public form:FormGroup;

    constructor(private formBuilder:FormBuilder)
    {
    }

    ngOnInit()
    {
        this.form = this.formBuilder.group({
            firstName: [this.someDude.firstName],
            lastName:  [this.someDude.lastName],
            someFacts: this.formBuilder.array([
                    this.formBuilder.group({
                        favoriteColor: [this.someDude.someFacts.favoriteColor],
                        luckyNumber:   [this.someDude.someFacts.luckyNumber]
                    })
                ]
            )
        });
    }

    public add():void
    {
        (this.form.get('someFacts') as FormArray).push(
            this.formBuilder.group({
                favoriteColor: [''],
                luckyNumber:   ['']
            })
        );
    }

    public remove(index:number):void
    {
        (this.form.get('someFacts') as FormArray).removeAt(index);
    }

    public submit():void
    {
        console.log(this.form.value);
    }
}
