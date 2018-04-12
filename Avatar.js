import React from 'react';

const Avatar = ({ name, avatar }) => (
  <div>
    <h5 class='center fighter'>{name}</h5>
    <img class='avatar' src={avatar} />
  </div>
)

export default Avatar;
