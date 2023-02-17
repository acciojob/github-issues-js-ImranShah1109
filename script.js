//your code here
pageNumH3 = document.querySelector('span');
nxtBtn = document.getElementById('load_next');
prvBtn = document.getElementById('load_prev');

let pageNumber = 1;

function fetchData(pageNumber) {
	fetch(`https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5.`)
		.then((response) =>response.json())
		.then((data) => {
			console.log(data);
		})
}

nxtBtn.addEventListener('click', () => {
	pageNumber++;
	if(pageNumber == 2){
		prvBtn.disabled = false;
	}
	fetchData(pageNumber);
	pageNumH3.innerText = pageNumber;
});

prvBtn.addEventListener('click', () => {
	pageNumber--;
	if(pageNumber <= 1){
		prvBtn.disabled = true;
	}
	else{
		prvBtn.disabled = false;
	}
	fetchData(pageNumber);
	pageNumH3.innerText = pageNumber;
});

fetchData(1);