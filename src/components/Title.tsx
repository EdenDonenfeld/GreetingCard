import React from 'react';

interface Props {
    text: string;
}

const Title: React.FC<Props> = ({ text }) => {
  return (
    <h1 style={{ fontSize: '24px' }}>
      {text}
    </h1>
  );
}

export default Title;