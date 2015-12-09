$(document).ready(function(){
$('.dropdown-menu').on('click', function(){
  Incident.fetch();
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
