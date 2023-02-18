// Smooth scrolling for anchor links
$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
  
        var target = this.hash;
        var $target = $(target);
  
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
  });
  
  // Fixed navigation bar with color change on scroll
  $(document).ready(function(){
    var nav = $('nav');
    var navOffset = nav.offset().top;
  
    $(window).scroll(function(){
      var scrollPos = $(this).scrollTop();
  
      if (scrollPos > navOffset) {
        nav.addClass('fixed-nav');
      } else {
        nav.removeClass('fixed-nav');
      }
    });
  });
  
  // Form validation for contact section
  $(document).ready(function(){
    $('form').submit(function(e) {
      e.preventDefault();
      var name = $('#name').val();
      var email = $('#email').val();
      var message = $('#message').val();
  
      if (name == '') {
        alert('Please enter your name');
        return;
      }
      if (email == '') {
        alert('Please enter your email');
        return;
      }
      if (message == '') {
        alert('Please enter a message');
        return;
      }
  
      // Here you can add code to send the form data to a server or display a success message
      alert('Your message has been sent!');
      $('form')[0].reset();
    });
  });
  