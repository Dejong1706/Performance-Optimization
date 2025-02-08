# 성능 최적화 뉴스 웹 애플리케이션

<img src="https://github.com/user-attachments/assets/6eab44b3-4278-45de-a419-daf04316144e" width="400" height="400"/>

<br>

## 프로젝트 소개

- 전체 개발 기간 : 2025.01.04 ~ 2025.01.17

- 본 프로젝트는 웹 성능 최적화 기술을 실제로 적용하고 그 효과를 측정하기 위해 개발된 최신 뉴스 웹 애플리케이션입니다.
- 주요 목표
  - News API를 활용하여 최신 뉴스 데이터를 가져오는 외부 API 사용
  - 다량의 이미지를 포함한 뉴스 콘텐츠 표시
  - 웹 성능 최적화 기술 적용 전후의 성능 비교

- 배포 URL : https://performance-optimization-f9plzknwt-dejong1706s-projects.vercel.app/

<br>

## 팀원 구성

<div align="center">

| **박병근** |
| :------: |
| [<img src="https://github.com/Dejong1706/MyBlog/assets/75114974/dc9fa281-1359-4c2c-866b-f426b258ee0a" height=150 width=150> <br/> @Dejong1706](https://github.com/Dejong1706) |

</div>

<br>

## 담당 업무 및 스킬
| **담당 업무** | 프로젝트 기획, 프로젝트 UI/UX 디자인, 프론트엔드 |
| :------: | :------: |
| **SKiil** | NextJS15, TypeScript, TailwindCSS, React-Query |
 
<br>

## 성능 개선

|**메인 페이지**|![Image](https://github.com/user-attachments/assets/bacf3bdf-7f20-418c-b1ed-7e9a77ae4731)|![Image](https://github.com/user-attachments/assets/688f33ac-cbf6-4320-9e78-7524a482931e)|![Image](https://github.com/user-attachments/assets/78309238-6ba5-411a-a22e-4889c558ea1b)|![Image](https://github.com/user-attachments/assets/f9d30cec-23d7-4759-a920-a153e0e0a8af)|
| :------: | :------: | :------: | :------: | :------: |
|**카테고리 페이지**|![Image](https://github.com/user-attachments/assets/3cdca70c-1545-4e6b-b699-01435aecbc77)|![Image](https://github.com/user-attachments/assets/d88492f4-9ccb-4f2b-9e2f-416c2fe48de3)|![Image](https://github.com/user-attachments/assets/61e4d1c6-d225-4578-8927-584469d74f9d)|![Image](https://github.com/user-attachments/assets/84ca1e71-dadb-4bb2-a389-8b0451b2ecc1)|
|**개별 페이지**|![Image](https://github.com/user-attachments/assets/72f11880-3af4-41fc-b308-3b813d29bbb7)|![Image](https://github.com/user-attachments/assets/049e3ca4-51ea-48b4-be21-1e7171864d2c)|![Image](https://github.com/user-attachments/assets/1d1d1889-bb7b-4e83-a403-0304ab1ab2cd)|![Image](https://github.com/user-attachments/assets/af08b794-0d13-412d-9c0f-999da277c413)|
|**검색 페이지**|![Image](https://github.com/user-attachments/assets/256adea8-c349-4a0c-9443-a3743138b09f)|![Image](https://github.com/user-attachments/assets/b2c0021c-12d7-4029-8f42-2d069b1ebb72)|![Image](https://github.com/user-attachments/assets/a2606ee9-1398-4b91-ab6e-c739d79a2651)|![Image](https://github.com/user-attachments/assets/188f5204-eab4-4269-a54d-14fac4ac29b2)|
 
<br>

## 페이지별 소개

### [메인 페이지]
- 프로젝트의 메인 페이지로서 미국 뉴스에 헤드라인 기사들로 이루어져 있는 페이지입니다.
- 각 섹션의 카드뉴스를 클릭하면 개별 뉴스 페이지로 이동하게 됩니다.
#### 최적화 적용 : SSR 개발, Reqct-Query 데이터 프리패칭, 코드 스플리팅, 메모이제이션, img 지연로딩, 조건부 렌더링

| 1 | 2 | 3 |
|----------|----------|----------|
|![Image](https://github.com/user-attachments/assets/ff426dec-8c01-4c4a-8d03-917c08cf5c8e)|![Image](https://github.com/user-attachments/assets/1d7ed1a8-5425-4beb-bd6b-111ba72e6bb3)|![Image](https://github.com/user-attachments/assets/0b471f90-a933-4cc2-8eaa-f23c732db34b)|

<br>

### [카테고리 페이지]
- 카테고리별 다른 주제의 뉴스 데이터를 보여주는 페이지입니다.
- 메인 페이지와 마찬가지로 카드뉴스 클릭 후 개별 뉴스 페이지로 이동합니다
#### 최적화 적용 : SSR 개발, Suspense를 이용한 코드 분할, 메모이제이션, img 지연로딩

| 1 | 2 |
|----------|----------|
|![Image](https://github.com/user-attachments/assets/02547fe7-4df7-477d-8320-f7ae45d5b599)|![Image](https://github.com/user-attachments/assets/55b2b293-848b-4dea-ab72-ae7f03e63069)|

<br>

### [개별 페이지]
- 각 페이지에서 카드뉴스를 클릭하면 들어오게 되는 개별 페이지입니다.
- 해당 페이지에 링크를 클릭하게 되면 실제 해당 기사 페이지로 이동하게 됩니다.
#### 최적화 적용 : SSR 개발, img 지연로딩

| 1 | 2 |
|----------|----------|
|![Image](https://github.com/user-attachments/assets/7e1666e9-4c95-4077-a2da-713af87f3060)|![Image](https://github.com/user-attachments/assets/e1e76ddd-c978-4ba3-ad1a-768d5ecdd2b9)|

<br>

### [검색 페이지]
- 헤더에 있는 검색바에 원하는 검색어를 입력하면 해당 검색어가 포함된 기사를 보여주는 페이지입니다.
#### 최적화 적용 : SSR 개발, Suspense를 이용한 코드 분할, 메모이제이션, img 지연로딩

| 1 | 2 |
|----------|----------|
|![Image](https://github.com/user-attachments/assets/c6fa1572-5c9a-4f02-91e5-bcd178ee1881)|![Image](https://github.com/user-attachments/assets/7b3806b4-11f1-4e66-86fd-d2bb19790de2)|

<br>

    


