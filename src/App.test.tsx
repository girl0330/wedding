// src/App.test.tsx
import { describe, it, expect } from 'vitest'
import matchers from '@testing-library/jest-dom/matchers'
import { render } from '@testing-library/react'
import App from './App'

// jest-dom 매처 등록 (toBeInTheDocument 등)
expect.extend(matchers)

describe('App', () => {
  it('renders learn react link', () => {
    const { getByText } = render(<App />)
    expect(getByText(/learn react/i)).toBeInTheDocument()
  })
})
