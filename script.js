fetch('https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/patisserie.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load JSON data');
        }
        return response.json();
    })
    .then(data => {
      let creationcontainer=document.getElementById("creation");
      data.produits.forEach(element => {
        let div=document.createElement("div");
        creationcontainer.appendChild(div);
        
        let image=document.createElement("img");
        div.appendChild(image);
        image.src=element["image-url"];

        let h4= document.createElement("h4");
        div.appendChild(h4);
        h4.textContent=element.nom;

        let p=document.createElement("p");
        div.appendChild(p);
        p.textContent=element.description;
        
      });

      let entete=document.getElementById("header");
      let h1=document.createElement("h1");
      h1.textContent=data.nomCommercial;
      entete.appendChild(h1);

      let enteteh2=document.getElementById("header");
      let h2=document.createElement("h2");
      h2.textContent=data.phraseAccroche;
      enteteh2.appendChild(h2);

      let servicescontainer=document.getElementById("services");
      data.services.forEach(element => {
        let div=document.createElement("div");
        servicescontainer.appendChild(div);

        let h4= document.createElement("h4");
        div.appendChild(h4);
        h4.textContent=element.nom;

        let descrip=document.createElement("p");
        div.appendChild(descrip);
        descrip.textContent=element.description;

         let bouton=document.createElement("button");
         div.appendChild(bouton);
         bouton.textContent="Nos services"



      });

      let témoignagescontainer=document.getElementById("témoignages");
        data.temoignages.forEach(element => {
       
        let div=document.createElement("div");
        témoignagescontainer.appendChild(div);

        let h5= document.createElement("h5");
        div.appendChild(h5);
        h5.textContent=element.prenom;

        let expe=document.createElement("p");
        div.appendChild(expe);
        expe.textContent=element.typeExperience;

        let comment=document.createElement("p");
        div.appendChild(comment);
        comment.textContent=element.commentaire;
       
        let note=document.createElement("p");
        div.appendChild(note);
        note.textContent=element.note;



       console.log(data);
       
    });
     
})
.catch(error => console.error('Error:', error));


    
