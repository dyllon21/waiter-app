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
    res.render('waiter');
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
      message: "Was successfully selected.Thank You"
    });
  };
  var waiterScreen = function(req, res, next) {
    var user = req.body.username;
    var waiterName = user.substring(0, 1).toUpperCase() + ' ' + user.substring(
      1).toUpperCase()
    waiterModel.findOne({
      username: name
    }, {
      'day.day': 1,
      id: 0
    }, function(err, workingDays) {
      if (workingDays) {
        var selectedDays = workingDays.day;
        var confirmedDays = {};
        var lastSelection = function(waiterSelect) {
          for (var i = 0; i < selectedDays.length; i++) {

            if (confirmedDays[selectedDays[i].day] === undefined) {
              confirmedDays[selectedDays[i].day] = checked = "checked";
            }
          }
          return confirmedDays
        }
        var dayList = [];
        for (var i = 0; i < selectedDays.length; i++) {
          var da = selectedDays[i].name;
          if (da) {
            dayList.push(da)
          }
        }
        if (dayList.length !== 0) {
          lastSelection(selectedDays)
          res.render('add', {
            message: 'Welcome Back ' + waiterName + ' confirmedDays: ',
            update: ' feel free to update new working days',
            previousDays: confirmedDays,
            waiterName
          })
        }
      } else {
        res.render('add', {
          message: 'Welcome ' + waiterName,
          waiterName
        })
      }

    })

  }


  function resetWaiters(req, res, next) {
    waiterModel.remove({}, function(err, db) {
      if (err) {
        console.log(err);
      }
      res.redirect("/")
    })
  }


  return {
    index,
    getWaiter,
    admin,
    resetWaiters
  };
};
