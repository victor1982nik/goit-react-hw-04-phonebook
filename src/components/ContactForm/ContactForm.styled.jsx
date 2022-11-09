import styled from '@emotion/styled';

export const Form = styled.form`
  padding: ${p => p.theme.space[4]}px;
  width: 300px;
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.borderBlack};
`;

export const Button = styled.button`
  padding: 6px 10px 1px 10px;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 1px 3px 1px rgba(0, 0, 0, 0.1), 2px 1px 2px rgba(0, 0, 0, 0.08),
    1px 2px 2px rgba(0, 0, 0, 0.12);
  cursor: pointer;

  :active {
    background-color: ${p => p.theme.colors.accent};
  }
`;
