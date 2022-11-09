import styled from '@emotion/styled';

export const Label = styled.label`
  display: block;
  margin-bottom: ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontweights.aboveNormal};
  font-size: ${p => p.theme.fontSizes.big};
`;

export const Input = styled.input`
  padding: ${p => p.theme.space[1]}px;
  padding-top: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  :focus {
    outline: 4px solid ${p => p.theme.colors.accent};
  }
`;
