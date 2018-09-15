function banner_btn(imgs,dots,banner,leftBtn,rightBtn,second){
    let num = 0;
    let next=0;
    let now=0;
    // 定义开关
    let flag = true;
    console.log(!flag);
    let widths =parseInt(getComputedStyle(imgs[0],null).width);
    imgs[0].style.left=0;
    dots[0].classList.add("active");

    let t = setInterval(move,second);
    //轮播函数
    function move(){
        next++;
        if(next == imgs.length){
            next = 0;
        }
        imgs[next].style.left=widths +"px";
        animate(imgs[now],{left:-widths},function () {
            flag = "ture";
        });
        animate(imgs[next],{left:0});
        dots[now].classList.remove("active");
        dots[next].classList.add("active");
        now = next;
    }
    // 鼠标悬停在banner上，停止
    banner.onmouseover = function(){
        clearTimeout(t);

    };
    //鼠标拿走，继续
    banner.onmouseout = function(){
        t = setInterval(move,second);

    };

    leftBtn.onclick = function(){
        if (!flag){
            return;
        }
        flag = false;
        moveL();
    };
    rightBtn.onclick = function(){
        if (!flag){
            return;
        }
        flag = false;
        moveR();
    };


//    moveL
    function moveL(){
        next--;
        if (next<0) {
            next = dots.length-1;
        }
        imgs[next].style.left = -widths + "px";
        animate(imgs[now], {left: widths});
        animate(imgs[next], {left: 0},function () {
            flag = true;
        });
        dots[now].classList.remove("active");
        dots[next].classList.add("active");
        now = next;
    }
//    moveR
    function moveR(){
        next++;
        if (next == imgs.length){
            next =0 ;
        }
        imgs[next].style.left=widths +"px";
        animate(imgs[now],{left:-widths});
        animate(imgs[next],{left:0},function () {
            flag = true;
        });
        dots[now].classList.remove("active");
        dots[next].classList.add("active");
        now = next;
    }
//    窗口失去焦点时候，停止时间间隔函数
    window.onblur=function(){
        clearTimeout(t);

    };
//    获得焦点时，继续时间间隔函数
    window.onfocus= function () {
        t = setInterval(move,second);
    };
}