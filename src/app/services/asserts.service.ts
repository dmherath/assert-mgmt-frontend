import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Asserts} from "../interfaces/asserts.interfaces";
import {Observable} from "rxjs";

const BASE_URL = ['http://localhost:8080/api/v1/asserts']

@Injectable({
  providedIn: 'root'
})
export class AssertsService {

  constructor(private http : HttpClient) { }

  postAssert(assert : Asserts): Observable<any> {
    return this.http.post(BASE_URL+"/save",assert);
  }

  updateAssert(id:number,assert:Asserts): Observable<any>{
    return this.http.put(BASE_URL + "/update/" + id, assert);
  }

  getById(id: number):Observable<any> {
    return this.http.get(BASE_URL+"/get-by-id/"+id);
  }

  deleteAssert(id:number):Observable<any>{
    return this.http.delete(BASE_URL+"/delete/"+id);
  }

  getAllAsserts():Observable<any>{
    return this.http.get(BASE_URL+"/get-all-asserts");
  }
}
