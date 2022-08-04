const ratingWrapper = document.querySelector('.rating-wrapper')
const tksWrapper = document.querySelector('.tks-wrapper')
const submitBtn = document.getElementById('submit-btn')

const rating = document.getElementById('tks-rating')
const rates = document.querySelectorAll('.rating-btn')

submitBtn.addEventListener('click', () => {
    tksWrapper.classList.remove('hidden')
    ratingWrapper.classList.add('hidden')
})

rates.forEach(rate => {
    rate.addEventListener('click', () => {
        rating.innerHTML = rate.innerHTML
    })
});