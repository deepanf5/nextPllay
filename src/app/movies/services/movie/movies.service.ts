import { Injectable, signal } from '@angular/core';

interface Movie {
  title:string,
  genre:string,
  releaseDate:number,
  poster:string,
  language:string


}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movieDetail = signal({})

  constructor() { }


}
