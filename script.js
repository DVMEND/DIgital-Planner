$("document").ready(function(){
    var currentDate = moment()
    var currentDate = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text(currentDate);
    console.log(currentDate);
    
    var workHoursVal=[];
    for (var i=9; i<18; i++){
        workHoursVal.push(moment().hour(i).format("hA"));
    }

    for (var i=0; i < workHoursVal.length; i++){
        $(".container").append("<span class= 'row hour time-block'>",workHoursVal[i], "</span> </br>");
    
    };
    var currentTime = moment()
    var currentTime = moment().format("h:mm:ss")
    for (var i=0; i<workHoursVal.length; i++)
        if (workHoursVal[i]< currentTime) {
            $(".hour").addClass("past");
        }
        else if (workHoursVal[i]>currentTime){
            $(".hour").addClass("future");
        }
        else 
            $(".hour").addClass("present");
    console.log(currentTime);
})


