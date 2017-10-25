$(document).ready(function(){

    var data = {
        labels: ['Tue', 'Wed', 'Fri'],
        series: [
          [0, 4, 0]
        ]
      };
      
      new Chartist.Line('#chart17', data);

      //////

      $('.chart').easyPieChart({
        scaleColor: false,
        lineWidth: 10,
        lineCap: 'round',
        barColor: '#333',
        size: 150,
        animate: 500
      });

      /////

      $('.skills').mouseenter(function(){
        
            $('.skills > div').each(function(){

                var val = $(this).find('.heading-D span').text();
                $(this).find('div span').animate({
                    width: val,
                    opacity : '1',
                });

            });

        });

        /////
        $(document).on('click','.menu .icon', function(){
            $('.menu-nav').toggleClass('show-menu');
        });

        //////
        
        $(document).on('click','.search-icon', function(){
            $(this).siblings('input').toggleClass('show-search');
        });

});