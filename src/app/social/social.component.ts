import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
})
export class SocialComponent implements OnInit {
  @Input() vertical = true; // decorate the property with @Input()
  @Input() title = ''; // decorate the property with @Input()


  constructor() {}

  ngOnInit(): void {}
}
