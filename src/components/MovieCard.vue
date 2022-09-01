<template>
  <div class="">
        <div class="card">
           <h3 class="text-center">  {{movie.title}}  </h3> 
            <img :src="movie.imageurl" alt="">
            <p class="text-center"><b>IMDB rating:{{movie.imdbrating}}</b></p>
            <div class="d-flex justify-content-around">
                <h1 class="mdi mdi-thumb-down selectable"></h1>
                <h1 class="mdi mdi-thumb-up selectable"></h1>
            </div>
        </div>
    </div>
</template>

<script>
import { AppState } from '../AppState.js'
import { Movie } from '../models/Movie.js'
export default {
    props: {
        movie: { type: Object, required: true}
    },
    setup(props) {

    return {

        setActiveMovie() {
            AppState.activeMovie = props.movie
        }
    }
    }
}
</script>

<style>

</style>