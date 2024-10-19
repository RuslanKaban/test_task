window.onload = function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4.5,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 2.5,
        spaceBetween: 10, 
      },
      729: {
        slidesPerView: 4.5,
        spaceBetween: 10,
      },
    },
  });

  const cars = document.querySelectorAll('.car');
  cars.forEach((car, index) => {
    car.addEventListener('mouseenter', () => {
      // Определяем категорию текущей машины
      const currentCategory = [...car.classList].find(cls => cls === 'china' || cls === 'japan' || cls === 'korea');

      // Убираем сдвиг у всех машин
      cars.forEach((c) => c.classList.remove('shifted'));

      // Сдвигаем только машины из той же категории, которые идут после текущей
      cars.forEach((c, i) => {
        if (i > index && c.classList.contains(currentCategory)) {
          c.classList.add('shifted');
        }
      });
    });

    car.addEventListener('mouseleave', () => {
      // Сбрасываем сдвиг при убирании курсора
      cars.forEach((c) => c.classList.remove('shifted'));
    });
  });
};



document.addEventListener('DOMContentLoaded', function () {
  IMask(
    document.getElementById('phone-mask'),
    {
      mask: '+{7}(000)000-00-00'
    }
  );
});


document.addEventListener('DOMContentLoaded', function () {
  IMask(
    document.getElementById('name-mask'),
    {
      mask: /^[А-ЯЁ][а-яё]*$/
    }
  );
});

document.getElementById("year").textContent = new Date().getFullYear();


document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('myModal');
  const modalError = document.getElementById('myModalError');
  const span = document.getElementsByClassName('close')[0];
  const spanError = document.getElementsByClassName('closeError')[0];

  function send(event) {
      event.preventDefault(); 

      const nameInput = document.getElementById('name-mask');
      const phoneInput = document.getElementById('phone-mask');

      if (nameInput.value.trim() === '' || phoneInput.value.trim() === '') {
          modalError.style.display = 'block';
          return false; 
      }

      modal.style.display = 'block';
      return false; 
  }

  span.onclick = function () {
      modal.style.display = 'none';
  }

  spanError.onclick = function () {
    modalError.style.display = 'none';
}
  window.onclick = function (event) {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
  }

  const form = document.querySelector('.form');
  form.onsubmit = send;
});