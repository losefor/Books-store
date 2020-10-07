import React from "react";

export default function Text({ style, type, children, align }) {
    const typeHandler = ()=>{
        switch(type){
            case 'header1': return 'header1';
            case 'body1' : return 'body1'; 
            default : return 'body'
        }
    }
  return <p style={{textAlign:align , ...style}} className={typeHandler()}>{children}</p>;
}


