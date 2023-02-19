import styled from '@emotion/styled';

export const ProfileWrap = styled.div`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  overflow: hidden;
`;

export const Description = styled.div`
  padding: 50px;
  background-color: ${props => props.theme.colors.white};
`;

export const Box = styled.div`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
  width: 120px;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${props => props.theme.colors.backgroundProfile};
`;

export const Name = styled.h2`
  color: ${props => props.theme.colors.black};
`;

export const Info = styled.span`
  margin-top: 10px;
  display: block;
  color: ${props => props.theme.colors.firstFont};
`;

export const Stats = styled.ul`
  display: flex;
  background-color: ${props => props.theme.colors.backgroundStats};
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  border: ${props => `1px solid ${props.theme.colors.backgroundProfile}`};
`;

export const Label = styled.span`
  color: ${props => props.theme.colors.firstFont};
`;

export const Quantity = styled.span`
  color: ${props => props.theme.colors.black};
  font-weight: 700;
`;
