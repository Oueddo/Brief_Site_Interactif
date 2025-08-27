let slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide() {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
  index = (index + 1) % slides.length;
}

setInterval(showSlide, 3000); // Change every 3 seconds



 document.getElementById('monFormulaire').addEventListener('submit', function(event){
    //event.preventDefault();

    //Recuperer le nom
    let baliseNom = document.getElementById('nom');
    let nom = baliseNom.value;

    if(nom.trim() === ''){
      alert('veuillez saisir votre nom');
    }else{
      console.log('Bonjour, ' + nom + '!');
    }
    //Recuperer le prénom 
    let prenom = document.getElementById('prenom').value;
    if(prenom.trim() === ''){
      alert('Veuillez entrer votre prenom');
    }else{
      console.log('Votre nom complet : '+nom+ ' ' + prenom+ '.');;
      document.getElementById('messageRemerciement').innerText = 'Merci d\'avoir remplié.'; // Afficher un message d'erreur
    }
    
  }); 
