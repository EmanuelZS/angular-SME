import { Component, OnInit } from '@angular/core';
import { MbscEventcalendarOptions, Notifications, MbscCalendarEvent , localeEs } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html'
})
export class MonthComponent implements OnInit {

    constructor(private http: HttpClient, private notify: Notifications) {}

    myEvents: MbscCalendarEvent[] = [];

    eventSettings: MbscEventcalendarOptions = {
        locale: localeEs,
        theme: 'ios',
        themeVariant: 'light',
        clickToCreate: false,
        dragToCreate: false,
        dragToMove: false,
        dragToResize: false,
        eventDelete: false,
        view: {
            calendar: { type: 'month' },
            agenda: { type: 'month' }
        },
        onEventClick: (event, inst) => {
            this.notify.toast({
                message: event.event.title
            });
        }
    };

    ngOnInit(): void {
        this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
            this.myEvents = resp;
        });
    }
}


