import React,{useEffect,useState} from 'react'
import Youtube from 'react-youtube'
import './Rowpost.css'
import axios from '../../components/axios'
import {imageUrl,API_KEY} from '../../constants/Constants'

function Rowpost(props) {
  const [movies,setMovie] = useState([])
  const [urlId,setId] = useState('')
  useEffect(()=>{
  axios.get(props.url).then((response)=>{
  console.log(response.data)
  setMovie(response.data.results)
  }).catch(err=>{
   alert('network error')
  })
  },[])
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const handleMovies = (id)=>{
    console.log(id)
    axios.get(`/movie/${id}460465/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data)
      if(response.data.length!==0)
    {
      setId(response.data.results[0])
    }else{
      alert('trailer not available')
    }
    })
  }

  return (
    <div className='row'>
    <h2>{props.title}</h2>
    <div className = 'posters'>
      {movies.map((obj)=>
        <img onClick ={()=>{handleMovies(obj.id)}}className={props.isSmall ? 'smallPosters' :'poster'} alt = 'poster' src={`${imageUrl + obj.backdrop_path}`} />
      )}
        
    </div>
    </div>
     
  )
}   

export default Rowpost