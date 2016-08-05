var router = require('express').Router();
var f0 = {name: 'Jason Pryor', origin: 'South Euclid, OH'}
var f1 = {name: 'Miles Chamley-Watson', origin: 'New York, NY'}
var f2 = {name: 'Eli Dershwitz', origin: 'Sherborn, MA'}
var f3 = {name: 'Katharine Holmes', origin: 'Washington, D.C.'}
var f4 = {name: 'Daryl Homer', origin: 'Bronx, NY'}
var f5 = {name: 'Courtney Hurley', origin: 'San Antonio, TX'}
var f6 = {name: 'Kelley Hurley', origin: 'San Antonio, TX'}
var f7 = {name: 'Lee Kiefer', origin: 'Lexington, KY'}
var f8 = {name: 'Alex Massialas', origin: 'San Francisco, CA'}
var f9 = {name: 'Gerek Meinhardt', origin: 'San Francisco, CA'}
var f10 = {name: 'Ibtihaj Muhammad', origin: 'Maplewood, NJ'}
var f11 = {name: 'Nzingha Prescod', origin: 'Brooklyn, NY'}
var f12 = {name: 'Dagmara Wozniak', origin: 'Avenel, NJ'}
var f13 = {name: 'Mariel Zagunis', origin: 'Beaverton, OR'}
var fencing = [f0, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, f13];
// var
var ba0 = {name:'Eva Lee', origin:'Diamond Bar, CA'};
var ba1 = {name:'Philip Crew', origin:'Orange, CA'};
var ba2 = {name:'Paula Lynn Obanana', origin:'Minneapolis, MN'};
var ba3 = {name:'Sattawat Pongnairat', origin:'Orange, CA'};
var ba4 = {name:'Howard Shu', origin:'Los Angeles, CA'};
var ba5 = {name:'Jamie Subandhi', origin:'Westminster, CA'};
var ba6 = {name:'Iris Wang', origin:'Arcadia, CA'};
var badminton = [ba0, ba1, ba2, ba3, ba4, ba5, ba6];


var box0 = {name: 'Mikaela Mayer', origin: 'Los Angeles, CA'};
var box1 = {name: 'Carlos Balderas', origin: 'Santa Maria, CA'};
var box2 = {name: 'Charles Conwell', origin: 'Cleveland, OH'};
var box3 = {name: 'Nico Hernandez', origin: 'Wichita, KS'};
var box4 = {name: 'Gary Russell', origin: 'Washington, D.C.'};
var box5 = {name: 'Claressa Shields', origin: 'Flint, MI'};
var box6 = {name: 'Shakur Stevenson', origin: 'Newark, NJ'};
var box7 = {name: 'Antonio Vargas', origin: 'Kissimmee, FL'};
var boxing = [box0, box1, box2, box3, box4, box5, box6, box7];

var c0 = {name: 'Ashley Nee', origin: 'Darnestown, MD'};
var c1 = {name: 'Casey Elchfeld', origin: 'Drums, PA'};
var c2 = {name: 'Maggie Hogan', origin: 'Huntington Beach, CA'};
var c3 = {name: 'Michal Smolen', origin: 'Gastonia, NC'};
var c4 = {name: 'Devin McEwan', origin: 'Salisbury CT'};
var canoe = [c0, c1, c2, c3, c4];

var mp0 = {name: 'Isabella Isaksen', origin: 'Fayetteville, AR'}
var mp1 = {name: 'Margaux Isaksen', origin: 'Fayetteville, AR'}
var mp2 = {name: 'Nathan Schrimsher', origin: 'Roswell, NM'}
var mPentath = [mp0, mp1, mp2];

var randomindex = function getrandomindex(min, max){
    return Math.floor(Math.random() * (max-min)) + min;
  }


router.get('/', function(request, response){
  response.send('Please choose a sport: fencing, mPentath, badminton, boxing, or canoe')
})
router.get('/fencing', function(request, response){
    var randomFencer = fencing[randomindex(0, fencing.length)]
    response.send(randomFencer);
    console.log(randomFencer);
})
router.get('/mPentath', function(request, response){
    var randomPentath = mPentath[randomindex(0, mPentath.length)]
    response.send(randomPentath);
    console.log(randomPentath);
})
router.get('/badminton', function(request, response){
    var randomBaddie = badminton[randomindex(0, badminton.length)]
    response.send(randomBaddie);
    console.log(randomBaddie);
})
router.get('/boxing', function(request, response){
    var randomBoxer = boxing[randomindex(0, boxing.length)]
    response.send(randomBoxer);
    console.log(randomBoxer);
})
router.get('/canoe', function(request, response){
    var randomCanoer = canoe[randomindex(0, canoe.length)]
    response.send(randomCanoer);
    console.log(randomCanoer);
})





module.exports = router;
