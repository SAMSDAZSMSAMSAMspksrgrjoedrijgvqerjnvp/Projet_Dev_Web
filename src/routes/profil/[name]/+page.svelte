
<script>
  import { page } from "$app/stores"
  import {onMount} from 'svelte'
  import {supabase} from '$lib/components/supabaseFamille'
 
  let name = $page.params.name
  let Famille = {};
	onMount(async () => {
		const { data, error } = await supabase
			.from('Famille')
			.select('*')
      .eq ("prenom", name)
			.limit(1)
			.single()
     

    console.log(error)
    if (!error) {
      		Famille = data

    }
	})
</script>

<div id="card">
    <div id="card-title">
      <h1>Famille</h1>
    </div>
    <div id="card-id">
      <div id="card-number">
        <p class="cardtitle">Carte nationale d'identité :</p>
        <p>{Famille?.id}</p>
      </div>
        <p class="cardtitle">Nationalité Française</p>
    </div>
    <div id="card-information">
      <div> <img src={Famille?.Image} style="width:150px;height:150px;" class="card-photo" alt="background"></div>
      <div id="card-text">
      <div id="card-name">
        <div class="card-box"></div>
        <p class="cardtitle">Nom :</p>
        <p>{Famille?.nom}</p>
        <div class="card-box"></div>
        <p class="cardtitle">Prénom :</p>
        <p>{Famille?.prenom}</p>
      </div>
      <div id="card-detail">
        <div class="card-box">
          <p class="cardtitle">Sexe :</p>
          <p>{Famille?.sexe}</p>
        </div>
        <div class="card-box">
          <p class="cardtitle">Né(e) le :</p>
          <p>{Famille?.age}</p>
        </div>
        <div class="card-box">
          <p class="cardtitle"> </p>
          <p> </p>
        </div>
      </div>
      <div id="card-sign">
        <p class="cardtitle">Statut:</p>
        <p> {Famille?.statut} </p>
        <div id="cardsign"></div>
      </div> 
      </div>
    </div>
    <div id="card-code">
      <p>
        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      </p>
    </div>
  </div>


<style>
@import url('https://fonts.googleapis.com/css?family=Bitter|Arvo|ato&display=swap');

body {
	background-image: url(https://mangetoica.com/gallery_images/homepage/background-mosaiques//bg.png);
	display: flex;
}

h1,
h2,
p {
	margin: 0;
}

h1 {
	font-family: 'Arvo', serif;
	font-weight: lighter;
	font-size: 25px;
}

.cardtitle {
	font-family: 'Bitter', serif;
	font-weight: bold;
}

p {
	font-family: 'Lato', sans-serif;
	display: inline-block;
	margin: 5px 1px;
	font-size: 15px;
}

#card {
	border: solid 2px #000;
	border-radius: 10px;
	box-shadow: 1px 2px 10px #000;
	background-color: #e9eef2;
	margin: auto;
}

#card-title {
	padding: 5px;
	color: #fff;
	letter-spacing: 2px;
	text-align: center;
	text-transform: uppercase;
	background-color: #2c6c73;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
}

#card-id {
	padding: 5px;
	display: flex;
}

#card-number {
	display: inherit;
	margin-right: 50px;
}

#card-information {
	display: flex;
	padding: 5px;
}

#card-photo {
	background-position: center;
	background-repeat: none;
	border: solid 2px #000;
	height: 150px;
	width: 150px;
}

#card-detail {
	display: flex;
}

.card-box {
	margin-right: 20px;
}

#cardsign {

	height: 38px;
	width: 350px;
}

#card-code {
	padding: 5px;
	background-color: #fff;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
} 
</style>
