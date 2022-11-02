import { Component, OnInit } from '@angular/core';

export interface IImages {
  url: string;
  title: string;
  alt?: string;
  description: string;
  subtitle: string;
  price: string;
}

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css'],
})
export class ImageCardComponent implements OnInit {
  title = 'CROSSOVER';
  description = 'C40 Recharge elbil';
  subtitle = 'Prenumera från 5690kr/månad';
  price = 'Från 584 900 kr';
  imgSource =
    'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my23/car-images/c40-bev-my23-responsive.jpg?h=600&iar=0';

  images: IImages[] = [
    {
      url: 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my23/car-images/c40-bev-my23-responsive.jpg?h=600&iar=0',
      title: 'CROSSOVER',
      description: 'C40 Recharge elbil',
      subtitle: 'Prenumera från 5690kr/månad',
      price: 'Från 584 900 kr',
    },
    {
      url: 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my23/car-images/xc90-phev-my23-responsive.jpg?h=500&iar=0',
      title: 'CROSSOVER',
      description: 'C40 Recharge elbil',
      subtitle: 'Prenumera från 5690kr/månad',
      price: 'Från 584 900 kr',
    },
    {
      url: 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my24/car-images/xc60-phev-my24-responsive.jpg?iar=0&w=700',
      title: 'CROSSOVER',
      description: 'C40 Recharge elbil',
      subtitle: 'Prenumera från 5690kr/månad',
      price: 'Från 584 900 kr',
    },
    {
      url: 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my23/car-images/xc40-bev-my23-responsive.jpg?h=500&iar=0',
      title: 'CROSSOVER',
      description: 'C40 Recharge elbil',
      subtitle: 'Prenumera från 5690kr/månad',
      price: 'Från 584 900 kr',
    },
    {
      url: 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my23/car-images/xc90-mhev-my23-responsive.jpg?h=500&iar=0',
      title: 'CROSSOVER',
      description: 'C40 Recharge elbil',
      subtitle: 'Prenumera från 5690kr/månad',
      price: 'Från 584 900 kr',
    },
    {
      url: 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my23/car-images/c40-bev-my23-responsive.jpg?h=600&iar=0',
      title: 'CROSSOVER',
      description: 'C40 Recharge elbil',
      subtitle: 'Prenumera från 5690kr/månad',
      price: 'Från 584 900 kr',
    },
    {
      url: 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my23/car-images/xc40-bev-my23-responsive.jpg?h=500&iar=0',
      title: 'CROSSOVER',
      description: 'C40 Recharge elbil',
      subtitle: 'Prenumera från 5690kr/månad',
      price: 'Från 584 900 kr',
    },
    {
      url: 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my23/car-images/xc90-mhev-my23-responsive.jpg?h=500&iar=0',
      title: 'CROSSOVER',
      description: 'C40 Recharge elbil',
      subtitle: 'Prenumera från 5690kr/månad',
      price: 'Från 584 900 kr',
    },
    {
      url: 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my23/car-images/c40-bev-my23-responsive.jpg?h=600&iar=0',
      title: 'CROSSOVER',
      description: 'C40 Recharge elbil',
      subtitle: 'Prenumera från 5690kr/månad',
      price: 'Från 584 900 kr',
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
