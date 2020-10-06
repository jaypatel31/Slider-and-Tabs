//*******TABS**********

    function intialDateTab(){
        let today = new Date();
        today = today.getDate();
        let found=0;
        let allDate = document.getElementsByClassName('tab-card');
        let allEvent = document.getElementsByClassName('event-descp');
        for(i = 0; i < allDate.length; i++){
            let date = allDate[i].children[1].children[1].innerText;
            date = date.match(/\d+/ig);
            date =date[0];
            if(today==date){
                allDate[i].children[0].classList.add('active');
                allEvent[i].classList.add('active');
                found++;
            }
        }
        if(found==0){
            dateChange('0');
        }
    }
    intialDateTab();
    function dateChange(num){
        let i=0;
        //let activeDate = event.path[2].children[0];
        //console.log(event.path);
        let allDate = document.getElementsByClassName('tab-card');
        let allEvent = document.getElementsByClassName('event-descp');
        for(i = 0; i < allDate.length; i++){
            allDate[i].children[0].classList.remove('active');
            allEvent[i].classList.remove('active');
        }
       allDate[num].children[0].classList.add('active');
       allEvent[num].classList.add('active');
    }

//*****************TABS SLIDER JS***************

   var slider = tns({
    container: '.my-slider',
     "items": 4,
     "controls": true,
     "controlsText" : ['<span class="material-icons">arrow_back_ios</span>','<span class="material-icons">arrow_forward_ios</span>'],
      "autoplay": false,
      "slideBy": "1",
      "mouseDrag": true,
      "loop": false,
       "responsive": {
        "350": {
          "items": 1
        },
        "500": {
          "items": 3
        },
        "1100": {
         "items" : 4
        }
      },
      "nav":false,
      "swipeAngle": false,
      "speed": 400,
    });