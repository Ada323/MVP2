var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/messages');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('woot woot');

  var aqiSchema = mongoose.Schema({
    message: String
  });

  var Message = mongoose.model('Message', aqiSchema);

  var good = new Message({ message: 'Good: Air quality is considered satisfactory, and air pollution poses little or no risk.' });
  console.log(good.message);

  var moderate = new Message({message: 'Moderate: Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.'});
  console.log(moderate.message)

  var sensitive = new Message({message: 'Unhealthy for Sensitive Groups: Members of sensitive groups may experience health effects. The general public is not likely to be affected.'})
  console.log(sensitive.message);

  var unhealthy = new Message({message: 'Unhealthy: Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.'});
  console.log(unhealthy.message);

  var veryUnhealthy = new Message({message: 'Very Unhealthy: Health warnings of emergency conditions. The entire population is more likely to be affected.'});
  console.log(veryUnhealthy.message);

  var hazardous = new Message({message: 'Hazardous: Health warnings of emergency conditions. The entire population is more likely to be affected.'});
  console.log(hazardous.message);

});







module.exports = db;
