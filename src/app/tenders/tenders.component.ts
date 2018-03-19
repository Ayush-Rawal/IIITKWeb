import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tenders',
  templateUrl: './tenders.component.html',
  styleUrls: ['./tenders.component.css']
})
export class TendersComponent implements OnInit{

  constructor() { }

  public content = [
    {
      "title": "Walk-in-Interview for Non-Teaching Staff for IIIT Kota",
      "content": "Walk-in-Interview for Non-Teaching Staff for IIIT Kota. For advertisement please click here",
      "link": ""
    }, {
      "title": "Guest Faculty",
      "content": "Advertisement of walk-in-Interview for guest faculty for IIIT Kota. For the Advertisement of walk-in-Interview for guest faculty for IIIT Kota please click here",
      "link": ""
    }, {
      "title": "Faculty positions at IIITK-Date extended",
      "content": "Online applications from bright Indian nationals having an excellent academic record are invited for Faculty positions at IIIT Kota.\n1. Copy of advertisement is here.\nIITKota_Advt_2017\nIITKota_Advt_2017\n2. Last date of online application submission has been changed to August 21, 2017. The Corrigendum is attached here.\n3. Detailed advertisement\n4. Portal for online applications\n5. Read instructions carefully before you submit the application. Once submitted, no changes can be made to the application.\n6. Under qualifications, the candidate must provide education details of\n) Secondary examination,\n) Senior Secondary examination,\n) UG (B. Tech. / B.E.),\n) PG (M. Tech. / M. E.) and\n) Ph.D.\nKeep a scanned copy of relevant documents to be uploaded.\nNote:- This is a separate portal from the portal for faculty on contract positions.\n",
      "link": ""
    }, {
      "title": "Advertisement for the 14 Posts of the Director IIIT (PPP) under MHRD",
      "content": "Click here to advertisement for the 14 Posts of the Director IIIT(PPP) under MHRD",
      "link": ""
    }, {
      "title": "Notice for appointment on Deputation basis",
      "content": "Applications are invited for filling up two positions of Assistant Registrar on transfer or transfer on deputation basis at Indian Institute of Information Technology Kota (IIIT Kota) being mentored by MNIT, Jaipur.\nHere is detailed notice for appointment on deputation basis\nComplete application in the prescribed proforma should reach to Coordinator, IIIT Kota, Office of IIIT Kota, 2nd Floor, Prabha Bhawan, MNIT Jaipur Campus, J L N Marg, Jaipur-302017 latest by Wednesday, June 21, 2017. The prescribed proforma for the application may be downloaded from here." ,
      "link": ""
    }, {
      "title": "Applications for Faculty (Contract) Positions",
      "content": "Applications from bright Indian nationals having a consistently excellent academic record are invited for immediate contract positions at IIIT Kota in CSE and ECE streams.\nThose who have submitted their PhD thesis or completed PhD degree from reputed institutions (CFTI) in India or abroad are encouraged to apply using recruitment portal only. Please read instructions at the recruitment portal carefully before applying. Candidate must submit the application, do not leave application saved/locked.\nContract Faculty at IIIT Kota are offered Assistant Professor position initially up to one year with a suitably consolidated remuneration depending on their profile, Ph.D. status (Completed/ thesis Submitted), teaching experience, research experience and industry experience.\nNote:-1. We have stopped receiving resumes through e-mail and made this process online. No application sent by e-mail or dispatch will be entertained from July 2016. Please do not send resumes by e-mail or post.\n2. In case you have given a presentation on skype/in-person already, between January 01, 2016 to May 01, 2017, and there is no change in the profile, you need not re-apply. Do not give false information on the portal.\n2. Candidate must ensure that you do NOT upload complete research papers, only a suitable reference is enough.\n3. Candidate must fill up areas of interest and the subjects that you can teach at the undergraduate level.\n4. Under qualifications, the candidate must provide education details of\ni) Secondary examination,ii) Senior Secondary examination,\niii) UG (B. Tech. / B.E. / equivalent ),\niv) PG (M. Tech. / M. E. / equivalent) and\nv) Ph.D. along with status (Completed/Thesis Submitted).\nKeep a scanned copy of relevant documents to be uploaded.\n5. Candidate must submit the application after filling up all details. Please do not leave the application in saved state – such saved applications are not considered for further processing.",
      "link": ""
    }
  ]

  ngOnInit(){
  window.scrollTo(0,0);
  }
}