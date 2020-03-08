
function change_width() {
    winWidth = document.getElementsByClassName("h_background")[0].clientWidth
    var space=document.getElementsByClassName('space')
    space[0].style.width = (winWidth - 260)/2 + "px"
    space[0].style.height = 60 + "px"
    space[1].style.width = (winWidth - 260)/2 + "px"
    space[1].style.height = 60 + "px"
    var button=document.getElementById("button1");
    button.style.width = button.clientHeight*3.7 + "px"
    document.getElementsByClassName("business")[0].style.width = (winWidth - 29.5*2) + 'px'
    var footWidth = winWidth;
    footer = document.getElementsByClassName('footer');
    for (var i = 0; i < 3; i++)
        footWidth -= footer[i].clientWidth
    space = document.getElementsByClassName('space1')
    space[1].style.width = footWidth/2 + "px"
    space[0].style.width = footWidth/2 + "px"
}
function ready(){
    change_width();
    var animation=document.getElementsByClassName('h_background')[0];
    animation.style.animationPlayState = "paused";
}
