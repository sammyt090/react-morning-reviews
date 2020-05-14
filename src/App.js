import React, {Component} from 'react';
import List from "./List"
import ListItem from './Components/ListItem'
import './App.css'
import movies from './data/movies.json'

// class App extends Component{
//     constructor(){
//         super()


//         this.state={
//             movies: []
//         }

//     }


//     render(){
//         return <div>The Most </div>
//     }
// }

export default function App(){
    return (
    <div className="App">
    <h1 className="movie-list-title">The Most Amazing Movie List</h1>
    <List/>
    </div>
)
}