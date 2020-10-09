import React from "react";
import PropTypes from 'prop-types'

export default function View({
  children,
  m,
  p,
  pv,
  ph,
  mv,
  mh,
  display,
  justifyContent,
  alignItems,
    flexWrap,
    flexDirection,
    flex,
    backgroundColor,
    style,
    className,
  }) {
    // console.log(style)
    return (
    <div
      style={{
        margin: `${mv ? mv : 0}px ${mv ? mv : 0}px `,
        padding: `${pv ? pv : 0}px ${ph ? ph : 0}px `,
        display,
        justifyContent,
        alignItems,
        flexWrap,
        flex,
        backgroundColor,
        flexDirection,
        ...style,
      }}
      className={className}
    >
      {children}
    </div>
  );
}


View.propTypes = {
  display : PropTypes.oneOf(['flex','block'])
}