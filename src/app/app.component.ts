import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  items = [
    {
      title: 'Guest says:',
      date: '21.07.2022 17:00:01',
      content:
        'Ohhh...ok, I`ll check there first. Thanks',
      owner: false,
    },
    {
      title: 'I say:',
      date: '21.07.2022 16:01:09',
      content:
        'Yeah sure. Have you RTFM? It shoulld be explicitly described there...',
      owner: true,
    },
    {
      title: 'Guest says:',
      date: '20.07.2022 09:01:39',
      content:
        'I need help with the timeline....any chance? please?',
      owner: false,
    },
    {
      title: 'I say:',
      date: '20.07.2022 08:11:21',
      content:
        '...what can I do for you?',
      owner: true,
    },
    {
      title: 'I say:',
      date: '20.07.2022 08:11:02',
      content:
        'Sup, I`m here...',
      owner: true,
    },
    {
      title: 'Guest says:',
      date: '19.07.2022 23:09:22',
      content:
        'Hello? you there?',
      owner: false,
    },
  ];
}
