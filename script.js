function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
document.body.style.backgroundColor = 'navy';
document.body.style.backgroundColor = '#000080';
