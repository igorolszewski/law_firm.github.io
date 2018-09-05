


    
    $('.clothes-pics').each(function(i){
        
        setTimeout(function(){
        $('.clothes-pics').eq(i).addClass('is-showing');
        }, 150*(i+1));
        
    });
   
    