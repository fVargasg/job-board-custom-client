import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../_services/example.service';
import { HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  examples: any=[];

  constructor(private exampleService: ExampleService) { }

  ngOnInit() {
    this.getExamples();
  }

  getExamples() {
  
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    }

    this.exampleService.getExamples(httpOptions).subscribe(data => {
      this.examples = data['examples'];
    }, error => {
      console.log(error);
    });
  }

}
