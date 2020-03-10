
function change_width() {
    winWidth = document.getElementsByClassName("h_background")[0].clientWidth
    var space=document.getElementsByClassName('space')
    space[0].style.width = (winWidth - 260)/2 + "px"
    space[0].style.height = 60 + "px"
    space[1].style.width = (winWidth - 260)/2 + "px"
    space[1].style.height = 60 + "px"
    var button=document.getElementsByClassName("button1");
    button[0].style.width = button.clientHeight*3.7 + "px"
    button[1].style.width = button.clientHeight*3.7 + "px"
    button[2].style.width = button.clientHeight*3.7 + "px"
    document.getElementsByClassName("business")[0].style.width = (winWidth - 29.5*2) + 'px'
    var footWidth = winWidth;
    footer = document.getElementsByClassName('footer');
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
    }
    else if (winWidth < 1200){
        var i = document.getElementsByClassName('grid-3');
        i[0].setAttribute('style','grid-column: span 3!important;');
        i[1].setAttribute('style','grid-column: span 3!important;');
        i[2].setAttribute('style','grid-column: span 3!important;');
        var i = document.getElementsByClassName('games');
        i[0].setAttribute('style','grid-column: span 2!important;');
        i[1].setAttribute('style','grid-column: span 2!important;');
        i[2].setAttribute('style','grid-column: span 2!important;');
        i[3].setAttribute('style','grid-column: span 2!important;');
    }
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
}