
        $(document).ready(function(){
            $(window).scroll(function(){
            //    console.log($(this).scrollTop());
            if($(window).scrollTop()>300){
                    $(".backtotop").fadeIn();
                }else{
                    $(".backtotop").fadeOut();
                }
            });
            $(".backtotop").click(function(){
                $("html,body").animate({scrollTop:0},800);
                return false;
            });
        });
