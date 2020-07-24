import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider, ColorModeProvider, CSSReset } from '@chakra-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import themeConfig from '../infrastructure/theme-config';

const AllTheProviders: React.FC<any> = ({ children }) => {
  return (
    <ThemeProvider>
      <ColorModeProvider>
        <CSSReset config={themeConfig} />

        <BrowserRouter>
          {children}
        </BrowserRouter>
      </ColorModeProvider>
    </ThemeProvider>
  )
}

const customRender = (ui: React.ReactElement, options?: any) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react'

// override render method
export { customRender as render }
