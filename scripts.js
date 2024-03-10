const toggle = document.querySelector('.toggle')
const navbar = document.querySelector('.navbar')

toggle.addEventListener('click', () =>{
	toggle.classList.toggle('toggle--active')
	navbar.classList.toggle('navbar--active')
})