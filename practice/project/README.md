## 코로나 세계 현황판 만들기

최종 프로젝트 폴더입니다

## 자바스크립트 프로젝트에 타입스크립트 적용하기

0. 자바스크립트 파일에 JSDoc 로 타입시스템 입히기
```
// @ts-check
```
-> js 파일에서 ts를 적용한 것 같은 효과를 볼 수 있다

1. 타입스크립트의 기본 환경 구성
    - [x] NPM 초기화
    - [x] 타입스크립트 라이브러리 설치
    - [x] 타입스크립트 설정 파일 생성 및 기본 값 추가
    - [x] 자바스크립트 파일을 타입스크립트 파일로 변환하기
    - [x] `tsc` 명령어로 타입스크립트 컴파일 하기

2. 명시적인 `any` 선언하기
    - `tsconfig.json` 파일에 `noImplicitAny` 값을 `true`로 추가
        (모든 변수에 any 속성이 지정됨)
    - 가능한한 구체적인 타입으로 타입 정의

3. 프로젝트 환경 구성
    - babel, eslint, prettier 등의 환경 설정

4. 외부 라이브러리 모듈화
    - [x] 외부 라이브러리 에러 처리
    
5. api 함수 타입 정의
    - `import axios, { AxiosResponse } from 'axios';` 로, axios를 type으로 구현하고 적용할 수 있었음
        
        ex) `Promise<AxiosResponse<세부타입>>`
    - await으로 data 받기
    - reduce 함수 사용
    - 타입 외부 모듈 분리하기 (export interface)
    - toString() 이용하기
## 참고 자료

- [존스 홉킨스 코로나 현황](https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6)
- [Postman API](https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest#27454960-ea1c-4b91-a0b6-0468bb4e6712)
- [Type Vue without Typescript](https://blog.usejournal.com/type-vue-without-typescript-b2b49210f0b)