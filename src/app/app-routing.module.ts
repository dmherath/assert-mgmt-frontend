import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewAssertsComponent} from "./components/view-asserts/view-asserts.component";
import {AddNewAssertComponent} from "./components/add-new-assert/add-new-assert.component";
import {UpdateAssertsComponent} from "./components/update-asserts/update-asserts.component";

const routes: Routes = [
  {path:"",component: ViewAssertsComponent},
  {path:"add",component: AddNewAssertComponent},
  {path:"get-by-id/:id", component: UpdateAssertsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
