// Set the date we're counting down to
var countDownDate = new Date("May 19, 2018 00:00:00");

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for day, hour, minute and second
    var day = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var second = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="timer"
    document.getElementById("timer").innerHTML = day + "d " + hour + "h "
    + minute + "m " + second + "s ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "Graduated!";
    }
}, 1000);

//hover effect for social media links
var fb = $('#facebook');
var li = $('#linkedin');
var gh = $('#github');

var fbmsg =$('#fb');
var limsg =$('#li');
var ghmsg =$('#gh');
fbmsg.hide();
limsg.hide();
ghmsg.hide();

fb.hover(
    function(){
        fbmsg.show();
        var fbpopper = new Popper(fb, fbmsg,{
            placement:'bottom'
        });
    },
    function(){
        fbmsg.hide();
        fbpopper.destroy();
    });

li.hover(
    function(){
        limsg.show();
        var lipopper = new Popper(li, limsg,{
            placement:'bottom'
        });
    },
    function(){
        limsg.hide();
        lipopper.destroy();
    });

gh.hover(
    function(){
        ghmsg.show();
        var ghpopper = new Popper(gh, ghmsg,{
            placement:'bottom'
        });
    },
    function(){
        ghmsg.hide();
        ghpopper.destroy();
    });

//social media onclick scripts
fb.click(
    function(){
        window.location.href="https://www.facebook.com/yesong95";
    }
);

li.click(
    function(){
        window.location.href="https://www.linkedin.com/in/yesong-choi-373773112/";
    }
);

gh.click(
    function(){
        window.location.href="https://github.com/yesongc";
    }
);