import {
    NgModule,
    APP_INITIALIZER
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PluginTerraBasicComponent } from './plugin-terra-basic.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TerraComponentsModule } from '@plentymarkets/terra-components/app';
import { BasicContactComponent } from './contact/basic-contact.component';
import { BasicContactService } from './contact/basic-contact.service';
import { LargeDirective } from './directives/large.directive';
@NgModule({
    imports:      [
        BrowserModule,
        HttpModule,
        HttpClientModule,
        TerraComponentsModule.forRoot()
    ],
    declarations: [
        PluginTerraBasicComponent,
        BasicContactComponent,
        LargeDirective
    ],
    providers:    [
        {
            provide:    APP_INITIALIZER,
            useFactory: initL10n,
            deps:       [L10nLoader],
            multi:      true
        },
        BasicContactService
    ],
    bootstrap:    [
        PluginTerraBasicComponent
    ]
})
export class PluginTerraBasicModule
{
    constructor(public l10nLoader:L10nLoader)
    {
        this.l10nLoader.load();
    }
}

function initL10n(l10nLoader:L10nLoader):Function
{
    return ():Promise<void> => l10nLoader.load();
}
