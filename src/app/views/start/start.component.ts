import { Component, Input, OnInit } from '@angular/core';
import { Language } from 'angular-l10n';
import axios from 'axios';

@Component({
    selector: 'ptb-start',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.scss']
})
export class StartComponent {
    public testCurrencies: any = {
        test: 1,
        test2: 2
    };

    public currencies: any;

    public getCurrencies(): void {
        axios
            .get('http://api.nbp.pl/api/cenyzlota/today')
            .then(function (response) {
                // handle success
                // console.log(response);
                var currencies = response.data[0]['data'];
                console.log('Wyniki: ');
                alert(currencies);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    @Language()
    public lang: string;

    @Input()
    public myTitle: string;

    ngOnInit() {
        this.getCurrencies();
    }
}
