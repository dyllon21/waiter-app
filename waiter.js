module.exports = function(waiterModel) {

  var waiterList = {};
  var daysObject = {};


  function color(days) {
    if (days === 3) {
      return "highlight1";
    } else if (days < 3) {
      return "highlight2";
    } else if (days > 3) {
      return "highlight3";
    }
  }

  var admin = function(req, res, err) {
    var Monday = [];
    var Tuesday = [];
    var Wednesday = [];
    var Thursday = [];
    var Friday = [];
    var Saturday = [];
    var Sunday = [];

    waiterModel.find({}, function(err, result) {
        if (err) {
          console.log(err);
        } else {
          var waiters = result;

          for (var i = 0; i < waiters.length; i++) {
            var currentWaiter = waiters[i].day;
            for (var day in currentWaiter) {
              if (day == 'Monday') {
                Monday.push(waiters[i].username);
              } else if (day == 'Tuesday') {
                Tuesday.push(waiters[i].username);
              } else if (day == 'Wednesday') {
                Wednesday.push(waiters[i].username);
              } else if (day == 'Thursday') {
                Thursday.push(waiters[i].username);
              } else if (day == 'Friday') {
                Friday.push(waiters[i].username);
              } else if (day == 'Saturday') {
                Saturday.push(waiters[i].username);
              } else if (day == 'Sunday') {
                Sunday.push(waiters[i].username);
              }
            }
          }

        res.render('waiter', {
          Monday: Monday,
          MondayColor: color(Monday.length),
          Tuesday: Tuesday,
          TuesdayColor: color(Tuesday.length),
          Wednesday: Wednesday,
          WednesdayColor: color(Wednesday.length),
          Thursday: Thursday,
          ThursdayColor: color(Thursday.length),
          Friday: Friday,
          FridayColor: color(Friday.length),
          Saturday: Saturday,
          SaturdayColor: color(Saturday.length),
          Sunday: Sunday,
          SundayColor: color(Sunday.length)
        });
      }
    });

};


const index = function(req, res) {
  res.render('add', {
    waiter
  });
  // waiterModel.find({}, function(err, waiter) {
  //   if (err) {
  //     return next(err);
  //   }
  // });
};

var getWaiter = function(req, res) {
  daysObject = {};
  var name = req.params.username;
  var day = req.body.day;
  console.log(day);

  if (waiterList[name] === undefined) {
    for (var i = 0; i < day.length; i++) {
      daysObject[day[i]] = true;
    }
    waiterList = {
      username: name,
      day: daysObject
    };

    waiterModel.findOneAndUpdate({
      username: name
    }, {
      day: daysObject
    }, function(err, result) {
      if (err) {
        console.log(err);
      } else if (!result) {
        waiterModel.create({
          username: name,
          day: daysObject
        });
      }
    });
  }
        res.render('add', {
          name: name,
          day: day,
          message: "Was selected.Thank You",
        });
      }
    // waiterModel.findOne({
    //   username: name,
    //   day: daysObject
    // }, function(err, result) {
    //   if (err) {
    //     return done(err)
    //   } else {
    //     if (result) {
    //       var msg = '';
    //       var info = 'here are your previous working days:';
    //       msg = 'welcome back ' + waiterId + '. please update your available days';
    //
    //       var checkedDays = result.Day;
    //
    //       var selected = {};
    //       var dayMap = function(workingDays) {
    //         for (var i = 0; i < checkedDays.length; i++) {
    //           var dyllon = checkedDays[i];
    //           if (selected[dyllon] === undefined) {
    //             selected[dyllon] = 'checked';
    //           }
    //         }
    //         return selected;
    //       }
    //       dayMap(checkedDays)
    //
    //       var display = {
    //         name: result.name,
    //         day: result.Day,
    //         msg: msg,
    //         info: info,
    //         day: day,
    //         selected: selected
    //       }
    //       res.render('add', display)

function resetWaiters(req, res) {
  waiterModel.remove({}, function(err, db) {
    if (err) {
      console.log(err);
    }
    res.redirect("/days")
  })
}


return {
  index,
  getWaiter,
  admin,
  resetWaiters
};
}
