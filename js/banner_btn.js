function banner_btn(imgs,dots,banner,leftBtn,rightBtn,second){
    let num = 0;
    let next=0;
    let now=0;
    // ���忪��
    let flag = true;
    console.log(!flag);
    let widths =parseInt(getComputedStyle(imgs[0],null).width);
    imgs[0].style.left=0;
    dots[0].classList.add("active");

    let t = setInterval(move,second);
    //�ֲ�����
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
    // �����ͣ��banner�ϣ�ֹͣ
    banner.onmouseover = function(){
        clearTimeout(t);

    };
    //������ߣ�����
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
//    ����ʧȥ����ʱ��ֹͣʱ��������
    window.onblur=function(){
        clearTimeout(t);

    };
//    ��ý���ʱ������ʱ��������
    window.onfocus= function () {
        t = setInterval(move,second);
    };
}