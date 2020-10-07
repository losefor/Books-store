import React from 'react'
import Container from '../assets/components/Container'
import Header from '../assets/components/Header'
import Gategory from '../assets/components/Gategory'
import Book from '../assets/components/Book'
import View from '../assets/components/View'

const images = [
  "/cover.jpg",
  "/cover1.jpg",
  "/cover2.jpg",
  "/cover3.jpg",
  "/cover4.jpg",
];

export default function index() {
  return (
    <div>
      <Header/>
    <Container>
      <Gategory/>
      <View
            display='flex'
            justifyContent='center'
            flexWrap='wrap'
        >
          
      {images.map(data=><Book src={data}/>)}
        </View>
    </Container>

  

    </div>
  )
}
