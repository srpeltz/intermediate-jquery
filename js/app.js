console.log('connected')
$( document ).ready(function(){

$('#myBtn').on('click', function (){
  alert('You Clicked Me!')
  event.stopPropagation()
})

$('#container').on('click', function(){
  alert('you clicked the container sucka!')
})

$('#drinks').append('<li>Mt Dew</li><li>Dr Pepper</li><li>Booze</li>')

$('#foods').append('<li>Pizza</li><li>Your Mom</li><li>Steak</li>')

// var foods = ['burgers', 'fries', 'pasta', 'shrimp', 'sushi']
//
// for (var i = 0; i < foods.length; i++) {
//   $('#foods').append('<li>' + foods[i] + '</li>')
// }

$('#addFood').on('click', function(){
  if($('#foodInput').val() != '') {
  var newFood = $('#foodInput').val()
  $('#foods').append('<li>' + newFood + '</li>')
  $('#foodInput').val('')
  }
})

$('#addDrink').on('click', function(){
  if($('#drinkInput').val() != '') {
    var newDrink = $('#drinkInput').val()
    $('#drinks').append('<li>' + newDrink + '</li>')
    $('#drinkInput').val('')
  }
})

$('#drinkInput').keydown(function(e){
    if(e.keyCode == 13){
      var newDrink = $('#drinkInput').val()
      if(newDrink != '') {
        $('#drinks').append('<li>' + newDrink + '</li>')
        $('#drinkInput').val('')
      }
    }
  })

  $('#foodInput').keydown(function(e){
      if(e.keyCode == 13){
        var newDrink = $('#foodInput').val()
        if(newDrink != '') {
          $('#foods').append('<li>' + newDrink + '</li>')
          $('#foodInput').val('')
        }
      }
    })


})
