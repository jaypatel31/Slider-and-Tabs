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