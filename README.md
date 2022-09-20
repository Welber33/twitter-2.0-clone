<h1 align="center">Twitter 2.0 Clone</h1>
<p align="center">
  <img height="200" width="250" src="https://user-images.githubusercontent.com/44277956/191049384-5fbf3a7c-d821-4fc2-b0e1-702c051266e6.png"/> 
</p>
<h4 align="center"> Project Developed using Next.js + TailwindCSS</h4>
<p align="center">
  <img src="https://img.shields.io/badge/ReactJs-18.2.0-61DAFB?style=for-the-badge&logo=React" />
  <img src="https://img.shields.io/badge/NextJs-latest-000000?style=for-the-badge&logo=Next.js" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.1.2-06B6D4?style=for-the-badge&logo=Tailwind CSS" />
</p>

  https://user-images.githubusercontent.com/44277956/191078969-29f5fdbc-3745-4de4-b068-5550d074ea63.mov
  
  
A semi-complete web twitter clone to show how some basic services as Twitter Auth using NextAuth, as also some social media functionalities works such as post a tweet and add a comment to the posted tweet. This application uses Sanity headlessCMS to store data and manage them.

## Features
- [x] Home Page with showing tweets, comments and retweets.
- [x] Create a tweet. Attach image to the tweet is optional.
- [x] Add a comment to each tweet.
- [x] SignIn/SignOut with NextAuth using twitter account log info.
- [x] Only create a tweet and/or add a comment if the user is signed in with twitter log info.    

## Requisites

Before getting started with this project, you must have installed in your machine the following developer build tools:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) version *16.15.1* e [Yarn](https://yarnpkg.com/) version *1.22.19* or latest. It's possible to install the developer build tools above using the following package managers [Chocolatey](https://chocolatey.org/) for windows machines and [Homebrew](https://brew.sh/index_pt-br) for MacOS machines.
It's highly recommended to download [VSCode](https://code.visualstudio.com/) to work on, as it has the most variety of extensions possible and particular advantages to code javascript applications and it's totally free.

### 🎲 Running the project locally

```bash
# Clone the repository
$ git clone https://github.com/Welber33/twitter-2.0-clone.git

# Go to the folder where is the cloned project
$ cd folder_with_the_cloned_project

# Open the project on vscode via terminal/cmd
$ code .

# Install the dependencies
$ yarn install

# Execute the application in Dev Mode
$ yarn run dev

# Execute the sanity command to start locally sanity studio and access the datas
$ sanity start
```
Note: Both [Yarn](https://yarnpkg.com/) and [NPM](https://www.npmjs.com/) can be used as package manager in this project.

### Understanding Sanity Use Case Architecture 

<p align="center">
 <img  width="800" src="https://user-images.githubusercontent.com/44277956/191076558-bbf6d609-f43f-4b05-ad89-c5e51aebb59a.jpg"/>
</p>

### Sanity Studio with project data

<p align="center">
  <img width="800" height="500" src="https://user-images.githubusercontent.com/44277956/191080928-499fcabc-beb9-4dc9-a65a-a8c85c49c03f.png"/>
</p>

## Data Info
### Schemas

- Tweet
- Comment

#### Tweet

- name
- title
- type
- fields: name, title, type, description

#### Comment
- name
- title
- type
- fields: name, title, type, description, to: type.

### Typings

- Tweet
- Comment

#### Tweet

 - id
 - text
 - username
 - profileImg
 - tweetImg
 - createdAt
 - updatedAt
 - rev
 - type
 - blockTweet

#### Comment

- id
- comment
- tweetId
- username
- profileImg
- rev
- type
- createdAt
- updatedAt
- tweet: ref, type


## Techs 

This project made use of the following technologies and developer tools: 

- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)
- [ReactJS](https://reactjs.org/)
- [NextJS](https://nextjs.org/)
- [NextAuth](https://next-auth.js.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [SanityCMS](https://www.sanity.io/)
- [React Time Ago](https://www.npmjs.com/package/react-time-ago)
- [React Hot Toast](https://react-hot-toast.com/)
- [Hero Icons](https://heroicons.com/)

## :memo: License

This project is under the MIT license. See the [LICENSE](LICENSE) for details.
