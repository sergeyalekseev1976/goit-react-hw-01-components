import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  width: 300px;
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
`;

export const Status = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 5px;
  overflow: hidden;
  background-color: ${props => props.theme.colors.backgroundProfile};
`;

export const Avatar = styled.img`
  width: 50px;
`;

export const Name = styled.p`
  color: ${props => props.theme.colors.black};
  font-size: 20px;
  font-weight: 500;
`;
