import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../types';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  activityList: Observable<Activity[]>;

  constructor(activityService: ActivityService) {
    // knh todo - we should not call a service request in a constructor
    // consider moving to ngOnInit().
    this.activityList = activityService.getAllActivities();
  }

}
