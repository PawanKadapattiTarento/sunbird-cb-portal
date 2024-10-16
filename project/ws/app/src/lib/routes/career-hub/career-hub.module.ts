import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatDividerModule } from '@angular/material/divider'

import { MatCardModule } from '@angular/material/card'
import { CareerHubRoutingModule } from './career-hub-routing.module'
import { CareersHomeComponent } from './routes/careers-home/careers-home.component'
import { CareersComponent } from './routes/careers/careers.component'
import { LoaderService } from '@ws/author/src/public-api'
import { InitResolver } from '@ws/author/src/lib/services/init-resolve.service'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { BtnPageBackModule, AvatarPhotoModule } from '@sunbird-cb/collection'
import {
  PipeOrderByModule,
  PipeHtmlTagRemovalModule,
  PipeRelativeTimeModule,
  PipeFilterSearchModule,
  PipeFilterModule,
} from '@sunbird-cb/utils-v2'
import { CareersCardComponent } from './components/careers-card/careers-card.component'
import { CareerDetailComponent } from './routes/career-detail/career-detail.component'
import { RelatedPostsComponent } from './components/related-posts/related-posts.component'
import { WidgetResolverModule } from '@sunbird-cb/resolver'
import { CareersPaginationComponent } from './components/careers-pagination/careers-pagination.component'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { HttpLoaderFactory } from 'src/app/app.module'
import { HttpClient } from '@angular/common/http'
import { MatButtonModule } from '@angular/material/button'
import { MatChipsModule } from '@angular/material/chips'
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatListModule } from '@angular/material/list'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatSelectModule } from '@angular/material/select'
import { MatSidenavModule } from '@angular/material/sidenav'

@NgModule({
  declarations: [
    CareersHomeComponent,
    CareersComponent,
    CareersCardComponent,
    CareerDetailComponent,
    RelatedPostsComponent,
    CareersPaginationComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CareerHubRoutingModule,
    MatGridListModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatListModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    PipeFilterModule,
    PipeHtmlTagRemovalModule,
    PipeRelativeTimeModule,
    AvatarPhotoModule,
    PipeOrderByModule,
    PipeFilterSearchModule,
    BtnPageBackModule,
    WidgetResolverModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    LoaderService,
    InitResolver,
  ],
})
export class CareerHubModule { }
