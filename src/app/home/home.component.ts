import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';

import { JsonServiceService } from '../json-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  //items: any[] = [];
  @Output() isLogout = new EventEmitter<void>()
  data: any[] = []; 
  newData: any = {};
  isDataAvailable = false;
  userName: string | null = null;

  name: string='';
  result: string='';
 
   constructor( public firebaseservice: FirebaseService , private http: JsonServiceService) { }
  
  ngOnInit(): void {
    this.getData();
    this.userName = localStorage.getItem('key');
    //this.getItems();
  }
  getData() {
    this.http.getData().subscribe((res: any[]) => {
      this.data = res;
      this.isDataAvailable = true;
    });
  }
  submitData() {
    if (this.newData.name) {
      this.http.postData(this.newData.name).subscribe((data: any) => {
        this.getData(); 
        this.newData.name = ''; 
      });
    }
  }
  /*likeItem(itemId: number) {
    this.http.likeItem(itemId).subscribe(() => {
      this.updateCounts(itemId);
    });
  }
  unlikeItem(itemId: number) {
    this.http.unlikeItem(itemId).subscribe(() => {
      this.updateCounts(itemId);
    });
  }

  getItems() {
    this.http.getItems().subscribe((items) => {
      this.items = items;
    });
  }
  updateCounts(itemId: number) {
    const item = this.items.find((i) => i.id === itemId);
    if (item) {
      this.http.getItems().subscribe((data) => {
        const updatedItem = data.find((i) => i.id === itemId);
        item.likeCount = updatedItem.likeCount;
        item.unlikeCount = updatedItem.unlikeCount;
      });
    }
  }*/
  logout(){
    this.firebaseservice.logout();
    this.isLogout.emit()
   
  }
}