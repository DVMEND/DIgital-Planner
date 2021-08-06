$("document").ready(function(){
    var currentDate = moment()
    var currentDate = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text(currentDate);
    console.log(currentDate);
    
    var workHoursVal=[];
    for (var i=9; i<18; i++){
        workHoursVal.push(moment().hour(i).format("hA"));
    }
    console.log(workHoursVal);

    for (var i=0; i < workHoursVal.length; i++){
        $("#col1").append("<span class= 'hour row time'>"+ workHoursVal[i]+ "</span></br>");
    
    };

    for (var i=0; i < workHoursVal.length; i++){
        $("#col2").append("<input class= 'row block input'></br>");
    
    };

    var currentTime = moment()
    var currentTime = moment().format("h:mm:ss")
    for (var i=0; i<workHoursVal.length; i++)
        if (workHoursVal[i]< currentTime) {
            $(".block").addClass("past");
        }
        else if (workHoursVal[i]>currentTime){
            $(".block").addClass("future");
        }
        else 
            $(".block").addClass("present");
    console.log(currentTime);
})


