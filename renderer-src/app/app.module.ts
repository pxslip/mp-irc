import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ServerListComponent } from './server-list/server-list.component';

import { ChannelService } from './channel/channel.service';
import { ServerListService } from './server-list/server-list.service';

const appRoutes = [
    {
        path: 'channel/:server/:channel',
        component: ChannelService
    }
];

@NgModule({
    declarations: [
        AppComponent,
        ServerListComponent
    ],
    imports: [
        // RouterModule.forRoot(appRoutes),
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        ServerListService,
        ChannelService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
