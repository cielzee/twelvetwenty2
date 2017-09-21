import {Component} from '@angular/core';
import {MdIconRegistry, MdDialog} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

import 'rxjs/add/operator/filter';
import {DialogComponent} from './dialog/dialog.component';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import {EventService} from './events/event.service';
import {Event} from './events/event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EventService],
})

export class AppComponent {
  fieldOptions = [
    {
      field: 'studentGroup',
      displayField: 'Student Group',
      options: [
        {value: 'all', viewValue: 'All'},
        {value: 'undergraduate', viewValue: 'Undergraduate'}
      ]
    },
    {
      field: 'eventType',
      displayField: 'Event Type',
      options: [
        {value: 'all', viewValue: 'All'},
        {value: 'careerFair', viewValue: 'Career Fair'},
        {value: 'careerWorkshop', viewValue: 'Career Workshop'},
        {value: 'mockInterview', viewValue: 'Mock Interview'},
        {value: 'companyEvent', viewValue: 'Company Event'},
      ]
    },
    {
      field: 'eventFormat',
      displayField: 'Event Format',
      options: [
        {value: 'all', viewValue: 'All'},
        {value: 'undergraduate', viewValue: 'Undergraduate'}
      ]
    },
    {
      field: 'eventTimeline',
      displayField: 'Event Timeline',
      options: [
        {value: 'all', viewValue: 'All'},
        {value: 'upcoming', viewValue: 'upcoming'}
      ]
    }
  ];

  filters: {};
  isDarkTheme = false;
  events: Event[];

  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer, private dialog: MdDialog, private eventService: EventService) {
    // To avoid XSS attacks, the URL needs to be trusted from inside of your application.
    const avatarsSafeUrl = sanitizer.bypassSecurityTrustResourceUrl('./assets/avatars.svg');

    iconRegistry.addSvgIconSetInNamespace('avatars', avatarsSafeUrl);

    var filters = {};
    this.fieldOptions.map((fieldOption => filters[fieldOption.field] = fieldOption.options[0].value));
    this.filters = filters;
  }

  resetFilters(): void {
    var filters = {};
    this.fieldOptions.map((fieldOption => filters[fieldOption.field] = fieldOption.options[0].value));
    this.filters = filters;
  }

  searchEvents(): void {
    this.eventService.getEvents(this.filters).then(events => this.events = events);
  }
}
