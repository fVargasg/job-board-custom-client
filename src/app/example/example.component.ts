import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExampleService } from '../_services/example.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  examples: any=[];

  constructor(private httpClient: HttpClient, private exampleService: ExampleService) { }

  ngOnInit() {
    //this.getExamples();
  }

  getExamples() {

    // this.exampleService.getExamples().subscribe(data => {
    //   this.examples = data['examples'];
    // }, error => {
    //   console.log(error);
    // });
  }

}
