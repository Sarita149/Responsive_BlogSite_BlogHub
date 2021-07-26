import { Component, OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { BlogServiceService } from 'src/app/services/blog-service.service';
// import { ModalModule } from 'ngx-bootstrap';

@Component({
  selector: 'app-write-blog',
  templateUrl: './write-blog.component.html',
  styleUrls: ['./write-blog.component.css']
})
export class WriteBlogComponent implements OnInit {
  public modalRef: BsModalRef;
  public blogForm: FormGroup;
  constructor(private modalService: BsModalService, private fb: FormBuilder, private router: Router,
    private blogService: BlogServiceService, private alertService: AlertService) { }
  // config = {
  public config = {
    placeholder: '',
    tabsize: 2,
    height: '200px',
    uploadImagePath: '',
    toolbar: [
      ['misc', ['codeview', 'undo', 'redo']],
      ['style', ['bold', 'italic', 'underline', 'clear']],
      ['font', ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'clear']],
      ['fontsize', ['fontname', 'fontsize', 'color']],
      ['para', ['style', 'ul', 'ol', 'paragraph', 'height']],
      ['insert', ['table', 'picture', 'link', 'video', 'hr']]
    ],
    fontNames: ['Helvetica', 'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Roboto', 'Times']
  }

  public imageError: any;
  public cardImageBase64: any;
  public isImageSaved: boolean;
  public catList: any = [];

  ngOnInit(): void {
    this.initializeBlogForm();
    this.getCategoryList();
  }


  public initializeBlogForm() {
    this.blogForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
    });
  }

  public setBlogFormValue() {
    this.blogForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
    });
  }


  public submitBlogForPublish() {
    let formValue = this.blogForm.value;

    var plainText = formValue.description.replace(/<[^>]*>/g, '');
    let shortDescription = plainText.slice(0, 150);

    formValue["timage"] = this.cardImageBase64;
    formValue["views"] = 0;
    formValue["shortDescription"] = shortDescription;

    // console.log("form data :: ", formValue);

    if (formValue.title && formValue.description && formValue.category) {
      this.blogService.addblog(formValue).subscribe((res) => {
        console.log("add blog :: ", res);
        if (res.success) {
          this.alertService.alertMessage('Submitted', res.message, "success");
          this.blogForm.reset();
          this.removeImage();
          this.router.navigate(['home']);
        } else {
          this.alertService.alertMessage('Error', res.message, "error");
        }
      });
    } else {
      this.alertService.alertMessage('Error', 'Title, Category and Description are required !', "error");
    }
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

          // console.log("image height and width :: ", img_height, img_width);
          // console.log("image size :: ", fileInput.target.files[0].size);

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

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public getCategoryList() {
    this.blogService.getCategoryListWithoutImage().subscribe((res: any) => {
      console.log("cat list :: ", res);
      this.catList = res.data;
    });
  }
}
