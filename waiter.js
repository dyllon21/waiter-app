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
        res.render('waiters/waiter', {
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
    res.render('waiters/add');
  };

  const adding = function(req, res, err) {
    if (err) {
      console.log(err);
    } else {
      res.render('waiters/add', {
        name: waiterList
      });
    }
  };
  var getWaiter = function(req, res) {

    daysObject = {};
    var name = req.params.username;
    var day = req.body.day;
    var button = req.body.submit;

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

    res.render('waiters/add', {
      name: name,
      day: day,
      message: "Was successfully selected.Thank You"
    });
  };

  return {
    index,
    getWaiter,
    admin,
    adding
  };
};
