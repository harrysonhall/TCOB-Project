import './home.css';
import './uncollapsed.css';
import './collapsed.css';

const log = console.log

const header_logo 				= document.querySelector('#header-logo');
const header_logo_image 		= document.querySelector('#header-logo-image');
const header_logo_text 			= document.querySelector('#header-logo-text');
const header_hr 				= document.querySelector('#header-hr');
const header_navigation 		= document.querySelector('#header-navigation');
const header_navigation_menu 	= document.querySelector('#header-navigation-menu');

addEventListener("DOMContentLoaded", (event) => {
	log('loaded')
	log(window.innerHeight, window.innerWidth)


	if(window.innerWidth <= 910) {
	
		console.log(window.innerWidth);

		collapsed();
	} else {

		uncollapsed();
	}
})



window.addEventListener('resize', (e) => {

	if(window.innerWidth <= 1110) {
		console.log(window.innerWidth)
	}


	if(window.innerWidth <= 910) {
	
		log('resize', window.innerWidth);

		collapsed();
	}

	else {

		uncollapsed();
	}
	
})

		function collapsed() {
			header_logo.classList.value = "header-logo-collapsed";
			header_logo_image.classList.value = "header-logo-image-collapsed";
			header_logo_text.classList.value = "header-logo-text-collapsed";
			header_hr.classList.value = "header-hr-collapsed";
			header_navigation.classList.value = "header-naviagation-collapsed";
			header_navigation_menu.classList.value = "header-navigation-menu-collapsed";
			if(window.innerWidth <= 420){
				log('under 420')
				header_logo_image.classList.add('header-logo-image-collapsed-420px-and-under');
				header_navigation_menu.classList.add('header-navigation-menu-collapsed-420px-and-under');
			}
		}

		function uncollapsed(){
			header_logo.classList.value = "header-logo-uncollapsed";
			header_logo_image.classList.value = "header-logo-image-uncollapsed";
			header_logo_text.classList.value = "header-logo-text-uncollapsed";
			header_hr.classList.value = "header-hr-uncollapsed";
			header_navigation.classList.value = "header-naviagation-uncollapsed";
			header_navigation_menu.classList.value = "header-navigation-menu-uncollapsed";
		}