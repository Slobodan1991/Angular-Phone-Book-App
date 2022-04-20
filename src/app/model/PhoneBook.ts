import PhoneBookContact from "./PhoneBookContact";

class PhoneBook {
    
    contacts: any;

    constructor() {
        this.contacts = this.loadFromLocalStorage();
    }

    add(contact: PhoneBookContact) {
        this.contacts.push(contact);
        this.saveToLocalStorage();
    }

    delete(contact: any) {
        this.contacts.splice(this.contacts.indexOf(contact), 1);
        this.saveToLocalStorage();
    }
    
    saveToLocalStorage() {
        localStorage.setItem('phonebook-data', JSON.stringify(this.contacts));
    }

    loadFromLocalStorage() {
        var json = localStorage.getItem('phonebook-data');

        if (json === null)
        return [];

        let jsonParsed = JSON.parse(json, (key, value) => {
            if (key === "contcat") {
                value = new PhoneBookContact(value);
            }
            return value;
        })

        if (jsonParsed.length === 0) 
        return [];

        let phoneBookContact = [];

        for (let i = 0; i < jsonParsed.length; i++) {
            phoneBookContact.push(PhoneBookContact.fromJSON(jsonParsed[i]));
        }
        return phoneBookContact;
    };

    

}

export default PhoneBook;