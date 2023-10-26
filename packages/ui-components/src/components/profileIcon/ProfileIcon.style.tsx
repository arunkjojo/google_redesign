// @ts-nocheck

import styled from '@emotion/styled'

export const ImageWrapper = styled.img`
  display: inline-block;
  cursor: pointer;
  border-radius: 50%;
  &.storybook-image--badged {
  }
  &.storybook-image--default {
    width: 75px;
    width: 75px;
  }
  &.storybook-image--small {
    width: 50px;
    width: 50px;
  }
  &.storybook-image--medium {
    width: 100px;
    width: 100px;
  }
  &.storybook-image--large {
    width: 150px;
    width: 150px;
  }
`

export const Badge = styled.span`
  position: absolute;
  right:-0px;
  margin-bottom: 0%;
  top:50%;
  padding: 1em 1em;
  border-radius: 50%;
  background-color: #89CFF0;
  font-size: 8px;
`;