import { ServerListService } from './server-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.less']
})
export class ServerListComponent implements OnInit {
    servers = [];
    constructor(serverListService: ServerListService) {
        this.servers = serverListService.servers;
    }

    ngOnInit() {
    }

}
