import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HelperService } from 'src/app/services/helper.service';
import { BlogServiceService } from 'src/app/services/blog-service.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showME: boolean = false;

  modalRef: BsModalRef;
  photoUpload: BsModalRef;
  writeblogModalRef: BsModalRef;
  quotUploads: BsModalRef<Object>;
  linksUpload: BsModalRef<Object>;
  doChat: BsModalRef<Object>;
  audioUpload: BsModalRef<Object>;
  vediosUploads: BsModalRef<Object>;

  // customBtn:boolean=false;
  constructor(private router: Router, private modalService: BsModalService, private blogService: BlogServiceService, public domSan: DomSanitizer) { }
  public blogList: any = [];

  ngOnInit(): void {
    this.blogService.allHomeData().subscribe((res: any) => {
      console.log('posted AllHomeData array --- ', res);
      // this.content = res[0].content.replace(/<[^>]*>/g, '');
      this.blogList = res.data;
    })
    // this.blogService.allblogs().subscribe((res: any) => {
    //   console.log('posted blogs array --- ', res);
    //   // this.content = res[0].content.replace(/<[^>]*>/g, '');
    //   // this.blogList = res.data;
    // })
    // this.

  }

  inputvalue: String = "Add a caption, if you like "
  url = "";
  file: any = '';
  filename: any
  displayCnclBtn: boolean = false;
  onDeselect(value) {
    this.url = '';
    this.file = '';
    this.filename = '';
    this.displayCnclBtn = !this.displayCnclBtn;
    // console.log(this.displayCnclBtn);

  }

  fileSelect(evt) {
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

  toggle() {
    this.showME = !this.showME
  }
  openModal(template: TemplateRef<any>, name = '') {
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

  bloglist = [
    {
      'id': 1, 'title': 'Google Core Web Vitals to Be Used as Ranking Signals & This Week’s Digital Marketing News [PODCAST]',
      'description': 'Google announced new page experience ranking signals for Search that will go into effect in May 2021.This update will combine Core Web vitals with existing search signals.Facebook Ads Accounts Disabled Advertisers around the world reported having their Facebook Ads account disabled on November 5.Facebook product manager Rob Leathern tweeted that this was due to a technical issue and that the mistakenly disabled accounts had been reactivated.',
      'image': '../../../assets/technology.jpg'
    },
    {
      'id': 2, 'title': 'Apple Cider Cupcakes with Brown Sugar Cinnamon Buttercream',
      'description': 'Moist and flavorful recipe for Apple Cider Cupcakes made from scratch with Brown Sugar Cinnamon Buttercream Frosting makes for a mouthwatering fall dessert!',
      'image': '../../../assets/food2.jpg'
    },
    {
      'id': 3, 'title': 'Fashion should be a form of escapism, and not a form of imprisonment',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius odio adipisci sequi voluptatem iste eligendi, aliquam ut possimus laudantium atque quae tempore quam facilis explicabo officiis, soluta sit excepturi ducimus. Distinctio harum minus maiores necessitatibus earum tenetur voluptas cupiditate nobis.',
      'image': '../../../assets/fasion.jpg'
    },
  ]
}
function clicked() {
  throw new Error('Function not implemented.');
}

