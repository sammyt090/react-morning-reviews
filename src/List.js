import React, {Component} from "react"
import ListItem from './Components/ListItem'
import movieData from './data/movies.json'

export default class List extends Component{
    constructor(){
        super()



        this.state={
            movies: movieData
        }
    }




    render(){
        const moviesMap = this.state.movies.map((e,i) => <ListItem key={e.id} e={e}/>)
        return(
        <div>{moviesMap}</div>
        )
    }
}





