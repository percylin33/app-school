import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css'],
})
export class CarouselComponent {
 

  images: { src: string, text: string }[] = [
    { src: '/assets/imagenes/ecp1.jpg', text: 'Texto para la imagen 1' },
    { src: '/assets/imagenes/colegio-privado.jpg', text: 'Texto para la imagen 2' },
    { src: '/assets/imagenes/music-band-7397786_1280.jpg', text: 'Texto para la imagen 3' }
  ];

  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.startCarousel();
  }

  startCarousel() {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 5000); // Cambia cada 5 segundos
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  stopCarousel() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  ngOnDestroy() {
    this.stopCarousel();
  }
} 