var carFactory = {
    addCar: function () {
        var newCar = {
            name: 'Reno',
            year: 1985,
            weight: 1400,
            maxspeed: 200,
            currentspeed: 0,
            ignition: false,
            mileage: 12000,
            interval: null,
            bindInterval: function () { this.mileage++ },
            start: function () {
                if (!this.ignition) {
                    this.ignition = true;
                    this.currentspeed = 60;
                    this.interval = setInterval(this.bindInterval.bind(this), 1000)
                }
            },
            stop: function () {
                this.ignition = false;
                this.currentspeed = 0;
                this.interval = clearInterval(this.interval);

            },
            render: function (elId) {
                var elSelector = '#' + elId;
                var renderElement = document.querySelector(elSelector);
                renderElement.innerHTML =
                    `<div><h3 class='title'></h3><hr />Name: ${this.name}<div class='status'></div>
                <h3 class='title'></h3><hr />ignition: ${this.ignition}<div class='status'></div>
                 <h3 class='title'></h3><hr />currentspeed: ${this.currentspeed}<div class='status'></div>
                <h3 class='title'></h3><hr />mileage: ${this.mileage}<div class='status'></div>
                <h3 class='title'></h3><hr />year: ${this.year}<div class='status'></div>
                <button id='start${elId}'>Start</button>
                <button id='stop${elId}'>Stop</button></div>`;
                var elBtnStart = '#' + 'start' + elId;
                var elBtnStop = '#' + 'stop' + elId;
                var startBtn = document.querySelector(elBtnStart);
                var stopBtn = document.querySelector(elBtnStop);
                
                startBtn.addEventListener("click", function () {
                    newCar.start();
                    newCar.render(elId);

                })
                stopBtn.addEventListener("click", function () {
                    newCar.stop();
                    newCar.render(elId);
                })
            },


        };
        return newCar;
    }

}

var car1 = carFactory.addCar();
var car2 = carFactory.addCar();
var car3 = carFactory.addCar();
car1.render('car1');
car2.render('car2');
car3.render('car3');