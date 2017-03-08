<p align="center">
<img src="logo.png" alt="logo"/>
<br/>
<a href="https://travis-ci.org/ooade/NextSimpleStarter"><img src="https://travis-ci.org/ooade/NextSimpleStarter.svg?branch=master" alt="travis-ci"/></a> <a href="https://codeclimate.com/github/ooade/NextSimpleStarter/badges"><img src="https://codeclimate.com/github/ooade/NextSimpleStarter/badges/gpa.svg" alt="codeclimate-gpa-badge"/></a> <a href="https://codeclimate.com/github/ooade/NextSimpleStarter"><img src="https://codeclimate.com/github/ooade/NextSimpleStarter/badges/issue_count.svg" alt="codeclimate-issues-badge"/></a>
</p>

# NextSimpleStarter
Simple NextJS PWA boilerplate.

# Quick-Start Guide

- [Installation](#installation) :package:
- [Development Workflow](#development-workflow) :fire:
- [Deployment](#deployment) :rocket:

## Installation :package:

**1. Clone this repo:**

```sh
git clone https://github.com/ooade/NextSimpleStarter.git
cd NextSimpleStarter
```


**2. Make it your own:**

```sh
rm -rf .git && git init && yarn init
```

> :information_source: This re-initializes the repo and sets up your project.


**3. Install the dependencies:**

```sh
yarn install
```
or if you're using npm:
```sh
npm install
```

> You're done installing! Now let's get started developing.



## Development Workflow :fire:


**4. Start a live-reload development server:**

```sh
yarn run dev
```
or
```sh
npm run dev
```

**5. Generate a production build:**

```sh
yarn run build
```
or
```sh
npm run build
```

You can now deploy the contents of the `build` directory to production!

## Deployment :rocket:

**now:**

Deploying a nextjs app is a lot easier with [now](zeit.co/now). Make sure you're logged in then run:

```sh
now
```
Simple right? :smile:

**heroku:**
Just follow [Mars's Guide](https://github.com/mars/heroku-nextjs) and you're good to go :clap:

## Contribution
I'm open to contributions & suggestions in making this a lot better :hand:

## License

MIT

### Notable Alternatives
[NextJS starter](https://github.com/iaincollins/nextjs-starter) - A starter project for Next.js with and email and oAuth authentication.
