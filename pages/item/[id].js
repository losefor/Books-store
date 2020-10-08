import { useState } from "react";
import { faCartPlus, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import Router from "next/router";

import Button from "../../assets/components/Button";
import View from "../../assets/components/View";
import Text from "../../assets/components/Text";
import Markdown from "../../assets/components/Markdown/Markdown";
import Container from "../../assets/components/Container";
import Gategory from "../../assets/components/Gategory";
import Book from "../../assets/components/Book";

const data = [
  {
    id: 0,
    title:'Fast , Cheap and viral ',
    desc:'create viral and cheap products with marketing experience',
    picture: "/cover.jpg",
    md:
      " In Fast, Cheap and Viral **Aashish Chopra** shares his secrets for creating **engagement-worthy content** Viral marketing should not be a happy accident Aashish Chopra's first viral video was shot with close to no budget and sparing equipment. Yet, today, his content has over 350 million views and industry masters universally agree that Aashish has cracked the viral code. In Fast, Cheap and Viral, the ace marketer shares the **secrets behind his success** - all of them learnt and honed on his journey. This one-stop super-guide to viral video marketing gives you the low-down on: **HOW TO GRAB EYEBALLS in a sea of content**; HOW TO DRIVE ENGAGEMENT (`because views can be bought, but engagement is earned`); WHY STORYTELLING BEATS PRODUCTION VALUE and behind-the-scenes tips and tricks; HOW TO BUILD YOUR PERSONAL BRAND and kill job insecurity. For every student, entrepreneur, blogger, marketing manager or leader who dreams of reaching millions on a shoestring budget, this book is the definitive manual on sustainable viral success.",
  },
  {
    id: 1,
    desc:'Changing your future is depending on fighting your ego and change you self to the better',
    title:'The Alter EGO Effect',
    picture: "/cover1.jpg",
    md:
      "In this transformative guide, Herman teaches you how to create and control an Alter Ego like Bo--and the thousands of other athletes, business leaders, entrepreneurs, and entertainers who have used this simple tool to change their lives. Herman also shares his own story: he knew that inside was a confident, self-assured, intelligent person who could help others get better results in their lives. When he started using superman's classic trick--putting on a pair of glasses--he learned to trigger the specific traits he needed to achieve his goals.",
  },
  {
    id: 2,
    desc:'If you got things that other dont then you need to read this book how to become a successful life coach ',
    title:'Life Coach',
    picture: "/cover2.jpg",
    md:
      "If you’re naturally gifted at dishing out advice to your friends, with words of inspiration and motivation, then life coaching may be your true calling. Life coaching has become a booming career field that can offer you significant monetary rewards, as well as plenty of opportunities to grow professionally. If you have the required traits, then it could be the perfect job for you. Furthermore, it offers a flexible schedule, as you can coach in person, on the phone, or online whenever it’s convenient for you. In fact, you could create a successful career in life coaching, earning money from the comfort of your own home. Of course, before you get there, you’ll need to know how to do it properly, and the path to success differs from one individual to another. To determine whether you have the essential qualities necessary to become a life coach, let’s do some self-assessment. Does your own life have direction? Are you good at talking to people and guiding them in making decisions about their lives? Do you enjoy spending time chatting with and listening to people? Do you have that sincere desire to lend a hand to people in need? Your answers to all of these questions ought to be in the affirmative for you to ultimately succeed in a life coaching career. The more you enjoy it, the better at it you’ll become, and therefore the more successful you’ll be. Can you envision yourself truly enjoying this line of work? If yes, then what are you waiting for? Let’s get started!",
  },
  {
    id: 3,
    title:'Good Habits , Bad Habits ',
    desc:'what we get depends on what we do so changing habits mean changing your future',
    picture: "/cover3.jpg",
    md:
      "We spend a shocking 43 percent of our day doing things without thinking about them. That means that almost half of our actions aren’t conscious choices but the result of our non-conscious mind nudging our body to act along learned behaviors. How we respond to the people around us; the way we conduct ourselves in a meeting; what we buy; when and how we exercise, eat, and drink―a truly remarkable number of things we do every day, regardless of their complexity, operate outside of our awareness. We do them automatically. We do them by habit. And yet, whenever we want to change something about ourselves, we rely on willpower. We keep turning to our conscious selves, hoping that our determination and intention will be enough to effect positive change. And that is why almost all of us fail. But what if you could harness the extraordinary power of your unconscious mind, which already determines so much of what you do, to truly reach your goals?",
  },
  {
    id: 4,
    title:'Digital Minimalisim',
    desc:'minimalisim is a must in this cluttering world to live alife that is peacefull and enjoyible',
    picture: "/cover4.jpg",
    md:
      "Digital minimalists are all around us. They're the calm, happy people who can hold long conversations without furtive glances at their phones. They can get lost in a good book, a woodworking project, or a leisurely morning run. They can have fun with friends and family without the obsessive urge to document the experience. They stay informed about the news of the day, but don't feel overwhelmed by it. They don't experience fear of missing out because they already know which activities provide them meaning and satisfaction.",
  },
];
function BookContent({ id }) {
  
console.log(id)
  const srcHandler = (index) => {
    setSrc(index);
  };

  return (
    <>
      <div className="header">
        <Container>
          <View className="main-header-cont">
            <View className="content-cont">
              <Text type="header1" align="left">
               {data[id].title}
              </Text>
              <Text type="body1" align="left">
                {data[id].desc}
              </Text>
            </View>

            <View display="flex" flexDirection="column" alignItems="flex-end">
              <div className="pictures-cont">
                <img
                  className="main-picture"
                  src={data[id].picture}
                />
                <div className="thumbnail-cont">
                  {data.map((img, index) => (
                    <div className={"image-selected-cont"} key={index}>
                      {id === index ? (
                        <div className="thumbnail-overlay" />
                      ) : null}
                      <img
                        className="thumbnail"
                        onClick={() => srcHandler(id)}
                        src={data[id].picture}
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
        <View mh={10}>
          <Markdown source={data[id].md} />
        </View>

        <View>
          <Gategory title="Rcomended" />
          <View 
          display="flex"
           justifyContent="center"
           flexWrap='wrap'
           >
            {data.map((data) => (
              <Book onClick={()=>Router.push(`/item/${data.id}`) } src={data.picture} />
            ))}
          </View>
        </View>
      </Container>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const { id } = ctx.query;
  return {
    props: {
      id
    }
  }
}

export default BookContent;
