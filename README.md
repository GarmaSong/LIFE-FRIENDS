## 📆 프로젝트 기간
- 2021.05.10 ~ 2021.05.21 (약 2주)

## 📌 Keywords
- 자체프로젝트 | 커머셜사이트 | 로그인 | 회원가입 | 상세상품정보

## 🔨 사용한 기술 스택
- React | Sass | Github | Trello

## 👪 팀원구성
- Front-end: 김유림, 송가람, 안준현
- Back-end: 신승호, 양영건

## 🔗 프로젝트 링크
[블로그](https://velog.io/@sgr2134/1%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0%EB%A1%9D-Life-Friends) |
[프로젝트 영상](https://www.youtube.com/watch?v=L71rxDzQI1c&t=126s) 


## 🧐 프로젝트 개요

- 커머셜 사이트 중 하나인 'LINE FRIENDS'를 인생의 친구가 되는 아이템들을 판매하는 'LIFE FRIENDS' 사이트로 재구성, 실제 사이트와 동일하게 동작하도록 구현

## 🎯 프로젝트 목표

- 클래스형 React를 통한 페이지 구현 및 Sass를 이용한 스타일을 적용
- Restful API를 통한 Back-end와의 데이터 통신
- Agile 방식을 활용한 프로젝트의 협업 방식의 습득

## 🎉 프로젝트 진행

### 업무 관리

- 매일 Daily Scrum을 통해 blocker와 필요한 사항들을 빠르게 협의
- 매주 Sprint회의를 진행하며 프로젝트 진행 상황을 확인하고 피드백
- 일정 관리를 위한 Trello 사용 및 GitHub를 이용한 코드 리뷰

### 구현 사항

❗**자세한 코드 설명은 [여기](https://velog.io/@sgr2134/1%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0%EB%A1%9D-Life-Friends-2%ED%8E%B8) 클릭해주세요.**

1. **로그인 & 회원가입**
    - JWT의 Access Token과 Local storage를 이용한 인증, 인가
    - 로그인과 회원가입 시 입력 값의 유효성을 검사하기 위한 정규식 파일 생성 및 활용
    - Form Layout 재사용을 위한 컴포넌트 화
2. **제품 상세페이지**
    - Back-end의 DB에서 필요한 데이터를 Fetch를 이용하여 출력
    - 상품 수량에 따른 가격의 변동 표기

### Refactoring(2021.07~)
- Redux를 이용한 로그인과 회원가입 상태관리(진행 중)

## 🤓 무엇을 배웠을까?

- **협업의 방식**: 처음 팀 프로젝트를 진행하며 **Trello**와 **Github**와 같은 **협업 관리 툴을 이용**해 볼 수 있었습니다. 또한 매일 **스크럼 회의**를 진행하며 서로의 블로커와 진행 상황을 체크하며 피드백 하고 빠르게 나아갈 수 있었습니다. 혼자 했으면 포기했을 법한 부분을 함께하니 이뤄갈 수 있었다는 걸 배웠습니다.
- **가독성과 효율성의 고민**: 로그인과 회원가입 페이지 구현을 맡으며 비슷한 형식을 가진 두 페이지를 **컴포넌트를 통해 재사용** 하고자 고민한 경험이 있습니다. 따라서 같은 컴포넌트를 통해 두 페이지를 그려내는 데 성공했지만, 파일이 무거워지고 효율적이지만 가독성이 떨어지는 코드가 되었습니다. 프로젝트의 기간이 한정적이었기 때문에 고민이 되었지만, 차후 유지보수와 다른 팀원들을 위해서 필요한 상태에 따라 페이지를 나누어야 함을 깨닫고 리팩토링을 거쳐 페이지를 구현하였습니다. 이 경험을 통해 코드를 작성하는데 정해진 답이 아닌 문제를 해결하는 다양한 방식에 대해 배울 수 있었고, 그 과정 속에서 상대를 위한 배려는 어떤 것일까 고민해볼 수 있었습니다.
