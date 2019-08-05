<!--崩溃欺骗-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "http://yeahoo.top/favicon.ico");
         document.title = '🙃 我要崩溃了';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "http://yeahoo.top/favicon.ico");
         document.title = '🙂 我回来了 | ' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });