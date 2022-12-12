<script>
	import {supabase} from "$lib/components/supabaseFamille";
</script>

<body>

</body>


<div class="contour" >


  <p><span class="titretexte1"></span>
    <br>
    <div class="tree">
		
      <ul>
        <li> <a href="/profil/Danièle"><img src="https://sivvaijqynnijovvnaem.supabase.co/storage/v1/object/public/images/daniele.jpg?t=2022-11-15T11%3A30%3A49.154Z" alt="Daniele"style="width:80px;height:80px" title="Daniele"><br/>Daniele Bardinet</a>
         <a href="/profil/Etienne"><img src="https://sivvaijqynnijovvnaem.supabase.co/storage/v1/object/public/images/Etienne.jpg?t=2022-11-15T11%3A31%3A07.656Z" alt="Etienne"style="width:80px;height:80px;" title="Etienne"><br/> Etienne Bardinet</a>
          <ul>
            <li> <a href="/profil/Emma"><img src="https://sivvaijqynnijovvnaem.supabase.co/storage/v1/object/public/images/Emma.jpg?t=2022-11-15T11%3A31%3A18.309Z" alt="Emma"style="width:80px;height:80px;" title="Emma"><br/>Emma Bardinet</a>
              		 <a href="/profil/Mehdi"><img src="https://sivvaijqynnijovvnaem.supabase.co/storage/v1/object/public/images/Mehdi.jpg?t=2022-11-15T11%3A31%3A46.102Z" alt="Mehdi"style="width:80px;height:80px;" title="Mehdi"><br/>Mehdi Benedine</a>
                          <ul>
            				<li> <a href="/profil/Nour"><img src="https://sivvaijqynnijovvnaem.supabase.co/storage/v1/object/public/images/Nour.jpg?t=2022-11-15T11%3A32%3A01.088Z" alt="Nour"style="width:80px;height:80px;" title="Nour"><br/>Nour Bardinet</a>
            </ul>
            <li> <a href="/profil/Victor"><img src="https://sivvaijqynnijovvnaem.supabase.co/storage/v1/object/public/images/Victor.jpg?t=2022-11-15T11%3A32%3A50.607Z" alt="Victor"style="width:80px;height:80px;" title="Victor"><br/>Victor Bardinet</a>
                          <a href="/profil/Michele"><img src="https://sivvaijqynnijovvnaem.supabase.co/storage/v1/object/public/images/Michele.jpg?t=2022-11-15T11%3A33%3A12.829Z" style="width:80px;height:80px;"  alt="Michele" title="Michele"><br/>Michele Violano</a>           
            <li> <a href="/profil/Jeanne"><img src="https://sivvaijqynnijovvnaem.supabase.co/storage/v1/object/public/images/Jeanne.png?t=2022-11-15T11%3A33%3A25.039Z" alt="Jeanne" style="width:80px;height:80px;"  title="Jeanne"><br/>Jeanne Bardinet</a>
                         <a href="/profil/Mickaël"><img src="https://sivvaijqynnijovvnaem.supabase.co/storage/v1/object/public/images/Mickael.png?t=2022-11-15T11%3A33%3A45.744Z" alt="Mickael" style="width:80px;height:80px;" title="Mickael"><br/>Mickaël Foucaud</a>
												  <ul>
            <li> <a href="/profil/Antoine"><img src="https://sivvaijqynnijovvnaem.supabase.co/storage/v1/object/public/images/Antoine.jpg?t=2022-11-15T11%3A34%3A10.799Z" alt="Antoine"style="width:80px;height:80px;" title="Antoine"><br/>Antoine Bardinet</a>
            </ul>

            <li> <a href="/profil/Barthélémy"><img src="https://sivvaijqynnijovvnaem.supabase.co/storage/v1/object/public/images/Barthelemy.jpg?t=2022-11-15T11%3A34%3A38.358Z" alt="Barthélémy"style="width:80px;height:80px;" title="Barthélémy"><br/>Barthélémy Bardinet</a>
            <li> <a href="/profil/Samuel"><img src="https://sivvaijqynnijovvnaem.supabase.co/storage/v1/object/public/images/Samuel.jpg?t=2022-11-15T11%3A34%3A57.341Z" alt="Samuel"style="width:80px;height:80px;" title="Samuel"><br/> Samuel Bardinet</a>
            <li> <a href="/profil/Rose"><img src="https://sivvaijqynnijovvnaem.supabase.co/storage/v1/object/public/images/Rose.jpg?t=2022-11-15T11%3A35%3A21.604Z" alt="Rose"style="width:80px;height:80px;"  title="Rose"><br/>Rose Bardinet</a>
            
          </ul>
        </li>
      </ul>
    </div>
</div>

<style>
body{
	background:url("https://sivvaijqynnijovvnaem.supabase.co/storage/v1/object/public/images/Background.jpg");
	background-size:cover;
}
/*arbre généalogique début*/
.tree{
position: absolute;
left:14%;


}
/*Position chaque carte  de la liste*/
.tree ul {
	padding-top: 30px; 
	position: relative;
	transition: all 0.5s;
	-webkit-transition: all 0.5s;
	-moz-transition: all 0.5s;
}
.tree li {
	float: left; 
	text-align: center;
	list-style-type: none;
	position: relative;
	padding: 30px 25px 0 5px;
	-webkit-transition: all 0.5s;
	-moz-transition: all 0.5s;
	transition: all 0.5s;
}
 
/*On utilise tree li before et tri li after pour les connecteurs avant et après*/
 
.tree li::before, .tree li::after{
	content: '';
	position: absolute; top: 0; right: 50%;
	border-top: 3px solid #ccc;
		border-color:darkgreen;
	width: 50%; height: 20px;
}
.tree li::after{
	right: auto; left: 50%;
	border-left: 3px solid #ccc;
		border-color:darkgreen;	
}
 
/*On retire les connecteurs a gauche et droite lorsque ils ne sont pas necessaires*/
.tree li:only-child::after, .tree li:only-child::before {
	display: none;
}
 
/*On retire l'espace du dessus quand c'est un enfant unique*/
.tree li:only-child{ padding-top: 0;}
 
/*On enlève les connecteurs gauche du premier enfant et droit du dernier enfant*/
.tree li:first-child::before, .tree li:last-child::after{
	border: 0 none;
}
/*Ajout du connecteur vertical aux derniers noeuds*/
.tree li:last-child::before{
	border-right: 3px solid #ccc;
	border-radius: 0 5px 0 0;
	border-color:darkgreen;
}
.tree li:first-child::after{
	border-radius: 5px 0 0 0;
		border-color:darkgreen;
}
 
/*On ajoute le connecteur venant des parents*/
.tree ul ul::before{
	content: '';
	position: absolute; top: 0; left: 50%;
	border-left: 3px solid #ccc;
		border-color:darkgreen;
	width: 0; height: 20px;
}
 
.tree li a{
	border: 3px solid #ccc;
		border-color:darkgreen;
	padding: 10px 3px;
	text-decoration: none;
	color: black;
	font-family: arial, verdana, tahoma;
	font-size: 9px;
	display: inline-block;
	border-radius: 20px;
 
	-webkit-transition: all 0.5s;
	-moz-transition: all 0.5s;
	transition: all 0.5s;
}
 
/*On ajoute des effets sur les "cartes"*/
.tree li a:hover, .tree li a:hover+ul li a {
	background: #c8e4f8; color: #000; border: 3px solid #94a0b4;
}
/*On ajoute le même effet sur les liens*/
.tree li a:hover+ul li::after, 
.tree li a:hover+ul li::before, 
.tree li a:hover+ul::before, 
.tree li a:hover+ul ul::before{
	border-color:  #94a0b4;
}

/*arbre généalogique fin*/
</style>
