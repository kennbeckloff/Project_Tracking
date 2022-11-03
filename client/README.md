# Project_Tracking

### Authors

    Patrick Mungai
    Oscar Chemonges
    Yahya Ibrahim
    Kelvin Achiando
    Joseph Karambu
    Kenn Beckloff
    

## Project Description

Project tracking system that keeps track of the projects done over time in order to have a project bank for future reference 
and create a network of students who would either want to collaborate with project owners or borrow ideas from the projects. 


## Screen shots

### Signup Page
![signuptrac](https://user-images.githubusercontent.com/36301800/199654235-dcfda0b9-cc9e-4f05-be3b-e6d5841e9181.png)

#### login Page
![traclogin](https://user-images.githubusercontent.com/36301800/199654089-5d991657-0d0c-41fe-927c-c1a84a0b4817.png)

### Projects page
![userproject](https://user-images.githubusercontent.com/36301800/199654362-8c7d14fd-8cc9-4276-b698-bdcce433475d.png)

#### Add Project
![addproject](https://user-images.githubusercontent.com/36301800/199654463-dc1f7a47-9800-40b7-9779-39dd9747bdbf.png)

#### Admin Panel
![admindash](https://user-images.githubusercontent.com/36301800/199654593-9efe359f-504e-4e91-997e-ac0dbb06116c.png)


## Table of content

- [Technologies](#description)
- [Description](#description)
- [Features](#features)
- [Setup-process](#setup_process)
- [Project-usage](#project-usage)
- [Licence](#licence)
- [Copyright](#copyright)

---

## Technologies

--- Ruby on Rails

--- HTML and CSS

--- JavaScript (React)

--- PostgreSQL

--- Heroku (deployment)

--- Git and GitHub (version control)

--- Redux

--- Bootstrap

--- Trello

### Features

--- The aplication allows studentsto register account and post projects.

-- The application allows students to add collaborators to their projects.

-- The application give students priviledge to access projects posted by other users including the admin.

-- The application allows students to edit respective projects and allowing them to add github_links of respective projects for easy monitoring.

-- The application allows the admininstarator to view all available projects, delete a project and asign a cohort

---

### description

--- Project_Tracking is a great platform that allows student projectsdone over a long period of time be accessed by fellow students who might want to collaborate with them in adding future functionalities.

-- Students have the access to view all other existing projects in the application, it will enhace massive participation in team work.

-- This application works well to store and make students projects available.

---

## How to set up and run the project

---

### Requirements

--- the following are the requirements for the project

-- Ruby 2.7.4 or later versions.

-- Rails 5.0 or later versions.

-- PostgreSQL 9.5 or later versions.

-- npm

-- node

---

### Dependencies

- rails
- ruby
- node
- npm
-

### setup

---

#### Client (React)

clone the repo using the command

```terminal
git@github.com:kennbeckloff/Project_Tracking.git
```

change directory using command

```terminal
cd Project_Tracking
```

open project in vscode texteditor

```terminal
code .
```

install dependancies

```shell
npm install
```

run client end

```terminal
npm run dev
```

---

#### API (Ruby on Rails)

clone the repo using the command

```terminal
git@github.com:kennbeckloff/Project_Tracking.git
```

change directory using command

```terminal
cd Project_Tracking
```

open project in vscode texteditor

```terminal
code .
```

Check your Ruby version

```terminal
ruby -v
```

The ouput should start with something like `ruby 2.7.4` or any later version currently installed.

If not, install the right ruby version using [rbenv](https://github.com/rbenv/rbenv) (it could take a while):

```terminal
rbenv install 2.7.0
```

install dependancies packages

```terminal
bundle install
```

Initialize the database

```terminal
rails db:create db:migrate db:seed
```

run api server

```terminal
rails s
```

---

## How to use the project

--- To use the project follow the steps below:

-- First sign up to the application.

-- Then add a project.

-- View all projects.

-- Add members.

-- 


### Contributing to project

- Fork the repo

* Create a new branch in your terminal (git checkout -b improve-feature)
* Install the prerequisites
* Make appropriate changes in file(s)
* Run the server to see the changes
* Add the changes and commit them (git commit -am "Improve App")
* Push to the branch (git push origin improve-app)
* Create a Pull request

---

## Copyright

--- This project is licensed under the MIT License - see the LICENSE.md file for details.

---

## [License](LICENSE)

MIT License
Copyright (c) 2022