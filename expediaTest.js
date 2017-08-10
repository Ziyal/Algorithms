function isXandO(input) {

    var found = "";
    var lastSeen = "";
    
    for(var i = 0; i < input.length; i++) {
        if(input[i] === "X" || input[i] === "O") {
            found += input[i];
        }
    }
    
    if(found[0] === "X" || found[0] === "O") {
        lastSeen = found[0];
    }
    
    for(var i = 1; i < found.length; i++) {
        if(found[i] === "O" && lastSeen === "X") {
            lastSeen = found[i];
        }
        
        else if(found[i] === "X" && lastSeen === "O"){
            lastSeen = found[i];
        }
        else {
            return 0
        }
    }
    
    return 1;
    
}

// console.log(isXandO("XHOUEXOX"));


function daysApart(birthdays) {
    
    var reference = {
        "JAN": "01",
        "FEB": "02",
        "MAR": "03",
        "APR": "04",
        "MAY": "05",
        "JUN": "06",
        "JUL": "07",
        "AUG": "08",
        "SEP": "09",
        "OCT": "10",
        "NOV": "11",
        "DEC": "12"
    }

    var numDays = {
        "01": 31,
        "02": 28,
        "03": 31,
        "04": 30,
        "05": 31,
        "06": 30,
        "07": 31,
        "08": 31,
        "09": 30,
        "10": 31,
        "11": 30,
        "12": 31
    }

    var oldest = "12-31";
    var youngest = "01-01";
    var totalDaysApart = 0;
    
    for(var i = 1; i < birthdays.length; i++) {
        var month = birthdays[i][0] + birthdays[i][1] + birthdays[i][2];

        var date = reference[month] + "-" + birthdays[i][4] + birthdays[i][5]
        
        if(date[0] + date[1] >= youngest[0] + youngest[1] && date[3] + date[4] >= youngest[3] + youngest[4]){
            youngest = date;
        }
        
        if(date[0] + date[1] <= oldest[0] + oldest[1] && date[3] + date[4] <= oldest[3] + oldest[4]){
            oldest = date;
        }
    }

    if(oldest[0] + oldest[1] === youngest[0] + youngest[1]) {
        var youngMonth = youngest[3] + youngest[4];
        var oldMonth = oldest[3] + oldest[4];
        totalDaysApart = youngMonth - oldMonth;
        
    }
    else{
        // compare dates to find totalDaysApart
        var oldMonthDays = numDays[oldest[0] + oldest[1]];
        var oldDay = oldest[3] + oldest[4]
        var youngDay = youngest[3] + youngest[4]

        totalDaysApart = parseInt(oldMonthDays) - parseInt(oldDay) + parseInt(youngDay);

        console.log("CURRENT SUM:", totalDaysApart)

    }

    return totalDaysApart;

}

console.log(daysApart([3, "SEP-29", "SEP-30"]))