import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import View from "./View";
import styles from './Button.module.css'

export default function Button({
  label,
  type,
  bgColor,
  color,
  mv,
  mh,
  ph,
  pv,
  onClick,
  icon,
  rtl,
  width,
}) {
  return (
    <button
      type={type}
      style={{
        color: type === "text" ? color : color,
        margin: `${mh ? mh : 0}px ${mv ? mv : 0}px `,
        padding: `${ph ? ph : 0}px ${pv ? pv : 0}px `,
        flexDirection: rtl ? "row-reverse" : "row",
        width,
        backgroundColor: bgColor,
      }}
      onClick={onClick}
      className={styles.btn}
    >
      <View 
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        pv={10}
      >
        {icon && (
          <FontAwesomeIcon
            style={{
              padding: rtl ? "0 0 0 8px" : "0 8px 0 0",
              borderRightStyle: "solid",
              borderWidth: 2,
              borderColor: "rgba(0,0,0,0.1)",
            }}
            icon={icon}
          />
        )}
        <span style={{ 
          padding: "8px 8px",
          flex:1
          }}>{label}</span>
      </View>
    </button>
  );
}

