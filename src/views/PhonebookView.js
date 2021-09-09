import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from 'Components/ContactForm';
import Filter from 'Components/Filter';
import ContactList from 'Components/ContactList';
import { allOperations } from 'redux/phonebook';
import { getItems } from 'redux/phonebook/phonebook-selectors';

import styles from './PhonebookView.module.css';

const App = () => {
  const items = useSelector(getItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allOperations.fetchContact());
  }, [dispatch]);

  return (
    <div className={styles.Phonebook}>
      <h1 className={styles.header_phonebook}>Your phonebook</h1>
      <ContactForm />
      {items.length < 1 ? (
        <h2>Add new contacts, your list is empty</h2>
      ) : (
        <div className="contacts">
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      )}
    </div>
  );
};

export default App;
