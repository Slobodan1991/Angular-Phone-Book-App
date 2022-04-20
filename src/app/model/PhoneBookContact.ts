class PhoneBookContact {

    id: string;
    content: string;
   
    constructor(content: any) {
        this.id = Math.random().toString(36).substring(7);
        this.content = content;
        
    }

    static fromJSON (json: { content: string; id: string;  }) {
        let phoneBookContact = new PhoneBookContact(json.content);
        phoneBookContact.id = json.id;
        
        return phoneBookContact;
    }
}

export default PhoneBookContact;