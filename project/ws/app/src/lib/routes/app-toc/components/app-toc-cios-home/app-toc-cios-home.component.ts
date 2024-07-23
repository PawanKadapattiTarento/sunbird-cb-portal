import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import { CommonMethodsService } from '@sunbird-cb/consumption'
import { ConfigurationsService, MultilingualTranslationsService, WidgetContentService } from '@sunbird-cb/utils-v2'
import { LoaderService } from '@ws/author/src/public-api'
import { MatDialog, MatSnackBar } from '@angular/material'
import { CertificateService } from '../../../certificate/services/certificate.service'
import { CertificateDialogComponent } from '@sunbird-cb/collection/src/lib/_common/certificate-dialog/certificate-dialog.component'

@Component({
  selector: 'ws-app-app-toc-cios-home',
  templateUrl: './app-toc-cios-home.component.html',
  styleUrls: ['./app-toc-cios-home.component.scss'],
})
export class AppTocCiosHomeComponent implements OnInit, AfterViewInit {
  skeletonLoader = true
  extContentReadData: any = {}
  userExtCourseEnroll: any = {}
  downloadCertificateLoading = false

  rcElem = {
    offSetTop: 0,
    BottomPos: 0,
  }
  @ViewChild('rightContainer', { static: false }) rcElement!: ElementRef
  scrollLimit: any
  scrolled: boolean | undefined

  @HostListener('window:scroll', ['$event'])
  handleScroll() {

    if (this.scrollLimit) {
      if ((window.scrollY + this.rcElem.BottomPos) >= this.scrollLimit) {
        this.rcElement.nativeElement.style.position = 'sticky'
      } else {
        this.rcElement.nativeElement.style.position = 'fixed'
      }
    }

    // 236... (OffsetTop of right container + 104)
    if (window.scrollY > (this.rcElem.offSetTop + 104)) {
      this.scrolled = true
    } else {
      this.scrolled = false
    }
  }
  constructor(private route: ActivatedRoute,
              private commonSvc: CommonMethodsService,
              private translate: TranslateService,
              private configSvc: ConfigurationsService,
              private langtranslations: MultilingualTranslationsService,
              private contentSvc: WidgetContentService,
              private certSvc: CertificateService,
              private dialog: MatDialog,
              public loader: LoaderService,
              public snackBar: MatSnackBar
  ) {
    this.route.data.subscribe((data: any) => {
      if (data && data.extContent && data.extContent.data && data.extContent.data.content) {
        this.extContentReadData = data.extContent.data.content
        this.skeletonLoader = false
      }
      if (data && data.userEnrollContent && data.userEnrollContent.data && data.userEnrollContent.data.result) {
        this.userExtCourseEnroll = data.userEnrollContent.data.result
      }
    })

      if (localStorage.getItem('websiteLanguage')) {
        this.translate.setDefaultLang('en')
        const lang = localStorage.getItem('websiteLanguage')!
        this.translate.use(lang)
      }
  }

  ngOnInit() {
  }

  handleCapitalize(str: string, type?: string): string {
    return this.commonSvc.handleCapitalize(str, type)
  }

  translateLabels(label: string, type: any) {
    return this.langtranslations.translateLabel(label, type, '')
  }

  ngAfterViewInit() {
    if (this.rcElement) {
      this.rcElem.BottomPos = this.rcElement.nativeElement.offsetTop + this.rcElement.nativeElement.offsetHeight
      this.rcElem.offSetTop = this.rcElement.nativeElement.offsetTop
    }
  }
  redirectToContent(contentData: any) {
    const userData: any = this.configSvc.userProfileV2
    const extUrl: string = contentData.redirectUrl.replace('<username>', userData.email)
    return extUrl
  }
  replaceText(str: any, replaceTxt: any) {
    return str.replaceAll(replaceTxt, '')
  }

  async enRollToExtCourse(contentId: any) {
    this.loader.changeLoad.next(true)
    const reqbody = {
      courseId: contentId,
    }
    const enrollRes = await this.contentSvc.extContentEnroll(reqbody).toPromise().catch(_error => {})
    if (enrollRes && enrollRes.result && Object.keys(enrollRes.result).length > 0) {
      this.getUserContentEnroll(contentId)
    } else {
      this.loader.changeLoad.next(false)
      this.snackBar.open('Unable to enroll to the content')
    }
  }

  async getUserContentEnroll(contentId: any) {
    const enrollRes = await this.contentSvc.fetchExtUserContentEnroll(contentId).toPromise().catch(_error => {})
    if (enrollRes && enrollRes.result  && Object.keys(enrollRes.result).length > 0) {
      this.userExtCourseEnroll = enrollRes.result
      this.loader.changeLoad.next(false)
      this.snackBar.open('Successfully enrolled in the course.')
    } else {
      this.loader.changeLoad.next(false)
      this.snackBar.open('Unable to get the enrolled details')
    }
  }

  async downloadCert() {
    this.downloadCertificateLoading = true
    const certData = this.userExtCourseEnroll.issued_certificates
    const certRes: any = await this.certSvc.downloadCertificate_v2(certData[0].identifier).toPromise().catch(_error => {})
    if (certRes && Object.keys(certRes.result).length > 0) {
      this.downloadCertificateLoading = false
      this.dialog.open(CertificateDialogComponent, {
        width: '1300px',
        data: { cet: certRes.result.printUri , certId: certData[0].identifier },
      })
    } else {
      this.downloadCertificateLoading = false
      this.snackBar.open('Unable to get the certificate. Try again after sometime.')
    }
  }
}
