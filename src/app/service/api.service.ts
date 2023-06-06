import { DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http:HttpClient){
    
  } 
  //to insert data
  addData(data:any){
    return this.http.post("http://localhost:3000/student/",data);
  }
  //to fetch data
  getData(){
    return this.http.get("http://localhost:3000/student");
  }
  //to delete data
  deleteData(id:any){
    return this.http.delete("http://localhost:3000/student/"+id);
  }
  //to update data 
  updateData(data:any){
    return this.http.put("http://localhost:3000/student/",+data.id,data);
  }

  
}
