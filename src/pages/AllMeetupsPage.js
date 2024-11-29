import { useContext } from 'react';
import { ClipLoader } from 'react-spinners';
import { MeetupList } from '../components';
import { MeetupsContext } from '../contexts';
import classes from './../components/meetups/MeetupList.module.css';

export default function AllMeetupsPage() {
  const { meetups } = useContext(MeetupsContext);

  if (!meetups || meetups.length === 0)
    return (
      <div className={classes.spinner}>
        <ClipLoader color={'#77002e'} size={80} />
      </div>
    );

  return (
    <section>
      <h1>All Meetups</h1>
      <ul className={classes.list}>
        <MeetupList meetups={meetups} />
      </ul>
    </section>
  );
}
