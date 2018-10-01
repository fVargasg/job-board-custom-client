import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../_services/example.service';
import { HttpHeaders } from '@angular/common/http';
import { JobService } from '../_services/job.service';
import { CommonService } from '../_services/common.service';
import { AlertifyService } from '../_services/alertify.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  postings: any= [];
  model: any = {};
  locations: any = [];
  showCreate: boolean = false;

  selected: string;
  location: string;

  constructor(private exampleService: ExampleService, private alertify: AlertifyService, private commonService: CommonService, private jobService: JobService) { }

  ngOnInit() {
    this.getJobs();
  }

  showCreateJob() {
    this.getLocations();
    this.showCreate = true;
  }

  hideCreateJob() {
    this.showCreate = false;
  }

  selectOption(name: string) {
    this.location = name;
  }

  getLocations() {
    this.commonService.getLocations().subscribe(data => {
      this.locations = data['locations'];
    }, error => {
      this.alertify.error('Error getting locations')
    });
  }


  getJobs() {

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    }

    this.jobService.getJobs(httpOptions).subscribe(data => {
      this.postings = data['postings'];
    }, error => {
      console.log(error.message);
    });
  }

  postJob() {

    const poster = JSON.parse(localStorage.getItem('user'));

    const job = {
      "posting":{
        "title": this.model.title,
        "description": this.model.description,
        "category": this.model.category,
        "status": this.model.status,
        "location": this.location,
        "user_id": poster.user.id,
        "poster": poster.user.name
      }
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    }

    this.jobService.createJob(job, httpOptions).subscribe(data => {
      this.getJobs();
      this.hideCreateJob();
      this.alertify.success('Your request was successful!')
    }, error =>{
      this.alertify.error(error.message)
    });
  }
  // getExamples() {

  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Authorization': 'Bearer ' + localStorage.getItem('token')
  //     })
  //   }

  //   this.exampleService.getExamples(httpOptions).subscribe(data => {
  //     this.examples = data['examples'];
  //   }, error => {
  //     console.log(error);
  //   });
  // }


}
