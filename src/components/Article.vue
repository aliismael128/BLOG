

  

  <template>
     <RouterView/>
  <div class="Article_unique">
    <h1>Article {{ id }}</h1>
    <h2>{{ Article_unique.titre }}</h2>
    <p><img :src="Article_unique.image" alt="" height="100" width="100"></P>
    <p>{{ Article_unique.contenu }}</p>
    <button v-on:click="retour">retour</button>
  </div>
</template>










<script>
import { RouterLink } from 'vue-router'

import axios from 'axios';

export default{   
    data(){
  return{
     id:this.$route.params.id,
     Article_unique:[]
  }}
  ,
  mounted() {
  axios.get(`/article.json?id=${this.id}`)
    .then((response) => {
      this.Article_unique = response.data.Article.find(article => article.id.toString() === this.id);
      console.log(this.Article_unique);
      console.log(response.data)
    })
    .catch((error) => {
      console.error(error);
    });
}


,
methods:{
    retour :function(){
        this.$router.push('/');
    }
}

}

</script>
<style>
</style>
