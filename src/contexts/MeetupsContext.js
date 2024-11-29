import { createContext, useEffect, useState } from 'react';
import { useFetch } from '../util-hooks';

const MeetupsContext = createContext({
  meetups: [],
  addMeetup: (meetup) => {}
});

export function MeetupsContextProvider({ children }) {
  const [meetups, setMeetups] = useState([]);
  const { data } = useFetch({ url: '/data.json' });

  useEffect(() => {
    if (data) {
      setMeetups(data);
    }
  }, [data]);

  const addMeetup = (meetup) => {
    setMeetups((prevMeetups) => [...prevMeetups, meetup]);
  };

  const context = {
    meetups,
    addMeetup
  };

  return (
    <MeetupsContext.Provider value={context}>
      {children}
    </MeetupsContext.Provider>
  );
}

export default MeetupsContext;
