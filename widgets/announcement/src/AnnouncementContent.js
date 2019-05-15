/**
 * @fileoverview Slideshow component that given an array of slide descriptions
 * of mixed types, renders the slides and automatically plays the slideshow for
 * the given durations
 */

import React, { Component } from 'react'
import { config } from '@fortawesome/fontawesome-svg-core'

config.autoAddCss = false

const DEFAULT_COLOR = '#34495e'
const DEFAULT_TEXT_COLOR = '#ffffff'
const DEFAULT_ACCENT_COLOR = '#A0A0A0'
const DEFAULT_TEXT = 'You did not fill this out'
const DEFAULT_TITLE_TEXT_COLOR = '#fff0f0'

class AnnouncementContent extends Component {
  render() {
    const {
      data: {
        text = DEFAULT_TEXT,
        textColor = DEFAULT_TEXT_COLOR,
        titleTextColor = DEFAULT_TITLE_TEXT_COLOR,
        color = DEFAULT_COLOR,
        accentColor = DEFAULT_ACCENT_COLOR
      } = {}
    } = this.props
    return (
      <div className='announce'>
        <div className='background' />
        <div>
          <header className='title'>{'Announcement'}</header>
          <div className='text'>{text}</div>
        </div>

        <style jsx>
          {`
            .announce {
              position: relative;
              box-sizing: border-box;
              height: 100%;
              width: 100%;
              background: ${color};
              color: ${textColor};
              flex: 1;
              padding: 16px;
              font-family: 'Open Sans', sans-serif;
              display: flex;
              flex-direction: row;
              justify-content: top;
              align-items: center;
              border: solid green 1px;
            }
            .announce .background {
              width: 100%;
              height: 100%;
              position: absolute;
              top: 0;
              left: 0;
              z-index: 0;
              border: solid red 1px;
            }
            .announce .text {
              color: ${textColor};
              position: relative;
              left: 0%;
              top: 5%;
              font-family: 'Open Sans', sans-serif;
              font-size: 0.9em;
              padding: 16px;
              font-weight: 600;
              text-align: left;
              z-index: 1;
              border: solid red 1px;
            }
            .announce .title {
              color: ${titleTextColor};
              position: absolute;
              top: 5px;
              font-family: 'Open Sans', sans-serif;
              font-size: 1.5em;
              padding: 16px;
              font-weight: 600;
              text-align: top, left;
              z-index: 1;
              border-bottom: thick double ${accentColor};
              border: solid red 1px;
            }
          `}
        </style>
      </div>
    )
  }
}

export default AnnouncementContent