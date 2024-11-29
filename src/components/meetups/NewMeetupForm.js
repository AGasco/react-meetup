import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MeetupsContext from '../../contexts/MeetupsContext';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

const initialState = {
  title: '',
  image: '',
  address: '',
  description: ''
};

export default function NewMeetupForm() {
  const [formInput, setFormInput] = useState(initialState);
  const { meetups, addMeetup } = useContext(MeetupsContext);
  const navigate = useNavigate();

  const { title, image, address, description } = formInput;

  const handleChange = (e) => {
    setFormInput({ ...formInput, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const meetupData = {
      id: `m${meetups.length + 1}`,
      title,
      image,
      address,
      description
    };

    addMeetup(meetupData);
    navigate('/');
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input
            type="text"
            required
            id="title"
            value={title}
            onChange={handleChange}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input
            type="url"
            required
            id="image"
            value={image}
            onChange={handleChange}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            required
            id="address"
            value={address}
            onChange={handleChange}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            value={description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
