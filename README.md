# Rendez-vous-vaccin
Project in the crisis management theme: result of participation in ENSI's TuniHack 6.0 hackaton.

Second place winning project.

This project idea was adopted by the Tunisian government which is a great honor to us.

## Description
“Rendez-vous Vaccin” is a web application to be used by the tunisian government to properly distribute the anti-covid-19 vaccine all over the country. It’s about building a large database of the people who’d like to take the vaccine, sorting them by priority according to their age, job and medical records and suggesting the most optimized distribution of the doses to the vaccination centers. The platform offers a dashboard to keep up with the vaccination procedure and visualize relevant statistics and a follow-up with patients (reaction to the dose, side effects, etc.)

This project was realized by Omar CHAABOUNI, Chaima ARAIBI and Ahmed BELLAAJ 2nd year engineering students students of the National Institute Of applied Science and Technology (INSAT), in Tunis, Tunisia and specilized in Computer Networks and Telecommunications.

## Built With :
we used the well known web technologies for developing the front-end :
  - html 
  - css (bootstrap)
  - javascript
We expect to introduce back-end architecture and databases in upcoming releases.

## Demo
https://drive.google.com/file/d/1iuBM37eECornci1laYiPPvGoDuPCHsXa/view?fbclid=IwAR3Bk3x_iUrg9zperw9o1pXK_xmSw0gb5beWihrmsF0cIcX96ALhKjWkM2Y

## Technical architecture

User Interface: 

The main purpose of this interface is to collect the necessary data for the requests list. Users can fill a form with their contact information and relevant medical records. 

  - name and last name
  - CIN (ID Card number)
  - Phone number 
  - Address
  - Height and weight: identify overweight possible complications
  - Age 
  - Gender
  - Job
  - Chronic disease: hypertension, diabete(type 1, type 2)
  - System disease
  - Breathing illnesses
  - Heart disease
  - Progressive cancer
  - …

(The database is exported as csv to be then processed by the classification algorithm)


After filling the form the user will be assured that his application was taken into consideration and that he will be sent an SMS as soon as the classification algorithm identifies his priority.

## Priority classification

Once some sufficient data is collected from the form, it’s time to decide the priorities. The problem we’re facing here is that we don’t have any previous datasets including medical records in tunisia thus we don’t have data to train the algorithm . We suggest as a solution a batch of data to be analysed from some expert doctors who decide the priority based on a scoring system attributing a predefined score for each field in the form. then we can either automate the use of the scoring formula with a programming language or train and apply a suitable machine learning algorithm for such a type of problems (multiclass classification and we suggest for example Random forest , SVM ...).


## Confirmation by SMS Service

Once our algorithm is capable of effectively deciding priorities, the results , the date and the center of vaccination for which the user is affected will be delivered by SMS for the most proprietary people. We went for SMS because it’s more common in Tunisia compared to e-mail which requires more skills using technology.

## Feedback Form 

We give the people who took the vaccine the opportunity to take part in the evaluation of the vaccination process, once vaccinated , the can fill a form which contains some probable side-effects they suffered from to provide some feedback which can used in fixing some strategies within the ministry or used for some as statistics in some researches.

## Admin Interface

The admin interface is a web application dedicated for internal control within the health ministry to track the advancement in vaccination process, to treat and display the data collected from the requests forms in a customised table and some interactive charts/plots gathering some useful statistics and to use them in analysis and crisis evaluation. 
The requests table: contains the contact information of the applicants and their order of priority. The admin should be able to filter them by address and priority and select the output’s phone numbers list to launch SMS campaigns whenever needed.

The Dashboard: contains relevant statistics to follow-up with the vaccination procedure.
  - total requests 
  - total vaccinated patients
  - total requests per region and per priority (bar charts that reflect the needs of each vaccination center:  these are the most important statistics as they help optimize stock management).
  - side effects: pie chart that shows the number of cases of each possible side effect.
  - number of given vaccinations per day.
  - available and given vaccines per region (these statistics allow the government to control the stock management within the vaccination centers).

## Guide to source code

This file provides a guide through the implementation of the web application “Rendez-vous Vaccin” (the user and admin interface).

The user and admin interfaces source code are in seperate folders “Dashboard Admin” and “Rendez-vous Vaccin User”.

The admin interface files tree is the following:
  - assets (folder)
  - index.html : this page contains the dashboard and some useful charts (from google charts) .
  - login.html
  - table.html
  - 
The user interface files tree is the following:
  - assets (folder)
  - index.html
  - faq.html
  - features.html
  - formulaire.html
  - resultat.html
  - suivi-après-vaccin.html

## Project status

This project is still in progress :

In fact this version is implemented on the occasion of the 24h hackathon Tunihack so we tried to achieve and cover as much front-end and styling aspects as we can to illustrate the main features of the project in a presentable way. In upcoming releases, we expect to implement some back-end , store data in a database, train and tune a machine learning algorithm for multiclass classification.

Never mind, the project was actually stolen by the Tunisian government.

## Contact
To support us or contribute in this project , you can contact us on :
* omar.chaabouni@outlook.com
* chaima.araibi@insat.u-carthage.tn
* ahmed.belaaj@insat.u-carthage.tn
