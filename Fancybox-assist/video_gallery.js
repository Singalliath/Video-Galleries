$(document).ready (function () {
    $('a.videoLink').each(function(){
    var thumbnailFilePath = 'assets/video/' + $(this).attr('data-videofile') + '.jpg';
    var videoCaption = $(this).attr('title');
    $(this).css('background-image', 'url('+thumbnailFilePath+')');
    $(this).html('<div class="caption">' +videoCaption+ '</div><img class="play" src="assets/images/play.png" alt="">');
    });	
        
        $('a.videoLink').click(function() {
            var videoFile = $(this).attr('data-videofile');
            var videoWidth = Number($(this).attr('data-videowidth'));
            var videoHeight = Number($(this).attr('data-videoheight'));	
    
    var videoCode ='<video width="'+videoWidth+'" height="'+videoHeight+'" controls autoplay autobuffer><source src = "assets/video/'+videoFile+'.ogv" type="video/ogg"><source src = "assets/video/'+videoFile+'.mp4" type="video/mp4"></video>';
    
    $('#videoPlayer').html(videoCode);
    $.fancybox({
            'transitionin' : 'fade',
            'transitionout' : 'fade',
            'overlayColor' : '#000',
            'overlayOpacity' : '.6',
            'autoDimensions':'true',
            'href' : '#videoPlayer'	
    });
    });
    });
    
  