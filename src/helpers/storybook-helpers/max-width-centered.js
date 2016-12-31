import React from 'react';

const style = {
  maxWidth: '500px',
  margin: '0 auto'
};

export default function (storyFn) {
  return <div style={style}>{storyFn()}</div>;
}
