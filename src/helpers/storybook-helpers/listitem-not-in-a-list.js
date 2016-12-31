import React from 'react';

const style = {
    listStyle: 'none'
};

export default function (storyFn) {
  return <ul style={style}>{storyFn()}</ul>;
}
