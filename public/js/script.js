$(document).ready(function(){

$('.selectpicker').on('change', function(){
    Incident.fetch();
  Station.fetch().then(function(stations){
    Station.all.forEach(function(station){
      var view = new StationView(station)
      // view.render();
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

  //dropdown metroline functionality
    $('.selectpicker').selectpicker('refresh')
  // $('select[name=selValue]').val(1);
  // $('.selectpicker').selectpicker('refresh')
  // $('.selectpicker').on('change', function(){
  //   var selected = $(this).find("option:selected").val();
  //   alert(selected);
  // });
$('.choosestation').on('change', function(){
$('html, body').animate({scrollTop: $(document).height()}, 'slow')
  // $('.station').scrollTop()
  // console.log(this.value)
});
});//document.ready end
