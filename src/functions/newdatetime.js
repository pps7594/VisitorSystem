const newdatetime = (params) => {
    const datetime = new Date (Date.parse(params));
    var ampm = datetime.getHours() >= 12 ? 'P.M.' : 'A.M.';
    const time = datetime.toTimeString().substring(0,5) + ' ' + ampm;
                        
    var mon = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');
    const month = mon[datetime.getMonth()];
    const year = datetime.getFullYear();
    const day = datetime.getDate()-1;
    const lastnum = day.toString().substring(-1);
    var suffix ='';
    if(lastnum==1){
        suffix = 'st'
    }
    else if(lastnum==2){
        suffix = 'nd'
    }
    else if(lastnum==3){
        suffix = 'rd'
    }
    else if(lastnum==0 || lastnum>=4){
        suffix = 'th'
    }
    const date = month + ' '+ day + suffix + ', ' + year

    return [date,time]     
 }

 export default newdatetime