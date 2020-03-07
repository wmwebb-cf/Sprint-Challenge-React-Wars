import React, { useState, useEffect } from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('App component renders without crashing', () => {
  render(<App />);
});
