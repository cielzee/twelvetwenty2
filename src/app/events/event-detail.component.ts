import { Component, Input } from '@angular/core';

import { Event } from './event';
@Component({
  selector: 'event-detail',
  template: `
  <div *ngIf="event" class="event-detail" fxLayout="row" fxLayout.xs="row" fxLayoutAlign="space-between">
    <div fxLayout="row" fxLayout.xs="column" fxFlex fxLayoutAlign="space-between">
      <div class="event-basics" fxFlex="60" fxFlex.xs="100">
        <h3 class="event-name">{{event.name}}</h3>
        <p class="event-company">{{event.host}}</p>
        <p class="mat-caption event-category">{{event.category}}</p>
      </div>
      <div class="event-time mat-caption" fxLayout="column" fxLayoutAlign="center" fxFlex="40">
        <p>{{event.location}}</p>
        <p>{{event.date}} {{event.time}}</p>
      </div>
    </div>
    <div fxLayout="row" fxLayout.xs="column" fxFlex="15" fxFlex.xs="40" fxLayoutAlign="end" fxLayoutAlign.xs="start">
      <div class="event-status" fxFill fxLayoutAlign="end center">
          <button fxFlex md-raised-button color="accent" disabled={{!event.status}}>{{event.status ? 'Register' : 'Closed'}} ({{event.registrants}})</button>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['event-detail.scss'],
})
export class EventDetailComponent {
  @Input() event: Event;
}
