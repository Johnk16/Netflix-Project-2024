import React from 'react'
import Row from '../Row/Row'
import requests from '../../../Utils/requests'


const RowList = () => {
  return (
    <>

       <Row
      // ?  Note that these three (below) are used in Row.js
             title="NETFLIX ORIGNALS"
             fetchUrl={requests.fetchNetflixOriginals} 
             isLargeRow={true}
        />
       <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow={false}/>
        <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies}/>
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
        <Row title="Horrer Movies" fetchUrl={requests.fetchHorrorMovies}/>
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
        <Row title="TV Shows" fetchUrl={requests.fetchTvShow}/>
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>

    </>
  )
}

export default RowList