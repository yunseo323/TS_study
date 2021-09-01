interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

//상품 목록을 받아오기 위한 API 함수

// function fetchProducts(): Promise<Product[]> {

// }

/* 
유틸리티 타입을 쓰면 세부 타입을 정의히지 않아도 됨

interface ProductDetail {
    id: number;
    name: string;
    price: number;
}
*/

function displayProductDetail(shoppingItem: Pick<Product, 'id'|'name'|'price'>){
    //'id'|'name'|'price' key 이름들로 pick 할 수 있음

}

type UpadateProduct = Partial<Product>

//3. 특정 상품 정보를 업데이트
function updateProductItem(productItem: Partial<Product>){

}

//4. 유틸리티 타입 구현하기 - Partial
interface UserProfile {
    username: string;
    email: string;
    profilePhotoUrl: string; 
}

// #1
type UserProfileUpdate = {
    username?: UserProfile['username'];
    email?: UserProfile['email'];
    profilePhotoUrl?: UserProfile['profilePhotoUrl'];
}

// #2 in operator 사용 (#1과 동일) -> 맵드 타입

// type UserProfileUpdate_ = {
//     [p in 'username'|'email'|'profilePhotoUrl']?: UserProfile[p]
// }


type UserProfileKeys = keyof UserProfile

type UserProfileUpdate_ = {
    [p in UserProfileKeys]?: UserProfile[p]
}

// #3
type Subset<T> = {
    [p in keyof T]?: T[p];
}