import { Injectable, EventEmitter, Output } from '@angular/core';
import { Storage } from '@ionic/storage';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import { Restaurant } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(private storage: Storage) {}
  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    await this.storage.defineDriver(CordovaSQLiteDriver);
    // eslint-disable-next-line no-underscore-dangle
    await this.storage.create();
    console.log('init');
  }

  // Create and expose methods that users of this service can call

  public async set(key: string, value: Restaurant) {
    await this.storage?.set(key, value);
  }

  public async get(key: string) {
    return this.storage.get(key);
  }

  public async remove(key: string) {
    await this.storage.remove(key);
  }

  public async clearStorage() {
    await this.storage.clear();
  }

  public async getAllKeys() {
    return this.storage?.keys();
  }

  public async getLength() {
    return this.storage.length();
  }
}
