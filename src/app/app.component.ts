import { Component } from "@angular/core";
import { MessagingService } from "./services/messaging/messaging.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Hoa bar";
  message;
  constructor(private messagingService: MessagingService) { }
ngOnInit() {
  //this.messagingService.requestPermission()
  //this.messagingService.receiveMessage()
  //this.message = this.messagingService.currentMessage
 }
}
