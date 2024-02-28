import React from 'react';

async function getContacts()
{
    const res = await fetch("http://localhost:3000/contacts/api", {
        method: 'GET',
    });
    const data = res.json();
    return data;
}

const Contacts = async () => {
    const contacts = await getContacts();
    console.log('contacts: ', contacts);
    return (
        <div>
            Contacts Page!
        </div>
    );
};

export default Contacts;