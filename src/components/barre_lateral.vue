<template>

    <div class="plus">
      <button class="gauche">avancé</button>
      <div class="carossel" ref="carossel">
        <!-- Votre contenu ici -->
        <p class="tr">
          <img src="../components/icons/pexels-marta-branco-1263324.jpg" alt="" height="200" width="200">
          2
        </p>
        <p class="tr">
          <img src="../components/icons/pexels-marta-branco-1263324.jpg" alt="" height="200" width="200">
          3
        </p>
        <p class="tr">
          <img src="../components/icons/pexels-marta-branco-1263324.jpg" alt="" height="200" width="200">
          4
        </p>
        <p class="tr">
          <img src="../components/icons/pexels-marta-branco-1263324.jpg" alt="" height="200" width="200">
          1
        </p>
      </div>
      <button class="droite">avancé >></button>
    </div>


    <div class="test2">
        <button class="droite_2">droite</button>
           <div class="contenu">
            <p class="TK">
                <img src="../components/icons/pexels-marta-branco-1263324.jpg" alt="" height="200" width="200">
          1
            </p>
            <p class="TK">
                <img src="../components/icons/pexels-marta-branco-1263324.jpg" alt="" height="200" width="200">
          1
            </p>
            <p>
                <img src="../components/icons/pexels-marta-branco-1263324.jpg" alt="" height="200" width="200">
          1
            </p>
            <p class="TK">
                <img src="../components/icons/pexels-marta-branco-1263324.jpg" alt="" height="200" width="200">
          1
            </p>
            <p class="TK">
                <img src="../components/icons/pexels-marta-branco-1263324.jpg" alt="" height="200" width="200">
          1
            </p>
            <p class="TK">
                <img src="../components/icons/pexels-marta-branco-1263324.jpg" alt="" height="200" width="200">
          1
            </p>
           </div>
        <button class="gauche_2">gauche</button>
    </div>
  </template>
 

  <script>
  export default {
    mounted() {
      const button_droite = document.querySelector(".droite");
      const button_gauche = document.querySelector(".gauche");
      const container = this.$refs.carossel;
      const magic = document.querySelector(".tr");
      
  
      container.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        container.scrollLeft += evt.deltaY;
      });
      magic.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        container.scrollLeft += 920;
      });
  
      button_droite.onclick = () => {
        container.scrollLeft += 920;
      };
  
      button_gauche.onclick = () => {
        container.scrollLeft -= 920;
      };


//   teste 2 de greestock bar horizontal

const contenu = document.querySelector('.contenu');
  const TK = document.querySelectorAll('.TK');
  const droite = document.querySelector('.droite_2');
  const gauche = document.querySelector('.gauche_2');
 const tous  = document.querySelector('.test2')
droite.onclick = () => {
    gsap.to(".contenu", { 
  x: 200,
});
      };
      gauche.onclick = () => {
    gsap.to(".contenu", { 
  x: -200,
});
      };

      function manger() {
  contenu.scrollLeft += 9020;
  // setTimeout(manger, 1000);
}

tous.addEventListener("mouseenter", manger);


    },
  };


  </script>
  
  <style>


.plus{

    background-color: blue;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
  .carossel {
    margin-top: 1%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: nowrap;
    padding-left: 40px;
    width: 40%;
    overflow-x: hidden;
  }
  
  p {
    cursor: pointer;
  }
  
  button {
    margin: 10px 20px;
  }


  img:hover{
    filter: grayscale(0);
    cursor: pointer;
    transform: scale(1.1);
  }

.test2{
    width:100%;
    display: flex;
    background-color:red;
    justify-content: space-around;
    align-items: center;
}
.contenu{
    display: flex;
    background-color:yellow;
    justify-content: space-around;
    align-items: center;
    width:40%;
    flex-wrap: nowrap;
    overflow-x: hidden;
}
  </style>
  