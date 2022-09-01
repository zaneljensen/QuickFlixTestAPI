<template>
<div class="container-fluid">
  <div class="row" v-for="m in movies" :key="m.div">
   <div class="col-md-4">
    <MovieCard :movie="m" />
   </div>
  </div>
</div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core';
import { contentService } from '../services/ContentService.js'
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import MovieCard from '../components/MovieCard.vue';
export default {
    setup() {
        async function getMovies() {
            try {
                await contentService.getMovies();
            }
            catch (error) {
                logger.error("[Getting Movies]", error);
                Pop.error(error);
            }
        }
        onMounted(() => {
            getMovies();
        });
        return {
            movies: computed(() => AppState.movie)
        };
    },
    components: { MovieCard }
}
</script>

<style scoped lang="scss">
.home{
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card{
    width: 50vw;
    > img{
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
