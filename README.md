# waiter_webapp

## CONTENTS :

1. About Application
2. Features And Benefits
3. Examples
4. Installations
5. Tests
6. Contributions
7. Issues
8. License


# About Application :

* This Application Allows You To Schedule Weekly Shifts  For Waiters.Whereas You Will Be Able To Make The Manager's Life Easier By Creating This Web Application To Ensure That Waiters Can Select The Days They Can Work On And To update The Days They Can Work On.

* Also To See How Many Waiters Are Available To Work And To Reset The Data To Use The System For A New Week.

* There Are Colors That Relate To Days That Are Full,Days That Are Not Full And Days That Are Empty,Therefore Colors Will Be Implemented To Each Day Accordingly.   

# Features And Benefits :

* For Coders :

- You get to play with the Application locally and you can also modify the Application.Checkout the Examples and Installations sections for more details on how you can use the Application locally and modify it to your preferences.

* For Users :

- You Can Go Visit My Application At https://waiter21.herokuapp.com/waiters/name And Follow Instructions Below :

* Firstly You Need To Enter A Name(waiter) Into The URL After The waiters route/.

* Then The Name Entered Will Be Registered As An Waiter.You Will Be Asked To Click The Days You'll Be Available To Work.

* After That You Can Click The Submit Button If Happy..To See Which Days That Waiter Will Work,You Can Click On the 'available waiters' Link Which Will Take You To The /Days Route or Page Which Displays All The Days Selected.The Colors Will Specify Which Days Needs Waiters Or Is Fully Booked.

*There Is A Reset Button To Click To Reset The Data To Use The System Again.

# Examples :

* Have A look In Reality https://waiter21.herokuapp.com/waiters/name


## Home Page :
Waiter Availability App
My Profile - (this is just a link to my profile for references/all my front-end and back-end projects are there)

available waiters - (this link takes you to the days table which shows all waiters working on whichever days.)


Hello And Welcome add.Can You Please Select The Days You'll Be Available.(a Welcome message for the waiter)

MONDAY  TUESDAY  WEDNESDAY  THURSDAY  FRIDAY  SATURDAY SUNDAY - (This Is the CheckBoxes To Tick Off Days Available)

Submit - (A Button To Submit your Entries And You Will Be clicking on the available waiters link to locate you to your working days)

## Weekdays Page :
Welcome
back Home - ( a link which takes you back to the adding of a new waiter page)

RED: In Need Of Waiters - (refers to desperately in need of waiters)

GOLD: Too Many Waiters - (too much waiters working)

GREEN: Enough Waiters - (days are fulfilled)



Monday	Tuesday	Wednesday	Thursday	Friday	Saturday	Sunday
andre -(waiter)
add -(waiter)
andre -(waiter)
add -(waiter)
andre -(waiter)
add -(waiter)
King Gideon I -(waiter)
King Gideon I -(waiter)
King Gideon I -(waiter)

Reset - (Button to reset the data).

# Installations :

* To run this app locally you need to clone the repo waiter_webapp  by running the following command on the terminal:
$ git clone https://github.com/dyllon21/waiter_webapp
$ cd waiter_webapp

* Check if NodeJS and NPM is installed by running command:
$ node -v
$ npm -v

If it exist it will display v4.2.6 and 3.5.2 which is the version of NodeJS and NPM respectively to the terminal, if not install by following instructions here to install both NodeJS and NPM.

You also need mongodb installed to check if installed run mongo -version in terminal it will display the version installed, if not install mongodb follow instructions here to install.

In the repository you clone there is a package.json file with all dependencies all you need to do is to run this command in the terminal

$ npm install

It will install all required dependencies, when done you can run the following command to start a local server
$ nodemon
or
$ node index.js

It will display the following
$ nodemon
[nodemon] 1.11.0
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node index.js`
`open()` is deprecated in mongoose >= 4.11.0, use `openUri()` instead, or set the `useMongoClient` option if using `connect()` or `createConnection()`. See http://mongoosejs.com/docs/connections.html#use-mongo-client
WaiterAppapp started on port 3000

or

$ node index.js
`open()` is deprecated in mongoose >= 4.11.0, use `openUri()` instead, or set the `useMongoClient` option if using `connect()` or `createConnection()`. See http://mongoosejs.com/docs/connections.html#use-mongo-client
WaiterApp started on port 3000

- You can then open the browser and type in localhost:3000 in the url.

# Tests

This app has test to test the database models, to check if test runs you have to run npm test in the terminal.
- Check out the test folder on how to structure my tests.
- In The terminal type mocha to run tests.

# Contributing

To contribute in this project you can fork the repository waiter_webapp by clicking button that looks like this fork above.
After Fork you can clone it by typing :
$ git clone https://github.com/dyllon21/waiter_webapp

in the terminal then you can work on it and push you updates to github.
