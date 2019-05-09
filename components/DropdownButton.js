import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  faPlay,
  faFont,
  faList,
  faMousePointer,
  faCloudSun,
  faExclamationTriangle,
  faGifts,
  faPlus
} from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false
library.add(faPlus)
library.add(faList)
library.add(faPlay)
library.add(faFont)
library.add(faExclamationTriangle)
library.add(faMousePointer)
library.add(faCloudSun)
library.add(faGifts)

class DropdownButton extends Component {
  constructor() {
    super()

    this.state = {
      showMenu: false
    }

    this.showMenu = this.showMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }

  showMenu(event) {
    event.preventDefault()

    this.setState({ showMenu: true }, () => {
      document && document.addEventListener('click', this.closeMenu)
    })
  }

  closeMenu(event, force = false) {
    if (force || (this.dropdownMenu && !this.dropdownMenu.contains(event.target))) {
      this.setState({ showMenu: false }, () => {
        document && document.removeEventListener('click', this.closeMenu)
      })
    }
  }

  render() {
    const { icon = null, text = 'Show menu', choices = [], onSelect = () => {} } = this.props
    return (
      <div className={'dropdownContainer'}>
        <button className={'btn'} onClick={this.showMenu}>
          <div className={'btnIcon'}>{icon && <FontAwesomeIcon icon={icon} />}</div>
          {text}
        </button>

        {this.state.showMenu ? (
          <div
            className='menu'
            ref={element => {
              this.dropdownMenu = element
            }}
          >
            {choices.map(choice => (
              <button
                className={'choice'}
                onClick={event => {
                  this.closeMenu(event, true /* force */)
                  onSelect(choice.key)
                }}
              >
                <div className={'btnIcon'}>
                  {choice.icon && <FontAwesomeIcon icon={choice.icon} />}
                </div>
                {choice.name}
              </button>
            ))}
          </div>
        ) : null}
        <style jsx>
          {`
            .dropdownContainer {
              display: inline-block;
              vertical-align: middle;
              position: relative;
            }
            .btn {
              font-family: 'Open Sans', sans-serif;
              background: #7bc043;
              text-decoration: none;
              text-transform: uppercase;
              color: white;
              font-size: 14px;
              border-radius: 4px;
              border: none;
              display: inline-block;
              padding: 16px;
              padding-left: 24px;
              padding-right: 24px;
              outline: none;
              cursor: pointer;
            }
            .btnIcon {
              margin-right: 16px;
              display: inline;
            }
            .menu {
              position: absolute;
              top: calc(100% + 8px);
              left: 0;
              display: flex;
              flex-direction: column;
              z-index: 2;
              background: white;
              box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
              border-radius: 4px;
              overflow: hidden;
            }
            .choice {
              font-family: 'Open Sans', sans-serif;
              background: white;
              text-decoration: none;
              text-transform: uppercase;
              color: #333;
              min-width: 200px;
              font-size: 14px;
              border: none;
              border-bottom: 1px solid #ddd;
              display: flex;
              padding: 16px;
              padding-left: 24px;
              padding-right: 24px;
              text-align: left;
              outline: none;
              cursor: pointer;
              flex-direction: row;
            }
          `}
        </style>
      </div>
    )
  }
}

export default DropdownButton
