
// Plugin: YouTube Inline Video Player
// Framework: JQuery
// Date: 12th January 2017
// Author: Kyri Kyriacou
// www.cheekyiguana.com

$(document).ready(function() {

  var $currentYTVideoSrc = $('.video-wrapper').data('yt-src');
  var $insertVideo = $('button.insertVideo');

  function YTInlineVideo(link) {
    var $videoPath = 'https://www.youtube.com/embed/';
    var $videoSrc = link.substr(link.indexOf('v=') + 1);
    var $result = '<div class="video-inline"><iframe id="YTVideo" type="text/html" src="' + $videoPath + $videoSrc + '?autoplay=1&rel=0&enablejsapi=1" frameborder="0" allowfullscreen></iframe></div>';
    $($result).appendTo('.video-wrapper');
    $('.video-inline').css('display', 'block');    
    return $result;
  }

  $insertVideo.on('click', function() {
    console.log('called');
    YTInlineVideo($currentYTVideoSrc);
    $(this).hide();
  });

});