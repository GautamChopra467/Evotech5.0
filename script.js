// JavaScript Document

const bar=document.getElementById('bar');
const nav=document.getElementById('nav-items');
const close=document.getElementById('close');

if(bar){               //if bar option is visible on screen
	bar.addEventListener('click',()=>{
		nav.classList.add('active');
	})
}

if(close){            //if close option is visible on screen
	close.addEventListener('click',()=>{
		nav.classList.remove('active');
	})
}


// GUIDLINES


const guidlineBtn=document.querySelector(".guidlines");
const guidlineBox=document.querySelector(".guidlines-box");
const closeBtn2=document.querySelector(".close2");

guidlineBtn.addEventListener('click',()=>{
	guidlineBox.classList.add("active");
	console.log('hii');
})

closeBtn2.addEventListener('click',()=>{
	guidlineBox.classList.remove("active");
})
