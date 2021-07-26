import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertService } from 'src/app/services/alert.service';
import { BlogServiceService } from 'src/app/services/blog-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public modalRef: BsModalRef;
  public isImageSaved: boolean;
  public cardImageBase64: any;
  public imageError: string;
  public categoryName: string;

  public categoryList = [];

  constructor(private modalService: BsModalService,
    private alertService: AlertService,
    private blogService: BlogServiceService) { }

  ngOnInit(): void {
    this.getCategoryList();
  }

  public addNewCategory() {
    if (this.categoryName) {
      let obj = { categoryName: this.categoryName, catImage: this.cardImageBase64 };

      this.blogService.addNewCategory(obj).subscribe((res: any) => {
        if (res.success) {
          this.alertService.alertMessage('Success', res.message, "success");
          this.modalRef.hide();
          this.categoryName = '';
          this.cardImageBase64 = null;
          this.isImageSaved = false;
          this.getCategoryList();
        } else {
          this.alertService.alertMessage('Error', res.message, "error");
        }
      });

    } else {
      this.alertService.alertMessage('Warning', 'Category Name is required !', "error");
    }
  }

  public openModal(template: TemplateRef<any>, name = '') {
    this.modalRef = this.modalService.show(template);
  }

  public fileChangeEvent(fileInput: any) {
    this.imageError = null;
    if (fileInput.target.files && fileInput.target.files[0]) {
      // Size Filter Bytes
      const max_size = 20000;
      const allowed_types = ['image/png', 'image/jpeg'];
      const max_height = 15200;
      const max_width = 25600;

      if (fileInput.target.files[0].size > max_size) {
        this.imageError =
          'Maximum size allowed is ' + max_size / 1000 + 'Mb';

        this.alertService.alertMessage('Too Big file size', 'Maximum size allowed is ' + max_size / 1000 + 'Mb', "error");
        return false;
      }

      if (!allowed_types.includes(fileInput.target.files[0].type)) {
        this.imageError = 'Only Images are allowed ( JPG | PNG )';
        return false;
      }
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          const img_height = rs.currentTarget['height'];
          const img_width = rs.currentTarget['width'];

          if (img_height > max_height && img_width > max_width) {
            this.imageError =
              'Maximum dimentions allowed ' +
              max_height +
              '*' +
              max_width +
              'px';
            return false;
          } else {
            const imgBase64Path = e.target.result;
            this.cardImageBase64 = imgBase64Path;
            this.isImageSaved = true;
            // this.previewImagePath = imgBase64Path;
          }
        };
      };

      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  public removeImage() {
    this.cardImageBase64 = null;
    this.isImageSaved = false;
  }

  public getCategoryList() {
    this.blogService.getCategoryList().subscribe((res) => {
      console.log("category :: ", res);
      if (res.success) {
        this.categoryList = res.data;
      } else {
        this.alertService.alertMessage('Error', res.message, "error");
      }
    })
  }

}
