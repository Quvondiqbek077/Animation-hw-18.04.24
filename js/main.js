

let car = document.querySelector('.car-box')
const carCircle = [...document.querySelectorAll('.car-circle')]


window.addEventListener('scroll', function () {
    car.style.transform = `translateX(${this.scrollX * 10}px)`

    carCircle.forEach(circle => {
        circle.style.transform = `rotate(${this.scrollX * 10}deg)`
    });

})
