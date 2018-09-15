function banner_click(imgs,dots,banenr,leftBtn,rightBtn){

    console.log(imgs,dots,banner,leftBtn,rightBtn);
    let second = 2000;
    let num = 0;
    let next=0;
    let now=0;
    // 定义开关
    let flag = true;
    let widths =parseInt(getComputedStyle(imgs[0],null).width);
    imgs[0].style.left=0;
    dots[0].classList.add("active");
    //轮播函数
    function move(){
        next++;
        if(next == imgs.length){
            next = 0;
        }
        imgs[next].style.left=widths +"px";
        animate(imgs[now],{left:-widths},function () {
            flag = "true";
        });
        animate(imgs[next],{left:0});
        dots[now].classList.remove("active");
        dots[next].classList.add("active");
        now = next;
    }


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
            return;
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
            return;
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

//鼠标点击下方按钮 进行切换
    for ( let i=0;i<dots.length;i++){
        dots[i].onclick = function(){

            if (now==i){
                return;
            } else if(now<i){
                imgs[i].style.left=widths +"px";
                animate(imgs[now],{left:-widths});
                animate(imgs[i],{left:0});

            }else{
                animate(imgs[now],{left:widths});
                animate(imgs[i],{left:0});
            }
            dots[now].classList.remove("active");
            dots[i].classList.add("active");
            now = next = i;
        };

    }







}
// let imgs = document.querySelectorAll("img");
// let dots = document.querySelectorAll("li");
// let banner = document.querySelectorAll(".banner")[0];
// let leftBtn = document.querySelectorAll(".leftbtn")[0];
// let rightBtn = document.querySelectorAll(".rightbtn")[0];