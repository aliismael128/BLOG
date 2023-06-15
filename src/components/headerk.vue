<template>
    
      <RouterView/>
      <header>
        <nav>
          <ul>
            <li><RouterLink to="/">Accueil</RouterLink></li>
            <li><RouterLink to="/blog">Blog</RouterLink></li>
            <li><RouterLink to="/blog">contacte</RouterLink></li>
          </ul>
        </nav>
      </header>
      <main>
        <br>
          <div class="image">
            <p>
              <!-- <img :src="article.image" alt="image crypto" height="200" width="400"> -->
            </p>
            <br>
          </div>
         
             <ul class="ul2">
              <li  class="affiche"  v-for="(tous_les_article,index) in tous_les_article " v-bind:key="index">
       
                <RouterLink :to="'/Article/' + tous_les_article.id">


                  
                    <h4>{{ tous_les_article.titre }}</h4>
                    <br>
                    <h6>{{ tous_les_article.contenu }}</h6>
                    <p>ID:{{ tous_les_article.id}}</P>
                      <br>
                      <p><img :src="tous_les_article.image" alt="" height="100" width="100"></P>
              </RouterLink>
              </li>
             </ul>
      
      </main>

  </template>
  
  <script>
  import { RouterLink } from 'vue-router'
  import axios from 'axios';
  
  export default {
    components: {
      RouterLink
    },
    data() {
      return {
        tous_les_article: []
      }
    },
    mounted() {
      axios.get('/article.json')
  .then((response) => {
    this.tous_les_article = response.data.Article;
  })
  .catch((error) => {
    console.error(error);
  });
     
     
    }
  }
  </script>
  
  <style scoped>
  header {
    height: 10vh;
    width: 100%;
    background-color: red;
  }
  
  ul {
    height: 10vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  
  a {
    color: black;
  }
  .ul2 {
    display: flex;
    width:100%;
    flex-direction: column;
    height:40vh;
  }
  .affiche {
    display: flex;
    width:100%;
    height:auto;
    flex-direction: column;
  }
  </style>
  