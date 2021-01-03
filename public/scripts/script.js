$(document).ready(function () {
 
    // Functions for the pop-up windows for designs 0001, 0002, and 0003
    $("#open-design1").on("click", function () {
        $(".popup-overlay, .popup-content").addClass("active").fadeIn();
        $(".popup-text-heading").html("DESIGN0001<br>Rick & Mor-Tee");
        $(".popup-text").html("Design 0001 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.");
        $("#first-slide").attr("src", "assets/Design_0001.png");
        $("#second-slide").attr("src", "assets/Design_0001_B.png");
        $("#third-slide").attr("src", "assets/drive-download-20201207T130014Z-001/dump/dump(2).jpg.png");
        $(".popup-overlay, .popup-content").addClass("active").fadeIn();
        $('.btn-sh').click(function () { 
            //Click function that opens the exact shopee page of the product
            $('<a href="https://shopee.ph/0001-Rick-and-Mor-tee-black--i.292516525.7845507176" target="blank"></a>')[0].click(); 
        })
    });

    $("#open-design2").on("click", function () {
        $(".popup-text-heading").html("DESIGN0002<br>Stormtrooper (B)");
        $(".popup-text").html("Design 0002 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.");
        $("#first-slide").attr("src", "assets/Design_0002.png");
        $("#second-slide").attr("src", "assets/Design_0002_B.png");
        $("#third-slide").attr("src", "assets/drive-download-20201207T130014Z-001/dump/model1.png");
        $(".popup-overlay, .popup-content").addClass("active").fadeIn();
        $('.btn-sh').click(function () { 
            //Click function that opens the exact shopee page of the product
            $('<a href="https://shopee.ph/0002-Storm-Trooper-Tee-black--i.292516525.6045519608" target="blank"></a>')[0].click();
        })
    });

    $("#open-design3").on("click", function () {
        $(".popup-text-heading").html("DESIGN0003<br>Stormtrooper (W)");
        $(".popup-text").html("Design 0003 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.");
        $("#first-slide").attr("src", "assets/Design_0003.png");
        $("#second-slide").attr("src", "assets/Design_0003_B.png");
        $("#third-slide").attr("src", "assets/drive-download-20201207T130014Z-001/dump/dump15(1).jpg.png");
        $(".popup-overlay, .popup-content").addClass("active").fadeIn();
        $('.btn-sh').click(function () { 
            //Click function that opens the exact shopee page of the product
            $('<a href="https://shopee.ph/0001-Storm-Trooper-Tee-white--i.292516525.5945520225" target="blank"></a>')[0].click();
        })
    });

    //Click function for facebook page opening in new tab
    $('.btn-fb').click(function () { 
        window.open("https://www.facebook.com/astrokidsco", "_blank");
    })

    //Removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
    $(".close").on("click", function () {
        $(".popup-overlay, .popup-content").removeClass("active").fadeOut();
    });    

    $('.popup-link-error').click(function () {
        window.alert("Astrokids Co. will release new products soon!");
        return false;
    })

    //Newsletter form validation
    $('.btn-email').click(function () {
        if ($('#exampleInputEmail1').val() == "") {
            $('#emailHelp').html("Please input your email above.")
            window.alert("Please input your email in the form.");
            return false;
        }
    })
})