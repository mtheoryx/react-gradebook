import React from 'react';

const style = {
  maxWidth: '500px',
  margin: '0 auto'
};

const MaxWidthCentered = storyFn => <div style={style}>{ storyFn() }</div>;

export default MaxWidthCentered;
