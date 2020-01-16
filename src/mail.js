const express = require('express');
const nodemailer = require('nodemailer');
const secrets = require('./credentials.json');

// Change this to one of your email addresses in the organisation
const YOUR_EMAIL_ADDRESS = 'isaac.agyen@turntabl.io';


async function start(toEmail) {
  // Change this to the receiver to the mail
const SEND_TO = toEmail;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type: 'OAuth2',
      user: YOUR_EMAIL_ADDRESS,
      serviceClient: secrets.client_id,
      privateKey: secrets.private_key,
    },
  });
  try {
    await transporter.verify();
    await transporter.sendMail({
      from: YOUR_EMAIL_ADDRESS,
      to: SEND_TO,
      subject: 'poll',
      html: `<div class="my-5">
		<div class="card mx-auto" style="width: 30rem;">
			<div class="card-body">
			  <h5 class="card-title"><p class="display-3 text-center text-muted border-bottom py-3">Poll survey</p></h5>
			  <p class="card-text h5">Do you prefer to rest during the weekends?</p>
			</div>
	
			<div class="container py-3 px-5">
	
				<div class="my-2 form-check">
					<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
					<label class="form-check-label" for="exampleRadios1">
						<button class="btn">Yes</button>
					</label>
				  </div>
	
				  <div class="my-2 form-check">
					<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
					<label class="form-check-label" for="exampleRadios1">
						<button class="btn">No</button>
					</label>
				  </div>
	
				  <div class="my-2 form-check">
					<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
					<label class="form-check-label" for="exampleRadios1">
					  <button class="btn">Sometimes</button>
					</label>
				  </div>
	
				  <div class=" my-2 form-check">
					<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
					<label class="form-check-label" for="exampleRadios1">
						<button class="btn">Rarely</button>
					</label>
				  </div>
			</div>
			<div class="card-body">
			  <a href="#" class="btn btn-raised btn-success btn-block">Submit</a>
			</div>
		  </div>
	</div>`,
    });
  } catch (err) {
    console.error(err);
  }
}

module.exports =  start;