# Flights Notification Service

<h3>Introduction</h3>
<p>
    The Flights Notification Service is a microservice responsible for sending notifications to users in the Flight Ticket Booking system. It uses RabbitMQ, a message broker based on the pub-sub architecture, to manage communication between different services and delivers email notifications through Nodemailer.
</p>


<h3>Design</h3>
<img src="/src/design.png" alt="project design"/>

<h3>Services</h3>
<ul>
<li>
<h4>
<a href="https://github.com/SanyamGoyal401/Flights-API-Gateway" target="_blank">Flight API Gateway</a></h4>
</li>
<li>
<h4>
<a href="https://github.com/SanyamGoyal401/Flights-Service" target="_blank">Flights Search Service</a></h4>
</li>
<li>
<h4>
<a href="https://github.com/SanyamGoyal401/Flights-Booking-Service" target="_blank">Flights Booking Service</a></h4>
</li>
</ul>

<h3>Features</h3>
<p>
<ol>
<li><p><b>User Notifications:</b> Sends notifications to users via email for various events such as flight bookings, cancellations, updates, and other important information.</p></li>
</p>

<h3>Technologies Used</h3>
<ul>
<li>Node.js</li>
<li>Express.js</li>
<li>MySQL</li>
<li>Sequelize ORM</li>
<li>Rabbit MQ</li>
</ul>

