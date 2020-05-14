import React from 'react'

export default function ListItem (props){
return <div className= "List-Item">
    <div className='movie-info'>
    <p>{props.e.title}</p>
    <p>{props.e.year}</p>
</div>
    <img className="movie-poster" src={props.e.posterImg}/>

    
</div>
}