# SmartCabs - A Smart Cab Fare Predictor

This project is a part of hackathon organized by [FindCoder](https://www.findcoder.io/challenges/build-a-cab-fare-predictor/631cb1aeef470184194e06b5).

## About SmartCabs
SmartCabs is a fare predictor website depending on distance, estimated time, and time of the day.

## Features
  - Smart autocomplete for places
  - A path highligter to show a path from your pickup location to your drop location
  - Smart fare calculator
  - A wide variety of cabs available to select that suit every pocket

## Fare Chart
- ### Mini
  - Charge/KM: `₹11 for first 20 KMs after that ₹20/KM`
  - Base Price: `₹50 for first 5 KMs`
  - Ride Time Charge: `₹1/min`
- ### Smart Play
  - Charge/KM: `₹13 for first 20 KMs after that ₹25/KM`
  - Base Price: `₹60 for first 5 KMs`
  - Ride Time Charge: `₹1/min`
- ### Smart Sedan
  - Charge/KM: `₹15 for first 20 KMs after that ₹30/KM`
  - Base Price: `₹70 for first 5 KMs`
  - Ride Time Charge: `₹1/min`
- ### Smart SUV
  - Charge/KM: `₹18 for first 20 KMs after that ₹35/KM`
  - Base Price: `₹80 for first 5 KMs`
  - Ride Time Charge: `₹1/min`
- ### Smart EXEC
  - Charge/KM: `₹21 for first 20 KMs after that ₹40/KM`
  - Base Price: `₹100 for first 5 KMs`
  - Ride Time Charge: `₹1/min`
- ### Applicable to all cabs
  - Night charges: `1.5x (Between 10 PM to 5 AM)`
  - Service Tax: `5.6%`

## Fare Calculation
Go through below example to understand how fare is calculated in SmartCabs.

_Example:_

Suppose a person has entered his pickup and drop locations and selected Smart Sedan. `Day time hence night charges are not applicable`

Google Maps has calculated the `Distance = 30KM` and `Duration = 30mins` from the entered pickup and drop locations.

Now, for Smart Sedan, charges as per above chart are 
  - Charge/KM: `₹13 for first 20 KMs after that ₹25/KM`
  - Base Price: `₹60 for first 5 KMs`
  - Ride Time Charge: `₹1/min`
  - Service Tax: `5.6%`

_Calculations,_

`Charge on Distance (First 20 KMs) = 13 * 20 = ₹260`

`Charge on Distance (Remaining 10 KMs) = 25 * 10 = ₹250`

`Base Price = 60 * 5 = ₹300`

`Ride Time Charge = 1 * 30 = ₹30`

`Total Fare = 260 + 250 + 300 + 30 = 840 * 5.6% = 887.04 = ₹887`

## Technologies / Libraries Used
  - JavaScript
  - ReactJS
  - Tailwind CSS
  - DaisyUI
  - React Router
  - React Google Maps
  - HTML
  - CSS

## Screenshots

## Live Preview
  [SmartCabs](https://smart-cabs.netlify.app/)
  
  [Portfolio](https://vikasrohra.com/)

