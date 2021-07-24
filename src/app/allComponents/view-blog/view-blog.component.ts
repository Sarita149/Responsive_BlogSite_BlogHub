import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogServiceService } from 'src/app/services/blog-service.service';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent implements OnInit {

  private blogId: string = '';
  public blogData: any = {}

  constructor(private route: ActivatedRoute, private router: Router, private blogService: BlogServiceService) { }

  ngOnInit(): void {
    this.getIDByParams();
  }

  public getIDByParams() {
    this.route.params.subscribe(params => {
      console.log("params :: ", params);
      this.blogId = params.id;
      if (!this.blogId) {
        this.router.navigate(['']);
      } else {
        this.getBlogData();
      }
    });
  }


  public getBlogData() {
    this.blogService.getBlogById(this.blogId).subscribe((res: any) => {
      console.log("blog data :: ", res);
      if (res.success) {
        this.blogData = res.blogData;
      }
    });
  }

}
