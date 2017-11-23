/**
 * Created by hll on 2017/11/1.
 */
define(function(){
    var swiper = new Swiper('.swiper-container',{
        autoplay: {

            delay: 1000,

            stopOnLast: false,

            disableOnInteraction: true,

        },
    });
    return {
        swiper:swiper
    }
})