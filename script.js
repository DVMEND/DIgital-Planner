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
        $("#col1").append("<span class= 'hour row time '>"+ workHoursVal[i]+ "</span>");
    
    };
    var hoursId=["nine","ten","eleven","twelve","one","two","three","four","five"];
    for (var i=0; i < workHoursVal.length; i++){
        $("#col2").append("<textarea name='events' cols='1' rows='2' class= 'row block input' id = "+hoursId[i]+"></textarea>");

    };

    // for (var i=0; i < hours.length; i++){
    //     $("#col2")[0].nextSibling.data.attr("id", (hours)[i]);
    // };


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
    
    var buttonsId=["btn1", "btn2", "btn3", "btn4", "btn5", "btn6", "btn7", "btn8", "btn9",]
    for (var i=0; i < workHoursVal.length; i++){
        $("#col3").append("<button class = 'saveBtn i:hover row far fa-save' id='"+buttonsId[i]+"'></button>");
    
    };
    
    var nineAm=$("#nine").val();
    var tenAm=$("#ten").val();
    var elevenAm=$("#eleven").val();
    var twelvePm=$("#twelve").val();
    var onePm=$("#one").val();
    var twoPm=$("#two").val();
    var threePm=$("#three").val();
    var fourPm=$("#four").val();
    var fivePm=$("#five").val();


    $("#btn1").click(function(){
        nineAm= $("#nine").val();
        console.log(nineAm);
        localStorage.setItem("nine", JSON.stringify(nineAm));
    });
    
    $("#btn2").click(function(){
        tenAm= $("#ten").val();
        localStorage.setItem("ten", JSON.stringify(tenAm));
    });

    $("#btn3").click(function(){
        elevenAm= $("#eleven").val();
        localStorage.setItem("eleven", JSON.stringify(elevenAm));
    });

    $("#btn4").click(function(){
        twelvePm= $("#twelve").val();
        localStorage.setItem("twelve", JSON.stringify(twelvePm));
    });

    $("#btn5").click(function(){
        onePm= $("#one").val();
        localStorage.setItem("one", JSON.stringify(onePm));
    });

    $("#btn6").click(function(){
        twoPm= $("#two").val();
        localStorage.setItem("two", JSON.stringify(twoPm));
    });

    $("#btn7").click(function(){
        threePm= $("#three").val();
        localStorage.setItem("three", JSON.stringify(threePm));
    });

    $("#btn8").click(function(){
        fourPm= $("#four").val();
        localStorage.setItem("four", JSON.stringify(fourPm));
    });

    $("#btn9").click(function(){
        fivePm= $("#five").val();
        localStorage.setItem("five", JSON.stringify(fivePm));
    });

    var savedNine= JSON.parse(localStorage.getItem('nine'));
    var savedTen= JSON.parse(localStorage.getItem('ten'));
    var savedEleven= JSON.parse(localStorage.getItem('eleven'));
    var savedTwelve= JSON.parse(localStorage.getItem('twelve'));
    var savedOne= JSON.parse(localStorage.getItem('one'));
    var savedTwo= JSON.parse(localStorage.getItem('two'));
    var savedThree= JSON.parse(localStorage.getItem('three'));
    var savedFour= JSON.parse(localStorage.getItem('four'));
    var savedFive= JSON.parse(localStorage.getItem('five'));
    
    $("#nine").val(savedNine);
    $("#ten").val(savedTen);
    $("#eleven").val(savedEleven);
    $("#twelve").val(savedTwelve);
    $("#one").val(savedOne);
    $("#two").val(savedTwo);
    $("#three").val(savedThree);
    $("#four").val(savedFour);
    $("#five").val(savedFive);
    

})


