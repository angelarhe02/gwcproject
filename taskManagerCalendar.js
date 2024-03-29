var Calendar = function(o) {
  //Store div id
  this.divId = o.ParentID;

  // Days of week, starting on Sunday
  this.DaysOfWeek = o.DaysOfWeek;
  // Months, stating on January
  this.Months = o.Months;
  // Set the current month, year
  var d = new Date();
  this.CurrentMonth = d.getMonth();
  this.CurrentYear = d.getFullYear();

  var f=o.Format;

  if(typeof(f) == 'string') {
    this.f  = f.charAt(0).toUpperCase();
  } else {
    this.f = 'M'; 
  }

};

// Goes to next month
Calendar.prototype.nextMonth = function() {

  if ( this.CurrentMonth == 11 ) {

    this.CurrentMonth = 0;
    this.CurrentYear = this.CurrentYear + 1;

  } else {

    this.CurrentMonth = this.CurrentMonth + 1;

  }

  this.showCurrent();
};

// Goes to previous month
Calendar.prototype.previousMonth = function() {

  if ( this.CurrentMonth == 0 ) {

    this.CurrentMonth = 11;
    this.CurrentYear = this.CurrentYear - 1;

  } else {

    this.CurrentMonth = this.CurrentMonth - 1;

  }

  this.showCurrent();
};

//
Calendar.prototype.previousYear = function() {

  this.CurrentYear = this.CurrentYear - 1;

  this.showCurrent();
}

//
Calendar.prototype.nextYear = function() {
  console.log(" ");

  console.log("Calendar.prototype.nextYear = function() {");

  console.log("this.CurrentYear == " + this.CurrentYear);

  this.CurrentYear = this.CurrentYear + 1;

  console.log("this.CurrentYear - 1 i.e. this.CurrentYear == " + this.CurrentYear);

  this.showCurrent();
}

// Show current month
Calendar.prototype.showCurrent = function() {

  this.Calendar(this.CurrentYear, this.CurrentMonth);

};

// Show month (year, month)
Calendar.prototype.Calendar = function(y,m) {

  typeof(y) == 'number' ? this.CurrentYear = y : null;

  typeof(y) == 'number' ? this.CurrentMonth = m : null;


  // 1st day of the selected month
  var firstDayOfCurrentMonth = new Date(y, m, 1).getDay();

  // Last date of the selected month
  var lastDateOfCurrentMonth = new Date(y, m+1, 0).getDate();

  // Last day of the previous month
  var lastDateOfLastMonth = m == 0 ? new Date(y-1, 11, 0).getDate() : new Date(y, m, 0).getDate();

  // Write selected month and year. This HTML goes into <div id="month"></div>
  var monthandyearhtml = '<span id="monthandyearspan">' + this.Months[m] + ' - ' + y + '</span>';

  var html = '<table>';

  // Write the header of the days of the week
  html += '<tr>';

  for(var i=0; i < 7;i++) {

    html += '<th class="daysheader">' + this.DaysOfWeek[i] + '</th>';
  }

  html += '</tr>';




  var p = dm = this.f == 'M' ? 1 : firstDayOfCurrentMonth == 0 ? -5 : 2;

  var cellvalue;

  for (var d, i=0, z0=0; z0<6; z0++) {
    html += '<tr>';

    for (var z0a = 0; z0a < 7; z0a++) {

      d = i + dm - firstDayOfCurrentMonth;

      // Dates from prev month
      if (d < 1){

        cellvalue = lastDateOfLastMonth - firstDayOfCurrentMonth + p++;

        html += '<td id="prevmonthdates">' +
              '<span id="cellvaluespan">' + (cellvalue) + '</span><br/>' +
              '<ul id="cellvaluelist"><li>Lastmonth</li></ul>' +
            '</td>';

      // Dates from next month
      } else if ( d > lastDateOfCurrentMonth){

        html += '<td id="nextmonthdates">' + (p++) + '</td>';

      // Current month dates
      } else {
        html += '<td id="currentmonthdates">' + (d) + '</td>';

        p = 1;

      }

      if (i % 7 == 6 && d >= lastDateOfCurrentMonth) {

        z0 = 10; // no more rows
      }

      i++;

    }

    html += '</tr>';
  }

  // Closes table
  html += '</table>';


  document.getElementById("monthandyear").innerHTML = monthandyearhtml;

  document.getElementById(this.divId).innerHTML = html;
};

// On Load of the window
window.onload = function() {

  // Start calendar
  var c = new Calendar({
    ParentID:"divcalendartable",

    DaysOfWeek:[
    'MON',
    'TUE',
    'WED',
    'THU',
    'FRI',
    'SAT',
    'SUN'
    ],

    Months:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],

    Format:'dd/mm/yyyy'
  });

  c.showCurrent();

  // Bind next and previous button clicks
  getId('btnPrev').onclick = function(){
    c.previousMonth();
  };

  getId('btnPrevYr').onclick = function(){
    c.previousYear();
  };

  getId('btnNext').onclick = function(){
    c.nextMonth();
  };

  getId('btnNextYr').onclick = function(){
    c.nextYear();
  };
}

// Get element by id
function getId(id) {
  return document.getElementById(id);
}
