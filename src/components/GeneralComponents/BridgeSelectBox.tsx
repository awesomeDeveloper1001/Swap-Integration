import * as React from 'react';
import SelectUnstyled, {
  SelectUnstyledProps,
  selectUnstyledClasses,
} from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import { styled } from '@mui/system';
import { PopperUnstyled } from '@mui/base';

const StyledButton = styled('button')`
  font-family: IBM Plex Sans, sans-serif;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  min-height: calc(1.5em + 22px);
  background: #fff;
  border: 1px solid #1a2b44;
  border-radius: 5px;
  padding: 10px;
  text-align: left;
  line-height: 1.5;
  color: #fff;
  background-color: #1a2b44;

  &.${selectUnstyledClasses.focusVisible} {
    outline: 4px solid rgba(100, 100, 100, 0.3);
  }

  &.${selectUnstyledClasses.expanded} {
    border-radius: 5px 5px 0 0;

    &::after {
      content: '▴';
    }
  }

  &::after {
    content: '▾';
    float: right;
  }

  & img {
    margin-right: 10px;
  }
`;

const StyledListbox = styled('ul')`
  font-family: IBM Plex Sans, sans-serif;
  width: 100% !important;
  min-width: 150px;
  padding: 0;
  margin: 0;
  border: 1px solid #1a2b44;
  border-top: none;
  max-height: 400px;
  overflow: auto;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #1a2b44;
  border-radius: 0 0 5px 5px;
`;

const StyledOption = styled(OptionUnstyled)`
  list-style: none;
  padding: 4px 10px;
  margin: 0;
  border-bottom: 1px solid #1a2b44;
  cursor: default;
  width: 100%;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.disabled} {
    color: #888;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: rgba(25, 118, 210, 0.08);
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: #16d;
    color: #fff;
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: #05e;
    color: #fff;
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: #39e;
  }

  & img {
    margin-right: 10px;
  }
`;

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

const CustomSelect = React.forwardRef(function CustomSelect(
  props: SelectUnstyledProps<number>,
  ref: React.ForwardedRef<any>,
) {
  const components: SelectUnstyledProps<number>['components'] = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
  };

  return <SelectUnstyled {...props} ref={ref} components={components} />;
});

export default function UnstyledSelectRichOptions() {
  return (
    <CustomSelect>
      {countries.map((c) => (
        <StyledOption key={c.code} value={c.code}>
          <img
            loading="lazy"
            width="20"
            height="20"
            src={`assets/icons/bridge/${c.code.toLowerCase()}.png`}
            alt={c.label}
          />
          {c.label}
        </StyledOption>
      ))}
    </CustomSelect>
  );
}

const countries = [
  { code: 'fantom', label: 'Fantom'},
  { code: 'avalanche', label: 'Avalanche'},
  { code: 'bsc', label: 'BSC'},
  { code: 'fuse', label: 'Fuse'},
  { code: 'eth', label: 'Ethereum'},
  { code: 'moonriver', label: 'Moonriver'},
  { code: 'polygon', label: 'Polygon'},
]