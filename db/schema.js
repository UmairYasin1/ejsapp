var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator'); 
var AutoIncrementFactory = require('mongoose-sequence');
mongoose.connect('mongodb://localhost:27017/testChat', {useNewUrlParser: true, useUnifiedTopology: true});

var conn = mongoose.connection;

// autoIncrement.initialize(conn);
const AutoIncrement = AutoIncrementFactory(conn);

var employeeSchema = new mongoose.Schema({   /// schema of document
  //employeeId : Number,
  name: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  etype: String,
  isactive: Boolean,
  total: Number
  //CreatedDate : Date
});
employeeSchema.plugin(AutoIncrement, {inc_field: 'employeeId'});
employeeSchema.plugin(uniqueValidator);

var employeeModel = mongoose.model('Employee', employeeSchema);

var employee = new employeeModel({
  // UserTypeId = {$inc: { UserTypeId: 1} },
  name: 'Muzaffar',
  email: 'test1@test.com',
  etype: 'hourly',
  isactive: true,
  total: '50'
  // CreatedDate : Date.now.Date
});

conn.on('error', console.error.bind(console, 'connection error'));

 conn.on('connected', function(){
  console.log('Successfully');
 });

 conn.on('disconnected', function(){
  console.log('Disconnect');
 });



//conn.once('open', function(){ 
//});

// employee.save(function(err, res){       //save function
//     if(err) throw err;
//     console.log(res);
//  });

  // employeeModel.findOneAndUpdate(
  //   { email: 'test3@test.com' },
  //   { name: 'Muzafar', email: 'newaaemail@example.com' , etype: 'asd' },
  //   // { runValidators: true, context: 'query' },
  //    function(err) {
  //      if(err) throw err;
  //    }
  // ) 




 //conn.close();