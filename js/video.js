function init(){
	barSize			=	480;
	container 		=  	document.getElementById('videocontainer');
	myvideo 		=  	document.getElementById('videoPlayer');
	defaultbar 		= 	document.getElementById('DefaultBar');
	progressBar		= 	document.getElementById('progressBar');
	playingPause	=	document.getElementById('playPause');
	stop			=	document.getElementById('stop');
	videoTime		=	document.getElementById('time');
	videoDuration	=	document.getElementById('duration');
	volumeIcon		=	document.getElementById('volume');
	volumeSlider	=	document.getElementById('volumeController');
	fullscreen		=	document.getElementById('fullscreen');
	videoSetting	=	document.getElementById('settings');
	
	myvideo.addEventListener('click',playOrPause,false);
	playingPause.addEventListener('click',playOrPause,false);
	stop.addEventListener('click',stopVideo,false);
	defaultbar.addEventListener('click',clickedbar,false);
	volumeSlider.addEventListener('input',volumeChange,false);
	volumeSlider.addEventListener('click',clicked,false);
	volumeIcon.addEventListener('click',videoMuted,false);
	/*
	videoSetting.addEventListener('click',settings,false);*/
	fullscreen.addEventListener('click',fullScreen,false);
	
	volumeSlider.value = 100;
}

function playOrPause(){
	if(!myvideo.paused && !myvideo.ended){
		myvideo.pause();
		playingPause.removeAttribute('class');
		playingPause.setAttribute('class','play icon');
		playingPause.removeAttribute('title');
		playingPause.setAttribute('title','PLAY');
		window.clearInterval(updateBar);
	}else{
		myvideo.play();
		playingPause.removeAttribute('class');
		playingPause.setAttribute('class','pause icon');
		playingPause.removeAttribute('title');
		playingPause.setAttribute('title','PAUSE');
		updateBar=setInterval(update,200);
	}
}
function update(){
	if(!myvideo.ended){
		var size = parseInt(myvideo.currentTime*barSize/myvideo.duration);
		progressBar.style.width=size+'px';
		videoUpdate();
	}else{
		progressBar.style.width = 0+'%';
		playingPause.removeAttribute('class');
		playingPause.setAttribute('class','play icon');
		window.clearInterval(updateBar);
		videoUpdate();
	}
}
function clickedbar(e){
	if(!myvideo.ended || myvideo.paused){
		var mouseX = e.pageX - defaultbar.offsetLeft;
		newtime = mouseX*myvideo.duration/barSize;
		myvideo.currentTime = newtime;
		progressBar.style.width = mouseX+'px';
	}
	
}
/*VOLUME FUNCTION*/
function volumeChange(){
	currentVolume = volumeSlider.value/100;
	myvideo.volume = currentVolume;
	volumeCheck();
}
function clicked(){
	if(myvideo.muted){
		myvideo.muted = false;
	}
}
function volumeCheck(){
	if(volumeSlider.value  == 0){
		volumeIcon.removeAttribute('class');
		volumeIcon.setAttribute('class','volume off icon');
	}else if(volumeSlider.value < 50){
		volumeIcon.removeAttribute('class');
		volumeIcon.setAttribute('class','volume down icon');
	}else{
		volumeIcon.removeAttribute('class');
		volumeIcon.setAttribute('class','volume up icon');
	}
}
function videoMuted(){
	if(myvideo.muted){
		myvideo.muted =false;
		volumeChange();
		volumeIcon.removeAttribute('class');
		volumeIcon.setAttribute('class','volume up icon');
		volumeIcon.removeAttribute('title');
		volumeIcon.setAttribute('title','Mute');
	}else{
		myvideo.muted = true;
		volumeIcon.removeAttribute('class');
		volumeIcon.setAttribute('class','mute icon');
		volumeIcon.removeAttribute('title');
		volumeIcon.setAttribute('title','Unmute');
	}
}
/*VIDEO TIME*/
function videoUpdate(){
	currenntMin = parseInt(myvideo.currentTime/60);
	currentSec = parseInt(myvideo.currentTime - currenntMin*60);
	durationMin = parseInt(myvideo.duration/60);
	durationSec = parseInt(myvideo.duration-durationMin*60);
	if(currenntMin < 10){currenntMin = '0'+currenntMin;}
	if(currentSec < 10){currentSec = '0'+currentSec;}
	if(durationMin < 10){durationMin = '0'+durationMin;}
	if(durationSec < 10){durationSec = '0'+durationSec;}
	videoTime.innerHTML = currenntMin+':'+currentSec;
	videoDuration.innerHTML = durationMin+':'+durationSec;
	if(myvideo.ended){
		myvideo.ended = true;
		videoTime.innerHTML = '00:00';	
	}
}
/*VIDEO STOP FUNCTION*/
function videoBarClickedWhileVideoStopped(){
	videoUpdate();
}
function stopVideo(){
	if(!myvideo.ended){
		myvideo.ended = true;
		myvideo.currentTime = 0;
		myvideo.pause();
		videoTime.innerHTML = '00:00';
		progressBar.style.width = 0+'px';
		window.clearInterval(updateBar);
		defaultbar.addEventListener('click',videoBarClickedWhileVideoStopped,false);
	}
}
function fullScreen(){
	if(myvideo.webkitRequestFullscreen){
		myvideo.webkitRequestFullscreen();
	}
}
window.addEventListener('load',init,false);
window.onerror;
