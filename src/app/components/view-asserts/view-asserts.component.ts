import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Asserts} from "../../interfaces/asserts.interfaces";
import {AssertsService} from "../../services/asserts.service";

@Component({
  selector: 'app-view-asserts',
  templateUrl: './view-asserts.component.html',
  styleUrls: ['./view-asserts.component.css']
})
export class ViewAssertsComponent {

  asserts : Asserts[] = [];

  constructor(private router: Router, private service: AssertsService) {
  }

  ngOnInit(){
    this.getAll()
  }

  navigateToAddNew() {
    this.router.navigateByUrl("/add")
  }

  deleteById(id: number) {
    this.service.deleteAssert(id).subscribe((res)=>{
      console.log(res)
      this.ngOnInit()
    })

  }

  getAll(){
    this.service.getAllAsserts().subscribe((res)=>{
      console.log(res);
      this.asserts=res;
    })
  }
}
