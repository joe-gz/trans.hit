$(document).ready(function(){
$('.selectpicker').on('change', function(){
  Station.fetch().then(function(stations){
    Station.all.forEach(function(station){
      var view = new StationView(station)
      view.render();
    })
  })
})


  $('.signup').on('click', function(){
    var cssSelect = $('.signup-form').css('display');
    if (cssSelect === 'none'){
      $('.signup-form').show();
      $('.login-form').hide();
    } else {
      $('.signup-form').hide();
    }
  })

  $('.login').on('click', function(){
    var cssSelect = $('.login-form').css('display');
    if (cssSelect === 'none'){
      $('.login-form').show();
      $('.signup-form').hide();
    } else {
      $('.login-form').hide();
    }
  })

});//document.ready end

$('.signup-button').on("click", function(currentUser){
  if( currentUser){
    $('.login').hide();
    $('.signup').hide();
    $('.logout').show();
  } else {
    $('.login').show();
    $('.signup').show();
    $('.logout').hide();
  }
  console.log("clicked?");
});

$('.login-button').on("click", function(currentUser){
  if( currentUser){
    $('.login').hide();
    $('.signup').hide();
    $('.logout').show();
  } else {
    $('.login').show();
    $('.signup').show();
    $('.logout').hide();
  }


  //dropdown metroline functionality
    $('.selectpicker').selectpicker('refresh')
  // $('select[name=selValue]').val(1);
  // $('.selectpicker').selectpicker('refresh')
  // $('.selectpicker').on('change', function(){
  //   var selected = $(this).find("option:selected").val();
  //   alert(selected);
  // });

});
