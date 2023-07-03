import axios from 'axios';

const URL_API = 'https://64a1f5310079ce56e2db8057.mockapi.io/contacts';

export const fetchContacts = async () => {
  return await axios.get(URL_API);
};

export const addContacts = async item => {
  return await axios.post(URL_API, item);
};

export const deleteContacts = async id => {
  return await axios.delete(`${URL_API}/${id}`);
};