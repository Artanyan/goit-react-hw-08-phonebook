import { useSelector, useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';
import { allOperations, allSelectors } from 'redux/phonebook';
import styles from './ContactList.module.css';
import Button from '@material-ui/core/Button';

const ContactList = () => {
  const filteredEl = useSelector(allSelectors.getVisibleContacts);
  const loading = useSelector(allSelectors.getLoading);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(allOperations.deleteContact(id));

  return (
    <ul className={styles.contactList}>
      {loading && (
        <div className={styles.Loader}>
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        </div>
      )}
      {filteredEl.length > 0 ? (
        filteredEl.map(contact => (
          <li className={styles.contactList__item} key={contact.id}>
            <span>{contact.name}</span> {contact.number}
            <Button
              type="button"
              variant="outlined"
              color="secondary"
              onClick={() => onDeleteContact(contact.id)}
            >
              Delete
            </Button>
          </li>
        ))
      ) : (
        <h2>Contact with this name was not found</h2>
      )}
    </ul>
  );
};

export default ContactList;
