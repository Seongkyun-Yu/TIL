# Movie Info

| [![GIF 2020-09-16 수 오후 6-54-02](https://user-images.githubusercontent.com/15887982/93324195-87f0d180-f850-11ea-9279-b784f0028d96.gif)](https://url.kr/W8GDQu) |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                               _이미지 클릭시 YouTube로 연결됩니다_                                                               |

<br>

## Development motivation

React 학습을 위해 간단한 프로젝트를 진행하면서<br>

화면에 표시할 요소가 많을 경우 한번에 모든 요소를 표시하는 것이 아닌<br>

스크롤이 최하단에 닿았을 때 추가 데이터를 표시하는 방식을 학습하고자<br>

프로젝트를 진행하였습니다.<br>

<br>

## Development period

2020년 5월 20일 ~ 5월 24일

<br>

## Skill & Library

- 사용 언어<br>
  HTML5, CSS3, JS6+<br>

- 라이브러리<br>
  React v.16<br>
  axios: 0.19.2<br>
  react-router-dom: 5.2.0<br>

<br>

## Main Feature (프로젝트의 모든 기능을 혼자 개발했습니다)

• 최신작, 대중성 위주 영화 리스트 출력
• 영화 검색 기능
• 반응형

<br>

## Technical Issue

• 영화 리스트가 너무 많은 문제

- Infinity Scroll을 이용해 지연 로딩 처리

  ```javascript
  import React, { useContext, useEffect, useState } from 'react';
  import PopularTemplate from '../Templates/PopularTemplate';
  import { MovieContext } from '../../Context/MovieContext';

  const Popular = () => {
    const context = useContext(MovieContext);
    const { state, getPopMovie } = context;

    const [isEnd, setScrollState] = useState(false);

    if (isEnd) {
      getPopMovie(state.popMovies.page + 1);
      setScrollState(false);
    }

    const onScroll = () => {
      if (
        document.documentElement.scrollHeight ===
        Math.ceil(document.documentElement.scrollTop) +
          document.documentElement.clientHeight
      ) {
        setScrollState(true);
      } else {
        if (!state) {
          setScrollState(false);
        }
      }
    };

    useEffect(() => {
      if (Object.keys(state.popMovies).length === 0) getPopMovie();
      document.addEventListener('scroll', onScroll);

      return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return <PopularTemplate />;
  };

  export default React.memo(Popular);
  ```

<br>

## 프로젝트 구조

```bash
├── node_modules
├── public
│   ├── movie.png
│   ├── favicon.ico
│   ├── manifest.json
│   └── index.html
├── build
├── src
│   ├── Api
│   │   └── api.js
│   ├── Components                    <-- Atomic pattern
│   │   ├── Atoms
│   │   ├── Molecules
│   │   ├── Organisms
│   │   ├── Templates
│   │   └── Pages
│   │       ├── style
│   │       ├── About.js
│   │       ├── Detail.js
│   │       ├── Recent.js
│   │       └── ...etc
│   ├── Context
│   │   └── MovieContext.js
│   ├── Hook
│   │   └── useMovieData.js
│   ├── Reducer
│   │   └── movieReducer.js
│   ├── Router
│   │   └──  MainRouter.js
│   ├── App.js
│   ├── App.css
│   ├── index.css
│   └── index.js
├── README.md
├── LICENSE
├── package.json
├── yarn.lock
└── .gitignore
```
