import { Component, OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { BlogServiceService } from 'src/app/services/blog-service.service';
import { DomSanitizer } from '@angular/platform-browser';
import { PagerService } from 'src/app/services/pager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public showME: boolean = false;
  public modalRef: BsModalRef;
  public photoUpload: BsModalRef;
  public writeblogModalRef: BsModalRef;
  public quotUploads: BsModalRef<Object>;
  public linksUpload: BsModalRef<Object>;
  public doChat: BsModalRef<Object>;
  public audioUpload: BsModalRef<Object>;
  public vediosUploads: BsModalRef<Object>;


  public blogList: any = [];
  public inputvalue: String = "Add a caption, if you like "
  public url = "";
  public file: any = '';
  public filename: any
  public displayCnclBtn: boolean = false;

  public pageNo = 1;
  public pageSize = 10;
  public isLoading = true;
  public pager: any = {};

  constructor(private pagerService: PagerService, private modalService: BsModalService,
    private blogService: BlogServiceService, public domSan: DomSanitizer) { }


  ngOnInit(): void {
    this.setHomeData(1);
  }

  public getHomeData() {
    let query = { pageNo: this.pageNo, pageSize: this.pageSize }

    return new Promise((resolve, reject) => {
      this.blogService.allHomeData(query).subscribe((res: any) => {
        console.log('AllHomeData ::  ', res);
        if (res.success) {
          resolve(res);
        } else {
          reject(res)
        }
      });
    });

  }

  public setHomeData(page: number) {
    this.pageNo = page;
    this.isLoading = true;
    this.getHomeData().then((value: any) => {
      this.isLoading = false;
      this.pager = this.pagerService.getPager(Number(value.count), page, this.pageSize);
      this.blogList = value.data;
      console.log('pagedItems :: ', this.blogList);
    }).catch(err => { console.log(err) });
  }

  public onDeselect(value) {
    this.url = '';
    this.file = '';
    this.filename = '';
    this.displayCnclBtn = !this.displayCnclBtn;
    // console.log(this.displayCnclBtn);

  }

  public fileSelect(evt) {
    console.log('event :: ', evt);
    this.file = evt.target.files[0];
    this.filename = evt.target.files[0].name;
    console.log(this.filename);
    let base64: any = "";
    let reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = (e: any) => {
      console.log('onload :: ', e);
      base64 = e.target.result;
      this.url = base64;
      // console.log(base64);
    }
    this.displayCnclBtn = !this.displayCnclBtn;
    // console.log(this.displayCnclBtn);

  }

  public toggle() {
    this.showME = !this.showME
  }

  public openModal(template: TemplateRef<any>, name = '') {
    console.log('template ref :: ', template);
    if (name == 'text') {
      this.writeblogModalRef = this.modalService.show(template);
    }
    else if (name == 'photo') {
      this.photoUpload = this.modalService.show(template);
    }
    else if (name == 'quote') {
      this.quotUploads = this.modalService.show(template);
    }
    else if (name == 'links') {
      this.linksUpload = this.modalService.show(template);
    }
    else if (name == 'chat') {
      this.doChat = this.modalService.show(template);
    }
    else if (name == 'audio') {
      this.audioUpload = this.modalService.show(template);
    }
    else if (name == 'vedio') {
      this.vediosUploads = this.modalService.show(template);
    }
    else {
      this.modalRef = this.modalService.show(template);
    }

  }

}