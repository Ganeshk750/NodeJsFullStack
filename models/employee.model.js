const mogngoose = require('mongoose');
const path = require('path');
var employeeSchema = new mogngoose.Schema({

    fullName:{
        type: String,
        required: 'This feild is required.'
    },
    email:{
        type: String
    },
    mobile:{
        type: String
    },
    city:{
        type: String
    }
});
  //custome validation for email 
  employeeSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

mogngoose.model('Employee', employeeSchema);