const app = new Vue({
  el: '#app',
  data: {
    counterCar: 0,

    photos: [
      'assets\css\img\cadillacCoupedeville.png',
      'assets\css\img\cadillacEldorado.png',
      'assets\css\img\cadillacOldtimer.png',
      'assets\css\img\chevrolet1957.png',
      'assets\css\img\chevroletBelAir.png',
      'assets\css\img\chevroletChevelle.png',
      'assets\css\img\chevroletImpala.png',
      'assets\css\img\fordThunderbolt.png',
      'assets\css\img\plymouthRoadRunner.png',
      'assets\css\img\shelbyCobra.png'
    ],

  },
  
  methods: {
    nextCar(){
      this.counterCar++;
      if(this.counterCar === this.photos.lenght) this.counterCar = 0;


    },
    prevCar(){
      this.counterCar--;
      if(this.counterCar < 0) this.counterCar = this.photos.lenght -1;
    },
  
  },


  

});

