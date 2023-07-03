import Contacts from './Contacts/Contacts';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

export default function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </div>
  );
}
