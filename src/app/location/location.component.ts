import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { CommonService } from '../_services/common.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  locations: any = [];
  regions: any = [];
  showCreate: boolean = false;
  model: any = {};

  selected: string;
  region: string;


  constructor(private alertify: AlertifyService, private commonService: CommonService) { }

  ngOnInit() {
    this.getLocations();
  }

  showCreateLocation() {
    this.getRegions();
    this.showCreate = true;
  }
  hideCreateLocation() {
    this.showCreate = false;
  }

  createLocation() {
    const location = {
      "location":{
        "name": this.model.name,
        "street": this.model.street,
        "city": this.model.city,
        "state": this.model.state,
        "region": this.region,
        "zipcode": this.model.zipcode,
      }
    }
    console.log(location)

    this.commonService.createLocation(location).subscribe(data => {
      this.getLocations();
      this.hideCreateLocation();
      this.alertify.success('Your request was successful!')
    }, error =>{
      this.alertify.error(error.message)
    });
  }
  selectOption(name: string) {
    //getted from event
    console.log(name);
    this.region = name;
  }
  getLocations() {
    this.commonService.getLocations().subscribe(data => {
      this.locations = data['locations'];
    }, error => {
      this.alertify.error('Error getting locations')
    });
  }

  getRegions() {
    this.commonService.getRegions().subscribe(data => {
      this.regions = data['regions'];
    }, error => {
      this.alertify.error('Error getting regions')
    })
  }

}
