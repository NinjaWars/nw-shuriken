import { render, screen } from '@testing-library/react'

import React from 'react'
import Shuriken from '.'

describe('<Shuriken>', () => {
  it('renders with a button inside', () => {
    render(<Shuriken />, document.createElement('div'))
    expect(screen.queryAllByRole('button')[0]).toBeTruthy()
    expect(screen.findByText('Shuriken')).toBeTruthy()
  })
})
