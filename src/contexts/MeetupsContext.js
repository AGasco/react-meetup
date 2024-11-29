import { createContext, useEffect, useState } from 'react';
import { useFetch } from '../util-hooks/useFetch';

const MeetupsContext = createContext({
  meetups: [],
  addMetup: (meetup) => {}
});

export function MeetupsContextProvider({ children }) {
  const [meetups, setMeetups] = useState([]);
  const { data } = useFetch({ url: '/data.json' });

  useEffect(() => {
    if (data) {
      setMeetups(data);
    }
  }, [data]);

  const addMetup = (meetup) => {
    setMeetups((prevMeetups) => [...prevMeetups, meetup]);
  };

  const context = {
    meetups,
    addMetup
  };

  return (
    <MeetupsContext.Provider value={context}>
      {children}
    </MeetupsContext.Provider>
  );
}

export default MeetupsContext;
