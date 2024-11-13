// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: IEnvironment = {
  name: (window as { [key: string]: any })['env']['name'] || '',
  production: false,
  sitePath: (window as { [key: string]: any })['env']['sitePath'] || '',
  organisation: (window as { [key: string]: any })['env']['organisation'] || '',
  framework: (window as { [key: string]: any })['env']['framework'] || '',
  channelId: (window as { [key: string]: any })['env']['channelId'] || '',
  azureHost: (window as { [key: string]: any })['env']['azureHost'] || '',
  contentHost: (window as { [key: string]: any })['env']['contentHost'] || '',
  azureBucket: (window as { [key: string]: any })['env']['azureBucket'] || '',
  apiCache: (window as { [key: string]: any })['env']['apiCache'] || 0,
  portals: (window as { [key: string]: any })['env']['portals'] || [],
  // mdoPortal: (window as { [key: string]: any })['env']['mdoPath'] || '',
  // spvPortal: (window as { [key: string]: any })['env']['spvPath'] || '',
  // cbcPortal: (window as { [key: string]: any })['env']['cbcPath'] || '',
  // cbpPortal: (window as { [key: string]: any })['env']['cbpPath'] || '',
  // fracPortal: (window as { [key: string]: any })['env']['fracPath'] || '',
  azureOldHost: (window as { [key: string]: any })['env']['azureOldHost'] || '',
  azureOldBuket: (window as { [key: string]: any })['env']['azureOldBuket'] || '',
  portalRoles: (((window as { [key: string]: any })['env']['portalRoles'] || '')) || [],
  recaptchaKey: (window as { [key: string]: any })['env']['recaptchaKey'] || [],
  contentBucket: (window as { [key: string]: any })['env']['azureBucket'] || '',
  cdnContentHost: (window as { [key: string]: any })['env']['cdnContentHost'] || '',
  cdnContentBucket: (window as { [key: string]: any })['env']['cdnContentBucket'] || '',
  certificateassets: (window as { [key: string]: any })['env']['certificateassets'] || '',
  assessmentBuffer: (window as { [key: string]: any })['env']['assessmentBuffer'] || 0,
  staticHomePageUrl: (window as { [key: string]: any })['env']['staticHomePageUrl'] || '',
  resendOTPTIme: (window as { [key: string]: any })['env']['resendOTPTIme'] || 120,
  cscmsUrl: (window as { [key: string]: any })['env']['cscmsUrl'] || '',
  dakshtaName: (window as { [key: string]: any })['env']['dakshtaName'] || '',
  contactMeetLink: (window as { [key: string]: any })['env']['contactMeetLink'] || '',
  programStripName: (window as { [key: string]: any })['env']['programStripName'] || '',
  programStripPrimaryCategory: (window as { [key: string]: any })['env']['programStripPrimaryCategory'] || '',
  programStripKey: (window as { [key: string]: any })['env']['programStripKey'] || '',
  quizResultTimeout: (window as { [key: string]: any })['env']['quizResultTimeout'] || '',
  meetingLinkDetail: (window as { [key: string]: any })['env']['meetingLinkDetail'] || '',
  karmayogiBharatLink: (window as { [key: string]: any })['env']['karmayogiBharatLink'] || '',
  helpEmail: (window as { [key: string]: any })['env']['helpEmail'] || '',
  supportEmail: (window as { [key: string]: any })['env']['supportEmail'] || '',
  spvorgID: (window as { [key: string]: any })['env']['spvorgID'] || '',
  mdoChannelsBookmarkId: (window as { [key: string]: any })['env']['mdoChannelsBookmarkId'] || '',
  providerDataKey: (window as { [key: string]: any })['env']['providerDataKey'] || '',
  compentencyVersionKey: (window as { [key: string]: any })['env']['compentencyVersionKey'] || '',
  firebase: {
    apiKey: "AIzaSyD8hKHYfT-5xuDR7QFtNLSMcg1i9jrrZgg",
    authDomain: "igot-karmayogi-689be.firebaseapp.com",
    databaseURL: "https://igot-karmayogi-689be.firebaseio.com",
    projectId: "igot-karmayogi-689be",
    storageBucket: "igot-karmayogi-689be.firebasestorage.app",
    messagingSenderId: "241942387335",
    appId: "1:241942387335:web:0da83fd1e33496933d7622",
    measurementId: "G-Y89XX6XG55",
    vapidKey: "BF11hz1QV8UdZN-6sId1OO7NlcrGtSmJdBmEdD6Lw82X06WlGZp0BmjaannqMJIEf30x2ULgVyf0pmBs41U9SdQ"
  },
}
interface IEnvironment {
  name: string,
  production: boolean
  sitePath: null | string
  organisation: string
  framework: string
  channelId: string,
  azureHost: string,
  azureBucket: string,
  azureOldHost: string,
  azureOldBuket: string
  contentHost: string
  portalRoles: string[]
  // otherPortalRoles: { cbp: string[], mdo: string[], cbc: string[], frac: string[] }
  portals: [{ sr: number, id: string, name: string, desc: string, icon?: string, uriPath: string, roles: [], isPublic: boolean }],
  recaptchaKey?: string,
  contentBucket?: string,
  certificateassets?: string,
  assessmentBuffer: number,
  staticHomePageUrl: string,
  resendOTPTIme: number,
  cscmsUrl: string,
  dakshtaName: string,
  contactMeetLink: string,
  programStripName: string,
  programStripPrimaryCategory: string,
  programStripKey: string,
  quizResultTimeout: number,
  meetingLinkDetail: string,
  karmayogiBharatLink: string,
  helpEmail: string,
  cdnContentHost: string,
  cdnContentBucket: string,
  supportEmail: string,
  apiCache: number,
  spvorgID: number,
  mdoChannelsBookmarkId: string
  providerDataKey: string,
  compentencyVersionKey: string,
  firebase: {
    apiKey: string,
    authDomain: string,
    databaseURL: string,
    projectId: string,
    storageBucket: string,
    messagingSenderId: string,
    appId: string,
    measurementId: string,
    vapidKey: string
  }
}

// import { AnyCnameRecord } from 'dns'
/*
 * For easier debugging in development mode, you can import the    file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error' // Included with Angular CLI.x
