import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { ApiService } from '../app/services/api.service'

import { DashboardComponent } from './dashboard/dashboard.component'

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        RouterModule.forChild([
            {path: 'admin/dashboard', component: DashboardComponent}
        ])
    ],
    providers: [
        ApiService
    ]
})
export class AdminModule {}
