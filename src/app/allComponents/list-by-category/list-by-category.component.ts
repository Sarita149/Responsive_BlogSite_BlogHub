import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogServiceService } from 'src/app/services/blog-service.service';
import { PagerService } from 'src/app/services/pager.service';

@Component({
  selector: 'app-list-by-category',
  templateUrl: './list-by-category.component.html',
  styleUrls: ['./list-by-category.component.css']
})
export class ListByCategoryComponent implements OnInit {

  private urlCat: string = '';
  public pager: any = {};
  private pageNo: any = 1;
  private pageSize: any = 10;

  public isLoading: boolean = false;
  public blogList: any = [];

  constructor(private route: ActivatedRoute, private pagerService: PagerService,
    private blogService: BlogServiceService, public domSan: DomSanitizer) { }

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      this.urlCat = p.cat;
      this.setPage(1)
    });
  }

  public setPage(page) {
    this.pageNo = page;
    this.isLoading = true;
    this.getCatwiseBlogs().then((value: any) => {
      this.isLoading = false;
      this.pager = this.pagerService.getPager(Number(value.count), page, this.pageSize);
      this.blogList = value.data;
      console.log('pagedItems :: ', this.blogList);
    }).catch(err => { console.log(err) });
  }

  private getCatwiseBlogs() {
    let query = { category: this.urlCat, pageNo: this.pageNo, pageSize: this.pageSize };
    return new Promise((resolve, reject) => {
      this.blogService.allblogs(query).subscribe((res) => {
        console.log("cat api blog res :: ", res);
        if (res.success) {
          resolve(res);
        } else {
          reject(res);
        }
      });
    });
  }

}
