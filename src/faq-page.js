const arrows = document.querySelectorAll('.arrow');



for(const arrow of arrows) {
	
	arrow.addEventListener('click', (e) => {

		let desired_height = (document.querySelector("#question-a-" + e.target.dataset.question).children[0].clientHeight) + "px"
		let desired_element = document.querySelector("#question-a-" + e.target.dataset.question);
	
		if(e.target.dataset.toggled === 'closed') {
			e.target.dataset.toggled = 'opened';
			e.target.style.setProperty('transform', 'rotate(135deg)');
			desired_element.style.setProperty('height', desired_height);
		} else {
			e.target.dataset.toggled = 'closed';
			e.target.style.setProperty('transform', 'rotate(0deg)');
			desired_element.style.setProperty('height', '0')
		}

		console.log(desired_height)
		console.log()
		
	})
}