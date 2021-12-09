import React from 'react';
import ReactDOM from "react-dom";
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';

beforeEach(()=>{
  render(<App/>);
});

  const getText = (value = '') => {
    const textElement = screen.getByText(value);
    return textElement
  }

describe('Search page title of emojis',()=>{

  test('It should render the page title',()=>{

    expect(getText(/Emoji Search/i)).toBeInTheDocument();    
  });
  test('It should render an input to find the emoji',()=>{

    userEvent.type(screen.getByRole('textbox'), 'Joy')
    expect(screen.getByRole('textbox')).toHaveValue('Joy')    
  });
});

