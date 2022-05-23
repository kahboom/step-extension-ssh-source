import * as React from 'react';

const buttonStyling = {
  backgroundColor: 'crimson',
  // backgroundColor: 'BlueViolet',
  color: 'white',
  borderRadius: '25px',
  border: 0,
  padding: '20px'
};

export type Props = {
  onButtonClicked?: () => void;
}

const Test = (props: Props) => {
  //() => console.log('BANANAS!')
  return (
    <button className={'superTest'} style={buttonStyling} onClick={props.onButtonClicked}>SSH Source</button>
  )
};

export default Test;

