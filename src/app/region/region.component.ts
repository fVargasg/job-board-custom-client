import { Component, OnInit } from '@angular/core';
import { CommonService } from '../_services/common.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  regions: any = [];
  showCreate: boolean = false;
  model: any = {};

  constructor(private commonService: CommonService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.getRegions();
  }

  showCreateRegion() {
    this.showCreate = true;
  }
  hideCreateRegion() {
    this.showCreate = false;
  }

  createRegion() {

    const region = {
      "region":{
        "name": this.model.name,
        "description": this.model.description,
      }
    }

    this.commonService.createRegion(region).subscribe(data => {
      this.getRegions();
      this.hideCreateRegion();
      this.alertify.success('Your request was successful!')
    }, error =>{
      this.alertify.error('An error has occurred')
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
