# Movie Info

| [![GIF 2020-09-16 수 오후 6-54-02](https://user-images.githubusercontent.com/15887982/93324195-87f0d180-f850-11ea-9279-b784f0028d96.gif)](https://url.kr/W8GDQu) |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                               _이미지 클릭시 YouTube로 연결됩니다_                                                               |

<br>

## 개발기간

2020년 5월 20일 ~ 5월 24일

<br>

## 개발 언어 및 프레임워크

- 사용 언어<br>
  HTML5, CSS3, JS6+<br>

- 프레임워크<br>
  React v.16<br>

<br>

## 주요기능 (프로젝트의 모든 기능을 혼자 개발했습니다)

• 최신작, 대중성 위주 영화 리스트 출력
• 영화 검색 기능
• 반응형

<br>

## 기술적 문제 해결

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
