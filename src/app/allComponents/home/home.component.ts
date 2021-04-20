import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showME:boolean=false;
  modalRef: BsModalRef;
  photoUpload:BsModalRef;
  writeblogModalRef :BsModalRef;

  // customBtn:boolean=false;
  constructor(private router: Router,private modalService: BsModalService,private helpService:HelperService) { }

  ngOnInit(): void {
  }
  
  url="../../../assets/nature.jpg"
  defaultBtnActive(value){
    if(value.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(value.target.files[0]);
      reader.onload=(data:any)=>{
        this.url=data.target.results;
      }
    }
  }
  toggle(){
    this.showME=!this.showME
  }
  openModal(template: TemplateRef<any>,name='') {
    console.log('template ref :: ',template);
    if(name=='text'){
      this.writeblogModalRef =  this.modalService.show(template);
    }
    else if(name=='photo'){
      this.photoUpload =  this.modalService.show(template);
    }else {
      this.modalRef = this.modalService.show(template);
    }
    
  }
  
  bloglist=[
    {'id':1,'title':'Google Core Web Vitals to Be Used as Ranking Signals & This Week’s Digital Marketing News [PODCAST]',
    'description':'Google announced new page experience ranking signals for Search that will go into effect in May 2021.This update will combine Core Web vitals with existing search signals.Facebook Ads Accounts Disabled Advertisers around the world reported having their Facebook Ads account disabled on November 5.Facebook product manager Rob Leathern tweeted that this was due to a technical issue and that the mistakenly disabled accounts had been reactivated.',
    'image':'../../../assets/technology.jpg'},
    {'id':2,'title':'Apple Cider Cupcakes with Brown Sugar Cinnamon Buttercream',
      'description':'Moist and flavorful recipe for Apple Cider Cupcakes made from scratch with Brown Sugar Cinnamon Buttercream Frosting makes for a mouthwatering fall dessert!',
      'image':'../../../assets/food2.jpg'},
    {'id':3,'title':'Fashion should be a form of escapism, and not a form of imprisonment',
      'description':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius odio adipisci sequi voluptatem iste eligendi, aliquam ut possimus laudantium atque quae tempore quam facilis explicabo officiis, soluta sit excepturi ducimus. Distinctio harum minus maiores necessitatibus earum tenetur voluptas cupiditate nobis.',
      'image':'../../../assets/fasion.jpg'},
    ]
}
