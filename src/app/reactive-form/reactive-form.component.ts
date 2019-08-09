import {
    Component,
    OnInit
} from '@angular/core';

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
    public someDude:SomeDudeInterface = {
        firstName: "Some",
        lastName: "Dude",
        someFacts: {
            favoriteColor: "Blau",
            luckyNumber: 7
        }
    };

    constructor()
    {
    }

    ngOnInit()
    {
    }

    public add():void
    {
    }

    public remove(index:number):void
    {
    }
}