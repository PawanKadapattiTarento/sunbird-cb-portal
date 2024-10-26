import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field'
import { DialogBoxAdminComponent } from '../../Dialog-Box/dialog-box-admin/dialog-box-admin.component'
import { DialogBoxAdminModule } from '../../Dialog-Box/dialog-box-admin/dialog-box-admin.module'
import { DialogBoxModeratorComponent } from '../../Dialog-Box/dialog-box-moderator/dialog-box-moderator.component'
import { DialogBoxModeratorModule } from '../../Dialog-Box/dialog-box-moderator/dialog-box-moderator.module'
import { BtnModeratorComponent } from '../btn-moderator/btn-moderator.component'
import { BtnAdminComponent } from './btn-admin.component'
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button'
import { MatIconModule } from '@angular/material/icon'
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip'

@NgModule({
    declarations: [BtnAdminComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatFormFieldModule,
        DialogBoxModeratorModule,
        DialogBoxAdminModule,
    ],
    exports: [BtnAdminComponent]
})
export class BtnAdminModule { }
