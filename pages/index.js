import React from "react";
// import Link from "next/link";
import Router from "next/router";

import Container from "../assets/components/Container";
import Header from "../assets/components/Header";
import Gategory from "../assets/components/Gategory";
import GategoryCard from "../assets/components/GategoryCard";
import Book from "../assets/components/Book";
import View from "../assets/components/View";

const images = [
  {
    id: 0,
    picture: "/cover.jpg",
  },
  {
    id: 1,
    picture: "/cover1.jpg",
  },
  {
    id: 2,
    picture: "/cover2.jpg",
  },
  {
    id: 3,
    picture: "/cover3.jpg",
  },
  {
    id: 4,
    picture: "/cover4.jpg",
  },
];

export default function index() {
  return (
    <div>
      <Header />
      <Container>
        <Gategory title="Self Imrovement" />
        <View display="flex" justifyContent="center" flexWrap="wrap">
          {images.map((data) => (
            <Book
              onClick={() => Router.push(`/item/${data.id}`)}
              src={data.picture}
            />
          ))}
        </View>
        <View 
        display="flex"
         justifyContent="center"
         flexWrap='wrap'
         mv={20}>
          
          <GategoryCard m={3} img='/cover.jpg' title="Bussines"/>
          <GategoryCard m={3} img='/cover2.jpg' title="Finanace" color='rgba(255, 28, 109, 0.95)'/>
          <GategoryCard m={3} img='/cover4.jpg' title="Self improvement" color='rgba(255, 212, 57, 0.95)'/>
        </View>
      </Container>
    </div>
  );
}
