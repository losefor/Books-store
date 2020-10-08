import React from "react";
// import Link from "next/link";
import Router from "next/router";

import Container from "../assets/components/Container";
import Header from "../assets/components/Header";
import Gategory from "../assets/components/Gategory";
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
        <Gategory title='Self Imrovement' />
        <View display="flex" justifyContent="center" flexWrap="wrap">
          {images.map((data) => (
              <Book 
              onClick={()=>Router.push(`/item/${data.id}`)}
              src={data.picture} />
          ))}
        </View>
      </Container>
    </div>
  );
}
