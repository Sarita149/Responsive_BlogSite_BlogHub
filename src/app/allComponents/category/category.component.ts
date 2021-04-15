import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  category=[
    {'id':1,'image':'../../../assets/cat1.jpg','title':'Nature'},
    {'id':2,'image':'../../../assets/cat-music.jpg','title':'Music'},
    {'id':3,'image':'../../../assets/cat-food2.jpg','title':'Food'},
    {'id':4,'image':'../../../assets/cat2.jpg','title':'Fashion'},
    {'id':5,'image':'../../../assets/cat-food.jpg','title':'Sweets'},
    {'id':6,'image':'../../../assets/travel-blog.jpg','title':'Travel'},
    {'id':7,'image':'../../../assets/category-header.jpg','title':'Writing'},
    {'id':8,'image':'../../../assets/cat-family.jpg','title':'Family'},
    {'id':9,'image':'../../../assets/cat-polytical.png','title':'Politics'},
    {'id':10,'image':'../../../assets/cat-sports.jpg','title':'Sports'},
    {'id':11,'image':'../../../assets/car-lifestyle.jpg','title':'Lifestyle'},
    {'id':12,'image':'../../../assets/cat-fitnes.jpg','title':'Fitness'},
  ]

}
