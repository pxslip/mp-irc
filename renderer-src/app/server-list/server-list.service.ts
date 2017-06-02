import { Injectable } from '@angular/core';

@Injectable()
export class ServerListService {
    // TODO: this should query the main process which returns the stored servers
    servers = [
        {
            name: 'Server 1',
            channels: [
                '#channel1',
                '#channel2'
            ],
            nick: 'nickname'
        },
        {
            name: 'Server 2',
            channels: [
                '#channel1',
                '#channel2'
            ],
            nick: 'nickname'
        },
        {
            name: 'Server 3',
            channels: [
                '#channel1',
                '#channel2'
            ],
            nick: 'nickname'
        }
    ];
    constructor() { }

}
