// SmoothScroll.jsx
import React from 'react';
import { ReactLenis } from 'lenis/react'
import useLenis from './useLenis';

const SmoothScroll = ({ children }) => {
    useLenis()
  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
