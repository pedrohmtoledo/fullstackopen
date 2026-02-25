import { useEffect, useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import requests from './services/requests';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [message, setMessage] = useState({ message: null, status: 'succeed' });

  useEffect(() => {
    requests.getAll().then((initialPersons) => setPersons(initialPersons));
  }, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleDeleteButton = (id) => {
    const [whichPerson] = persons.filter((person) => person.id === id);

    const confirmAnswer = confirm(`Delete ${whichPerson.name}?`);
    if (confirmAnswer) {
      requests
        .removePerson(id)
        .then((deletedPerson) =>
          setPersons(persons.filter((person) => person.id !== deletedPerson.id))
        );
    }
  };

  const handleAddButton = (event) => {
    event.preventDefault();
    const person = {
      name: newName,
      number: newNumber,
    };

    const updateExisting = () => {
      // procedure to update the number of existing name
      const confirmUpdate = confirm(
        `${person.name} is already added to phonebook, replace the old number with a new one?`
      );
      const existingPerson = persons.find(
        (existing) => existing.name === person.name
      );

      if (confirmUpdate) {
        const changedPerson = { ...existingPerson, number: person.number };

        requests
          .update(changedPerson.id, changedPerson)
          .then((returnedPerson) =>
            setPersons(
              persons.map((person) =>
                person.id === changedPerson.id ? returnedPerson : person
              )
            )
          )
          .catch((error) => {
            console.log(error);
            setMessage({
              message: `Information of ${changedPerson.name} has already been removed from server`,
              status: 'error',
            });
            setPersons(
              persons.filter((person) => person.id !== changedPerson.id)
            );
            setTimeout(() => {
              setMessage({ ...message, message: null });
            }, 3000);
          });
      }
    };

    if (checkDuplicate(person.name)) {
      // if there is no existing name, add new name
      requests.create(person).then((newPerson) => {
        setPersons(persons.concat(newPerson));
        setMessage({
          ...message,
          message: `Added ${newPerson.name}`,
          status: 'succeed',
        }); // show message that person was added
        setTimeout(() => {
          setMessage({ ...message, message: null });
        }, 3000);
      });
    } else {
      // otherwise update existing
      updateExisting();
    }

    setNewName('');
    setNewNumber('');
  };

  const checkDuplicate = (name) => {
    return persons.find((item) => item.name === name) ? false : true;
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message.message} status={message.status} />
      <Filter change={handleFilterChange} filter={filter} />

      <PersonForm
        submit={handleAddButton}
        newName={newName}
        nameChange={handleNameChange}
        newNumber={newNumber}
        numberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        filter={filter}
        deletePerson={handleDeleteButton}
      />
    </div>
  );
};

export default App;
