body{
margin:0;
font-family:'Poppins', sans-serif;
scroll-behavior:smooth;
}

nav{
position:fixed;
width:100%;
background:#002147;
color:white;
z-index:1000;
}

.nav-container{
display:flex;
justify-content:space-between;
align-items:center;
padding:10px 10%;
}

nav ul{
list-style:none;
display:flex;
gap:20px;
}

nav a{
color:white;
text-decoration:none;
font-weight:500;
}

.hero{
height:100vh;
background:linear-gradient(rgba(0,33,71,0.85), rgba(0,33,71,0.85)),
url('assets/hero.png');
background-size:cover;
background-position:center;
display:flex;
justify-content:center;
align-items:center;
text-align:center;
color:white;
padding:0 20px;
}

.hero-content{
max-width:800px;
}

.highlight-text{
color:#ffcc00;
}

#countdown{
font-size:24px;
margin:20px 0;
font-weight:600;
}

.btn{
background:#ffcc00;
color:#002147;
padding:10px 20px;
text-decoration:none;
margin:10px;
display:inline-block;
border-radius:4px;
}

.btn-outline{
border:2px solid white;
color:white;
padding:10px 20px;
text-decoration:none;
}

.section{
padding:100px 10%;
}

.light{
background:#f4f6fb;
}

.card{
background:white;
padding:20px;
box-shadow:0 5px 20px rgba(0,0,0,0.1);
margin-bottom:20px;
}

.grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:30px;
}

.center{text-align:center;}

.qr{
width:200px;
}

.supported{text-align:center;}

.support-logo{
height:80px;
}

footer{
background:#002147;
color:white;
text-align:center;
padding:20px;
}

.fade{
opacity:0;
transform:translateY(40px);
transition:all 0.8s ease-out;
}

.fade.visible{
opacity:1;
transform:translateY(0);
}

@media(max-width:768px){
.grid{grid-template-columns:1fr;}
.section{padding:80px 5%;}
}
