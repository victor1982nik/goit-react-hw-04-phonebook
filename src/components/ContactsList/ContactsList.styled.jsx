import styled from '@emotion/styled';

export const List = styled.li`
  font-weight: ${p => p.theme.fontweights.aboveNormal};
  font-size: ${p => p.theme.fontSizes.big};
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;
