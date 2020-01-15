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

