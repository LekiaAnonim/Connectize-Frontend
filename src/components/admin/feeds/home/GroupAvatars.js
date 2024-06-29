import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export default function GroupAvatars() {
  return (
    <AvatarGroup className='sidebar-avatar'>
      <Avatar className='avatar company-logo' alt="Remy Sharp" src="/images/OIG4.jpeg" />
      <Avatar className='avatar rep-avatar' alt="Travis Howard" src="/images/woman_singing_ghs.jpg" />
    </AvatarGroup>
  );
}