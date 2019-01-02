
window.onload = function() {
  jQuery(function($){
    $("#box").lmCarousel({imgs:["./src/img/lbt1.jpg","./src/img/lbt2.jpg","./src/img/lbt3.jpg","./src/img/lbt4.jpg"]})
   
});

$(function() {

  /** 更换小图片 */

  $(".item a").hover(function(){

   changeImg($(this))

  }); 

 });

 function changeImg(obj){

  if(obj.find("img").attr("alt")=="small"){

   var temp_big_src = obj.siblings('a').find('img[alt=big]').attr('src');

   var temp_big_url = obj.siblings('a[class=big-photo]').attr('href');

   var temp_small_src = obj.find('img').attr('src');

   var temp_small_url = obj.attr('href');

   obj.siblings('a').find('img[alt=big]').attr('src',temp_small_src);

  }

 };
//  轮播图
var arr=["timg1.jpg","timg2.jpg","timg3.jpg","timg4.jpg","timg5.jpg"];
var ord = 0;//代表当前图片的序号，从0开始。
var myTimer = null;
 
function  initUI() {
    $("#box li:first").css({"backgroundColor":"red"});
}
 
function  initEvent() {
    $("#box").mouseenter(function () {
        stopPlay();
    });
 
    $("#box").mouseleave(function () {
        autoPlay();
    });
 
    $("#box li").click(function () {
        goImg($("#box li").index(this));
    });
 
    $("#leftArrow").click(function () {
        let transord =ord-1;
        transord = transord<0?arr.length-1:transord;
        goImg(transord);
    });
 
    $("#rightArrow").click(function () {
        let transord =ord+1;
        transord = transord>arr.length-1?0:transord;
        goImg(transord);
    });
}
 
//1、自动播放
function autoPlay() {
    myTimer = setInterval(function () {
        //一、改变数据
        // 1、记录当前序号（淡出的图片序号）
        let outOrd = ord;
        //2、改变要显示的图片的序号（淡出图片序号加一）
        ord++;
        if(ord>arr.length-1){
            ord=0;
        }
        //二、改变外观
        let $img = $("#box img");
        //1、淡入淡出效果
        //让一张(outOrd)淡出 当前消失
        $img.eq(outOrd).animate({"opacity":0},500);
        //让一张(ord)淡入下一张图片显示
        $img.eq(ord).animate({"opacity":1},500);
        //2、改变豆豆的颜色；
        $("#box li").eq(ord).css({"backgroundColor":"#fff"}).siblings().css({"backgroundColor":"#ccc"});
    },1500);
}
 
//2、停止播放
function stopPlay() {
    window.clearInterval(myTimer);
}
 
//3、跳转到指定的图片
function  goImg(transOrd) {
    //一、改变数据
    // 1、记录当前序号（淡出的图片序号）
    let outOrd = ord;
    //2、改变要显示的图片的序号（传入的图片序号）
    ord=transOrd;
    if(ord>arr.length-1){
        ord=0;
    }
    //二、改变外观
    let $img = $("#box img");
    //1、淡入淡出效果
    //让一张(outOrd)淡出 当前消失
    $img.eq(outOrd).animate({"opacity":0},500);
    //让一张(ord)淡入下一张图片显示
    $img.eq(ord).animate({"opacity":1},500);
    //2、改变豆豆的颜色；
    $("#box li").eq(ord).css({"backgroundColor":"#fff"}).siblings().css({"backgroundColor":"#ccc"});
}
 
$(function () {
    //1、初始化界面
    initUI();
    //2、绑定事件
    initEvent();
    //3、自动播放
    autoPlay();
});

// 

$(function(){
	/*
		原理：出去一张，减掉拼接到尾部(核心)
		
		1.开启定时器，让ul往左边运动
		2.出去一张，就快速减掉拼接到尾部，ul归位
		3.点击上下按钮可以切换
	*/
	
	var iW=$('#imglist li').eq(0).outerWidth();
	
	//1.开启定时器，让ul往左边运动
	var timer=null;
	clearInterval(timer);
	timer=setInterval(next,5000);//间隔2秒切一个图
	
	function next(){
		//ul往左边运动一个图片距离：1000毫秒运动时间，匀速的
		$('#moveimg').animate({'left':-iW},500,'linear',function(){
			//回调：出去一张，就快速减掉拼接到尾部
			$('#moveimg li:first').insertAfter($('#moveimg li:last'));
			//ul归位
			$('#moveimg').css('left',0);
		});
	}
	
	function prev(){
		//把最后一张剪切作为ul的第一张
		$('#moveimg li:last').insertBefore($('#moveimg li:first'));
		//ul要给最后一张预留位置：隐藏在左侧 -iW
		$('#moveimg').css('left',-iW);
		//把最后一张挪进可视区
		$('#moveimg').animate({'left':0},500,'linear');
	}
	
	//3.点击上下按钮可以切换
	
	$('#box').hover(function(){
		clearInterval(timer);
	},function(){
		clearInterval(timer);
		timer=setInterval(next,1000);//间隔1秒切一个图
	});
	
	//点击下一张
	$('#next').click(function(){
		next();
	});
	
	//点击上一张
	$('#prev').click(function(){
		prev();
	});
	
});

// 放大镜
(function($){

    $.fn.jqueryzoom = function(options){

    var settings = {
        xzoom: 200,    //zoomed width default width
        yzoom: 200,    //zoomed div default width
        offset: 10,    //zoomed div default offset
        position: "right" ,//zoomed div default position,offset position is to the right of the image
        lens:1, //zooming lens over the image,by default is 1;
        preload: 1

      };

      if(options) {
        $.extend(settings, options);
      }

        var noalt='';

        $(this).hover(function(){
                
        var imageLeft = $(this).offset().left;                
        var imageTop = $(this).offset().top;

               
        var imageWidth = $(this).children('img').get(0).offsetWidth;
        var imageHeight = $(this).children('img').get(0).offsetHeight;


            noalt= $(this).children("img").attr("alt");

        var bigimage = $(this).children("img").attr("jqimg");
        
        if(bigimage=="")
            return false;

            $(this).children("img").attr("alt",'');

        if($("div.zoomdiv").get().length == 0){

        $(this).after("<div class='zoomdiv'><img class='bigimg' src='"+bigimage+"'/></div>");


        $(this).append("<div class='jqZoomPup'>&nbsp;</div>");

        }


        if(settings.position == "right"){

            if(imageLeft + imageWidth + settings.offset + settings.xzoom > screen.width){

            leftpos = imageLeft  - settings.offset - settings.xzoom;

            }else{

        leftpos = imageLeft + imageWidth + settings.offset;
            }
        }else{
        leftpos = imageLeft - settings.xzoom - settings.offset;
        if(leftpos < 0){

            leftpos = imageLeft + imageWidth  + settings.offset;

        }

        }

        $("div.zoomdiv").css({ top: imageTop,left: leftpos });

        $("div.zoomdiv").width(settings.xzoom);

        $("div.zoomdiv").height(settings.yzoom);

            $("div.zoomdiv").show();

            if(!settings.lens){
              $(this).css('cursor','crosshair');
      }




           $(document.body).mousemove(function(e){



                   mouse = new MouseEvent(e);

                   /*$("div.jqZoomPup").hide();*/


            var bigwidth = $(".bigimg").get(0).offsetWidth;

            var bigheight = $(".bigimg").get(0).offsetHeight;

            var scaley ='x';

            var scalex= 'y';


            if(isNaN(scalex)|isNaN(scaley)){

            var scalex = (bigwidth/imageWidth);

            var scaley = (bigheight/imageHeight);




            $("div.jqZoomPup").width((settings.xzoom)/scalex );

            $("div.jqZoomPup").height((settings.yzoom)/scaley);

                    if(settings.lens){
                    $("div.jqZoomPup").css('visibility','visible');
          }

           }

                    

                    xpos = mouse.x - $("div.jqZoomPup").width()/2 - imageLeft;

                    ypos = mouse.y - $("div.jqZoomPup").height()/2 - imageTop ;

                    if(settings.lens){

                    xpos = (mouse.x - $("div.jqZoomPup").width()/2 < imageLeft ) ? 0 : (mouse.x + $("div.jqZoomPup").width()/2 > imageWidth + imageLeft ) ?  (imageWidth -$("div.jqZoomPup").width() -2)  : xpos;

          ypos = (mouse.y - $("div.jqZoomPup").height()/2 < imageTop ) ? 0 : (mouse.y + $("div.jqZoomPup").height()/2  > imageHeight + imageTop ) ?  (imageHeight - $("div.jqZoomPup").height() -2 ) : ypos;

                    }


                    if(settings.lens){

                    $("div.jqZoomPup").css({ top: ypos,left: xpos });

                    }



          scrolly = ypos;

          $("div.zoomdiv").get(0).scrollTop = scrolly * scaley;

          scrollx = xpos;

          $("div.zoomdiv").get(0).scrollLeft = (scrollx) * scalex ;


            });
        },function(){

               $(this).children("img").attr("alt",noalt);
           $(document.body).unbind("mousemove");
           if(settings.lens){
           $("div.jqZoomPup").remove();
           }
           $("div.zoomdiv").remove();

        });

        count = 0;

    if(settings.preload){

    $('body').append("<div style='display:none;' class='jqPreload"+count+"'>sdsdssdsd</div>");

    $(this).each(function(){

        var imagetopreload= $(this).children("img").attr("jqimg");

        var content = jQuery('div.jqPreload'+count+'').html();

        jQuery('div.jqPreload'+count+'').html(content+'<img src=\"'+imagetopreload+'\">');

    });

    }

    }

})(jQuery);

function MouseEvent(e) {
this.x = e.pageX;
this.y = e.pageY;


}
// 放大镜2
(function($) {
	
    $.extend($.fn, {
        livequery: function(type, fn, fn2) {
            var self = this, q;
            
            if ($.isFunction(type))
                fn2 = fn, fn = type, type = undefined;
                
            $.each( $.livequery.queries, function(i, query) {
                if ( self.selector == query.selector && self.context == query.context &&
                    type == query.type && (!fn || fn.$lqguid == query.fn.$lqguid) && (!fn2 || fn2.$lqguid == query.fn2.$lqguid) )
                        return (q = query) && false;
            });
            
            q = q || new $.livequery(this.selector, this.context, type, fn, fn2);
            
            q.stopped = false;
            
            $.livequery.run( q.id );
            
            return this;
        },
        
        expire: function(type, fn, fn2) {
            var self = this;
            

            if ($.isFunction(type))
                fn2 = fn, fn = type, type = undefined;
                

            $.each( $.livequery.queries, function(i, query) {
                if ( self.selector == query.selector && self.context == query.context && 
                    (!type || type == query.type) && (!fn || fn.$lqguid == query.fn.$lqguid) && (!fn2 || fn2.$lqguid == query.fn2.$lqguid) && !this.stopped )
                        $.livequery.stop(query.id);
            });
            

            return this;
        }
    });
    
    $.livequery = function(selector, context, type, fn, fn2) {
        this.selector = selector;
        this.context  = context || document;
        this.type     = type;
        this.fn       = fn;
        this.fn2      = fn2;
        this.elements = [];
        this.stopped  = false;
        

        this.id = $.livequery.queries.push(this)-1;
        

        fn.$lqguid = fn.$lqguid || $.livequery.guid++;
        if (fn2) fn2.$lqguid = fn2.$lqguid || $.livequery.guid++;
        

        return this;
    };
    
    $.livequery.prototype = {
        stop: function() {
            var query = this;
            
            if ( this.type )

                this.elements.unbind(this.type, this.fn);
            else if (this.fn2)

                this.elements.each(function(i, el) {
                    query.fn2.apply(el);
                });
                

            this.elements = [];
            

            this.stopped = true;
        },
        
        run: function() {

            if ( this.stopped ) return;
            var query = this;
            
            var oEls = this.elements,
                els  = $(this.selector, this.context),
                nEls = els.not(oEls);
            

            this.elements = els;
            
            if (this.type) {
  
                nEls.bind(this.type, this.fn);
                

                if (oEls.length > 0)
                    $.each(oEls, function(i, el) {
                        if ( $.inArray(el, els) < 0 )
                            $.event.remove(el, query.type, query.fn);
                    });
            }
            else {

                nEls.each(function() {
                    query.fn.apply(this);
                });
                

                if ( this.fn2 && oEls.length > 0 )
                    $.each(oEls, function(i, el) {
                        if ( $.inArray(el, els) < 0 )
                            query.fn2.apply(el);
                    });
            }
        }
    };
    
    $.extend($.livequery, {
        guid: 0,
        queries: [],
        queue: [],
        running: false,
        timeout: null,
        
        checkQueue: function() {
            if ( $.livequery.running && $.livequery.queue.length ) {
                var length = $.livequery.queue.length;

                while ( length-- )
                    $.livequery.queries[ $.livequery.queue.shift() ].run();
            }
        },
        
        pause: function() {

            $.livequery.running = false;
        },
        
        play: function() {
       
            $.livequery.running = true;
           
            $.livequery.run();
        },
        
        registerPlugin: function() {
            $.each( arguments, function(i,n) {
             
                if (!$.fn[n]) return;
                
       
                var old = $.fn[n];
                
               
                $.fn[n] = function() {
                   
                    var r = old.apply(this, arguments);
                    
                   
                    $.livequery.run();
                    
                   
                    return r;
                }
            });
        },
        
        run: function(id) {
            if (id != undefined) {

                if ( $.inArray(id, $.livequery.queue) < 0 )
                    $.livequery.queue.push( id );
            }
            else

                $.each( $.livequery.queries, function(id) {
                    if ( $.inArray(id, $.livequery.queue) < 0 )
                        $.livequery.queue.push( id );
                });
            

            if ($.livequery.timeout) clearTimeout($.livequery.timeout);

            $.livequery.timeout = setTimeout($.livequery.checkQueue, 20);
        },
        
        stop: function(id) {
            if (id != undefined)

                $.livequery.queries[ id ].stop();
            else

                $.each( $.livequery.queries, function(id) {
                    $.livequery.queries[ id ].stop();
                });
        }
    });
    

    $.livequery.registerPlugin('append', 'prepend', 'after', 'before', 'wrap', 'attr', 'removeAttr', 'addClass', 'removeClass', 'toggleClass', 'empty', 'remove');
    

    $(function() { $.livequery.play(); });
    
    

    var init = $.prototype.init;
    

    $.prototype.init = function(a,c) {

        var r = init.apply(this, arguments);
        

        if (a && a.selector)
            r.context = a.context, r.selector = a.selector;
            
  
        if ( typeof a == 'string' )
            r.context = c || document, r.selector = a;
        

        return r;
    };
    

    $.prototype.init.prototype = $.prototype;
        
    })(jQuery);

    // 放大镜3
    $(function(){
    
        /* 鼠标移动小图，小图对应大图显示在大图上，并替换放大镜中的图*/
        $("#specList ul li img").livequery("mouseover",function(){ 
            var imgSrc = $(this).attr("src");
            var i = imgSrc.lastIndexOf(".");
            var unit = imgSrc.substring(i);
            imgSrc = imgSrc.substring(0,i);
            var imgSrc_small = $(this).attr("src_D");
            var imgSrc_big = $(this).attr("src_H");
            $("#bigImg").attr({"src": imgSrc_small ,"jqimg": imgSrc_big });
            $(this).css({"border":"2px solid #3399cc","padding":"1px"});
        });
        
        $("#specList ul li img").livequery("mouseout",function(){ 
            $(this).css({"border":"1px solid #ddd","padding":"2px"});
        });
        
        //使用jqzoom
        $(".jqzoom").jqueryzoom({
            xzoom: 310, //放大图的宽度(默认是 200)
            yzoom: 310, //放大图的高度(默认是 200)
            offset: 10, //离原图的距离(默认是 10)
            position: "right", //放大图的定位(默认是 "right")
            preload:1   
        });
        
        /*如果小图过多，则出现滚动条在一行展示*/
        var btnNext = $('#specRight');
        var btnPrev = $('#specLeft')
        var ul = btnPrev.next().find('ul');
    
        var len = ul.find('li').length;
        var i = 0 ;
        if (len > 5) {
            $("#specRight").addClass("specRightF").removeClass("specRightT");
            ul.css("width", 54 * len)
            btnNext.click(function(e) {
                if(i>=len-5){
                    
                    return;
                }
                i++;
                if(i == len-5){
                    $("#specRight").addClass("specRightT").removeClass("specRightF");
                }
                $("#specLeft").addClass("specLeftF").removeClass("specLeftT");
                moveS(i);
            })
            btnPrev.click(function(e) {
                if(i<=0){
                    return;
                }
                i--;
                if(i==0){
                    $("#specLeft").addClass("specLeftT").removeClass("specLeftF");
                }
                $("#specRight").addClass("specRightF").removeClass("specRightT");
                moveS(i);
            })
        }
        function moveS(i) {
            ul.animate({left:-90 * i}, 500)
        }
        function picAuto(){
          if ($(".listImg li").size()<=5) {
            $("#specLeft,#specRight").hide();
          }
        }
        picAuto();
    });



}