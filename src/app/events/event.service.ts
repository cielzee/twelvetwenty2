import { Injectable } from '@angular/core';

import { Event } from './event';
import { EVENTS } from './mock-events';

@Injectable()
export class EventService {
  getEvents(filters: Object): Promise<Event[]> {
    return Promise.resolve(EVENTS);
  }
}
