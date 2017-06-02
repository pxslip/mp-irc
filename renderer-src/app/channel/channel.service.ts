import { Injectable } from '@angular/core';
/**
 * This service handles the actual IRC chat messages - but the actual connection is offloaded to main
 *
 * TODO: consider whether to use a worker process spawned for each channel?
 */
@Injectable()
export class ChannelService {

    constructor() { }

}
