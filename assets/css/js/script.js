$('#page-link a[href*="#"]').click(function () {
  const elmHash = $(this).attr('href'); 
  const pos = $(elmHash).offset().top-80;
  $('body,html').animate({scrollTop: pos}, 500); 
  return false;
});