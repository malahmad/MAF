import { ApiService, Item } from './../api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'ngx-useful-swiper';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  @ViewChild('usefulSwiper', { static: false }) usefulSwiper:
    | SwiperComponent
    | undefined;

  trips: Array<Item> = [];
  images: [] | undefined;
  selectedItem: any;
  selectedIndex = 0;
  config: SwiperOptions = {
    pagination: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
  };
  constructor(private apiService: ApiService) {}
  ngOnInit() {
    this.fetchData();
  }

  fetchData = () => {
    this.apiService.fetchData().subscribe(
      (data: Array<Item>) => {
        this.trips = data;
        if (data.length > 0) {
          this.selectedItem = this.trips[0];
        }
      },
      (err) => {
        console.log(err);
      }
    );
  };

  changeSelectedIndex = (index: any) => {
    this.selectedIndex = index;
    this.selectedItem = this.trips[index];
    this.usefulSwiper?.swiper.slideTo(0);
  };

  slideNext = () => {
    this.usefulSwiper?.swiper.slideNext();
  };
  slidePrev = () => {
    this.usefulSwiper?.swiper.slidePrev();
  };
}
