interface DropdownItem<dr>{
  value: dr;
  selected: boolean;
}
// interface Email {
//   value: string;
//   selected: boolean;
// }

const emails: DropdownItem<string>[] = [ //type
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

// interface ProductNumber {
//   value: number;
//   selected: boolean;
// }

const numberOfProducts: DropdownItem<number>[] = [ //type
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

/*
function createDropdownItem(item: DropdownItem<string>|DropdownItem<number>) { //type
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}
*/

function createDropdownItem_<T>(item: DropdownItem<T>){ //function에 제네릭 추가 - union 없앨수 있다!
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem_<string>(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});

numberOfProducts.forEach(function(product){
  const item = createDropdownItem_<number>(product);
})
/*
1. 인터페이스를 달아, 유니온을 사용해 이용함 
*/