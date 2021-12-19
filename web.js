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
                $(".back_right p").addClass("puff-in-center").delay(300).fadeIn(300, function(){
                    $(".back_right h1").addClass("puff-in-center").delay(300).fadeIn(300, function(){
                        $(".name_part3").addClass("puff-in-center")
                        $(".about").delay(1300).fadeIn("slow")
                        $(".templet").delay(1400).fadeIn("slow", function(){
                            $(".name_part3").css("opacity", "1")
                                $(".back_right h1").css("opacity", "1")
                                $(".back_right p").css("opacity", "1")
                                $(".name_part3").removeClass("puff-in-center")
                                $(".back_right h1").removeClass("puff-in-center")
                                $(".back_right p").removeClass("puff-in-center")
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
                    $(".back_right p").addClass("puff-in-center").delay(300).fadeIn(300, function(){
                        $(".back_right h1").addClass("puff-in-center").delay(300).fadeIn(300, function(){
                            $(".name_part3").addClass("puff-in-center")
                            $(".about").delay(1300).fadeIn("slow")
                            $(".templet").delay(1400).fadeIn("slow", function(){
                                $(".name_part3").css("opacity", "1")
                                $(".back_right h1").css("opacity", "1")
                                $(".back_right p").css("opacity", "1")
                                $(".name_part3").removeClass("puff-in-center")
                                $(".back_right h1").removeClass("puff-in-center")
                                $(".back_right p").removeClass("puff-in-center")
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
        $(".name_part1").addClass("scale-out-center")
        $(".name_part2").addClass("scale-out-center")
        $(".name_part3").addClass("scale-out-center")
        $(".back_right").delay(700).animate({width : "37%"}, 200, function(){
            $(".about").delay(300).fadeOut("slow")
            $(".templet").delay(400).fadeOut("slow", function(){
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
                    $(".back_right").fadeOut(700)
                    $("#intro_web").fadeOut(700, function(){
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
        $('.picture_user .user_img')
          .attr('src', e.target.result)
          .width(90)
          .height(90)
          .css({
              "position" : 'absolute',
              "left" : "3px",
              "top" : "3px",
              "border-radius" : "301px"
          });
        $('.picture_user2 .user_img')
        .attr('src', e.target.result)
        .css({
            "width": "100%",
            "height": "100%",
            "border-radius": "100px",
            "position": "relative",
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
    if($("#CV_experience").length != 0){
        test = new Date(document.getElementById("add_infor_input_exper_date_st").value)
        month = test.getMonth() + 1;
        year = test.getFullYear()
        test2 = new Date(document.getElementById("add_infor_input_exper_date_en").value)
        month2 = test2.getMonth() + 1;
        year2 = test2.getFullYear()
        val1 = 'l-' + i;
        let tx1 = $("<li></li>").attr("class", val1)
        let tx2 = $("<h1></h1>").text($("#add_infor_input_title_exper").val())
        let tx3 = $("<p></p>").text($("#add_infor_input_exper").val())
        let tx4 = $("<div></div>").attr("class", "tag_add")
        let tx5 = $("<i></i>").attr("class", "fas fa-times dataid").attr("data", val1)
        let tx6 = $("<h1></h1>").text($("#add_infor_input_title_exper").val())
        let tx7 = $("<p></p>").text("(" + month + "/" + year + " to " + month2 + "/" + year2 + ")")
        if($("#add_infor_input_title_exper").val() != ""){
            $("#CV_experience, #CV_experience2").append(tx1)
            $("#CV_experience li:last-child, #CV_experience2 li:last-child").append(tx2, tx7)
            $(".Experience").after(tx4)
            $(".Experience+div").append(tx6, tx5)
            $(".form_add_element_exper").children().not("div.tag_add").not(".button_submit_add").css("display", "none")
            $("#add_infor_input_title_exper").val("")
            $("#add_infor_input_exper_date_st").val("")
            $("#add_infor_input_exper_date_en").val("")
            if($("#add_infor_input_exper").val() != ""){
                $("#CV_experience li:last-child, #CV_experience2 li:last-child").append(tx3)
                $("#add_infor_input_exper").val("")
            }
        }
        i +=1;
    }
}

function append2(){
    if($("#CV_edu").length != 0){
        test = new Date(document.getElementById("add_infor_input_edu_date_st").value)
        month = test.getMonth() + 1;
        year = test.getFullYear()
        test2 = new Date(document.getElementById("add_infor_input_edu_date_en").value)
        month2 = test2.getMonth() + 1;
        year2 = test2.getFullYear()
        var val2 = 'm-' + j;
        let tx1 = $("<li></li>").attr("class", val2)
        let tx2 = $("<h1></h1>").text($("#add_infor_input_title_edu").val())
        let tx3 = $("<p></p>").text($("#add_infor_input_edu").val())
        let tx4 = $("<div></div>").attr("class", "tag_add")
        let tx5 = $("<i></i>").attr("class", "fas fa-times dataid").attr("data", val2)
        let tx6 = $("<h1></h1>").text($("#add_infor_input_title_edu").val())
        let tx7 = $("<p></p>").text("(" + month + "/" + year + " to " + month2 + "/" + year2 + ")")
        if($("#add_infor_input_title_edu").val() != ""){
            $("#CV_edu, #CV_edu2").append(tx1)
            $("#CV_edu li:last-child, #CV_edu2 li:last-child").append(tx2, tx7)
            $(".Education").after(tx4)
            $(".Education+div").append(tx6, tx5)
            $(".form_add_element_edu").children().not("div.tag_add").not(".button_submit_add").css("display", "none")
            $("#add_infor_input_title_edu").val("")
            $("#add_infor_input_edu_date_st").val("")
            $("#add_infor_input_edu_date_en").val("")
            if($("#add_infor_input_edu").val() != ""){
                $("#CV_edu li:last-child, #CV_edu2 li:last-child").append(tx3)
                $("#add_infor_input_edu").val("")
            }
        }
        j++;
    }
}

function append3(){
    if($("#CV_pro").length != 0){
        test = new Date(document.getElementById("add_infor_input_pro_date_st").value)
        month = test.getMonth() + 1;
        year = test.getFullYear()
        test2 = new Date(document.getElementById("add_infor_input_pro_date_en").value)
        month2 = test2.getMonth() + 1;
        year2 = test2.getFullYear()
        var val3 = 'n-' + l;
        let tx1 = $("<li></li>").attr("class", val3)
        let tx2 = $("<h1></h1>").text($("#add_infor_input_title_pro").val())
        let tx3 = $("<p></p>").text($("#add_infor_input_pro").val())
        let tx4 = $("<div></div>").attr("class", "tag_add")
        let tx5 = $("<i></i>").attr("class", "fas fa-times dataid").attr("data", val3)
        let tx6 = $("<h1></h1>").text($("#add_infor_input_title_pro").val())
        let tx7 = $("<p></p>").text("(" + month + "/" + year + " to " + month2 + "/" + year2 + ")")
        if($("#add_infor_input_title_pro").val() != ""){
            $("#CV_pro, #CV_pro2").append(tx1)
            $("#CV_pro li:last-child, #CV_pro2 li:last-child").append(tx2, tx7)
            $(".Project").after(tx4)
            $(".Project+div").append(tx6, tx5)
            $(".form_add_element_pro").children().not("div.tag_add").not(".button_submit_add").css("display", "none")
            $("#add_infor_input_title_pro").val("")
            $("#add_infor_input_pro_date_st").val("")
            $("#add_infor_input_pro_date_en").val("")
            if($("#add_infor_input_pro").val() != ""){
                $("#CV_pro li:last-child, #CV_pro2 li:last-child").append(tx3)
                $("#add_infor_input_pro").val("")
            }
        }
        l++;
    }
}

function append4(){
    if($("#CV_cert").length != 0){
        test = new Date(document.getElementById("add_infor_input_cert_date").value)
        month = test.getMonth() + 1;
        year = test.getFullYear()
        day = test.getDate()
        var val4 = 'k-'+k;
        let tx1 = $("<li></li>").attr("class", val4)
        let tx2 = $("<h1></h1>").text($("#add_infor_input_title_cert").val())
        let tx3 = $("<p></p>").text($("#add_infor_input_cert").val())
        let tx4 = $("<div></div>").attr("class", "tag_add")
        let tx5 = $("<i></i>").attr("class", "fas fa-times dataid").attr("data", val4)
        let tx6 = $("<h1></h1>").text($("#add_infor_input_title_cert").val())
        let tx7 = $("<p></p>").text("(" + month + "/" + day + "/" + year + ")")
        if($("#add_infor_input_title_cert").val() != ""){
            $("#CV_cert, #CV_cert2").append(tx1)
            $("#CV_cert li:last-child, #CV_cert2 li:last-child").append(tx2, tx7)
            $(".Certificates").after(tx4)
            $(".Certificates+div").append(tx6, tx5)
            $(".form_add_element_cert").children().not("div.tag_add").not(".button_submit_add").css("display", "none")
            $("#add_infor_input_title_cert").val("")
            $("#add_infor_input_cert_date").val("")
            if($("#add_infor_input_cert").val() != ""){
                $("#CV_cert li:last-child, #CV_cert2 li:last-child").append(tx3)
                $("#add_infor_input_cert").val("")
            }
        }
        k++;
    }
}


function append5(){
    if($("#CV_achi").length != 0){
        test = new Date(document.getElementById("add_infor_input_achi_date").value)
        month = test.getMonth() + 1;
        year = test.getFullYear()
        day = test.getDate()
        var val5 = 'o-'+h;
        let tx1 = $("<li></li>").attr("class", val5)
        let tx2 = $("<h1></h1>").text($("#add_infor_input_title_achi").val())
        let tx3 = $("<p></p>").text($("#add_infor_input_achi").val())
        let tx4 = $("<div></div>").attr("class", "tag_add")
        let tx5 = $("<i></i>").attr("class", "fas fa-times dataid").attr("data", val5)
        let tx6 = $("<h1></h1>").text($("#add_infor_input_title_achi").val())
        let tx7 = $("<p></p>").text("(" + month + "/" + day + "/" + year + ")")
        if($("#add_infor_input_title_achi").val() != ""){
            $("#CV_achi, #CV_achi2").append(tx1)
            $("#CV_achi li:last-child, #CV_achi2 li:last-child").append(tx2, tx7)
            $(".Achiements").after(tx4)
            $(".Achiements+div").append(tx6, tx5)
            $(".form_add_element_achi").children().not("div.tag_add").not(".button_submit_add").css("display", "none")
            $("#add_infor_input_title_achi").val("")
            $("#add_infor_input_achi_date").val("")
            if($("#add_infor_input_achi").val() != ""){
                $("#CV_achi li:last-child").append(tx3)
                $("#CV_achi2 li:last-child").append(tx3)
                $("#add_infor_input_achi").val("")
            }
        }
        h++;
    }
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
    let tx1 = $("<li></li>").attr("class", val6)
    let tx2 = $("<h1></h1>").text($("#add_infor_input_title_ski").val())
    let tx4 = $("<div></div>").attr("class", "tag_add")
    let tx5 = $("<i></i>").attr("class", "fas fa-times dataid").attr("data", val6)
    let tx6 = $("<h1></h1>").text($("#add_infor_input_title_ski").val())
    var tx7 = $("<div></div>").attr("class", "bar_inside").width(val8)
    let tx8 = $("<div></div>").attr("class", "bar_outside")
    if($("#add_infor_input_title_ski").val() != ""){
        $("#CV_ski, #CV_ski2").append(tx1)
        $("#CV_ski li:last-child,  #CV_ski2 li:last-child").append(tx2, tx8)
        $("#CV_ski li:last-child .bar_outside,  #CV_ski2 li:last-child .bar_outside").append(tx7)
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
    $(".remove_items").click(function(){
        $(".height_remove").fadeToggle(100)
    })
})

var sa, sa2, sa3, sa4, sa5;
var si, si2, si3, si4;

function remove_e1(){
    if($(".check_exp").prop("checked") == true){
        $("#CV_experience").empty()
        sa = $("#he1")
        $("#he1").remove()
        $(".form_add_element_exper .tag_add").remove()
        luu2 = $(".main_informationp2 .infor_user:first-child").outerHeight()
        luu = $(".height").height()
        console.log(luu2)
        if((luu + luu2) < 960){
            save = $(".main_informationp2 .infor_user:first-child")
            $("#CVp2 .main_informationp2 .infor_user:first-child").remove()
            $(".height").append(save)
            if($(".main_informationp2").children().length == 0){
                $("#CVp2").css("display", "none") 
            }else{
                window.scrollTo({top:700,behavior:'smooth'});
            }
        }
        if($(".main_informationp2").children().length > 0){
            $("#CVp2").css("display", "block")
        }else{
            $("#CVp2").css("display", "none")
        }
        // CV2
        $("#CV_experience2").empty()
        si = $("#exper")
        $("#exper").remove()
        luu3 = $(".main_inf .user_inf:first-child").outerHeight()
        luu4 = $(".main_inf").height()
        if((luu3 + luu4) < 652){
            save = $("#column1p2 .user_inf:first-child")
            $("#CV2p2 #column1p2 .user_inf:first-child").remove()
            $(".main_inf").append(save)
            if($("#column1p2").children().length == 0){
                $("#CV2p2").css("display", "none") 
            }else{
                window.scrollTo({top:700,behavior:'smooth'});
            }
        }
        if($("#column1p2").children().length > 0){
            $("#CV2p2").css("display", "flex")
        }else{
            $("#CV2p2").css("display", "none")
        }
    }else{
        luu2 = 107
        luu = $(".height").height()
        if((luu + luu2) < 960){
            $(".height").append(sa)
        }else{
            $("#CVp2").css("display", "block")
            $(".main_informationp2").prepend(sa)
        }
        
        // vc 2
        luu3 = 61
        luu4 = $(".main_inf").height()
        if((luu3 + luu4) < 652){
            $(".main_inf").append(si)
        }else{
            $("#CV2p2").css("display", "flex")
            $("#column1p2").prepend(si)
        }  
    }
}

function remove_e2(){
    if($(".check_edu").prop("checked") == true){
        $("#CV_edu").empty()
        $("#CV_edu2").empty()
        sa2 = $("#he2")
        $("#he2").remove()
        $(".form_add_element_edu .tag_add").remove()
        luu2 = $(".main_informationp2 .infor_user:first-child").outerHeight()
        luu = $(".height").height()
        console.log(luu2)
        if((luu + luu2) < 960){
            save = $(".main_informationp2 .infor_user:first-child")
            $("#CVp2 .main_informationp2 .infor_user:first-child").remove()
            $(".height").append(save)
            if($(".main_informationp2").children().length == 0){
                $("#CVp2").css("display", "none")
            }else{
                window.scrollTo({top:700,behavior:'smooth'});
            }
        }
        if($(".main_informationp2").children().length > 0){
            $("#CVp2").css("display", "block")
        }else{
            $("#CVp2").css("display", "none")
        }
    }else{
        luu2 = 107
        luu = $(".height").height()
        console.log(luu)
        console.log(luu2)
        if((luu + luu2) < 960){
            $(".height").append(sa2)
        }else{
            $("#CVp2").css("display", "block")
            $(".main_informationp2").prepend(sa2)
        } 
    }
}

function remove_e3(){
    if($(".check_pro").prop("checked") == true){
        $("#CV_pro").empty()
        sa3 = $("#he3")
        $("#he3").remove()
        $(".form_add_element_pro .tag_add").remove()
        luu2 = $(".main_informationp2 .infor_user:first-child").outerHeight()
        luu = $(".height").height()
        console.log(luu2)
        if((luu + luu2) < 960){
            save = $(".main_informationp2 .infor_user:first-child")
            $("#CVp2 .main_informationp2 .infor_user:first-child").remove()
            $(".height").append(save)
            if($(".main_informationp2").children().length == 0){
                $("#CVp2").css("display", "none")
            }else{
                window.scrollTo({top:700,behavior:'smooth'});
            }
        }
        if($(".main_informationp2").children().length > 0){
            $("#CVp2").css("display", "block")
        }else{
            $("#CVp2").css("display", "none")
        }

        // CV2
        $("#CV_pro2").empty()
        si2 = $("#project")
        $("#project").remove()
        luu3 = $(".main_inf .user_inf:first-child").outerHeight()
        luu4 = $(".main_inf").height()
        if((luu3 + luu4) < 652){
            save = $("#column1p2 .user_inf:first-child")
            $("#CV2p2 #column1p2 .user_inf:first-child").remove()
            $(".main_inf").append(save)
            if($("#column1p2").children().length == 0){
                $("#CV2p2").css("display", "none") 
            }else{
                window.scrollTo({top:700,behavior:'smooth'});
            }
        }
        if($("#column1p2").children().length > 0){
            $("#CV2p2").css("display", "flex")
        }else{
            $("#CV2p2").css("display", "none")
        }
    }else{
        luu2 = 107
        luu = $(".height").height()
        console.log(luu)
        console.log(luu2)
        if((luu + luu2) < 960){
            $(".height").append(sa3)
        }else{
            $("#CVp2").css("display", "block")
            $(".main_informationp2").prepend(sa3)
        }

        // vc 2
        luu3 = 61
        luu4 = $(".main_inf").height()
        if((luu3 + luu4) < 652){
            $(".main_inf").append(si2)
        }else{
            $("#CV2p2").css("display", "flex")
            $("#column1p2").prepend(si2)
        }  

    }
}

function remove_e4(){
    if($(".check_cer").prop("checked") == true){
        $("#CV_cert").empty()
        sa4 = $("#he4")
        $("#he4").remove()
        $(".form_add_element_cert .tag_add").remove()
        luu2 = $(".main_informationp2 .infor_user:first-child").outerHeight()
        luu = $(".height").height()
        console.log(luu2)
        if((luu + luu2) < 960){
            save = $(".main_informationp2 .infor_user:first-child")
            $("#CVp2 .main_informationp2 .infor_user:first-child").remove()
            $(".height").append(save)
            if($(".main_informationp2").children().length == 0){
                $("#CVp2").css("display", "none")
            }else{
                window.scrollTo({top:700,behavior:'smooth'});
            }
        }
        if($(".main_informationp2").children().length > 0){
            $("#CVp2").css("display", "block")
        }else{
            $("#CVp2").css("display", "none")
        }

        // CV2
        $("#CV_cert2").empty()
        si3 = $("#certifi")
        $("#certifi").remove()
        luu3 = $(".main_inf .user_inf:first-child").outerHeight()
        luu4 = $(".main_inf").height()
        if((luu3 + luu4) < 652){
            save = $("#column1p2 .user_inf:first-child")
            $("#CV2p2 #column1p2 .user_inf:first-child").remove()
            $(".main_inf").append(save)
            if($("#column1p2").children().length == 0){
                $("#CV2p2").css("display", "none") 
            }else{
                window.scrollTo({top:700,behavior:'smooth'});
            }
        }
        if($("#column1p2").children().length > 0){
            $("#CV2p2").css("display", "flex")
        }else{
            $("#CV2p2").css("display", "none")
        }
    }else{
        luu2 = 107
        luu = $(".height").height()
        console.log(luu)
        console.log(luu2)
        if((luu + luu2) < 960){
            $(".height").append(sa4)
        }else{
            $("#CVp2").css("display", "block")
            $(".main_informationp2").prepend(sa4)
        }

        // vc 2
        luu3 = 61
        luu4 = $(".main_inf").height()
        if((luu3 + luu4) < 652){
            $(".main_inf").append(si3)
        }else{
            $("#CV2p2").css("display", "flex")
            $("#column1p2").prepend(si3)
        } 
    }
}

function remove_e5(){
    if($(".check_achi").prop("checked") == true){
        $("#CV_achi").empty()
        sa5 = $("#he5")
        $("#he5").remove()
        $(".form_add_element_achi .tag_add").remove()
        luu2 = $(".main_informationp2 .infor_user:first-child").outerHeight()
        luu = $(".height").height()
        console.log(luu2)
        if((luu + luu2) < 960){
            save = $(".main_informationp2 .infor_user:first-child")
            $("#CVp2 .main_informationp2 .infor_user:first-child").remove()
            $(".height").append(save)
            if($(".main_informationp2").children().length == 0){
                $("#CVp2").css("display", "none")
            }else{
                window.scrollTo({top:700,behavior:'smooth'});
            }
        }
        if($(".main_informationp2").children().length > 0){
            $("#CVp2").css("display", "block")
        }else{
            $("#CVp2").css("display", "none")
        }

        // CV2
        $("#CV_achi2").empty()
        si4 = $("#achiment")
        $("#achiment").remove()
        luu3 = $(".main_inf .user_inf:first-child").outerHeight()
        luu4 = $(".main_inf").height()
        if((luu3 + luu4) < 652){
            save = $("#column1p2 .user_inf:first-child")
            $("#CV2p2 #column1p2 .user_inf:first-child").remove()
            $(".main_inf").append(save)
            if($("#column1p2").children().length == 0){
                $("#CV2p2").css("display", "none") 
            }else{
                window.scrollTo({top:700,behavior:'smooth'});
            }
        }
        if($("#column1p2").children().length > 0){
            $("#CV2p2").css("display", "flex")
        }else{
            $("#CV2p2").css("display", "none")
        }
    }else{
        luu2 = 107
        luu = $(".height").height()
        console.log(luu)
        console.log(luu2)
        if((luu + luu2) < 960){
            $(".height").append(sa5)
        }else{
            $("#CVp2").css("display", "block")
            $(".main_informationp2").prepend(sa5)
        }

        // vc 2
        luu3 = 61
        luu4 = $(".main_inf").height()
        if((luu3 + luu4) < 652){
            $(".main_inf").append(si4)
        }else{
            $("#CV2p2").css("display", "flex")
            $("#column1p2").prepend(si4)
        } 
    }
}

$(document).ready(function(){
    $(".review_cv").click(function(){
        $("body").removeClass("color-change-2x2")
        $("body").addClass("color-change-2x")
        if($("#CV").css("display") == 'block'){
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
        }else{
            if($("#CV2p2").css("display") == 'flex'){
                $("#footer").fadeOut()
                $("#head").fadeOut()
                $("#button_menu").fadeOut()
                $("#button_turnback").fadeIn(1500)
                $(".div_around").fadeOut()
                $(".button_menu_bar").css({
                    height : "0",
                    top: "668px"
                })
                $("#CV2").removeClass("scale-up-center")
                $("#CV2p2").removeClass("scale-up-center")
                $("#table_add_infor").animate({left : "-2000px"}, 300)
                $("#CV2").delay(400).animate({left: "-300px"}, 500, function(){
                    $("#CV2p2").animate({left: "300px", top : "-=1170px"})
                    $("#CV2").addClass("scale-down-center1")
                    $("#CV2p2").addClass("scale-down-center1")
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
                $("#CV2").removeClass("scale-up-center")
                $("#table_add_infor").animate({left : "-2000px"}, 300)
                $("#CV2").delay(400).animate({left: "0"}, 500, function(){
                    $("#CV2").addClass("scale-down-center1")
                    window.scrollTo({top:235,behavior:'smooth'});   
                })
            } 
        }
    })
})

$(document).ready(function(){
    $("#button_turnback").click(function(){
        $("body").removeClass("color-change-2x")
        $("body").addClass("color-change-2x2")
        if($("#CV").css("display") == 'block'){
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
        }else{
            if($("#CV2p2").css("display") == 'flex'){
                $("#footer").fadeIn()
                $("#head").fadeIn()
                $("#button_menu").fadeIn()
                $("#button_turnback").fadeOut()
                $(".div_around").fadeIn()
                $("#CV2").addClass("scale-up-center")
                $("#CV2").removeClass("scale-down-center1")
                $("#CV2p2").addClass("scale-up-center")
                $("#CV2p2").removeClass("scale-down-center1")
                $("#CV2p2").animate({top : "+=1170px" ,left: "250px"}, 90)
                $("#CV2").delay(400).animate({left: "250px"}, 500, function(){
                    window.scrollTo({top:0,behavior:'smooth'});
                    $("#table_add_infor").animate({left : "0"}, 500)
                })
            }else{
                $("#footer").fadeIn()
                $("#head").fadeIn()
                $("#button_menu").fadeIn()
                $("#button_turnback").fadeOut()
                $(".div_around").fadeIn()
                $("#CV2").addClass("scale-up-center")
                $("#CV2").removeClass("scale-down-center1")
                $("#CV2").delay(400).animate({left: "250px"}, 500, function(){
                    window.scrollTo({top:0,behavior:'smooth'});
                    $("#table_add_infor").animate({left : "0"}, 500)
                })
            }
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

$(document).ready(function(){
    console.log($(".add_infor_button"))
    $(".add_infor_button").click(function(){
        luu = $(".main_inf").height()
        if(luu > 652){
            $("#CV2p2").css("display", "flex")
            save = $(".main_inf .user_inf:last-child")
            $(".main_inf .user_inf:last-child").remove()
            $("#CV2p2 #column1p2").prepend(save)
            window.scrollTo({top:1200,behavior:'smooth'});
        }
    })
})

var luu3, luu4, luu, luu2;
$(document).on("click", ".dataid",function(){
    var a = $(this).attr("data")
    a = '.' + a;
    console.log(a)
    var b = document.querySelectorAll(a)
    console.log(b)
    for(var i = 0; i<b.length; i++){
        b[i].remove()
    }
    $(this).parent().remove()
    luu2 = $(".main_informationp2 .infor_user:first-child").outerHeight()
    luu = $(".height").height()
    console.log(luu2)
    if((luu + luu2) < 960){
        save = $(".main_informationp2 .infor_user:first-child")
        $("#CVp2 .main_informationp2 .infor_user:first-child").remove()
        $(".height").append(save)
        console.log($(".main_informationp2").children().length)
        if($(".main_informationp2").children().length == 0){
            $("#CVp2").css("display", "none") 
        }else{
            window.scrollTo({top:700,behavior:'smooth'});
        }
    }
    luu3 = $("#column1p2 .user_inf:first-child").outerHeight()
    luu4 = $(".main_inf").height()
    console.log(luu2)
    if((luu3 + luu4) < 652){
        save = $("#column1p2 .user_inf:first-child")
        $("#CV2p2 #column1p2 .user_inf:first-child").remove()
        $(".main_inf").append(save)
        console.log($("#column1p2").children().length)
        if($("#column1p2").children().length == 0){
            $("#CV2p2").css("display", "none") 
        }else{
            window.scrollTo({top:700,behavior:'smooth'});
        }
    }
});


$(document).ready(function(){
    $(".button_chg").click(function(){
        if($("#CV").css("display") == 'block'){
            $("#CV").css("display", "none")
            if($("#CVp2").css("display") == 'block'){
                $("#CVp2").css("display", "none")
            }
            $("#CV2").css("display", "flex")
            if($("#column1p2").children().length > 0){
                $("#CV2p2").css("display", "flex")
            }
            luu = $(".main_inf").height()
            if(luu > 652){
                $("#CV2p2").css("display", "flex")
                save = $(".main_inf .user_inf:last-child")
                $(".main_inf .user_inf:last-child").remove()
                $("#CV2p2 #column1p2").prepend(save)
                window.scrollTo({top:1200,behavior:'smooth'});
            }
            $(".hideCV2").fadeOut()
        }else{
            $("#CV").css("display", "block")
            if($(".main_informationp2").children().length > 0){
                $("#CVp2").css("display", "block")
            }
            $("#CV2").css("display", "none")
            if($("#CV2p2").css("display") == 'flex'){
                $("#CV2p2").css("display", "none")
            }
            luu = $(".height").height()
            if(luu > 960){
                $("#CVp2").css("display", "block")
                save = $(".height .infor_user:last-child")
                $(".height .infor_user:last-child").remove()
                $("#CVp2 .main_informationp2").prepend(save)
                window.scrollTo({top:1200,behavior:'smooth'});
            }
            $(".hideCV2").fadeIn()
        }
    })
})