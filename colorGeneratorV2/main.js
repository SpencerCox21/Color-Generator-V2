

let redUpperLimit = 255;
let greenUpperLimit = 255;
let blueUpperLimit = 255;

let redLowerLimit = 0;
let greenLowerLimit = 0;
let blueLowerLimit = 0;

let randomRed = 0;
let randomGreen = 0;
let randomBlue = 0;

let allColorUpperLimit = 10;
let allColorLowerLimit = 0;
let allColorSelected = 0;



const newColorBtn = document.getElementById('newColorBtn');
newColorBtn.addEventListener("click", changeColor);



function getColorFromAll(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


function getRed(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function getGreen(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function getBlue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};



function getColor() {
    
    randomRed = getRed(redLowerLimit, redUpperLimit);  //Get new random red within upper and lower limits
    randomGreen = getGreen(greenLowerLimit, greenUpperLimit);  //Get new random green within upper and lower limits
    randomBlue = getBlue(blueLowerLimit, blueUpperLimit);  //Get new random blue within upper and lower limits
    
};

function getAllColorNumber() {
    allColorSelected = getColorFromAll(allColorLowerLimit, allColorUpperLimit);
};


function getRandomRed() {
    randomRed = getRed(redLowerLimit, redUpperLimit);  //Get new random red within upper and lower limits
};

function getRandomGreen() {
    randomGreen = getGreen(greenLowerLimit, greenUpperLimit);  //Get new random green within upper and lower limits
};

function getRandomBlue() {
    randomBlue = getBlue(blueLowerLimit, blueUpperLimit);  //Get new random blue within upper and lower limits
};


function changeColor() {
    const changeColorBox = document.getElementById('colorBox');
    const randomRGB = ifColorSelected();  //Get a new random RGB color
    changeColorBox.style.backgroundColor = randomRGB;  //Set the background color of the colorBox
    document.getElementById('rgbVariable').innerHTML = randomRGB;
}


function ifColorSelected() {

    if (document.getElementById("chooseColor").value == "0") {
        generateAllColor();
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }
    if (document.getElementById("chooseColor").value == "1") {
        generateRedColor();
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }
    if (document.getElementById("chooseColor").value == "2") {
        generateOrangeColor();
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }
    if (document.getElementById("chooseColor").value == "3") {
        generateYellowColor();
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }
    if (document.getElementById("chooseColor").value == "4") {
        generateGreenColor();
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }
    if (document.getElementById("chooseColor").value == "5") {
        generateTurquoiseColor();
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }
    if (document.getElementById("chooseColor").value == "6") {
        generateBlueColor();
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }
    if (document.getElementById("chooseColor").value == "7") {
        generatePurpleColor();
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }
    if (document.getElementById("chooseColor").value == "8") {
        generatePinkColor();
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }
    if (document.getElementById("chooseColor").value == "9") {
        generateBrownColor();
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }
    if (document.getElementById("chooseColor").value == "10") {
        generateGrayColor();
        return `RGB(${randomRed},${randomRed},${randomRed})`
    }
};

//below lines are for all colors
function generateAllColor() {

    if (document.getElementById("chooseColor").value == "0") {
    
        allColorUpperLimit = 10;
        allColorLowerLimit = 1;
        allColorSelected = 0;
        
        getAllColorNumber();


        if (allColorSelected == 1){
            generateRedColor();
            return `RGB(${randomRed},${randomGreen},${randomBlue})`
        }
        if (allColorSelected == 2){
            generateOrangeColor();
            return `RGB(${randomRed},${randomGreen},${randomBlue})`
        }
        if (allColorSelected == 3){
            generateYellowColor();
            return `RGB(${randomRed},${randomGreen},${randomBlue})`
        }
        if (allColorSelected == 4){
            generateGreenColor();
            return `RGB(${randomRed},${randomGreen},${randomBlue})`
        }
        if (allColorSelected == 5){
            generateTurquoiseColor();
            return `RGB(${randomRed},${randomGreen},${randomBlue})`
        }
        if (allColorSelected == 6){
            generateBlueColor();
            return `RGB(${randomRed},${randomGreen},${randomBlue})`
        }
        if (allColorSelected == 7){
            generatePurpleColor();
            return `RGB(${randomRed},${randomGreen},${randomBlue})`
        }
        if (allColorSelected == 8){
            generatePinkColor();
            return `RGB(${randomRed},${randomGreen},${randomBlue})`
        }
        if (allColorSelected == 9){
            generateBrownColor();
            return `RGB(${randomRed},${randomGreen},${randomBlue})`
        }
        if (allColorSelected == 10){
            generateGrayColor();
            return `RGB(${randomRed},${randomRed},${randomRed})`
        }
        else {
            allColorSelected = 0; 
        }
    }
};
//above lines are for all colors

//below lines are for red
function generateRedColor() {
       
    if (document.getElementById("chooseShade").value == "light") {
           
        console.log('light red')
           
        redUpperLimit = 255;
        redLowerLimit = 220;
        greenUpperLimit = 110;
        greenLowerLimit = 70;
        blueUpperLimit = 110;
        blueLowerLimit = 70;
           
        getColor();
           
        //return `RGB(255,70,110)`  //use this line to test the extremes.
           
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }
        
    else if (document.getElementById("chooseShade").value == "dark") {
            
        console.log('dark red')
            
        redUpperLimit = 220;
        redLowerLimit = 150;
        greenUpperLimit = 70;
        greenLowerLimit = 0;
        blueUpperLimit = 70;
        blueLowerLimit = 0;
            
        getColor();
            
        //return `RGB(150,70,70)`  //use this line to test the extremes.
            
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }

    else if (document.getElementById("chooseShade").value == "medium") {
            
        console.log('medium red')
            
        redUpperLimit = 255;
        redLowerLimit = 210;
        greenUpperLimit = 70;
        greenLowerLimit = 0;
        blueUpperLimit = 70;
        blueLowerLimit = 0;
            
        getColor();
            
        //return `RGB(210,50,0)`  //use this line to test the extremes.
            
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }
        
    else {
            
        console.log('all red')
            
        redUpperLimit = 255;
        redLowerLimit = 200;
        greenUpperLimit = 100;
        greenLowerLimit = 0;
        blueUpperLimit = 100;
        blueLowerLimit = 0;
            
        getColor();
            
        //return `RGB(255,100,0)`  //use this line to test the extremes.
            
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }
};
//above lines are for red
    
//below lines are for orange
function generateOrangeColor() {
        
    if (document.getElementById("chooseShade").value == "light") {
            
        console.log('light orange')
            
        redUpperLimit = 255;
        redLowerLimit = 240;
        greenUpperLimit = 200;
        greenLowerLimit = 140;
        blueUpperLimit = 50;
        blueLowerLimit = 0;
            
        getColor();
            
        //return `RGB(255,130,50)`  //use this line to test the extremes.
            
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }
        
    else if (document.getElementById("chooseShade").value == "dark") {
            
        console.log('dark orange')
            
        redUpperLimit = 255;
        redLowerLimit = 240;
        greenUpperLimit = 140;
        greenLowerLimit = 70;
        blueUpperLimit = 50;
        blueLowerLimit = 0;
            
        getColor();
            
        //return `RGB(0,0,0)`  //use this line to test the extremes.
            
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }
        
    else if (document.getElementById("chooseShade").value == "medium") {
            
        console.log('medium orange')
            
        redUpperLimit = 255;
        redLowerLimit = 240;
        greenUpperLimit = 180;
        greenLowerLimit = 100;
        blueUpperLimit = 50;
        blueLowerLimit = 0;
            
        getColor();
            
        //return `RGB(255,180,50)`  //use this line to test the extremes.
            
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }

    else {
            
        console.log('all orange')
            
        redUpperLimit = 255;
        redLowerLimit = 240;
        greenUpperLimit = 200;
        greenLowerLimit = 70;
        blueUpperLimit = 50;
        blueLowerLimit = 0;
            
        getColor();
    
        //return `RGB(255,70,0)`  //use this line to test the extremes.
            
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }
};
//above lines are for orange
    
//below lines are for yellow
function generateYellowColor() {
        
    if (document.getElementById("chooseShade").value == "light") {
            
        console.log('light yellow')
            
        redUpperLimit = 255;
        redLowerLimit = 240;
        greenUpperLimit = 255;
        greenLowerLimit = 230;
        blueUpperLimit = 150;
        blueLowerLimit = 0;
            
        getColor();
            
        //return `RGB(240,255,150)`  //use this line to test the extremes.
            
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }
        
    else if (document.getElementById("chooseShade").value == "dark") {
            
        console.log('dark yellow')
            
        redUpperLimit = 255;
        redLowerLimit = 200;
        greenUpperLimit = 230;
        greenLowerLimit = 190;
        blueUpperLimit = 50;
        blueLowerLimit = 0;
            
        getColor();
            
        //return `RGB(200,190,50)`  //use this line to test the extremes.
            
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }
        
    else if (document.getElementById("chooseShade").value == "medium") {
            
        console.log('medium yellow')
            
        redUpperLimit = 255;
        redLowerLimit = 230;
        greenUpperLimit = 255;
        greenLowerLimit = 230;
        blueUpperLimit = 50;
        blueLowerLimit = 0;
            
        getColor();
            
        //return `RGB(0,0,0)`  //use this line to test the extremes.
            
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }

    else {
            
        console.log('all yellow')
            
        redUpperLimit = 255;
        redLowerLimit = 220;
        greenUpperLimit = 255;
        greenLowerLimit = 210;
        blueUpperLimit = 150;
        blueLowerLimit = 0;
            
        getColor();
    
        //return `RGB(220,210,150)`  //use this line to test the extremes.
            
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }
};
//above lines are for yellow
    
//below lines are for green
function generateGreenColor() {

    if (document.getElementById("chooseShade").value == "light") {
            
        console.log('light green')
            
        redUpperLimit = 180;
        redLowerLimit = 100;
        greenUpperLimit = 255;
        greenLowerLimit = 220;
        blueUpperLimit = 180;
        blueLowerLimit = 100;
            
        getColor();
            
        //return `RGB(100,220,100)`  //use this line to test the extremes.
            
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }
    
    else if (document.getElementById("chooseShade").value == "dark") {
            
        console.log('dark green')
            
        redUpperLimit = 60;
        redLowerLimit = 0;
        greenUpperLimit = 180;
        greenLowerLimit = 80;
        blueUpperLimit = 60;
        blueLowerLimit = 0;
            
        getColor();
            
        //return `RGB(60,180,60)`  //use this line to test the extremes.
            
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }
        
    else if (document.getElementById("chooseShade").value == "medium") {
            
        console.log('medium green')
            
        redUpperLimit = 100;
        redLowerLimit = 0;
        greenUpperLimit = 240;
        greenLowerLimit = 170;
        blueUpperLimit = 70;
        blueLowerLimit = 0;
            
        getColor();
            
        //return `RGB(0,255,0)`  //use this line to test the extremes.
            
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }

    else {
            
        console.log('all green')
            
        redUpperLimit = 120;
        redLowerLimit = 0;
        greenUpperLimit = 255;
        greenLowerLimit = 130;
        blueUpperLimit = 100;
        blueLowerLimit = 0;
            
        getColor();
    
        //return `RGB(120,130,100)`  //use this line to test the extremes.
            
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }
};
//above lines are for green
    
//below lines are for turquoise
function generateTurquoiseColor() {
        
    if (document.getElementById("chooseShade").value == "light") {
            
        console.log('light turquoise')
            
        redUpperLimit = 50;
        redLowerLimit = 0;
        greenUpperLimit = 255;
        greenLowerLimit = 200;
        blueUpperLimit = 220;
        blueLowerLimit = 180;
            
        getColor();
            
        //return `RGB(100,255,200)`  //use this line to test the extremes.
            
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }
        
    else if (document.getElementById("chooseShade").value == "dark") {
            
        console.log('dark turquoise')
            
        redUpperLimit = 50;
        redLowerLimit = 0;
        greenUpperLimit = 200;
        greenLowerLimit = 130;
        blueUpperLimit = 150;
        blueLowerLimit = 100;
            
        getColor();
            
        //return `RGB(0,130,100)`  //use this line to test the extremes.
            
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }
        
    else if (document.getElementById("chooseShade").value == "medium") {
            
        console.log('medium turquoise')
            
        redUpperLimit = 50;
        redLowerLimit = 0;
        greenUpperLimit = 220;
        greenLowerLimit = 170;
        blueUpperLimit = 190;
        blueLowerLimit = 150;
            
        getColor();
            
        //return `RGB(0,0,0)`  //use this line to test the extremes.
            
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }

    else {
            
        console.log('all turquoise')
            
        redUpperLimit = 100;
        redLowerLimit = 0;
        greenUpperLimit = 230;
        greenLowerLimit = 160;
        blueUpperLimit = 160;
        blueLowerLimit = 130;
            
        getColor();
    
        //return `RGB(100,230,160)`  //use this line to test the extremes.
            
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }
};
//above lines are for turquoise
    
//below lines are for blue
function generateBlueColor() {

    if (document.getElementById("chooseShade").value == "light") {
            
        console.log('light blue')
            
        redUpperLimit = 130;
        redLowerLimit = 0;
        greenUpperLimit = 255;
        greenLowerLimit = 150;
        blueUpperLimit = 255;
        blueLowerLimit = 240;
            
        getColor();
            
        //return `RGB(0,0,0)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }
    
    else if (document.getElementById("chooseShade").value == "dark") {
            
        console.log('dark blue')
            
        redUpperLimit = 60;
        redLowerLimit = 0;
        greenUpperLimit = 160;
        greenLowerLimit = 0;
        blueUpperLimit = 255;
        blueLowerLimit = 150;
            
        getColor();
            
        //return `RGB(60,0,255)`  //use this line to test the extremes.
            
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }
        
    else if (document.getElementById("chooseShade").value == "medium") {
            
        console.log('medium blue')
            
        redUpperLimit = 70;
        redLowerLimit = 0;
        greenUpperLimit = 125;
        greenLowerLimit = 0;
        blueUpperLimit = 255;
        blueLowerLimit = 190;
            
        getColor();
            
        //return `RGB(0,0,0)`  //use this line to test the extremes.
            
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }

    else {
    
        console.log('all blue')
            
        redUpperLimit = 80;
        redLowerLimit = 0;
        greenUpperLimit = 100;
        greenLowerLimit = 0;
        blueUpperLimit = 255;
        blueLowerLimit = 150;
            
        getColor();
    
        //return `RGB(80,100,255)`  //use this line to test the extremes.
            
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }
};
//above lines are for blue
    
//below lines are for purple
function generatePurpleColor() {
        
    if (document.getElementById("chooseShade").value == "light") {
            
        console.log('light purple')
            
        redUpperLimit = 230;
        redLowerLimit = 150;
        greenUpperLimit = 100;
        greenLowerLimit = 50;
        blueUpperLimit = 255;
        blueLowerLimit = 220;
            
        getColor();
            
        //return `RGB(230,100,255)`  //use this line to test the extremes.
            
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }
    
    else if (document.getElementById("chooseShade").value == "dark") {
            
        console.log('dark purple')
            
        redUpperLimit = 110;
        redLowerLimit = 50;
        greenUpperLimit = 40;
        greenLowerLimit = 10;
        blueUpperLimit = 180;
        blueLowerLimit = 70;
            
        getColor();
            
        //return `RGB(130,40,180)`  //use this line to test the extremes.
            
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }
        
    else if (document.getElementById("chooseShade").value == "medium") {
            
        console.log('medium purple')
            
        redUpperLimit = 180;
        redLowerLimit = 100;
        greenUpperLimit = 75;
        greenLowerLimit = 30;
        blueUpperLimit = 230;
        blueLowerLimit = 150;
            
        getColor();
            
        //return `RGB(180,30,220)`  //use this line to test the extremes.
            
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }

    else {
            
        console.log('all purple')
            
        redUpperLimit = 220;
        redLowerLimit = 110;
        greenUpperLimit = 100;
        greenLowerLimit = 0;
        blueUpperLimit = 255;
        blueLowerLimit = 180;
            
        getColor();

        //return `RGB(110,100,180)`  //use this line to test the extremes.
            
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }
};
//above lines are for purple
    
//below lines are for pink
function generatePinkColor() {
        
    if (document.getElementById("chooseShade").value == "light") {
            
        console.log('light pink')
            
        redUpperLimit = 255;
        redLowerLimit = 230;
        greenUpperLimit = 150;
        greenLowerLimit = 70;
        blueUpperLimit = 220;
        blueLowerLimit = 150;
            
        getColor();
            
        //return `RGB(230,70,150)`  //use this line to test the extremes.
            
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }
        
    else if (document.getElementById("chooseShade").value == "dark") {
            
        console.log('dark pink')
            
        redUpperLimit = 230;
        redLowerLimit = 150;
        greenUpperLimit = 80;
        greenLowerLimit = 0;
        blueUpperLimit = 140;
        blueLowerLimit = 90;
            
        getColor();
            
        //return `RGB(150,0,140)`  //use this line to test the extremes.
            
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }
        
    else if (document.getElementById("chooseShade").value == "medium") {
            
        console.log('medium pink')
            
        redUpperLimit = 240;
        redLowerLimit = 200;
        greenUpperLimit = 110;
        greenLowerLimit = 40;
        blueUpperLimit = 180;
        blueLowerLimit = 130;
            
        getColor();
            
        //return `RGB(200,40,180)`  //use this line to test the extremes.
            
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }

    else {
            
        console.log('all pink')
            
        redUpperLimit = 255;
        redLowerLimit = 180;
        greenUpperLimit = 90;
        greenLowerLimit = 0;
        blueUpperLimit = 170;
        blueLowerLimit = 100;
            
        getColor();
    
        //return `RGB(255,100,100)`  //use this line to test the extremes.
            
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }
};
//above lines are for pink
    
//below lines are for brown
function generateBrownColor() {

    if (document.getElementById("chooseShade").value == "light") {
            
        console.log('light brown')
            
        redUpperLimit = 170;
        redLowerLimit = 140;
        greenUpperLimit = 130;
        greenLowerLimit = 80;
        blueUpperLimit = 100;
        blueLowerLimit = 60;
            
        getColor();
            
        //return `RGB(170,80,60)`  //use this line to test the extremes.
            
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }
        
    else if (document.getElementById("chooseShade").value == "dark") {
            
        console.log('dark brown')
            
        redUpperLimit = 140;
        redLowerLimit = 80;
        greenUpperLimit = 50;
        greenLowerLimit = 0;
        blueUpperLimit = 50;
        blueLowerLimit = 0;
            
        getColor();
            
        //return `RGB(80,50,0)`  //use this line to test the extremes.
            
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }
        
    else if (document.getElementById("chooseShade").value == "medium") {
            
        console.log('medium brown')
            
        redUpperLimit = 150;
        redLowerLimit = 110;
        greenUpperLimit = 90;
        greenLowerLimit = 30;
        blueUpperLimit = 60;
        blueLowerLimit = 30;
            
        getColor();
            
        //return `RGB(150,90,30)`  //use this line to test the extremes.
            
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }

    else {
            
        console.log('all brown')
            
        redUpperLimit = 170;
        redLowerLimit = 120;
        greenUpperLimit = 110;
        greenLowerLimit = 45;
        blueUpperLimit = 70;
        blueLowerLimit = 30;
            
        getColor();

        //return `RGB(170,45,30)`  //use this line to test the extremes.
            
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    }
};
//above lines are for brown
    
//below lines are for gray
function generateGrayColor() {

    if (document.getElementById("chooseShade").value == "light") {
        
        console.log('light gray')
        
        redUpperLimit = 255;
        redLowerLimit = 160;
        
        getColor();
        
        //return `RGB(0,0,0)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomRed},${randomRed})`
    }
        
    else if (document.getElementById("chooseShade").value == "dark") {
        
        console.log('dark gray')
        
        redUpperLimit = 130;
        redLowerLimit = 0;
        
        getColor();
        
        //return `RGB(0,0,0)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomRed},${randomRed})`
    }
    
    else if (document.getElementById("chooseShade").value == "medium") {
        
        console.log('medium gray')
        
        redUpperLimit = 180;
        redLowerLimit = 100;
        
        getColor();
        
        //return `RGB(0,0,0)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomRed},${randomRed})`
    }
    
    else {
        
        console.log('all gray')
        
        redUpperLimit = 255;
        redLowerLimit = 0;
        
        getColor();
        
        //return `RGB(0,0,0)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomRed},${randomRed})`
    }
};
//above lines are for gray
