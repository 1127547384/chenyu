window.onload=function(){
    let id = location.search.slice(1).split('=')[1];
    // console.log(id)
    var url = '../src/api/goods.php';
    var data = `id=${id}&time=${new Date()}`;
    var fdj = document.querySelector('#fdj');
    var gouwuche = document.querySelector('.gouwuche');
    ajax('GET',url,data,function(str){
                var arr = JSON.parse(str);
                var res = arr.map(function(item){
                                return `
                                <div id="fdj">
                                <div id="preview">
                                    <div class=jqzoom>
                                        <img id=bigImg src="${item.url}" width=440 height=440 jqimg="${item.url}">
                                    </div>
                                    <div id=spec>
                                        <div id=specLeft class="control specLeftT">&lt;</div>
                                        <div id=specList>
                                            <ul class=listImg>
                                                <li><img id=smallPicOne src="${item.url}" src_H="${item.url}" src_D="${item.url}">
                                                </li>
                                                <li><img id=smallPicOne src="${item.url}" src_H="${item.url}" src_D="${item.url}">
                                                </li>
                                                <li><img id=smallPicOne src="../src/img/nr3.jpg" src_H="../src/img/nr3.jpg" src_D="../src/img/nr3.jpg">
                                                </li>
                                                <li><img id=smallPicOne src="../src/img/nr4.jpg" src_H="../src/img/nr5.jpg" src_D="../src/img/nr4.jpg">
                                                </li>
                                                <li><img id=smallPicOne src="../src/img/nr5.jpg" src_H="../src/img/nr6.jpg" src_D="../src/img/nr5.jpg">
                                                </li>
                                                <li><img id=smallPicOne src="../src/img/nr6.jpg" src_H="../src/img/nr6.jpg" src_D="../src/img/nr6.jpg">
                                                </li>
                                                <li><img id=smallPicOne src="../src/img/nr7.jpg" src_H="../src/img/nr7.jpg" src_D="../src/img/nr7.jpg">
                                                </li>
                                            </ul>
                                        </div>
                                        <div id=specRight class="control specRightT">&gt;</div>
                                    </div>
                    
                                    <div><img src="../src/img/fdj.png" alt=""></div>
                                </div>
                    
                    
                                <!-- 放大镜右侧 -->
                                <div id="fdj-right">
                                    <div class="shop-title">
                                        <strong>"${item.title}"</strong>
                                        <a href="#"><i class="iconfont icon-dianhua"></i>资讯客服</a>
                                        <a href="#"><i class="iconfont icon-shouji"></i>手机浏览</a>
                                    </div>
                    
                                    <div class="shop-jiage">
                                        <span>九 机 价:</span>
                                        ￥<strong>"${item.jiage}"</strong>
                                    </div>
                                    <div><a href="#"><img src="../src/img/niubi.png" alt=""></a> </div>
                                    <div class="shop-peizhi">
                                        <span>配置信息：</span>
                                        <a>充电器x1，数据线x1，耳机x1，保护壳x1，（内置电池，3750mAh）</a>
                                    </div>
                                    
                                    <div class="shop-color">
                                        <span>颜色：</span>
                                        <ul>
                                            <li><a href="#"><img src="../src/img/colorback.jpg" alt=""> 黑色</a></li>
                                            <li><a href="#"><img src="../src/img/colorblue.jpg" alt=""> 蓝色</a></li>
                                            <li><a href="#"><img src="../src/img/colorwhite.jpg" alt=""> 白色</a></li>
                                            <li><a href="#"><img src="../src/img/colorred.jpg" alt=""> 红色</a></li>
                                        </ul>
                                    </div>
                                    
                    
                                    <div class="shop-rongl">
                                        <span>容量：</span>
                                        <ul>
                                            <li><a href="#"><span>8GB+126GB</span></a></li>
                                            <li><a href="#"><span>8GB+126GB</span></a></li>
                                            <li><a href="#"><span>8GB+126GB</span></a></li>
                                            <li><a href="#"><span>8GB+126GB</span></a></li>
                                        </ul>
                                    </div>
                    
                                    <div class="shop-banben">
                                        <span>版本：</span>
                                        <ul>
                                            <li><a href="#"><span>全网通配版本</span></a></li>
                                            <li><a href="#"><span>全网高配版本</span></a></li>
                                            <li><a href="#"><span>全网高配版本</span></a></li>
                                            <li><a href="#"><span>全网高配版本</span></a></li>
                                            <li><a href="#"><span>全网高配版本</span></a></li>
                                            <li><a href="#"><span>全网高配版本</span></a></li>
                                            <li><a href="#"><span>全网高配版本</span></a></li>
                                            <li><a href="#"><span>全网高配版本</span></a></li>
                                            <li><a href="#"><span>全网高配版本</span></a></li>
                                            <li><a href="#"><span>全网高配版本</span></a></li>
                                        </ul>
                                    </div>
                                    
                                    <div class="shop-taocan">
                                        <span>套餐：</span>
                                        <ul>
                                            <li><a href="#"><span>套餐1</span></a></li>
                                            <li><a href="#"><span>套餐2</span></a></li>
                                            <li><a href="#"><span>套餐3</span></a></li>
                                            <li><a href="#"><span>套餐4</span></a></li>
                                            <li><a href="#"><span>套餐5</span></a></li>
                                            <li><a href="#"><span>套餐6</span></a></li>
                                            <li><a href="#"><span>套餐7</span></a></li>
                                            <li><a href="#"><span>套餐8</span></a></li>
                                            
                                        </ul>
                                    </div>
                                    <div id="fenge"></div>
                                    <div class="shop-taocan">
                                        <span>配送至：</span>
                                        <div></div>
                                    </div>
                    
                    
                                </div>
                    
                    
                            </div>
                            `
                            }).join("");
                            fdj.innerHTML=res;
            });


            fdj.onmouseover = function(){
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
            
};

    //cookie添加到购物车
    var thisURL = document.URL; 
    var getval =thisURL.split('?')[1]; 
    var showval= getval.split("=")[1];
    gouwuche.onclick = function(e){
        
        var xhr_list = new XMLHttpRequest();
        xhr_list.onload = function(){
            var status = [200,304];
            if(status.indexOf(xhr_list.status)>=0){
                var goods = JSON.parse(xhr_list.responseText);
                for(let i=0;i<goods.length;i++){
                    if(showval==goods[i].id){
                        var goodslist=Cookie.get("xiangmu") || [];
                        if(typeof goodslist == "string"){
                            goodslist = JSON.parse(goodslist);
                        }
                        
                        goodslist.push(JSON.stringify(goods[i]));

                        document.cookie="goodslist="+JSON.stringify(goodslist);

                    }
                }
            }
        }
        xhr_list.open('get','../src/api/goods.php',true);
        xhr_list.send(null);
    }

}

