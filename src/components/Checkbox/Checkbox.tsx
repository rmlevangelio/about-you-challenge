import * as React from 'react';
import styled from 'styled-components';

interface StyledCheckboxProps {
  checked: boolean;
  name: string;
}

const mapColor = name => {
  switch (name) {
    case 'blau':
      return 'rgb(54, 150, 243)';
    case 'schwarz':
      return 'rgb(0, 0, 0)';
    case 'grau':
      return 'rgb(159, 159, 159)';
    case 'weiß':
      return 'rgb(255, 255, 255)';
    case 'rot':
      return 'rgb(244, 67, 53)';
    case 'braun':
      return 'rgb(121, 84, 71)';
    case 'grün':
      return 'rgb(75, 175, 80)';
    case 'pink':
      return 'rgb(233, 29, 98)';
    case 'beige':
      return 'rgb(245, 221, 179)';
    case 'silber':
      return 'rgb(211, 211, 211)';
    case 'gold':
      return 'rgb(214, 181, 127)';
    case 'mischfarben':
      return '#333';
    case 'gelb':
      return 'rgb(252, 235, 61)';
    case 'orange':
      return 'rgb(246, 152, 1)';
    case 'bronze':
      return 'rgb(244, 144, 105)';
    case 'lila':
      return 'rgb(156, 38, 176)';
    case 'transparent':
      return 'transparent';
    default:
      return '#eee';
  }
};

const Checkbox = ({ checked, name, ...props }) => {
  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox name={name} checked={checked}>
        <Icon name={name} viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
};

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: ${(props: { name: string }) =>
    props.name === 'weiß' ? 'black' : 'white'};
  stroke-width: 2px;
`;
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  background: ${(props: StyledCheckboxProps) => mapColor(props.name)};
  border: ${(props: StyledCheckboxProps) =>
    props.name === 'weiß' ? '2px solid rgb(159, 159, 159)' : 'none'};
  border-radius: 3px;
  transition: all 150ms;

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`;

export default Checkbox;
