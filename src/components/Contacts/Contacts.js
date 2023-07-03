import css from './Contacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/contactsSelectors';
import { useMemo } from 'react';
import { useEffect } from 'react';
import * as contactsOperation from '../../redux/contacts/contactsOperation';

export default function Contacts() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  console.log(contacts);

  useEffect(() => {
    dispatch(contactsOperation.fetchContacts());
  }, [dispatch]);

  const filteredContacts = useMemo(
    () =>
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      ),
    [filter, contacts]
  );

  const handleRemove = id => {
    dispatch(contactsOperation.deleteContacts(id));
  };

  return (
    <>
      {contacts.length > 0 && (
        <ul className={css.contactsList}>
          {filteredContacts.map(({ id, name, number }) => (
            <li className={css.item} key={id}>
              <div className={css.info}>
                <span className={css.name}>
                  {name} : {number}
                </span>
              </div>
              <button
                className={css.button}
                type="button"
                name="delte"
                onClick={() => handleRemove(id)}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
