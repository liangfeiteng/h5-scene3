var mySwiper = new Swiper('.swiper-container',{
	direction:'vertical',
	loop:true,
	// scrollbar:'.swiper-scrollbar',
	onInit:function (swiper) {
		swiperAnimateCache(swiper);
		swiperAnimate(swiper);
	},
	onSlideChangeEnd:function (swiper) {
		swiperAnimate(swiper);
	}
}) 
// function () {
	
// }