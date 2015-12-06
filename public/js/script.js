$(document).ready(function(){
  Station.fetch().then(function(stations){
    Station.all.forEach(function(station){
      var view = new StationView(station)
      view.render();
    })
  })

  $('.signup').on('click', function(){
    $('.signup-form').toggleClass('hidden')
    // e.preventDefault()
  })

});//document.ready end
