window.onload = function () {
    var out = document.querySelector('#shopoutput');

    var paixua = document.querySelector('#paixua');

    // 渲染页面
    out.innerHTML = xuanran(1, 14);

    function xuanran(page, qty) {
        var url = '../src/api/list.php';
        var data = `ye=${page}&num=14&time=${new Date()}`;

        ajax('GET', url, data, function (str) {
            var arr = JSON.parse(str);
            console.log(str);
            var res = arr.map(function (item) {
                return `<li data-id=${item.id}>
                            <p class="item">
                                <a class="big-photo" >
                                    <img src="${item.url}" alt="big" />
                                </a>
                                <a class="des-small">
                                    <img src="${item.url}" alt="small" />
                                </a>
                                <a class="des-small">
                                    <img src="../src/img/nr3.jpg" alt="small" />
                                </a>
                                <a class="des-small">
                                    <img src="../src/img/nr4.jpg" alt="small" />
                                </a>
                                <a class="des-small">
                                    <img src="../src/img/nr5.jpg" alt="small" />
                                </a>
                            </p>
                            <a href="#" class="niubi">${item.title}</a>
                            <b class="qian">
                                ￥${item.jiage}
                            </b>
                            <p class="pingjia">已经有${item.pingjia}分评价</p>
                        </li>
            `
            }).join("");
            out.innerHTML = res;
        });
    }

    var xhr_list = new XMLHttpRequest();
    xhr_list.onload = function () {
        var status = [200, 304];
        if (status.indexOf(xhr_list.status) >= 0) {
            var goods = JSON.parse(xhr_list.responseText);
            var live = true;
            paixua.onclick = function () {
                out.innerHTML = '';
                if (live == true) {
                    live = false;
                    var compare = function (prop) {
                        return function (obj1, obj2) {
                            var val1 = obj1[prop];
                            var val2 = obj2[prop];
                            if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
                                val1 = Number(val1);
                                val2 = Number(val2);
                            }
                            if (val1 < val2) {
                                return -1;
                            } else if (val1 > val2) {
                                return 1;
                            } else {
                                return 0;
                            }
                        }
                    }
                    resa = goods.sort(compare("jiage"))

                    for (let i = 0; i < resa.length; i++) {
                        out.innerHTML += `
                            <li data-id=${resa[i].id}>
                                <p class="item">
                                    <a class="big-photo" >
                                        <img src="${resa[i].url}" alt="big" />
                                    </a>
                                    <a class="des-small">
                                        <img src="${resa[i].url}" alt="small" />
                                    </a>
                                    <a class="des-small">
                                        <img src="../src/img/nr3.jpg" alt="small" />
                                    </a>
                                    <a class="des-small">
                                        <img src="../src/img/nr4.jpg" alt="small" />
                                    </a>
                                    <a class="des-small">
                                        <img src="../src/img/nr5.jpg" alt="small" />
                                    </a>
                                </p>
                                <a href="#" class="niubi">${resa[i].title}</a>
                                <b class="qian">
                                    ￥${resa[i].jiage}
                                </b>
                                <p class="pingjia">已经有${resa[i].pingjia}分评价</p>
                            </li>`
                    }
                } else {
                    live = true;
                    var compare = function (prop) {
                        return function (obj1, obj2) {
                            var val1 = obj1[prop];
                            var val2 = obj2[prop];
                            if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
                                val1 = Number(val1);
                                val2 = Number(val2);
                            }
                            if (val1 > val2) {
                                return -1;
                            } else if (val1 < val2) {
                                return 1;
                            } else {
                                return 0;
                            }
                        }
                    }
                    resa = goods.sort(compare("jiage"))

                    for (let i = 0; i < resa.length; i++) {
                        out.innerHTML += `
                            <li data-id=${resa[i].id}>
                                <p class="item">
                                    <a class="big-photo" >
                                        <img src="${resa[i].url}" alt="big" />
                                    </a>
                                    <a class="des-small">
                                        <img src="${resa[i].url}" alt="small" />
                                    </a>
                                    <a class="des-small">
                                        <img src="../src/img/nr3.jpg" alt="small" />
                                    </a>
                                    <a class="des-small">
                                        <img src="../src/img/nr4.jpg" alt="small" />
                                    </a>
                                    <a class="des-small">
                                        <img src="../src/img/nr5.jpg" alt="small" />
                                    </a>
                                </p>
                                <a href="#" class="niubi">${resa[i].title}</a>
                                <b class="qian">
                                    ￥${resa[i].jiage}
                                </b>
                                <p class="pingjia">已经有${resa[i].pingjia}分评价</p>
                            </li>`
                    }
                }
            }
        }

    }
    xhr_list.open('get','../src/api/list.php',true);
    xhr_list.send(null); 




    out.onmouseover = function () {
        /** 更换小图片 */

        $(".item a").hover(function () {

            changeImg($(this))

        });

        function changeImg(obj) {

            if (obj.find("img").attr("alt") == "small") {

                var temp_big_src = obj.siblings('a').find('img[alt=big]').attr('src');

                var temp_big_url = obj.siblings('a[class=big-photo]').attr('href');

                var temp_small_src = obj.find('img').attr('src');

                var temp_small_url = obj.attr('href');

                obj.siblings('a').find('img[alt=big]').attr('src', temp_small_src);

            }

        };
    }

    // 点击跳转详情页

    $('#shopoutput').on('click', 'li', function () {
        var id = $(this).attr('data-id');
        console.log(id);
        window.open('./goods.html?id=' + id);
    })

    //点击下一页

};