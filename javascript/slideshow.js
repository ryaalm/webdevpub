//https://www.w3schools.com/howto/howto_js_slideshow.asp
    //https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_two
    //https://www.sitepoint.com/community/t/having-trouble-with-multiple-slideshows-on-one-page/293076/3
    //Switch slideshow image when arrows are pressed

    let slideIndex = [1,1,1];
    let slideId = ["slideshow1","slideshow2","slideshow3"]

    //arrow controls
    function changeSlides(n, slideshowNr){
        showSlides(slideIndex[slideshowNr] += n, slideshowNr);
    }

    function showSlides(n, slideshowNr){
        var i;
        var x = document.getElementsByClassName(slideId[slideshowNr]);
        if(n > x.length){slideIndex[slideshowNr] = 1}
        if(n < 1){slideIndex[slideshowNr] = x.length};
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        };
        x[slideIndex[slideshowNr]-1].style.display = "block";
    }