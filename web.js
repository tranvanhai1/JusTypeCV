$(window).on('load', function(){
    var loadbar = document.querySelector(".loader-re");
    console.log(loadbar)
    var per = 0;
    var loading = setInterval(animate, 15);
    function animate(){
        if(per == 100){
            clearInterval(loading);
            loading = setInterval(animate2, 7);
            // $("#loader").remove()
        }else{
            per = per + 1;
            loadbar.style.width = per + '%';
        }    
    }
    var per2 = 20;
    function animate2(){
        if(per2 == 80){
            $("#loader").remove()
            clearInterval(loading);
        }else{
            per2 = per2 + 1;
            loadbar.style.marginLeft = per2 + 'vw';
        }    
    }
})

$(document).ready(function(){
    $(".templet").click(function(){
        if($(".review_templet").hasClass("slide-in-top")){
            $(".review_templet").removeClass("slide-in-top")
            $(".review_templet").addClass("slide-out-bottom")
            $(".templet i").addClass("slide-in-top")
            $(".templet i").removeClass("slide-out-bottom")
        }else{
            $(".review_templet").removeClass("slide-out-bottom")
            $(".review_templet").addClass("slide-in-top")
            $(".templet i").addClass("slide-out-bottom")
            $(".templet i").removeClass("slide-in-top")
        }
    })
})

$(document).ready(function(){
    $("#CV").addClass("scale-up-center")
    $(".skip .fas").click(function(){
        $(this).remove()
        $(".part1").remove()
        $(".back_right").delay(100).animate({
            top : '0'
        }, 100, function(){
            $(".back_right").addClass("scale-down-center")
            $(".back_right").delay(500).animate({width : '52%'}, 500, function(){
                $(".back_right p").fadeIn(500, function(){
                    $(".back_right h1").delay(100).fadeIn(200, function(){
                        $(".name_part3").addClass("text-flicker-in-glow")
                        $(".about").delay(1300).fadeIn("slow")
                        $(".templet").delay(1400).fadeIn("slow", function(){
                            $(".name_part3").css("opacity", "1")
                            $(".name_part3").removeClass("text-flicker-in-glow")
                        })
                    })
                })
            })
        })
    })
    $(".part1").delay(2000).animate({
        width : "100%"
    }, 100, function(){
        $(".one").addClass("appear").delay(2100).queue(function(next){
            $(".one").addClass("fade-out-right")
            next();
        });
    })
    $(".part1").delay(2300).animate({
        width : "100%"
    }, 100, function(){
        $(".two").addClass("appear").delay(2100).queue(function(next){
            $(".two").addClass("fade-out-right")
            next();
        });
    })
    $(".part1").delay(2300).animate({
        width : "100%"
    }, 100, function(){
        $(".three").addClass("appear").delay(2100).queue(function(next){
            $(".three").addClass("fade-out-right")
            next();
            $(".back_right").delay(100).animate({
                top : '0'
            }, 100, function(){
                $(".skip .fas").remove()
                $(".back_right").addClass("scale-down-center")
                $(".back_right").delay(500).animate({width : '52%'}, 500, function(){
                    $(".back_right p").fadeIn(500, function(){
                        $(".back_right h1").delay(200).fadeIn(200, function(){
                            $(".name_part3").addClass("text-flicker-in-glow")
                            $(".about").delay(1300).fadeIn("slow")
                            $(".templet").delay(1400).fadeIn("slow", function(){
                                $(".name_part3").css("opacity", "1")
                                $(".name_part3").removeClass("text-flicker-in-glow")
                            })
                        })
                    })
                })
            })
        });
    })
})

$(document).ready(function(){
    $(".start_button").click(function(){
        $(this).animate({
            right : "250px",
        }, 200, function(){
            $(this).animate({
                right : "-1000px",
            }, 500, function(){

            })
        })
        $(".name_part1").animate({top : "-1000"}, 800, function(){
            $(".name_part1").remove()
        })
        $(".name_part2").animate({top : "-1000"}, 800, function(){
            $(".name_part2").remove()
        })
        $(".back_right").animate({width : "37%"}, 800, function(){
            $(".name_part3").addClass("flicker-out-1")
            $(".about").delay(1000).fadeOut("slow")
            $(".templet").delay(900).fadeOut("slow", function(){
                $(".bg_grey").remove()
                window.scrollTo({top:0,behavior:'smooth'});
                $("p").empty(".ct");
                $(".CV_exper_informations li").remove()
                $(".ad_mail").text("Email")
                $(".ad_phone").text("Phone number")
                $(".ad_dayOfBirth").text("Day of birth")
                $(".ad_address").text("Address")
                $(".backgr_intro").animate({right : "-5000px"}, 1300, function(){
                    $("#table_add_infor").delay(700).fadeIn(100)
                    $(".back_right").fadeOut(1000)
                    $("#intro_web").fadeOut(1000, function(){
                        $("#menu").fadeIn()
                        $(".div_around").fadeIn()
                    })
                })
            })
        })
    })
})

function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $('.user_img')
          .attr('src', e.target.result)
          .width(90)
          .height(90)
          .css({
              "position" : 'absolute',
              "left" : "3px",
              "top" : "3px",
              "border-radius" : "301px"
          });
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

$(document).ready(function(){
    $(".input_name_infor").focusin(function(){
        $(this).next().animate({
            height : '+=1.5px',
            width : '+=25px'
        }, 200)
    })
    $(".input_name_infor").focusout(function(){
        $(this).next().animate({
            height : '-=1.5px',
            width : '-=25px'
        }, 200)
    })
})

$(document).ready(function(){
    $(".input_contact_infor").focusin(function(){
        $(this).next().animate({
            height : '+=1px',
            width : '+=25px'
        }, 200)
    })
    $(".input_contact_infor").focusout(function(){
        $(this).next().animate({
            height : '-=1px',
            width : '-=25px'
        }, 200)
    })
})

$(document).ready(function(){
    $(".name").keyup(function(){
        $(".text_name").text($(".name").val())
    })
})

$(document).ready(function(){
    $(".position").keyup(function(){
        $(".prof_title").text($(".position").val())
    })
})

$(document).ready(function(){
    $(".intro").keyup(function(){
        $(".intro_user").text($(".intro").val())
    })
})

$(document).ready(function(){
    $(".email").keyup(function(){
        $(".ad_mail").text($(".email").val())
    })
})

$(document).ready(function(){
    $(".numberPhone").keyup(function(){
        $(".ad_phone").text($(".numberPhone").val())
    })
})

$(document).ready(function(){
    $(".DoB").focusout(function(){
        var values = new Date(document.querySelector(".DoB").value);
        var day = values.getDate()
        var month = values.getMonth() + 1;
        var year = values.getFullYear()
        $(".ad_dayOfBirth").text(month + '/' + day + '/' + year)
    })
})

$(document).ready(function(){
    $(".addresss").keyup(function(){
        $(".ad_address").text($(".addresss").val())
    })
})


$(document).ready(function(){
    $(".Experience").click(function(){
        $(this).nextAll().not(".tag_add").fadeToggle(350)
    })
})

$(document).ready(function(){
    $(".Education").click(function(){
        $(this).nextAll().not(".tag_add").fadeToggle(350)
    })
})

$(document).ready(function(){
    $(".Project").click(function(){
        $(this).nextAll().not(".tag_add").fadeToggle(350)
    })
})

$(document).ready(function(){
    $(".Certificates").click(function(){
        $(this).nextAll().not(".tag_add").fadeToggle(350)
    })
})

$(document).ready(function(){
    $(".Achiements").click(function(){
        $(this).nextAll().not(".tag_add").fadeToggle(350)
    })
})

$(document).ready(function(){
    $(".Skills").click(function(){
        $(this).nextAll().not(".tag_add").fadeToggle(350)
    })
})


var i = 0;
var j = 0;
var l = 0;
var k = 0;
var h = 0;
var g = 0;

var test, month, year, test2, month2, year2, day;

function append1(){
    test = new Date(document.getElementById("add_infor_input_exper_date_st").value)
    month = test.getMonth() + 1;
    year = test.getFullYear()
    test2 = new Date(document.getElementById("add_infor_input_exper_date_en").value)
    month2 = test2.getMonth() + 1;
    year2 = test2.getFullYear()
    val1 = 'l-' + i;
    let tx1 = $("<li></li>").attr("id", val1)
    let tx2 = $("<h1></h1>").text($("#add_infor_input_title_exper").val())
    let tx3 = $("<p></p>").text($("#add_infor_input_exper").val())
    let tx4 = $("<div></div>").attr("class", "tag_add")
    let tx5 = $("<i></i>").attr("class", "fas fa-times dataid").attr("data", val1)
    let tx6 = $("<h1></h1>").text($("#add_infor_input_title_exper").val())
    let tx7 = $("<p></p>").text("(" + month + "/" + year + " to " + month2 + "/" + year2 + ")")
    if($("#add_infor_input_title_exper").val() != ""){
        $("#CV_experience").append(tx1)
        $("#CV_experience li:last-child").append(tx2, tx7)
        $(".Experience").after(tx4)
        $(".Experience+div").append(tx6, tx5)
        $(".form_add_element_exper").children().not("div.tag_add").not(".button_submit_add").css("display", "none")
        $("#add_infor_input_title_exper").val("")
        $("#add_infor_input_exper_date_st").val("")
        $("#add_infor_input_exper_date_en").val("")
        if($("#add_infor_input_exper").val() != ""){
            $("#CV_experience li:last-child").append(tx3)
            $("#add_infor_input_exper").val("")
        }
    }
    i +=1;
}

function append2(){
    test = new Date(document.getElementById("add_infor_input_edu_date_st").value)
    month = test.getMonth() + 1;
    year = test.getFullYear()
    test2 = new Date(document.getElementById("add_infor_input_edu_date_en").value)
    month2 = test2.getMonth() + 1;
    year2 = test2.getFullYear()
    var val2 = 'm-' + j;
    let tx1 = $("<li></li>").attr("id", val2)
    let tx2 = $("<h1></h1>").text($("#add_infor_input_title_edu").val())
    let tx3 = $("<p></p>").text($("#add_infor_input_edu").val())
    let tx4 = $("<div></div>").attr("class", "tag_add")
    let tx5 = $("<i></i>").attr("class", "fas fa-times dataid").attr("data", val2)
    let tx6 = $("<h1></h1>").text($("#add_infor_input_title_edu").val())
    let tx7 = $("<p></p>").text("(" + month + "/" + year + " to " + month2 + "/" + year2 + ")")
    if($("#add_infor_input_title_edu").val() != ""){
        $("#CV_edu").append(tx1)
        $("#CV_edu li:last-child").append(tx2, tx7)
        $(".Education").after(tx4)
        $(".Education+div").append(tx6, tx5)
        $(".form_add_element_edu").children().not("div.tag_add").not(".button_submit_add").css("display", "none")
        $("#add_infor_input_title_edu").val("")
        $("#add_infor_input_edu_date_st").val("")
        $("#add_infor_input_edu_date_en").val("")
        if($("#add_infor_input_edu").val() != ""){
            $("#CV_edu li:last-child").append(tx3)
            $("#add_infor_input_edu").val("")
        }
    }
    j++;
}

function append3(){
    test = new Date(document.getElementById("add_infor_input_pro_date_st").value)
    month = test.getMonth() + 1;
    year = test.getFullYear()
    test2 = new Date(document.getElementById("add_infor_input_pro_date_en").value)
    month2 = test2.getMonth() + 1;
    year2 = test2.getFullYear()
    var val3 = 'n-' + l;
    let tx1 = $("<li></li>").attr("id", val3)
    let tx2 = $("<h1></h1>").text($("#add_infor_input_title_pro").val())
    let tx3 = $("<p></p>").text($("#add_infor_input_pro").val())
    let tx4 = $("<div></div>").attr("class", "tag_add")
    let tx5 = $("<i></i>").attr("class", "fas fa-times dataid").attr("data", val3)
    let tx6 = $("<h1></h1>").text($("#add_infor_input_title_pro").val())
    let tx7 = $("<p></p>").text("(" + month + "/" + year + " to " + month2 + "/" + year2 + ")")
    if($("#add_infor_input_title_pro").val() != ""){
        $("#CV_pro").append(tx1)
        $("#CV_pro li:last-child").append(tx2, tx7)
        $(".Project").after(tx4)
        $(".Project+div").append(tx6, tx5)
        $(".form_add_element_pro").children().not("div.tag_add").not(".button_submit_add").css("display", "none")
        $("#add_infor_input_title_pro").val("")
        $("#add_infor_input_pro_date_st").val("")
        $("#add_infor_input_pro_date_en").val("")
        if($("#add_infor_input_pro").val() != ""){
            $("#CV_pro li:last-child").append(tx3)
            $("#add_infor_input_pro").val("")
        }
    }
    l++;
}

function append4(){
    test = new Date(document.getElementById("add_infor_input_cert_date").value)
    month = test.getMonth() + 1;
    year = test.getFullYear()
    day = test.getDate()
    var val4 = 'k-'+k;
    let tx1 = $("<li></li>").attr("id", val4)
    let tx2 = $("<h1></h1>").text($("#add_infor_input_title_cert").val())
    let tx3 = $("<p></p>").text($("#add_infor_input_cert").val())
    let tx4 = $("<div></div>").attr("class", "tag_add")
    let tx5 = $("<i></i>").attr("class", "fas fa-times dataid").attr("data", val4)
    let tx6 = $("<h1></h1>").text($("#add_infor_input_title_cert").val())
    let tx7 = $("<p></p>").text("(" + month + "/" + day + "/" + year + ")")
    if($("#add_infor_input_title_cert").val() != ""){
        $("#CV_cert").append(tx1)
        $("#CV_cert li:last-child").append(tx2, tx7)
        $(".Certificates").after(tx4)
        $(".Certificates+div").append(tx6, tx5)
        $(".form_add_element_cert").children().not("div.tag_add").not(".button_submit_add").css("display", "none")
        $("#add_infor_input_title_cert").val("")
        $("#add_infor_input_cert_date").val("")
        if($("#add_infor_input_cert").val() != ""){
            $("#CV_cert li:last-child").append(tx3)
            $("#add_infor_input_cert").val("")
        }
    }
    k++;
}


function append5(){
    test = new Date(document.getElementById("add_infor_input_achi_date").value)
    month = test.getMonth() + 1;
    year = test.getFullYear()
    day = test.getDate()
    var val5 = 'o-'+h;
    let tx1 = $("<li></li>").attr("id", val5)
    let tx2 = $("<h1></h1>").text($("#add_infor_input_title_achi").val())
    let tx3 = $("<p></p>").text($("#add_infor_input_achi").val())
    let tx4 = $("<div></div>").attr("class", "tag_add")
    let tx5 = $("<i></i>").attr("class", "fas fa-times dataid").attr("data", val5)
    let tx6 = $("<h1></h1>").text($("#add_infor_input_title_achi").val())
    let tx7 = $("<p></p>").text("(" + month + "/" + day + "/" + year + ")")
    if($("#add_infor_input_title_achi").val() != ""){
        $("#CV_achi").append(tx1)
        $("#CV_achi li:last-child").append(tx2, tx7)
        $(".Achiements").after(tx4)
        $(".Achiements+div").append(tx6, tx5)
        $(".form_add_element_achi").children().not("div.tag_add").not(".button_submit_add").css("display", "none")
        $("#add_infor_input_title_achi").val("")
        $("#add_infor_input_achi_date").val("")
        if($("#add_infor_input_achi").val() != ""){
            $("#CV_achi li:last-child").append(tx3)
            $("#add_infor_input_achi").val("")
        }
    }
    h++;
}

function append6(){
    var val8
    var val7 = document.getElementById("list_skills_level").value 
    if(val7 == 'Beginer'){
        val8 = '25%'
    }else if(val7 == 'Intermediate'){
        val8 = '50%'
    }else if(val7 == 'Advanced level'){
        val8 = '75%'
    }else{
        val8 = '95%'
    }
    var val6 = 'p-'+g;
    let tx1 = $("<li></li>").attr("id", val6)
    let tx2 = $("<h1></h1>").text($("#add_infor_input_title_ski").val())
    let tx4 = $("<div></div>").attr("class", "tag_add")
    let tx5 = $("<i></i>").attr("class", "fas fa-times dataid").attr("data", val6)
    let tx6 = $("<h1></h1>").text($("#add_infor_input_title_ski").val())
    var tx7 = $("<div></div>").attr("class", "bar_inside").width(val8)
    let tx8 = $("<div></div>").attr("class", "bar_outside")
    if($("#add_infor_input_title_ski").val() != ""){
        $("#CV_ski").append(tx1)
        $("#CV_ski li:last-child").append(tx2, tx8)
        $("#CV_ski li:last-child .bar_outside").append(tx7)
        $(".Skills").after(tx4)
        $(".Skills+div").append(tx6, tx5)
        $(".form_add_element_ski").children().not("div.tag_add").not(".button_submit_add").css("display", "none")
        $("#add_infor_input_title_ski").val("")
        $("#add_infor_input_ski_date").val("")
        $("#list_skills_level").val("")
    }
    g++;
}

$(document).ready(function(){
    $(".review_cv").click(function(){
        if($("#CVp2").css("display") == 'block'){
            $("#footer").fadeOut()
            $("#head").fadeOut()
            $("#button_menu").fadeOut()
            $("#button_turnback").fadeIn(1500)
            $(".div_around").fadeOut()
            $(".button_menu_bar").css({
                height : "0",
                top: "668px"
            })
            $("#CV").removeClass("scale-up-center")
            $("#CVp2").removeClass("scale-up-center")
            $("#table_add_infor").animate({left : "-2000px"}, 300)
            $("#CV").delay(400).animate({left: "-300px"}, 500, function(){
                $("#CVp2").animate({left: "300px", top : "-=1170px"})
                $("#CV").addClass("scale-down-center1")
                $("#CVp2").addClass("scale-down-center1")
                window.scrollTo({top:235,behavior:'smooth'});   
            })
        }else{
            $("#footer").fadeOut()
            $("#head").fadeOut()
            $("#button_menu").fadeOut()
            $("#button_turnback").fadeIn(1500)
            $(".div_around").fadeOut()
            $(".button_menu_bar").css({
                height : "0",
                top: "668px"
            })
            $("#CV").removeClass("scale-up-center")
            $("#table_add_infor").animate({left : "-2000px"}, 300)
            $("#CV").delay(400).animate({left: "0"}, 500, function(){
                $("#CV").addClass("scale-down-center1")
                window.scrollTo({top:235,behavior:'smooth'});   
            })
        }
    })
})

$(document).ready(function(){
    $("#button_turnback").click(function(){
        if($("#CVp2").css("display") == 'block'){
            $("#footer").fadeIn()
            $("#head").fadeIn()
            $("#button_menu").fadeIn()
            $("#button_turnback").fadeOut()
            $(".div_around").fadeIn()
            $("#CV").addClass("scale-up-center")
            $("#CV").removeClass("scale-down-center1")
            $("#CVp2").addClass("scale-up-center")
            $("#CVp2").removeClass("scale-down-center1")
            $("#CVp2").animate({top : "+=1170px" ,left: "250px"}, 90)
            $("#CV").delay(400).animate({left: "250px"}, 500, function(){
                window.scrollTo({top:0,behavior:'smooth'});
                $("#table_add_infor").animate({left : "0"}, 500)
            })
        }else{
            $("#footer").fadeIn()
            $("#head").fadeIn()
            $("#button_menu").fadeIn()
            $("#button_turnback").fadeOut()
            $(".div_around").fadeIn()
            $("#CV").addClass("scale-up-center")
            $("#CV").removeClass("scale-down-center1")
            $("#CV").delay(400).animate({left: "250px"}, 500, function(){
                window.scrollTo({top:0,behavior:'smooth'});
                $("#table_add_infor").animate({left : "0"}, 500)
            })
        }
    })
})



$(document).on("click", ".print_cv", function(){
    window.print()
})

$(document).ready(function(){
    $("#menu").click(function(){
        if($(".button_menu_bar").height() == '0' ){
            $(".button_menu_bar").animate({
                height: '250px',
                top: '450px'
            })
        }else{
            $(".button_menu_bar").animate({
                height: '0',
                top: '668px'
            }, 100)
        }
    })
})

$(document).ready(function(){
    $(".remove_CV").click(function(){
        $("#table_warning").fadeIn()
    })
})

$(document).ready(function(){
    $(".button_cancel").click(function(){
        $("#table_warning").fadeOut()
    })
})

$(document).ready(function(){
    $(".button_conti").click(function(){
        $(".prof_title").text("")
        $(".intro_user").text("")
        $(".ct").text("")
        $(".CV_exper_informations").empty()
        $("#table_warning").fadeOut()
        $(".tag_add").remove()
        $(".input_name_infor").not($(".name")).val("")
        $(".input_contact_infor").val("")
    })
})

var luu, luu2, save;

$(document).ready(function(){
    console.log($(".add_infor_button"))
    $(".add_infor_button").click(function(){
        luu = $(".height").height()
        if(luu > 960){
            $("#CVp2").css("display", "block")
            save = $(".height .infor_user:last-child")
            $(".height .infor_user:last-child").remove()
            $("#CVp2 .main_informationp2").prepend(save)
            window.scrollTo({top:1200,behavior:'smooth'});
        }
    })
})


$(document).on("click", ".dataid",function(){
    var a = $(this).attr("data")
    var b = document.getElementById(a)
    b.remove()
    $(this).parent().remove()
    luu2 = $(".main_informationp2 .infor_user:first-child").outerHeight()
    luu = $(".height").height()
    console.log(luu2)
    if((luu + luu2) < 960){
        save = $(".main_informationp2 .infor_user:first-child")
        $("#CVp2 .main_informationp2 .infor_user:first-child").remove()
        $(".height").append(save)
        if($(".main_informationp2").children()){
            $("#CVp2").css("display", "none")
        }else{
            window.scrollTo({top:700,behavior:'smooth'});
        }
        
    }
});