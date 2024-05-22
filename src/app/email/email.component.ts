import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent implements OnInit {
  recipient: string = '';
  subject: string = '';
  body: string = '';

  constructor() {}

  ngOnInit(): void {}

  sendEmail() {
    const mailtoLink = `mailto:${this.recipient}?subject=${encodeURIComponent(
      this.subject
    )}&body=${encodeURIComponent(this.body)}`;
    window.location.href = mailtoLink;
  }

  clear() {
    this.recipient = "";
    this.subject = "";
    this.body = "";
  }
}
