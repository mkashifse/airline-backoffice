import { Routes } from '@angular/router';
import { AmadeusSettingsViewComponent } from './amadeus-settings-view/amadeus-settings-view.component';
import { AmadeusSettingsEditComponent } from './amadeus-settings-edit/amadeus-settings-edit.component';
import { AmadeusSettingsAddComponent } from './amadeus-settings-add/amadeus-settings-add.component';


export const dashboardRoutes: Routes = [
    {
        path: '',
        redirectTo: 'amadeus-settings-view',
        pathMatch: 'full',
    },
    {
        path: 'amadeus-settings-add',
        component: AmadeusSettingsAddComponent,
    },
    {
        path: 'amadeus-settings-view',
        component: AmadeusSettingsViewComponent,
    },
    {
        path: 'amadeus-settings-edit',
        component: AmadeusSettingsEditComponent,
    }
];

