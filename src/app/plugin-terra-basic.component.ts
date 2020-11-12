import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
    selector: 'ptb-app',
    templateUrl: './plugin-terra-basic.component.html',
    styleUrls: ['./plugin-terra-basic.component.scss']
})
export class PluginTerraBasicComponent implements OnInit {
    /*tslint:disable-next-line:max-line-length*/
    private readonly accessToken: string =
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZWY0Y2U5ZjZhNWNhZDg1NjdlNGRkNjdkNjVmOTY0NTRhNWExNTRlNDI1YjkwOTk2NjM0YjRkNDdmODIxMjQ5MzE5Y2RkNzQ3YWI5NTAwOGIiLCJpYXQiOjE2MDUxNjQzODUsIm5iZiI6MTYwNTE2NDM4NSwiZXhwIjoxNjA1MjUwNzg1LCJzdWIiOiI4Iiwic2NvcGVzIjpbIioiXX0.SrnEq5tGXdBFk7lU2RmDc4H84kJSW7XE4brcz7DZ8gChb88HrX8zQN_TQix_uUvvEN5h4ChS0k12L_FAV8wxQnamzuYwSFpdW4rKzmeAtwdjq42Zhf8DU_asqNAAXkwX5FEY47mPTJCkjDVtzu2o1Su7upbR0ZAyATOz16mVLl6asPwVWXj2MACuRudwEV-EcAIA3rA3tyrk6Hc7oa-NY9HSPd6s7NVrZlltlHE2Ffs-cYDI2j2vee1as19GWwtEwDh-jwyZmAQGSP3OXhXHnqN5c9RsmdfQRl6AysW5FehiS0Gc_wGIRmg1jfZ7h4cNm3LmYORDSzJJ_PlSOBjdjnDIgPm_pGmuld1fkHBnFFzFrcSpuptjUlo6jsqr1A2CymOzbjSaOGz7FLfLbnNRvpazEiElrNg64DPbsqCpr7O0sDiYFZeT4RD5_sHawCov2CtDDO-DcEV3yX3XVlbOkum9g0-slKRPKbdMTg9n1lfJFAxjb_1yF2cV6Yu58EQV3ywm8iak3rLtggJNf99op1_SeDfTxnNA-2TkPdYV_s_YTsWZZwAE1VymRgb4rp7ybN9HV9NZgvBSmyuvsENnPQ-HIkqQ9eyyyrB3z2f7U0MCebmrwAV36vYZDRYhn2Fy-CLLwKAjDkAw292gaaQsUqFZqGaBDI1FrpAYaenRRzA';

    public ngOnInit(): void {
        if (!environment.production) {
            // store accessToken in localStorage since it is taken from there to be added to the Authorization header of any request
            localStorage.setItem('accessToken', this.accessToken);
        }
    }
}
