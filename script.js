var radio = document.getElementById('radio');
var feed = document.getElementById('feed');
var radioplayer = document.getElementById('radioplayer');
radio.addEventListener('click', function(){
	if(feed.style.visibility == 'hidden'){
		feed.style.visibility = 'visible';
		radioplayer.style.visibility = 'hidden';
}
	else{
		feed.style.visibility = 'hidden';
		radioplayer.style.visibility = 'visible';
	}
					   })