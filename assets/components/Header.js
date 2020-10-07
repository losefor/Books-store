import React from "react";

import Text from "../components/Text";
import View from "../components/View";
import Container from "../components/Container";
import SearchBar from "../components/SearchBar";

export default function Header({ backgroundColor = "#00b0ff", color = "white" }) {
  return (
    <div
      style={{
        height: "30vh",
        backgroundColor,
        color,
      }}
    >
      <Container>
        <View
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <View mh={20}>
            <Text align="left" type="header1">
              Learn , Improve and create
            </Text>
            <Text align="left" type="body1">
              Be Different Be Creative
            </Text>
          </View>
          <View mh={20}>
            <SearchBar />
          </View>
        </View>
      </Container>
    </div>
  );
}
