import styled from '@emotion/styled';

export const Background = styled.div`
  margin-bottom: 50px;
  padding: 100px;
  background-color: ${props => props.theme.colors.backgroundProfile};
`;

export const Section = styled.section`
  margin-top: 50px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  width: 400px;
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.borderRadius};
  overflow: hidden;
`;

export const Title = styled.h2`
  padding-top: 20px;
  padding-bottom: 20px;
  color: ${props => props.theme.colors.greyFont};
  text-transform: uppercase;
  background-color: ${props => props.theme.colors.white};
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 80px;
  padding-top: 8px;
  padding-bottom: 10px;
`;

export const Label = styled.span`
  color: ${props => props.theme.colors.white};
`;

export const Percentage = styled.span`
  color: ${props => props.theme.colors.white};
  font-size: 20px;
`;
