verse = 1
function change_width() {
    winWidth = document.getElementsByClassName("h_background")[0].clientWidth
    var space=document.getElementsByClassName('space')
    space[0].style.width = 'calc((' + (winWidth - 120) + 'px - 6rem ) / 2)'
    space[0].style.height = 60 + "px"
    space[1].style.width = 'calc((' + (winWidth - 120) + 'px - 6rem ) / 2)'
    space[1].style.height = 60 + "px"
    var button=document.getElementsByClassName("button1");
    button[0].style.width = button.clientHeight*3.7 + "px"
    button[1].style.width = button.clientHeight*3.7 + "px"
    button[2].style.width = button.clientHeight*3.7 + "px"
    document.getElementsByClassName("business")[0].style.width = 'calc(' + winWidth + 'px - 3rem)'
    var footWidth = winWidth;
    footer = document.getElementsByClassName('Xqxa');
    for (var i = 0; i < 3; i++)
        footWidth -= footer[i].clientWidth
    space = document.getElementsByClassName('space1')
    space[1].style.width = footWidth/2 + "px"
    space[0].style.width = footWidth/2 + "px"
    if (winWidth < 768){
        var i = document.getElementsByClassName('grid-2');
        i[0].setAttribute('style','grid-column: span 6!important;');
        i[1].setAttribute('style','grid-column: span 6!important;');
        var i = document.getElementsByClassName('grid-3');
        i[0].setAttribute('style','grid-column: span 6!important;');
        i[1].setAttribute('style','grid-column: span 6!important;');
        i[2].setAttribute('style','grid-column: span 6!important;');
        var i = document.getElementsByClassName('games');
        i[0].setAttribute('style','grid-column: span 4!important;');
        i[1].setAttribute('style','grid-column: span 4!important;');
        i[2].setAttribute('style','grid-column: span 4!important;');
        i[3].setAttribute('style','grid-column: span 4!important;');
        var i = document.getElementsByClassName('business')[0];
        i.className = 'business line';
        var i = document.getElementsByClassName('space1');
        i[0].className = 'space1 m-39';
        i[1].className = 'space1 m-39';
        var foot = document.getElementsByClassName('videobutton');
        var button = document.getElementsByClassName('button1');
        var videotitle = document.getElementsByClassName('videotitle');
        for(var x = 0; x < 3; x++){
            foot[x].className = 'videobutton line';
            button[x].style.width = '100%';
            videotitle[x].style.padding = '1.5rem';
        }
    }
    else if (winWidth < 1200){
        var i = document.getElementsByClassName('grid-2');
        i[0].setAttribute('style','grid-column: span 3!important;');
        i[1].setAttribute('style','grid-column: span 3!important;');
        var i = document.getElementsByClassName('grid-3');
        i[0].setAttribute('style','grid-column: span 3!important;');
        i[1].setAttribute('style','grid-column: span 3!important;');
        i[2].setAttribute('style','grid-column: span 3!important;');
        var i = document.getElementsByClassName('games');
        i[0].setAttribute('style','grid-column: span 2!important;');
        i[1].setAttribute('style','grid-column: span 2!important;');
        i[2].setAttribute('style','grid-column: span 2!important;');
        i[3].setAttribute('style','grid-column: span 2!important;');
        var i = document.getElementsByClassName('business')[0];
        i.className = 'business';
        var i = document.getElementsByClassName('space1');
        i[0].className = 'space1';
        i[1].className = 'space1';
        var foot = document.getElementsByClassName('videobutton');
        var button = document.getElementsByClassName('button1');
        var videotitle = document.getElementsByClassName('videotitle');
        for(var x = 0; x < 3; x++){
            foot[x].className = 'videobutton';
            button[x].style.width = 'auto';
            videotitle[x].style.padding = '0';
        }}
    else{
        var i = document.getElementsByClassName('grid-2');
        i[0].setAttribute('style','grid-column: span 3!important;');
        i[1].setAttribute('style','grid-column: span 3!important;');
        var i = document.getElementsByClassName('grid-3');
        i[0].setAttribute('style','grid-column: span 2!important;');
        i[1].setAttribute('style','grid-column: span 2!important;');
        i[2].setAttribute('style','grid-column: span 2!important;');
        var i = document.getElementsByClassName('games');
        i[0].setAttribute('style','grid-column: span 1!important;');
        i[1].setAttribute('style','grid-column: span 1!important;');
        i[2].setAttribute('style','grid-column: span 1!important;');
        i[3].setAttribute('style','grid-column: span 1!important;');
        var i = document.getElementsByClassName('business')[0];
        i.className = 'business';
        var i = document.getElementsByClassName('space1');
        i[0].className = 'space1';
        i[1].className = 'space1';
        var foot = document.getElementsByClassName('videobutton');
        var button = document.getElementsByClassName('button1');
        var videotitle = document.getElementsByClassName('videotitle');
        for(var x = 0; x < 3; x++){
            foot[x].className = 'videobutton';
            button[x].style.width = 'auto';
            videotitle[x].style.padding = '0';
        }
    }
    if (winWidth >= 1440 && winWidth <= 1440 + 25){
        document.getElementById('lunbo' + verse).style.left = winWidth - 1440 + 'px';
        document.getElementsByClassName('control')[0].style.left = winWidth - 1440 + 'px';
    }
    else if(winWidth >= 1440 + 25){
        document.getElementsByClassName('control')[0].style.left = 25 + 'px';
        document.getElementById('lunbo' + verse).style.left = 25 + 'px';
    }else{
        document.getElementById('lunbo' + verse).style.left = 0;
        document.getElementsByClassName('control')[0].style.left = 0;
    }
    if(winWidth <= 1024){
        var f2 = document.getElementsByClassName('f2')[0];
        f2.className = 'f2 var';
        var footer = document.getElementsByClassName('footer')[0];
        footer.className = 'footer m-15';
        var infor = document.getElementsByClassName('infor')[0];
        infor.className = 'infor var m-15';
    }
    else{
        var f2 = document.getElementsByClassName('f2')[0];
        f2.className = 'f2';
        var footer = document.getElementsByClassName('footer')[0];
        footer.className = 'footer';
        var infor = document.getElementsByClassName('infor')[0];
        infor.className = 'infor';
    }

    
}
function ready(){
    change_width();
    var animation=document.getElementsByClassName('h_background')[0];
    animation.style.animationPlayState = "paused";
}
function setting(){
    var l = document.getElementsByClassName('lang_list')[0];
    l.style.opacity = (l.style.opacity == "1" ? 0 : 1)
    l = document.getElementById('r1');
    if (l.style.transform == "rotate(0deg)")
        l.setAttribute('style', 'transition: transform 0.3s; transform: rotate(180deg)');
    else
        l.setAttribute('style', 'transition: transform 0.3s; transform: rotate(0deg)');
}
function aside(){
    var side = document.getElementById("aside");
    if (side.style.transform == "none")
        side.setAttribute('style', 'transition: 0.2s; transform: translateX(calc(-100% - 10px))');
    else
        side.setAttribute('style', 'transition: 0.2s; transform:none');
    var spam1 = document.getElementsByClassName("spam1")[0];
    if (spam1.style.transform == "none")
        spam1.setAttribute('style', 'transition: 0.2s; transform:translateY(-200%)')
    else
        spam1.setAttribute('style', 'transition: 0.2s; transform:none');
    var spam3 = document.getElementsByClassName("spam3")[0];
    if (spam3.style.transform == "none")
        spam3.setAttribute('style', 'transition: 0.2s; transform:translateY(200%)')
    else
        spam3.setAttribute('style', 'transition: 0.2s; transform:none');
    var back = document.getElementsByClassName('h_background')[0];
    if (back.style.backgroundImage == "none")
        back.style.backgroundImage = 'linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://www.rockstargames.com/dist/img/global/2qbg.png")'
    else
        back.style.backgroundImage = 'none'
}

function Go1(){
    var v1 = document.getElementById('lunbo1');
    var v2 = document.getElementById('lunbo2');
    var v3 = document.getElementById('lunbo3');
    v1.setAttribute('style', 'transition: 0.2s; transform:none');
    v2.setAttribute('style', 'transition: 0.2s; transform:translateX(100%)');
    v3.setAttribute('style', 'transition: 0.2s; transform:translateX(200%)');
    v1.className = 'img-layer';
    v2.className = 'img-layer hidden';
    v3.className = 'img-layer hidden';
    document.getElementsByClassName('To1')[0].setAttribute('style', 'background:#fcaf17!important')
    document.getElementsByClassName('To2')[0].setAttribute('style', 'background:#000!important')
    document.getElementsByClassName('To3')[0].setAttribute('style', 'background:#000!important')
    verse = 1
    change_width()
}
function Go2(){
    var v1 = document.getElementById('lunbo1');
    var v2 = document.getElementById('lunbo2');
    var v3 = document.getElementById('lunbo3');
    v1.setAttribute('style', 'transition: 0.2s; transform:translateX(-100%)');
    v2.setAttribute('style', 'transition: 0.2s; transform:none');
    v3.setAttribute('style', 'transition: 0.2s; transform:translateX(100%)');
    v1.className = 'img-layer hidden';
    v2.className = 'img-layer';
    v3.className = 'img-layer hidden';
    document.getElementsByClassName('To1')[0].setAttribute('style', 'background:#000!important')
    document.getElementsByClassName('To2')[0].setAttribute('style', 'background:#fcaf17!important')
    document.getElementsByClassName('To3')[0].setAttribute('style', 'background:#000!important')
    verse = 2
    change_width()
}
function Go3(){
    var v1 = document.getElementById('lunbo1');
    var v2 = document.getElementById('lunbo2');
    var v3 = document.getElementById('lunbo3');
    v1.setAttribute('style', 'transition: 0.2s; transform:translateX(-200%)');
    v2.setAttribute('style', 'transition: 0.2s; transform:translateX(-100%)');
    v3.setAttribute('style', 'transition: 0.2s; transform:none');
    v1.className = 'img-layer hidden';
    v2.className = 'img-layer hidden';
    v3.className = 'img-layer';
    document.getElementsByClassName('To1')[0].setAttribute('style', 'background:#000!important')
    document.getElementsByClassName('To2')[0].setAttribute('style', 'background:#000!important')
    document.getElementsByClassName('To3')[0].setAttribute('style', 'background:#fcaf17!important')
    verse = 3
    change_width()
}
imgs = document.querySelectorAll('img');

function isIn(el) {
    var bound = el.getBoundingClientRect();
    var clientHeight = document.documentElement.clientHeight;
    return bound.top <= clientHeight;
} 

function check() {
    imgs = document.querySelectorAll('img');
    for(var i = 0; i < imgs.length - 8; i++){
        if(isIn(imgs[i]))
            loadImg(imgs[i]);
    }
}
function loadImg(el) {
    el.setAttribute('src', el.getAttribute('data-src'));
}

function login(){
    var login = document.getElementsByClassName('login')[0]
    if(login.style.transform == 'none')
        login.setAttribute('style', 'transition: 0.2s; transform:translateX(100%)');
    else
        login.setAttribute('style', 'transition: 0.2s; transform:none');
}

window.onload = function () {
    change_width();
    check();
}   

window.onscroll = function () { 
    check();
}