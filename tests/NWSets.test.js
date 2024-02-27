import React from 'react'
import ReactDOM from 'react-dom'
import Shuriken from '../components'

describe('Overall Acceptance Testing', () => {
    it('renders a shuriken component without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Shuriken />, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})
