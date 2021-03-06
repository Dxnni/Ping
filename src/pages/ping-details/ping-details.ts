import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController/*, NavParams*/ } from 'ionic-angular';
import { Item } from '../../models/item';
import { Items } from '../../providers';
/**
 * Generated class for the PingDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ping-details',
  templateUrl: 'ping-details.html',
})
export class PingDetailsPage {
  currentItems: Item[];
  //createdItems: Item[];
  
  //state: string;
  hasPing: boolean = false;

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController) {
    //this.state = 'current'
    this.currentItems = this.items.query();
    //this.createdItems = this.items.query2();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('PingDetailsPage', {
      item: item
    });
  }
}
