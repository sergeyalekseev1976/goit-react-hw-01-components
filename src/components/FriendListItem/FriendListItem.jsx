import { Item, Status, Box, Avatar, Name } from './FriendListItem.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <Item>
    <Status isOnline={isOnline} />
    <Box>
      <Avatar src={avatar} alt={`${name} avatar`} />
    </Box>
    <Name>{name}</Name>
  </Item>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
