import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];
  items2: Item[] = [];

  defaultItem: any = {
    "name": "Ping 1324",
        "profilePic": "assets/img/speakers/bear.jpg",
        "numOfPingers": 43,
        "distance" : 343,
  };


  constructor() {
    let items = [
      {
        "name": "Ping 1324",
        "profilePic": "assets/img/speakers/bear.jpg",
        "numOfPingers": 43,
        "distance" : 343
      },
      {
        "name": "Ping 431",
        "profilePic": "assets/img/speakers/cheetah.jpg",
        "numOfPingers": 2565,
        "distance" : 6542
      },     
      {
        "name": "Ping 5431",
        "profilePic": "assets/img/speakers/duck.jpg",
        "numOfPingers": 654,
        "distance" : 2343
      }
    ];

    let items2 = [ 
      {
        "name": "Ping143 1",
        "profilePic": "assets/img/speakers/eagle.jpg",
        "numOfPingers": 7635,
        "distance" : 87
      },
      {
        "name": "Ping 54131",
        "profilePic": "assets/img/speakers/elephant.jpg",
        "numOfPingers": 5,
        "distance" : 2345
      },
      {
        "name": "Ping 7681",
        "profilePic": "assets/img/speakers/mouse.jpg",
        "numOfPingers": 5,
        "distance" : 343
      },
      {
        "name": "Ping 8751",
        "profilePic": "assets/img/speakers/puppy.jpg",
        "numOfPingers": 76,
        "distance" : 3234
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }

    for (let item of items2) {
      this.items2.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  query2(params?: any) {
    if (!params) {
      return this.items2;
    }
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
