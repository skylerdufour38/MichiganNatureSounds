<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Michigan Nature Sounds</title>

    <link rel="stylesheet" href="style.css">
</head>

<body>

<div class="app">

    <header class="header">
        <div class="logo">
            <span>🗺️</span>
        </div>

        <h1>
            Michigan <span>Nature</span> Sounds
        </h1>
    </header>


    <main class="content">

        <aside class="sidebar">

            <h2>🐾 Mammals</h2>

            <ul>
                <li>Eastern Chipmunk <i>Tamias striatus</i></li>
                <li>Red Squirrel <i>Tamiasciurus hudsonicus</i></li>
                <li>Eastern Gray Squirrel <i>Sciurus carolinensis</i></li>
                <li>Eastern Fox Squirrel <i>Sciurus niger</i></li>
                <li>Meadow Vole <i>Microtus pennsylvanicus</i></li>

                <li class="active">
                    Gray Wolf <i>Canis lupus</i>
                </li>

                <li>Coyote <i>Canis latrans</i></li>
                <li>Red Fox <i>Vulpes vulpes</i></li>
                <li>Black Bear <i>Ursus americanus</i></li>
                <li>Northern Raccoon <i>Procyon lotor</i></li>
                <li>Bobcat <i>Lynx rufus</i></li>
                <li>White-tailed Deer <i>Odocoileus virginianus</i></li>

            </ul>

        </aside>



        <section class="animal-card">

            <div class="info">

                <h2>Gray Wolf</h2>

                <h3>Canis lupus</h3>

                <p>
                    The gray wolf is Michigan's largest native land predator.
                    It typically lives in packs and has a strong,
                    distinctive howl.
                </p>


                <div class="controls">

                    <button id="playButton" class="blue">
                        ▶
                    </button>

                    <span>
                        Tap the play button<br>
                        to hear the animal sound
                    </span>


                    <button id="soundButton" class="red">
                        🔊
                    </button>

                    <span>
                        Tap the speaker button<br>
                        to hear the animal sound
                    </span>


                    <button id="nextButton" class="blue">
                        ➜
                    </button>

                </div>


            </div>



            <div class="animal-image">

                <img src="assets/gray-wolf.jpg"
                     alt="Gray Wolf">

                <p>
                    Next animal
                </p>

            </div>


        </section>


    </main>



    <footer>

        <div>
            🕷️
            <strong>Insects ›</strong>
        </div>


        <div>
            🐦
            <strong>Birds ›</strong>
        </div>


        <div class="selected">
            🐿️
            <strong>Mammals ›</strong>
        </div>


    </footer>


</div>


<audio id="wolfSound"
       src="assets/gray-wolf.mp3">
</audio>


<script src="script.js"></script>

</body>
</html>
* {
    box-sizing:border-box;
}


body {

    margin:0;

    font-family:
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;

    background:
    linear-gradient(
        rgba(5,35,25,.75),
        rgba(5,35,25,.9)
    ),
    url("assets/forest.jpg");

    background-size:cover;

    color:white;

}



.app {

    min-height:100vh;

    padding:30px;

}



/* HEADER */

.header {

    height:150px;

    display:flex;

    align-items:center;

    justify-content:center;

    background:
    rgba(20,70,50,.75);

    border-radius:25px;

}



.logo {

    width:90px;
    height:90px;

    border-radius:50%;

    background:#f1f4c8;

    color:#163a27;

    display:flex;

    align-items:center;
    justify-content:center;

    font-size:40px;

    margin-right:35px;

}



.header h1 {

    font-size:60px;

    font-style:italic;

    margin:0;

}


.header span {

    color:#a8d85a;

}



/* CONTENT */


.content {

    display:flex;

    gap:20px;

    margin-top:20px;

}



/* SIDEBAR */


.sidebar {

    width:32%;

    background:
    rgba(10,60,40,.85);

    border-radius:25px;

    padding:25px;

}


.sidebar h2 {

    font-size:28px;

}



.sidebar ul {

    list-style:none;

    padding:0;

}



.sidebar li {

    padding:10px;

    font-size:18px;

}



.sidebar i {

    opacity:.8;

}



.sidebar .active {

    background:#5b9f48;

    border-radius:15px;

}



/* CARD */


.animal-card {

    flex:1;

    display:flex;

    background:
    rgba(5,55,40,.85);

    border-radius:25px;

    padding:30px;

}



.info {

    flex:1;

}



.info h2 {

    font-size:50px;

    margin:0;

}



.info h3 {

    font-size:30px;

    font-style:italic;

}



.info p {

    font-size:25px;

    line-height:1.5;

}



/* IMAGE */


.animal-image {

    width:45%;

    text-align:center;

}



.animal-image img {

    width:100%;

    border-radius:20px;

}



.animal-image p {

    font-size:20px;

}



/* BUTTONS */


.controls {

    display:flex;

    align-items:center;

    gap:20px;

    margin-top:80px;

}



.controls button {

    width:85px;

    height:85px;

    border-radius:50%;

    border:none;

    font-size:35px;

    cursor:pointer;

}


.blue {

    background:#2789ff;

}



.red {

    background:#ff3b30;

}



.controls span {

    font-size:18px;

}



/* FOOTER */


footer {

    display:flex;

    justify-content:space-around;

    margin-top:35px;

}



footer div {

    font-size:28px;

    text-align:center;

}



footer strong {

    display:block;

    margin-top:10px;

}



.selected {

    background:#b9e76b;

    color:#14351f;

    padding:20px;

    border-radius:50px;

}
const playButton =
document.getElementById("playButton");

const soundButton =
document.getElementById("soundButton");

const nextButton =
document.getElementById("nextButton");


const wolfSound =
document.getElementById("wolfSound");



playButton.onclick = function(){

    wolfSound.play();

};



soundButton.onclick = function(){

    if(wolfSound.muted){

        wolfSound.muted=false;

        soundButton.innerHTML="🔊";

    }

    else {

        wolfSound.muted=true;

        soundButton.innerHTML="🔇";

    }

};



nextButton.onclick=function(){

    alert(
    "Loading next Michigan animal..."
    );

};
