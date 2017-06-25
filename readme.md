<p align="center">
<img src="logo.png" alt="logo"/>
<p align="center"><a href="https://travis-ci.org/ooade/NextSimpleStarter"><img src="https://travis-ci.org/ooade/NextSimpleStarter.svg?branch=master" alt="travis-ci"/></a> <a href="https://codeclimate.com/github/ooade/NextSimpleStarter/badges"><img src="https://codeclimate.com/github/ooade/NextSimpleStarter/badges/gpa.svg" alt="codeclimate-gpa-badge"/></a> <a href="https://codeclimate.com/github/ooade/NextSimpleStarter"><img src="https://codeclimate.com/github/ooade/NextSimpleStarter/badges/issue_count.svg" alt="codeclimate-issues-badge"/></a><br/>
<h3 align="center">Simple NextJS PWA boilerplate.</h3></p>
</p>

## Contents

- [Installation](#installation)
- [Development Workflow](#development-workflow)
- [Deployment](#deployment)

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
yarn run dev
```
or
```sh
npm run dev
```

Generate a production build:
```sh
yarn run build
```
or
```sh
npm run build
```
### Deployment
[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/ooade/NextSimpleStarter)

<details>
	<summary>heroku</summary>
	Just follow <a href="https://github.com/mars/heroku-nextjs">Mars's Guide</a> and you're good to go :clap:
</details>

### Contribution
I'm open to contributions & suggestions in making this a lot better :hand:

### License
MIT
