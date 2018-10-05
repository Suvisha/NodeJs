var nodemailer = require('nodemailer');
var transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'',
        pass:''
    }
});
var mailOptions={
    from:'Suvisha.KV@emtecinc.com',
    to:'Suvisha.KV@emtecinc.com',
    subject:'using NodeJS',
    text:'send mail through node Js'
};
transporter.sendMail(mailOptions,function(err,info)
{
    if(err) 
        console.log(err);
    else
        console.log('Email sent:'+info.response);
});