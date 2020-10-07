import { useState } from "react";
import Button from "../../assets/components/Button";
import View from "../../assets/components/View";
import Text from "../../assets/components/Text";
import Markdown from "../../assets/components/Markdown/Markdown";
import Container from "../../assets/components/Container";
import { faCartPlus, faMoneyBill } from "@fortawesome/free-solid-svg-icons";

const images = [
  "/cover.jpg",
  "/cover1.jpg",
  "/cover2.jpg",
  "/cover3.jpg",
  "/cover4.jpg",
];

export default function home() {
  const [imageIndex, setSrc] = useState(0);

  const srcHandler = (index) => {
    setSrc(index);
  };

  return (
    <>
    <div className="header">
      <Container>
        <View className='main-header-cont'>
          <View className='content-cont'>
            <Text type="header1" align="right">
              سريع ,رخيص و شائع
            </Text>
            <Text type="body1" align="right">
              لمحبين التسويق وكيفية عمل منتج شائع ويحقق نجاح اقرا تعلم وطبق
              وابدا بتحقيق نجاحك
            </Text>
          </View>

          <View display="flex" flexDirection="column" alignItems="flex-end">
            <div className="pictures-cont">
              <img className="main-picture" src={images[imageIndex]} />
              <div className="thumbnail-cont">
                {images.map((img, index) => (
                  <div className={"image-selected-cont"}>
                    {imageIndex === index ? (
                      <div className="thumbnail-overlay" />
                    ) : null}
                    <img
                      className="thumbnail"
                      onClick={() => srcHandler(index)}
                      src={img}
                    />
                  </div>
                ))}
              </div>
            </div>
            <View display="flex" flexDirection="column" mh={10}>
              <Button
                label="شراء"
                mh={5}
                width={"300px"}
                bgColor={"white"}
                icon={faMoneyBill}
                onClick={() => {
                  console.log("buy");
                }}
              />
              <Button
                label="اظافة الى السلة"
                icon={faCartPlus}
                mh={5}
                width={"300px"}
                bgColor={"#00b0ff"}
                color={"white"}
                onClick={() => {
                  console.log("add to cart");
                }}
              />
            </View>
          </View>
        </View>
      </Container>
    </div>
    <Container>
      <Markdown source='- this is `one`  this is `two` '/>
    
    </Container>
    </>
  );
}
