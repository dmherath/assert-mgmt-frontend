import { Component } from '@angular/core';
import {AssertsService} from "../../services/asserts.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-new-assert',
  templateUrl: './add-new-assert.component.html',
  styleUrls: ['./add-new-assert.component.css']
})
export class AddNewAssertComponent {

  postAssertForm!: FormGroup;
  inactive: boolean = false;
  constructor(private assertsService : AssertsService, private fb : FormBuilder, private router: Router){}

  ngOnInit(){
    this.postAssertForm = this.fb.group({
      assert_type : [null,[Validators.required]],
      code : [null,[Validators.required]],
      name : [null,[Validators.required]],
      value : [null,[Validators.required]],
      desc : [null,[Validators.required]],
      location : [null,[Validators.required]],
      employeeName : [null,[Validators.required]],
      assert_status : [this.inactive]
    })
  }

  postCustomer() {
    console.log(this.postAssertForm.value);
    this.assertsService.postAssert(this.postAssertForm.value).subscribe((response)=>{
      console.log(response);
    })
  }

  handleCheckboxChange($event: Event) {
    // @ts-ignore
    this.inactive = event.target.checked;
    // @ts-ignore
    this.postAssertForm.get('inactive').setValue(this.inactive);
  }

  handleCancel(){
    this.router.navigateByUrl("")
  }
}
