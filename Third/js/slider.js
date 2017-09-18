function Slider() {

}
Slider.prototype.init = function (options) {

//Elements
    this.$nextBtn = document.querySelector('.slider .buttons .next');
    this.$prevBtn = document.querySelector('.slider .buttons .prev');
    this.$pagination = document.querySelectorAll('.slider .pagination')[0];
    this.$images = document.querySelectorAll('.slider .photo .img');

//Parameters
    this.imagesCount = this.$images.length;
    this.duration = options.duration || 5000;
    this.currentId = 0;

//Events
    this.$nextBtn.addEventListener('click', this.onClickNextButtonHandler.bind(this), false);
    this.$prevBtn.addEventListener('click', this.onCLickPrevButtonHandler.bind(this), false);
    this.$pagination.addEventListener('click', this.onCLickPaginationHandler.bind(this), false);

//Render elements

    this.renderPagination();

//Timer

    this.timer = setInterval(this.interval.bind(this), this.duration);

};

Slider.prototype.slide = function (id) {
    for(var k = 0; k < this.imagesCount; k++) {
        this.$images[k].classList.remove('showed');
    }
    this.$images[id].classList.add('showed');
    for(var p = 0; p < this.imagesCount; p++) {
        this.$paginationBtns[p].classList.remove('selected');
    }
    this.$paginationBtns[id].classList.add('selected');
};

Slider.prototype.moveTo = function (id) {
    clearInterval(this.timer);
    this.timer = setInterval(this.interval.bind(this), this.duration);
    id = this.currentId;
    if(this.currentId >= this.imagesCount) {
        this.currentId = 0
    } else if(this.currentId < 0) {
        this.currentId = this.imagesCount - 1;
    }
    this.slide(this.currentId);
};

Slider.prototype.interval = function (direction, step) {
    step = step || 1;
    this.currentId = this.currentId + (direction == 'prev' ? -step : step);
    this.moveTo(this.currentId);
};

Slider.prototype.onClickNextButtonHandler = function () {
    this.interval();
};

Slider.prototype.onCLickPrevButtonHandler = function () {
    this.interval('prev');
};

Slider.prototype.onCLickPaginationHandler = function (event) {
    var target = event.target;
    if(target.tagName == 'SPAN') {
        this.currentId = parseInt(target.id.slice(18));
        clearInterval(this.timer);
        this.timer = setInterval(this.interval.bind(this), this.duration);
    }
    this.slide(this.currentId);
};

Slider.prototype.renderPagination = function () {
    var paginationItems = '';
    for (var i = 0; i < this.imagesCount; i++) {
    paginationItems += '<span id="pagination_button_' + i + '" class="slide ' + (i == 0 ? 'selected' : '') + '"></span>';
    }
    this.$pagination.innerHTML = paginationItems;
    this.$paginationBtns = document.querySelectorAll('.slider .pagination .slide');
};