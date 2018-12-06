var main=document.getElementById("main"),
    banner=document.getElementById("banner"),
    pics=banner.getElementsByTagName("div"),
    dots=document.getElementById("dots"),
    dot=dots.getElementsByTagName("span"),
    prev=document.getElementById("prev"),
    next=document.getElementById("next"),
    ul=document.getElementById("ul"),
    lists=ul.getElementsByTagName("li"),
    submenu=document.getElementById("submenu"),
    innerboxs=submenu.getElementsByTagName("div"),
    timer=null,
    cur=0;

main.onmouseover=function() {
     clearInterval(timer);
}

main.onmouseout=function(){
   timer=setInterval(function(){
     changeImg();
   },1000);
}

main.onmouseout();

function changeImg() {
  dot[cur].className="";
  pics[cur].style.display="none";
  cur=(cur+1)%(pics.length);
  pics[cur].style.display="block";
  dot[cur].className="active";
}

for(var i=0;i<dot.length;++i){
    dot[i].id=i;
    dot[i].onclick=function() {
        dot[cur].className="";
        pics[cur].style.display="none";
        cur=this.id;
        pics[cur].style.display="block";
        dot[cur].className="active";
    }
}

prev.onclick=function() {
    dot[cur].className="";
    pics[cur].style.display="none";
    cur=cur===0?2:cur-1;
    pics[cur].style.display="block";
    dot[cur].className="active";
}

next.onclick=changeImg;

for(var i=0;i<lists.length;++i){
    lists[i].id="li"+i;
    lists[i].onmouseover=function(){
        innerboxs[this.id.substr(2)].className="inner-box";
    }
    lists[i].onmouseout=function(){
        innerboxs[this.id.substr(2)].className="inner-box hide";
    }
}