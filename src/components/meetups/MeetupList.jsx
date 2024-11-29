import React from 'react';
import MeetupItem from './MeetupItem';

const MeetupList = ({ meetups }) => {
  return meetups.map((meetup) => <MeetupItem item={meetup} />);
};

export default MeetupList;
