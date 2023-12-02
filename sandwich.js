$class1 = ['link-cheese','link-tomato','cucumber'];
$class2 = ['link-steak','link-salad','link-breadafter'];
$lab1 = ['cheese','tomato','cucumber'];
$lab2 = ['steak','salad','bread after'];
$count = 1;
$(document).ready(function(){
  $('.btn').click(function(){
    if($count <= 3){ 
      $('input[name="toppings"]').prop('checked', false);

      $('.' + $class1[$count]).addClass($class1[$count+1]);
      $('.' + $class1[$count]).removeClass($class1[$count]);

      $('.' + $class2[$count]).addClass($class2[$count+1]);
      $('.' + $class2[$count]).removeClass($class2[$count]);

      $('.label1').html($lab1[$count]);
      $('.label2').html($lab2[$count]);
      $count += 1;
    }
    else{
      $('.plate').fadeIn();
      $('label').remove();
      $('input').remove();
      $('h4').html('Your Sandwich is ready.....<br> Have Enjoy!!!');
      $('h4').css('text-align', 'center');
    }
  });
  $('input').click(function(){
    if($('.link-cheese').prop("checked") == true){
      $('.cheese').fadeIn();
    }
    else if($('.link-cheese').prop("checked") == false){
      $('.cheese').fadeOut();
    }
    if($('.link-steak').prop('checked') == true){
      $('.viande').fadeIn();
    }
    else if($('.link-steak').prop("checked") == false){
      $('.viande').fadeOut();
    }

    if($('.link-tomato').prop("checked") == true){
      $('.tomato').fadeIn();
    }
    else if($('.link-tomato').prop("checked") == false){
      $('.tomato').fadeOut();
    }
    if($('.link-salad').prop('checked') == true){
      $('.salad').fadeIn();
    }
    else if($('.link-salad').prop("checked") == false){
      $('.salad').fadeOut();
    }

    if($('.link-cucumber').prop("checked") == true){
      $('.cucumber').fadeIn();
    }
    else if($('.cucumber').prop("checked") == false){
      $('.cucmber').fadeOut();
    }
    if($('.link-breadafter').prop('checked') == true){
      $('.bread after').fadeIn();
    }
    else if($('.link-breadafter').prop("checked") == false){
      $('.bread after').fadeOut();
    }
  });
});