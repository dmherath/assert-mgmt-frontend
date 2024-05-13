import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AssertsService} from "../../services/asserts.service";

@Component({
  selector: 'app-update-asserts',
  templateUrl: './update-asserts.component.html',
  styleUrls: ['./update-asserts.component.css']
})
export class UpdateAssertsComponent {

  updateAssertForm!: FormGroup;
  id:number = this.activateRoute.snapshot.params["id"];
  protected inactive: boolean | undefined;

  constructor(private activateRoute: ActivatedRoute, private service: AssertsService,
              private fb : FormBuilder,private router: Router){}

  ngOnInit(){
    this.updateAssertForm = this.fb.group({
      assert_type : [null,[Validators.required]],
      code : [null,[Validators.required]],
      name : [null,[Validators.required]],
      value : [null,[Validators.required]],
      desc : [null,[Validators.required]],
      location : [null,[Validators.required]],
      employeeName : [null,[Validators.required]],
      assert_status : [this.inactive]
    })
    this.getAssertById();
  }

  updateAssert() {
    this.service.updateAssert(this.id,this.updateAssertForm.value).subscribe((res)=>{
      console.log(res);
      //this.router.navigateByUrl("");
    })
  }
  getAssertById(){
    this.service.getById(this.id).subscribe((res)=>{
      console.log(res);
      this.inactive = res.assert_status
      this.updateAssertForm.patchValue(res);
    })
  }

  handleCheckboxChange($event: Event) {
    // @ts-ignore
    this.inactive = event.target.checked;
    // @ts-ignore
    this.updateAssertForm.get('inactive').setValue(this.inactive);
  }

  handleCancel(){
    this.router.navigateByUrl("")
  }

}
