$(function () {

    let imgHead = [ 
        'img/bg.jpg',
        'img/bg3.jpg',
        'img/bg2.jpg'
    ], i=1;
    function csaHead(){

    if(i > (imgHead.length-1)){
        $('.header').animate({'opacity':'0'},600,function(){
            i=1;
            $('.header').css({'background':'url('+imgHead[0]+')'});
            $('.header').css({'background-size':'cover'});
            $('.header').css({'background-position':'center'});
        });
        $('.header').animate({'opacity':'1'},600);
    }else{
        $('.header').animate({'opacity':'0'},600,function(){
            $('.header').css({'background':'url('+imgHead[i]+')'});
            $('.header').css({'background-size':'cover'});
            $('.header').css({'background-position':'center'});
            i++;
        });
        $('.header').animate({'opacity':'1'},600);
    }

    }
    let intervalCsaHead = setInterval(csaHead,45000);


            let fixedWidth = $('.btnflip-item.btnflip__front').innerWidth(); // плучаем ширину потомка. 
            $('.btnflip').css('width', fixedWidth+'px'); // устанавливает ширину родителя, равной ширине потомка.
            let fixedHeight = $('.btnflip-item.btnflip__front').innerHeight(); // плучаем высоту потомка. 
            $('.btnflip').css('height', fixedHeight+'px'); // устанавливает высоту родителя, равной высоте потомка.

            let fixedWidth1 = $('.btnflip')
            .innerWidth();
            $('.consultation_btn').css('width', fixedWidth1+'px'); 
            let fixedHeight1 = $('.btnflip').innerHeight();
            $('.consultation_btn').css('height', fixedHeight1+'px'); 

     
            let count = 1;
            $('.accordion_header').on('click',function(){
                count++;
                if(count % 2 == 0){
                    $('.accordion_header').addClass('active');
                    $('.accordion_content').slideDown('slow');
                }else{
                    $('.accordion_header').removeClass('active');
                    $('.accordion_content').slideUp('slow');
                }
                
            });
            let count1 = 1;
            $('.accordion_header1').on('click',function(){
                count1++;
                if(count1 % 2 == 0){
                    $('.accordion_header1').addClass('active');
                    $('.accordion_content1').slideDown('slow');
                }else{
                    $('.accordion_header1').removeClass('active');
                    $('.accordion_content1').slideUp('slow');
                }
               
            });
            let count2 = 1;
            $('.accordion_header2').on('click',function(){
                count2++;
                if(count2 % 2 == 0){
                    $('.accordion_header2').addClass('active');
                    $('.accordion_content2').slideDown('slow');
                }else{
                    $('.accordion_header2').removeClass('active');
                    $('.accordion_content2').slideUp('slow');
                }
                
            });



         


            let linkIndex = 0;
            let press;

            $('.anima_ul li').on('click', function(){

                
                $('.anima_link').eq(linkIndex).removeClass('current');
                press=true;

                if(press){
                    $(this).index();
                    linkIndex=$(this).index();
                    $('.anima_link').eq(linkIndex).addClass('current');
                    $('.anima_ul').css({'left': '0'});
                    $('.anima_text').addClass('vis');
                    press=false;
                    $('.anima_tittle').text('');
                    $('.anima_tittle').append(function(){
                        if(linkIndex == 0){ 
                            $('.anima_text').css({'border-image': 'linear-gradient(to left, #f38181, #fce38a)'});
                            $('.anima_text').css({'border-image-slice': '1'});
                            $('.anima_tittle').addClass('first');
                            
                                $('.anima_tittle').removeClass('second');
                                $('.anima_tittle').removeClass('third');
                                $('.anima_tittle').removeClass('fourth'); 
                            
                            return "<div>#1</div>";
                            
                        }
                        if(linkIndex == 1){
                            $('.anima_text').css({'border-image': 'linear-gradient(to left, #f38181, #99eceb)'});
                            $('.anima_text').css({'border-image-slice': '1'});
                            $('.anima_tittle').addClass('second');
                          
                                $('.anima_tittle').removeClass('first');
                                $('.anima_tittle').removeClass('third');
                                $('.anima_tittle').removeClass('fourth'); 
                            
                            return "<div>#2</div>";
                        }
                        else if(linkIndex == 2){
                            $('.anima_text').css({'border-image': 'linear-gradient(to left, #f38181, #bc85d5)'});
                            $('.anima_text').css({'border-image-slice': '1'});
                            $('.anima_tittle').addClass('third');
                          
                                $('.anima_tittle').removeClass('first');
                                $('.anima_tittle').removeClass('second');
                                $('.anima_tittle').removeClass('fourth'); 
                            
                            return "<div>#3</div>";
                        }
                        else{
                            $('.anima_text').css({'border-image': 'linear-gradient(to left, #f38181, #aaf399)'});
                            $('.anima_text').css({'border-image-slice': '1'});
                            $('.anima_tittle').addClass('fourth');
                          
                                $('.anima_tittle').removeClass('first');
                                $('.anima_tittle').removeClass('second');
                                $('.anima_tittle').removeClass('third'); 
                            
                            return "<div>#4</div>";
                        }
                    });
                }
                
               
            });

            $('.icon-cross').on('click',function(){
                    $('.anima_text').removeClass('vis');
                    $('.anima_link').removeClass('current');
                    $('.anima_ul').css({'left': '80px'});
              
            });



            $("[data-scroll]").on('click', function(event){
                event.preventDefault();
                
                let blockId = $(this).data('scroll'),
                    blockOffset = $(blockId).offset().top;

                $("html, body").animate({
                    scrollTop: blockOffset
                }, 500);
            });

           

           


          
            
});