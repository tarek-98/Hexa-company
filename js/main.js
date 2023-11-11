const rightBtn = document.querySelector('.women .next');
const leftBtn = document.querySelector('.women .prev');

rightBtn.addEventListener("click", function(event) {
  const conent = document.querySelector('.women .item');
  conent.scrollLeft += 300;
  event.preventDefault();
});

leftBtn.addEventListener("click", function(event) {
  const conent = document.querySelector('.women .item');
  conent.scrollLeft -= 300;
  event.preventDefault();
});


// get slider items
let sliderTest = Array.from(document.querySelectorAll('.kids .image'));

//num of item in array
let sliderCount = sliderTest.length;

// set current slide
let currentSlide = 1;

//prev and next but
let prevBut = document.getElementById("prev");
let nextBut = document.getElementById("next");

//click on prev and next
prevBut.onclick = prevSlide;
nextBut.onclick = nextSlide;

checker();

//next slide fun
function nextSlide()
{
    if(nextBut.classList.contains('disabled'))
    {
        return false;
    }
    else
    {
        currentSlide ++;
        checker();
    }
}

//prev slide fun
function prevSlide()
{
    if(prevBut.classList.contains('disabled'))
    {
        return false;
    }
    else
    {
        currentSlide --;
        checker();
    }
}

// checker fun
function checker()
{
    removeActiveClass()
    // set active curent slide
    sliderTest[currentSlide - 1].classList.add('active');

    //check if current slide first
    if(currentSlide == 1 )
    {
        //add disabled class
        prevBut.classList.add("disabled")
    }
    else
    {
        prevBut.classList.remove("disabled")
    }
    if(currentSlide === sliderCount )
    {
        //add disabled class
        nextBut.classList.add("disabled")
    }
    else
    {
        nextBut.classList.remove("disabled")
    }
}
function removeActiveClass()
{
    //loop through image
    sliderTest.forEach(el => {
        el.classList.remove("active")
    });
}
