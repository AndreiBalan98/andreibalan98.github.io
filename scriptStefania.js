const homeLogoScroll = 250;

function homeLogoAppear(){

    let x = document.documentElement.scrollTop;
    if(x > homeLogoScroll){
        document.getElementById('nbHomeLogo').style.opacity = 1;
    }
    else if(x < homeLogoScroll){
        document.getElementById('nbHomeLogo').style.opacity = 0;
    }
}

function homeLogoClick(){

    // document.documentElement.scrollTop = 0;
    window.scrollTo({top: 0, behavior: "smooth"});
}

window.onload = function() {

    window.onscroll = function() { homeLogoAppear(); };
    document.getElementById('nbHomeLogo').addEventListener('click', homeLogoClick);
}