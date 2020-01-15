# How to Start git

## Git configuration

```shell
$ git config --global user.name "user name"
$ git config --global user.email "user email addr"
$ git config --global core.editor "vim"
$ git config --global core.pager "cat"
```

## `git init`으로 프로젝트 시작하고 별명과 주소 작성하기 commit 별명은 origin을 많이씀

```shell
touch README.md
git remote add origin @address
```

## 'git add'를 통해 추가후 commit 남기기

```shell
git add README.md
git commit -m "subjects"
```

## 'git push 별명 권한' 통해서 git-hub 업로드하기
```shell
git push origin master
```

## 'git clone'을 통해 다른사람 git 가져오기
```shell
git clone @address
```
git과 연동돼 있는 폴더에서 반드시 벗어나서 복사할것

## 'git pull origin master'를 통해 다른사람 git 업데이트하기
```shell
git pull origin master
```
