import axios from 'axios'

export const Request = {
  baseURL: 'https://api.themoviedb.org/3/',
  imgURL: 'https://image.tmdb.org/t/p/original/',
  trendingURL: 'trending/',
  searchURL: 'search/',
  videoURL: 'movie/',
  home: [
    {
      title: 'Trending',
      link: 'trending/movie/day',
    },
    {
      title: 'TV Dramas',
      link: 'discover/tv?with_genres=18',
    },
    {
      title: 'SCI-FI & Fantasy',
      link: 'discover/movie?with_genres=14',
    },
    {
      title: 'TV Wars & Politics',
      link: 'discover/tv?with_genres=10768',
    },
    {
      title: 'Kids',
      link: 'discover/tv?with_genres=10762',
    },
    {
      title: 'TV Kids & Family',
      link: 'discover/tv?with_genres=10751|10762',
    },
    {
      title: 'TV Shows',
      link: 'discover/tv',
    },
    {
      title: 'Animation',
      link: 'discover/movie?with_genres=16',
    },
    {
      title: 'TV Talks',
      link: 'discover/tv?with_genres=10767',
    },
    {
      title: 'TV Soap',
      link: 'discover/tv?with_genres=10766',
    },
    {
      title: 'Romance',
      link: 'discover/movie?with_genres=10749',
    },
    {
      title: 'TV Western',
      link: 'discover/tv?with_genres=37',
    },
    {
      title: 'Horror',
      link: 'discover/movie?with_genres=27',
    },
    {
      title: 'TV News',
      link: 'discover/tv?with_genres=10763',
    },
    {
      title: 'Mystery',
      link: 'discover/movie?with_genres=9648',
    },
    {
      title: 'Action & Adventure',
      link: 'discover/movie?with_genres=28|12',
    },
    {
      title: 'Science Fiction',
      link: 'discover/movie?with_genres=878',
    },
    {
      title: 'TV Animation',
      link: 'discover/tv?with_genres=16',
    },
    {
      title: 'War',
      link: 'discover/movie?with_genres=10752',
    },
    {
      title: 'TV Reality',
      link: 'discover/tv?with_genres=10764',
    },
    {
      title: 'Crime',
      link: 'discover/movie?with_genres=80',
    },
    {
      title: 'TV SCI-FI & Fantasy',
      link: 'discover/tv?with_genres=10765',
    },
  ],
  movie: [
    {
      title: 'Trending',
      link: 'trending/movie/day',
    },
    {
      title: 'SCI-FI & Fantasy',
      link: 'discover/movie?with_genres=14',
    },
    {
      title: 'Kids',
      link: 'discover/tv?with_genres=10762',
    },
    {
      title: 'Crime',
      link: 'discover/movie?with_genres=80',
    },
    {
      title: 'War',
      link: 'discover/movie?with_genres=10752',
    },
    {
      title: 'Science Fiction',
      link: 'discover/movie?with_genres=878',
    },
    {
      title: 'Mystery',
      link: 'discover/movie?with_genres=9648',
    },
    {
      title: 'Action & Adventure',
      link: 'discover/movie?with_genres=28|12',
    },
    {
      title: 'Animation',
      link: 'discover/movie?with_genres=16',
    },
    {
      title: 'Romance',
      link: 'discover/movie?with_genres=10749',
    },
    {
      title: 'Horror',
      link: 'discover/movie?with_genres=27',
    },
  ],
  tvShows: [
    {
      title: 'Trending',
      link: 'trending/tv/day',
    },
    {
      title: 'TV SCI-FI & Fantasy',
      link: 'discover/tv?with_genres=10765',
    },
    {
      title: 'TV Reality',
      link: 'discover/tv?with_genres=10764',
    },
    {
      title: 'TV Animation',
      link: 'discover/tv?with_genres=16',
    },
    {
      title: 'TV News',
      link: 'discover/tv?with_genres=10763',
    },
    {
      title: 'TV Western',
      link: 'discover/tv?with_genres=37',
    },
    {
      title: 'TV Talks',
      link: 'discover/tv?with_genres=10767',
    },
    {
      title: 'TV Soap',
      link: 'discover/tv?with_genres=10766',
    },
    {
      title: 'TV Kids & Family',
      link: 'discover/tv?with_genres=10751|10762',
    },
    {
      title: 'TV Shows',
      link: 'discover/tv',
    },
    {
      title: 'TV Dramas',
      link: 'discover/tv?with_genres=18',
    },
    {
      title: 'TV Wars & Politics',
      link: 'discover/tv?with_genres=10768',
    },
  ],
  movieShowHandler(movieArray) {
    if (movieArray instanceof Array && movieArray.length !== 0) {
      let movieTrailer = movieArray.find(
        ({ name }) => name === 'Trailer' || 'Official Trailer'
      )
      if (movieTrailer !== undefined) return movieTrailer.key
      let movieClip = movieArray.find(({ name }) => name === 'Clip')
      if (movieClip !== undefined) return movieClip.key
      return movieArray[0].key
    }
  },
  imgGenerator(movie) {
    if (movie?.backdrop_path !== null && movie?.backdrop_path !== undefined)
      return `${this.imgURL}${movie?.backdrop_path}`
    if (movie?.poster_path !== null && movie?.backdrop_path !== undefined)
      return `${this.imgURL}${movie?.poster_path}`
    return undefined
  },
  titleGenerator(movie) {
    if (movie?.title) return movie.title
    if (movie?.name) return movie.name
    return undefined
  },
}

const tmdb = axios.create({
  baseURL: Request.baseURL,
  params: {
    api_key: 'f37642900de251482713dd66932b1ab9',
  },
})

export default tmdb
