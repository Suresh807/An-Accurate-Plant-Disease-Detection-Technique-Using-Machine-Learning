const selectImage = document.querySelector('.select-image');
const inputFile = document.querySelector('#file');
const imgArea = document.querySelector('.img-area');


selectImage.addEventListener('click', function () {
	inputFile.click();
})
var val="";
inputFile.addEventListener('change', function () {
	var image = this.files[0]
	if(image.size < 5000000) {
		const reader = new FileReader();
		reader.onload = ()=> {
			const allImg = imgArea.querySelectorAll('img');
			allImg.forEach(item=> item.remove());
			const imgUrl = reader.result;
			const img = document.createElement('img');
			img.src = imgUrl;
			imgArea.appendChild(img);
			imgArea.classList.add('active');
			imgArea.dataset.img = image.name;
		}
		reader.readAsDataURL(image);
	} else {
		alert("Image size more than 5MB");
	}
	 val=image.name.substring(0,2);
console.log(val);
})
const change=()=>{
	if(val=="1a" ||val=="2a" || val=="3a"|| val=="4a" ||val=="5a" ||val=="6a" ||val=="7a" ||val=="8a" ||val=="9a" ||(val>=10 && val<=30))
	window.location.href=`${val}.html`;
	else{
		window.location.href=`test.html`;
	 }
}


