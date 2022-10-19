import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { HttpClient } from '@angular/common/http';
import { Properties } from 'src/app/Properties';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

    currentMessage = new BehaviorSubject(null);
  
    constructor(private angularFireMessaging: AngularFireMessaging,private http:HttpClient) {
  
    }
  
    requestPermission() {
      this.angularFireMessaging.requestPermission.subscribe((token) => {
          console.log('requestPermission ',token);

        this.http.post(Properties.URL+"/tokenmensaje",{tokenMessage:token}).subscribe(resp=>{
          console.log(resp)
        })

        },
        (err) => {
          console.error('Unable to get permission to notify.', err);
        }
  
      );
      this.angularFireMessaging.requestToken.subscribe(
        (token) => {
          console.log(token);
        },
        (err) => {
          console.error('Unable to get permission to notify.', err);
        }
      );
    }
  
    receiveMessage() {
      this.angularFireMessaging.messages.subscribe(
        (payload) => {
          console.log('new message received. ', payload);
          this.currentMessage.next(payload);
        });
    }
}
