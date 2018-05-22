//main class
class sliderJS1 {
    constructor() {
        //create properties
        this.arrayButtons = null;
        this.arrayImgs = [];
        this.arrayBox = null;
        this.currentIndex = 0;
        this.elImg = null;
    }
    // create methods

    //initialization properties
    initialization() {
        this.arrayButtons = document.querySelectorAll('.buttons');
        this.arrayBox = document.querySelectorAll('input');

    }
    addListener() {
        // subscribe to events
        this.setImgs();
        this.passArraysAndListener(this.arrayButtons, this.onButtonClick);
        this.passArraysAndListener(this.arrayBox, this.onCheckBoxClick);

    }
    passArraysAndListener(setArray, setFunction) {
        for (var i = 0; i < setArray.length; i++) {
            setArray[i].addEventListener('click', setFunction.bind(this));
        }
    };
    onButtonClick(e) {
        var nextOrPrevious = e.currentTarget;
        this.elImg.classList.remove('show');

        if (nextOrPrevious.dataset.position === 'left') {
            this.currentIndex++;
            if (this.currentIndex > this.arrayImgs.length - 1) {
                this.currentIndex = 0;
            }
        } else if (nextOrPrevious.dataset.position === 'right') {
            this.currentIndex--;
            if (this.currentIndex < 0) {
                this.currentIndex = this.arrayImgs.length - 1;
            }
        }
        this.elImg.src = this.arrayImgs[this.currentIndex];
        this.elImg.classList.add('show');
    }
    onCheckBoxClick(e) {
        for (var j = 0; j < this.arrayBox.length; j++)
            if (this.arrayBox[j].checked) {
                this.arrayButtons[j].disabled = true;
            } else {
                this.arrayButtons[j].disabled = false;
            }
    }
    setImgs() {
        var serv = new sliderService();
        serv.get((data) => {
           
            document.querySelector('.imgs').innerHTML = "<img src=''class='flat' id='imgId'>";
            this.elImg = document.querySelector('#imgId');

            this.arrayImgs = data.map((item) => item.original);
            this.currentIndex = this.arrayImgs.length - 1;
            this.elImg.src = this.arrayImgs[this.currentIndex];
            this.elImg.classList.add('show');
        });
    }
}
