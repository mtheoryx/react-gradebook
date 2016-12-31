import React from 'react';

const style = {
  textAlign: 'center'
};

export default function (storyFn) {
  return <div style={style}>{storyFn()}</div>;
}
