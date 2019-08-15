import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

export default class AccordionExampleStandard extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion className="work">
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
          What is Nasa's photo of the day?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
           Every day NASA features a different picture of the universe with an explanation. 
          </p>
        </Accordion.Content>

     
      </Accordion>
    )
  }
}
