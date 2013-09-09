var lottery = (function($){

    return {
        init: function() {
            
            // To show or hide Choose Numbers
            $('a.btn-add').click(function(){
                if($('div.choose-numbers').css('display') == 'none')
                {
                    $('a.btn-add').html('Quit<span></span>');            
                    $('div.sets').hide();
                    $('div.numbers h2').hide();
                    $('div.choose-numbers').slideDown('fast');
                }
                else
                {
                    $('div.choose-numbers').slideUp(50);
                    $('a.btn-add').html('Add new set of numbers<span></span>');
                    $('button#save-lottomax').hide();
                    $('div.sets').show();
                    $('div.numbers h2').show();
                }            
            });


            // To select numbers you wish to add and visor
            $('input.btn-number').click(function(){
                var display = '';

                if($(this).hasClass('chosen')) {
                    $(this).removeClass('chosen');
                }
                else {
                    $(this).addClass('chosen');
                }

                if($('input.chosen').size() > 7)
                {
                    $('p.visor-error').css('display', 'block');
                    $('button#save-lottomax').hide();
                }
                else if($('input.chosen').size() == 7) {
                    $('p.visor-error').css('display', 'none');
                    $('button#save-lottomax').show();
                }
                    
                else
                {
                    $('p.visor-error').css('display', 'none');
                    $('button#save-lottomax').hide();
                }

                $('input.chosen').each(function(idx, elem){
                    display += $(elem).val() + '&nbsp;&nbsp;';
                });

                $('p.visor-numbers').html(display);
            });

            
            // To save numbers
            $('#save-lottomax').click(function(){
                var aToSave = [];

                $('input.chosen').each(function(idx, elem){
                    aToSave.push($(elem).val());;
                });
                
                lottery.addNewNumbers(aToSave);
            });
            
        }



    }

    /*lottery.actions = function(){
        $('button').keydown(function(){
            $(this).addClass('click-action');
        });
        $('button').keyup(function(){
            $(this).removeClass('click-action');
        });
    
    
        $('a.btn-add').click(function(){
            if($('div.choose-numbers').css('display') == 'none')
            {
                $('a.btn-add').html('Quit<span></span>');            
                $('div.sets').hide();
                $('div.numbers h2').hide();
                $('div.choose-numbers').slideDown('fast');
            }
            else
            {
                $('div.choose-numbers').slideUp(50);
                $('a.btn-add').html('Add new set of numbers<span></span>');
                $('button#save-lottomax').hide();
                $('div.sets').show();
                $('div.numbers h2').show();
            }            
        });
    
    
        $('input.btn-number').click(function(){
            if($(this).hasClass('chosen')) {
                $(this).removeClass('chosen');
            }
            else {
                $(this).addClass('chosen');
            }
        });

            if($('input.chosen').size() > 7)
            {
                $('p.visor-error').css('display', 'block');
                $('button#save-lottomax').hide();
            }
            else if($('input.chosen').size() == 7)
                $('button#save-lottomax').show();
            else
            {
                $('p.visor-error').css('display', 'none');
                $('button#save-lottomax').hide();
            }
            

            $('input.chosen').each(function(){
                lottery.display += $(this).val() + '&nbsp;&nbsp;';
            });
               

            lottery.toSave = lottery.display
             

            $('p.visor-numbers').html(lottery.display);
                lottery.display = '';
            });
        

lottery.display = ''; 
lottery.toSave = ''; 

lottery.init = function(){
    lottery.actions();
}*/

})(jQuery);



$(document).ready(lottery.init);