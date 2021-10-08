const newdatetime = (params) => {
    const datetime = new Date (Date.parse(params));
    var ampm = datetime.getHours() >= 12 ? 'P.M.' : 'A.M.';
    const hours = datetime.getHours() > 12 ?(datetime.getHours()-12 >=10 ? datetime.getHours()-12: "0"+ (datetime.getHours()-12).toString()): (datetime.getHours() >=10 ? datetime.getHours() : "0" + datetime.getHours().toString())
    const time = hours + datetime.toTimeString().substring(2,5)+ ' ' + ampm;
                        
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
    const day1= day+1
    const date = month + ' '+ day1 + suffix + ', ' + year

    return [date,time]     
 }

 const newtime = (params) => {
    const datetime = new Date (Date.parse(params));
    var ampm = datetime.getHours() >= 12 ? 'P.M.' : 'A.M.';
    const hours = datetime.getHours() > 12 ?(datetime.getHours()-12 >=10 ? datetime.getHours()-12: "0"+ (datetime.getHours()-12).toString()): (datetime.getHours() >=10 ? datetime.getHours() : "0" + datetime.getHours().toString())
    const time = hours + datetime.toTimeString().substring(2,5)+ '\n ' + ampm;

    return time   
 }

 const currentdate = () => {
    var week = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
        var mon = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');
        var day  = week[new Date().getDay()];
        var date = new Date().getDate(); //Current Date
        var month = mon[new Date().getMonth()]; //Current Month
        var year = new Date().getFullYear(); //Current Year

    return day+ ', ' + month + ' ' + date     
 }


 export {newdatetime,newtime,currentdate}