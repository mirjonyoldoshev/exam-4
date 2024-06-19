const URL = "https://blogpost-server-production-d92d.up.railway.app/api/v1/blogs";

(async function () {
  try {
    const response = await axios.get(URL);
    const cards = response.data.data;

    const cardWrapper = document.querySelector(".carousel");

    cards.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add(
        "nav-link",
        "carousel-item",
        "border-[3px]",
        "border-[#F0DE36]",
        "h-[336px]"
      );
      card.innerHTML = `
              <a href="/src/pages/single.html" id="${item.id}">
                    <div class="card-header w-[275px]">
                        <img class="h-[172px] w-[100%]" src=${
                          item.image
                        } alt="${item.title}">
                    </div>

                    <div class="card-body p-[7px] bg-[#1E1E1E] h-[96px]">
                        <h3 class="text-[#Fff] text-[20px] font-bold mb-[7px]">${
                          item.title.length > 20
                            ? item.title.slice(0, 10) + "..."
                            : item.title
                        }</h3>

                        <p class="text-[#Fff] text-[12px]">${
                          item.description.length > 65
                            ? item.description.slice(0, 55) + "..."
                            : item.description
                        }</p>
                    </div>

                    <div class="card-footer p-[7px] bg-[#1E1E1E] h-[60px] flex items-center gap-[9px]">
                        <img src="./src/images/cardlogo.svg" alt="card logo">

                        <div class="flex flex-col">
                            <h3 class="text-[12px] text-[#Fff]">Yo'ldoshev Mirjon</h3>

                            <small class="text-[12px] text-[#787878]">Author</small>
                        </div>
                    </div>
                    </a>

                       
                    `;
      cardWrapper.appendChild(card);
    });
  } catch (error) {
    console.error("Error", error);
  }
})();



document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.carousel');
  const carouselItems = document.querySelectorAll('.carousel-item');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let currentIndex = 0;
  const totalItems = carouselItems.length;

  function goToSlide(index) {
    if (index < 0) {
      index = totalItems - 0;
    } else if (index >= totalItems) {
      index = 1;
    }
    const currentIndex = index;
    const translateValue = -currentIndex * 100 + '%';
    carousel.style.transform = `translateX(${translateValue})`;
  }

  prevBtn.addEventListener('click', function() {
    goToSlide(currentIndex - 1);
  });

  nextBtn.addEventListener('click', function() {
    goToSlide(currentIndex + 1);
  });

  let slideInterval = setInterval(function() {
    goToSlide(currentIndex - 1);
  }, 5000);

  carousel.addEventListener('mouseenter', function() {
    clearInterval(slideInterval);
  });

  carousel.addEventListener('mouseleave', function() {
    slideInterval = setInterval(function() {
      goToSlide(currentIndex + 1);
    }, 5000);
  });
});
