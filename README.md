## Live link:

https://park-bnb.herokuapp.com/mySpots

## Description

ParkBnb is a listing and booking application for private parking spots. Users who wish to monetize their parking are able to create, update, and delete parking lot listings. These user can create new parking spot listings by navigating to the 'Create Spot' tab, and manage these 'spots' in the 'My Spots' tab. Other users, who wish to rent parking spaces, are able to create and recall bookings by navigating to the 'Book Spot' and 'My Bookings' tabs, respectively. ParkBnb is designed as a MVP clone of AirBnb. 

## Feature List

https://github.com/juniporous/park-bnb/wiki/MVP-List

## DB Schema

https://github.com/juniporous/park-bnb/wiki/Database-Schema

///////


# ParkBnb
* By Anthony Fahden - [Visit ParkBnb] (https://park-bnb.herokuapp.com/mySpots)*


## Traileo at a glance

Traileo is a fullstack app the lets users find hiking trails via text search or Google Maps, and share reviews and photos of these hikes.

#### ParkBnb at a glance
<p align="center">
  <a href="https://user-images.githubusercontent.com/33510714/151234624-88376fc8-0a2c-4b83-a52a-4b6ee7c8db48.png" target="_blank"><img src="https://user-images.githubusercontent.com/33510714/151234624-88376fc8-0a2c-4b83-a52a-4b6ee7c8db48.png"
  /></a>
  <br> 
</p>

Users can make calendar reservations with others' parking spots.

## Application Architecture

The backend relies on Express as a REST api server, Sequelize as an SQL toolkit, and postgreSQL for the db. 

The front end utlizes React, Redux.

### Frontend Overview
- Javascript
- React
- Redux
- HTML
- CSS
- Node.js


### Backend Overview
- Express
- PostgreSQL
- Sequelize



### Components

#### User Auth

Login is handled via backend login route. Node.js package bcrypt is used to hash the password sent in the request and compare the value against the hashed password in the db.

#### Creating Spots

A simple form checks for required fields and creates new spots. Newly created spots appear in the 'My Spots' tab of the user who created that spot, or the list of bookable spots in the 'Book Spot' tab. 

<p align="center">
  <a href="https://user-images.githubusercontent.com/33510714/151236173-635e5077-0a33-45fd-aaa3-7ac90db7c715.png" target="_blank"><img src="https://user-images.githubusercontent.com/33510714/151236173-635e5077-0a33-45fd-aaa3-7ac90db7c715.png"
  /></a>
  <br> 
</p>

#### Booking Spots

Logged in users are able to view bookings in the 'My Bookings' tab. Bookings that appear in this section are created in the 'Book Spot' tab.

<p align="center">
  <a href="https://user-images.githubusercontent.com/33510714/147784660-3d2f6997-0d3a-4a53-b245-e0f523ccde56.png" target="_blank"><img src="https://user-images.githubusercontent.com/33510714/147784660-3d2f6997-0d3a-4a53-b245-e0f523ccde56.png"
  /></a>
  <br> 
</p>


#### Managing Spots

Navigating to the 'My Spots' tab allows logged in users to edit/delete spots they have previously created in the 'Create Spot' tab.

<p align="center">
  <a href="https://user-images.githubusercontent.com/33510714/151245002-c44eb530-ecf1-4691-a280-41d0fdcfb954.png" target="_blank"><img src="https://user-images.githubusercontent.com/33510714/151245002-c44eb530-ecf1-4691-a280-41d0fdcfb954.png"
  /></a>
  <br> 
</p>
