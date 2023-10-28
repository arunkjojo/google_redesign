// @ts-nocheck

import styled from '@emotion/styled'

export const ImageWrapper = styled.img`
  display: inline-block;
  cursor: pointer;
  border-radius: 50%;
  &.storybook-image--badged {
  }
  &.storybook-image--default {
    width: 60px;
    width: 60px;
  }
  &.storybook-image--small {
    width: 45px;
    width: 45px;
  }
  &.storybook-image--medium {
    width: 50px;
    width: 50px;
  }
  &.storybook-image--large {
    width: 100px;
    width: 100px;
  }
`

export const Badge = styled.span`
  position: absolute;
  margin-bottom: 0%;
  top:50%;
  padding: 1em 1em;
  border-radius: 50%;
  background-color: #89CFF0;
  &.badged--medium {
    font-size: 8px;
    left: 100px;
  }
  &.badged--small {
    font-size: 6px;
    left: 45px;
  }
  &.badged--large {
    font-size: 10px;
    left: 150px;
  }
`;