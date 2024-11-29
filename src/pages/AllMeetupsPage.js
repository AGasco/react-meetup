import { ClipLoader } from 'react-spinners';
import MeetupList from '../components/meetups/MeetupList';
import classes from './../components/meetups/MeetupList.module.css';
import { useFetch } from './../util-hooks/useFetch';

export default function AllMeetupsPage() {
  const { data: meetups } = useFetch({
    url: '/data.json'
  });

  console.log('data', meetups);

  if (!meetups)
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
