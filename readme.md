[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/ooade/NextSimpleStarter) 

<p align="center">
<img src="logo.png" alt="logo"/>
<p align="center"><a href="https://travis-ci.org/ooade/NextSimpleStarter"><img src="https://travis-ci.org/ooade/NextSimpleStarter.svg?branch=master" alt="travis-ci"/></a> <a href="https://codeclimate.com/github/ooade/NextSimpleStarter/badges"><img src="https://codeclimate.com/github/ooade/NextSimpleStarter/badges/gpa.svg" alt="codeclimate-gpa-badge"/></a> <a href="https://codeclimate.com/github/ooade/NextSimpleStarter"><img src="https://codeclimate.com/github/ooade/NextSimpleStarter/badges/issue_count.svg" alt="codeclimate-issues-badge"/></a><br/>
<h3 align="center">Simple NextJS PWA boilerplate.</h3></p>
</p>

## Check in
What about now

## Contents
- [Installation](#installation)
- [Development Workflow](#development-workflow)
- [Deploy to Now](#deploy-to-now)
- [Deploy to Netlify](#deploy-to-netlify)
- [Deploy to Gitpod](#deploy-to-gitpod)

### Installation

Clone repo:

```sh
git clone https://github.com/ooade/NextSimpleStarter.git
cd NextSimpleStarter
```

Make it your own:

```sh
rm -rf .git && git init && yarn init
```

> :information_source: This re-initializes the repo and sets up your project.

Install the dependencies:

```sh
yarn install
```

or

```sh
npm install
```

### Development Workflow

Start a live-reload development server:

```sh
yarn dev
```

or

```sh
npm run dev
```

Generate a production build:

```sh
yarn build
```

or

```sh
npm run build
```

### Deploy to Now

```sh
now dev
```

For production, update alias in the now.json ie `"alias": "nextss-yourname.now.sh",`

```sh
now
```
[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/ooade/NextSimpleStarter)

### Deploy to Heroku
Just follow <a href="https://github.com/mars/heroku-nextjs">Mars's Guide</a> and you're good to go :clap:

### Deploy to Netlify

- On netlify, Click on new site from git.
- Select Cloned Repository.
- Choose VCS.
- Add build command `npm run export`.
- Add publish directory `out`.

### Deploy to Gitpod
<a href="https://gitpod.io/#https://github.com/ooade/NextSimpleStarter">Click here</a> to deploy on Gitpod.

### Contribution

I'm open to contributions & suggestions in making this a lot better :hand:

### License

MIT

## Fresh URL
https://3000-cab1884b-7a1e-4a9a-bd92-b5dccdeb7b0c.ws-eu01.gitpod.io/
