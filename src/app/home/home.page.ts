import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidemenu',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    public appPages = [
        {
            title: 'Batches',
            url: '/home/add-batch',
            icon: 'people',
        },
        {
            title: 'Student',
            url: '/home/add-student',
            icon: 'person',
        },
        {
            title: 'Assignments',
            url: '/home/add-assignment',
            icon: 'book',
        },
        {
            title: 'Picture',
            url: '/home/picture',
            icon: 'book',
        },
        {
            title: 'Tests',
            url: 'assignments',
            icon: 'document',
        },
        {
            title: 'Conference S',
            url: '/home/schedule',
            icon: 'videocam',
        },
        {
            title: 'Conference A',
            url: '/home/attend',
            icon: 'videocam',
        },
        {
            title: 'mail',
            url: '/home/add-message',
            icon: 'paper-plane',
        },
    ];

    ngOnInit() {}
}
