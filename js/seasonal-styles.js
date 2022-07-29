
$("document").ready(function(){
    $('.seasons a').click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        var season = $(this).attr("href");//contents of href attribute of this element
        alert(season);

        season = season.toLowerCase();

        switch(season){

            case 'default':
                $("html").css("background-color", "grey");
                $("#wear").attr("src","images/300x400.png");
                $("#logo").attr("src","images/four-seasons.gif");
                $("header h3").text("Outfitter for All Seasons!");
        
                break;

            case 'spring':
                $("html").css("background-color","#2B7129");
                $("#wear").attr("src","images/spring-wear.jpg");
                $("#logo").attr("src","images/spring.gif");
                $("header h3").text("Jump into Spring Wear!");

                break;

            case 'summer':
                $("html").css("background-color","#EBA52B");
                $("#wear").attr("src","images/summer-wear.jpg");
                $("#logo").attr("src","images/summer.gif");
                $("header h3").text("Swim into Summer Wear!");

                break;
            case'fall':
                $("html").css("background-color","#A81124");
                $("#wear").attr("src","images/fall-wear.jpg");
                $("#logo").attr("src","images/fall.gif");
                $("header h3").text("Frolic into Fall Wear!");

                break;
            case 'winter':
                $("html").css("background-color","#005393");
                $("#wear").attr("src","images/winter-wear.jpg");
                $("#logo").attr("src","images/winter.gif");
                $("header h3").text("Wander into Winter Wear!");

        }
    });
});