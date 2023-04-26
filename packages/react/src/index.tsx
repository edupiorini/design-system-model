import { colors } from '@ignite-ui/tokens';

import React from 'react';
import { styled } from './styles';

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite500',
  borderRadius: '$md ',
  padding: '$4',
});

export function App() {
  return <h1 style={{ color: colors.ignite300 }}>hello!</h1>;
}
