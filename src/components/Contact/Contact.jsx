import { FaPhoneAlt } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { deleteContact } from '../../redux/contacts/operations';

export default function Contact({ number, name, id }) {
  const dispatch = useDispatch();

  return (
    <div className={css.cardContainer}>
      <div className={css.cardBox}>
        <div className={css.iconBox}>
          <IoPerson className={css.icon} />
          <p className={css.nameClient}>{name}</p>
        </div>
        <div className={css.iconBox}>
          <FaPhoneAlt className={css.icon} />
          <p className={css.namberClient}>{number}</p>
        </div>
      </div>
      <button
        className={css.btn}
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </button>
    </div>
  );
}
