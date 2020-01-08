$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 2000);
        return false;
      }
    }
  });
});

(function( $ ) {
  $.fn.google_fonts = function(options) {
  	var defaults = {
        fontname: "arial"
    };
    var options = jQuery.extend(defaults, options);
    var fontname = options.fontname;
    fontname = fontname.replace(/ /gi, "+");
    $("head").append('<link href="//fonts.googleapis.com/css?family='+fontname+'" rel="stylesheet" type="text/css">');
    jQuery(this).css("font-family",options.fontname);
    $("#fontLink").attr("href", "https://www.google.com/fonts#QuickUsePlace:quickUse/Family:"+fontname+"");
    $("#fontTag").html(''+fontname+'');
    return this;
  };

})( jQuery );

    $(document).ready(function() {
    //alert('ready');
    $('#userInput').on('keyup', function(event) {
        $(this).val(function(i, v){
            return v.replace(/[a-zA-z]/, function(c){
               return c.toUpperCase();
                })
            })
        });
    });

    function changeText2(){
    var userInput = document.getElementById('userInput').value;
      $("#content").google_fonts({fontname: $('#userInput').val()});

}


//acciones al dar click en el botón GO!
 $(document).ready(function() {
    $('.SearchIcon').click(function(){
        $('body').css('overflow','hidden');
        $('#content').delay(500).slideDown ("slow");
        $('#tools').delay(500).fadeIn("slow");
        $('#userInput').delay(500).addClass('small-input');
        $('.tt-dropdown-menu').delay(2200).addClass('top');
        $('.tt-hint').delay(2200).addClass('small-input');
        $('#buttonFont').delay(2200).addClass('small-button');
    });
});

//acciones al dar click en los botones de preview
$(document).ready(function() {
  $('ul#tool-options li a').click(function(){
      $("#preloader , #status").fadeIn(0).delay(2000).fadeOut("slow");
      $('ul#tool-options li a').removeClass('active');
      $('#overlayTools').removeClass('overlayToolsVisible');
      $('ul#tool-options').removeClass('tool-optionsVisible');
      $(this).addClass('active');
  });
});



//acciones precarga
$(window).load(function() {
      $("#status").fadeOut();
      $("#preloader").delay(350).fadeOut("slow", function(){
   });
})



$(document).ready(function(){
    //al hacer click en insertar
    $('#buttonFont').click(function(){
      var texto = $('#userInput, #userInputInside').val();
      $('#nombreFont').html(''+ texto +'')
    });
});


$(document).ready(function(){
    //al hacer click en insertar
    $('#buttonFont2').click(function(){
      var texto = $('#userInputInside').val();
      $('#nombreFont2').html(''+ texto +'')
    });
});

$(document).keypress(function(event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        $('.btn').click();
    }
});



//acciones plain text previews


$(document).ready(function() {
    $('#normal').click(function(){
    $('#normal').addClass('active-style');
    $('#textchange').addClass('normalText');
    $('#textchange').removeClass('uppercaseText');
    $('#textchange').removeClass('lowercaseText');
    $('#uppercase, #lowercase').removeClass('active-style');
   });
});

$(document).ready(function() {
    $('#uppercase').click(function(){
    $('#uppercase').addClass('active-style');
    $('#textchange').addClass('uppercaseText');
    $('#textchange').removeClass('normalText');
    $('#textchange').removeClass('lowercaseText');
    $('#normal, #lowercase').removeClass('active-style');
   });
});
$(document).ready(function() {
    $('#lowercase').click(function(){
    $('#lowercase').addClass('active-style');
    $('#textchange').addClass('lowercaseText');
    $('#textchange').removeClass('normalText');
    $('#textchange').removeClass('uppercaseText');
    $('#uppercase, #normal').removeClass('active-style');
   });
});



$(document).ready(function() {
    $('#Medium').click(function(){
    $('#Medium').addClass('active-size');
    $('#textchange').addClass('mediumSize');
    $('#textchange').removeClass('smallSize');
    $('#textchange').removeClass('largeSize');
    $('#textchange').removeClass('xxlSize');
    $('ul.sizes .wrapper .progress').addClass('mediumprogress');
    $('ul.sizes .wrapper .progress').removeClass('largeprogress');
    $('ul.sizes .wrapper .progress').removeClass('xxlprogress');
    $('ul.sizes li.button-size#Large').removeClass('active-size');
    $('ul.sizes li.button-size#XXL').removeClass('active-size');
   });
});
$(document).ready(function() {
    $('#Large').click(function(){
    $('#Large').addClass('active-size');
    $('#Medium').addClass('active-size');
    $('#textchange').addClass('largeSize');
    $('#textchange').removeClass('smallSize');
    $('#textchange').removeClass('mediumSize');
    $('#textchange').removeClass('xxlSize');
    $('ul.sizes .wrapper .progress').addClass('largeprogress');
    $('ul.sizes .wrapper .progress').removeClass('mediumprogress');
    $('ul.sizes .wrapper .progress').removeClass('xxlprogress');
    $('ul.sizes li.button-size#XXL').removeClass('active-size');
   });
});
$(document).ready(function() {
    $('#XXL').click(function(){
    $('#XXL').addClass('active-size');
    $('#Large').addClass('active-size');
    $('#Medium').addClass('active-size');
    $('#textchange').addClass('xxlSize');
    $('#textchange').removeClass('smallSize');
    $('#textchange').removeClass('mediumSize');
    $('#textchange').removeClass('largeSize');
    $('ul.sizes .wrapper .progress').addClass('xxlprogress');
    $('ul.sizes .wrapper .progress').addClass('largeprogress');
   });
});
$(document).ready(function() {
    $('#Small').click(function(){
    $('#Large').removeClass('active-size');
    $('#Medium').removeClass('active-size');
    $('#XXL').removeClass('active-size');
    $('#textchange').addClass('smallSize');
    $('#textchange').removeClass('xxlSize');
    $('#textchange').removeClass('mediumSize');
    $('#textchange').removeClass('largeSize');
    $('ul.sizes .wrapper .progress').removeClass('xxlprogress');
    $('ul.sizes .wrapper .progress').removeClass('largeprogress');
    $('ul.sizes .wrapper .progress').removeClass('mediumprogress');
   });
});



$(document).ready(function() {
    $('ul.aligment li.button-align#center').click(function(){
    $('ul.aligment li.button-align#center').addClass('active-align');
    $('#textchange').addClass('centerAligment');
    $('#textchange').removeClass('leftAligment');
    $('#textchange').removeClass('rightAligment');
    $('ul.aligment li.button-align#right').removeClass('active-align');
    $('ul.aligment li.button-align#left').removeClass('active-align');
   });
});
$(document).ready(function() {
    $('ul.aligment li.button-align#left').click(function(){
    $('ul.aligment li.button-align#left').addClass('active-align');
    $('#textchange').addClass('leftAligment');
    $('#textchange').removeClass('centerAligment');
    $('#textchange').removeClass('rightAligment');
    $('ul.aligment li.button-align#right').removeClass('active-align');
    $('ul.aligment li.button-align#center').removeClass('active-align');
   });
});
$(document).ready(function() {
    $('ul.aligment li.button-align#right').click(function(){
    $('ul.aligment li.button-align#right').addClass('active-align');
    $('#textchange').addClass('rightAligment');
    $('#textchange').removeClass('leftAligment');
    $('#textchange').removeClass('centerAligment');
    $('ul.aligment li.button-align#left').removeClass('active-align');
    $('ul.aligment li.button-align#center').removeClass('active-align');
   });
});


$(document).ready(function() {
    $('div.background_button').click(function(){
    $('div.background_button .color_background').toggleClass('dark');
    $('#container-preview').toggleClass('darkBackground');
    $('#container-preview #textchange').toggleClass('whiteText');
   });
});
