import styled from '@emotion/styled';

export const TableTransaction = styled.table`
  width: 800px;
  margin: auto;
  overflow: hidden;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
`;

export const HeadStr = styled.tr`
  background-color: ${props => props.theme.colors.backgroundTable};
`;

export const TableTitle = styled.th`
  padding-top: 10px;
  padding-bottom: 10px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.white};
  border-right: 1px solid;
  :first-child {
    text-align: left;
    padding-left: 100px;
  }
  :last-child {
    border-right: none;
  }
`;

export const ValueStr = styled.tr`
  background-color: ${props => props.theme.colors.white};
  :nth-child(2n) {
    background-color: ${props => props.theme.colors.backgroundProfile};
  }
`;
export const TableValue = styled.td`
  width: calc(100% / 3);
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  text-transform: capitalize;
  color: ${props => props.theme.colors.greyFont};
  font-weight: 400;
  border-right: ${props => `1px solid ${props.theme.colors.backgroundProfile}`};
  :first-child {
    text-align: left;
    padding-left: 100px;
  }
  :nth-child(2) {
    text-align: right;
    padding-right: 100px;
  }
  :last-child {
    border-right: none;
  }
`;
