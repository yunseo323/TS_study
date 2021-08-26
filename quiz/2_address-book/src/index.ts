interface PhoneNumberDictionary  {
  [phone: string]: {
    num: number;
  };
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

enum PhoneType{
  Home = "home",
  Office = "office",
  Studio = "Studio"
}
// api
// TODO: 아래 함수의 반환 타입을 지정해보세요.
// Promise: 비동기적이라 타입 추론이 되지 않는다 -> 제네릭을 이용해 타입을 달아줘야 함
function fetchContacts(): Promise<Contact[]> { 
  // TODO: 아래 변수의 타입을 지정해보세요.
  const contacts: Contact[] = [
    {
      name: 'Tony',
      address: 'Malibu',
      phones: {
        home: {
          num: 11122223333,
        },
        office: {
          num: 44455556666,
        },
      },
    },
    {
      name: 'Banner',
      address: 'New York',
      phones: {
        home: {
          num: 77788889999,
        },
      },
    },
    {
      name: '마동석',
      address: '서울시 강남구',
      phones: {
        home: {
          num: 213423452,
        },
        studio: {
          num: 314882045,
        },
      },
    },
  ];
  return new Promise(resolve => {
    setTimeout(() => resolve(contacts), 2000);
  });
}

// main
class AddressBook {
  // TODO: 아래 변수의 타입을 지정해보세요.
  contacts:Contact[] = [];

  constructor() { //constructor 함수는 type 선언 x
    this.fetchData();
  }

  fetchData(): void {
    fetchContacts().then(response => {
      this.contacts = response;
    });
  }

  /* TODO: 아래 함수들의 파라미터 타입과 반환 타입을 지정해보세요 */
  findContactByName(name: string): Contact[] {
    return this.contacts.filter(contact => contact.name === name);
  }

  findContactByAddress(address: string): Contact[] {
    return this.contacts.filter(contact => contact.address === address);
  }

  findContactByPhone(phoneNumber:number, phoneType: PhoneType):Contact[] { //phoneType에서 오탈자를 예방하기 위해 이넘을 사용해보자!
    return this.contacts.filter(
      contact => contact.phones[phoneType].num === phoneNumber
    );
  }

  addContact(contact:Contact): void {
    this.contacts.push(contact);
  }

  displayListByName():string[] {
    return this.contacts.map(contact => contact.name); //name 배열이 리턴됨
  }

  displayListByAddress(): string[] {
    return this.contacts.map(contact => contact.address); //address 배열이 리턴됨
  }
  /* ------------------------------------------------ */
}

let heroes = []

new AddressBook();