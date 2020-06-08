# covents-fe

### Abstract
COVENTS is an app providing easy access to virtual events happening around the globe in the era of COVID-19. Our goal is to help preserve a sense of togetherness while social distancing through live entertainment. Upon opening the app, the user is able to view upcoming events gathered by a webscraper and compiled into a single API. The user can favorite events as they browse. Favorited events populate in a section of the nav bar on the left so the user has easy access to the event name, date, and a link to the external details page for that event. The user is also able to filter events by clicking a date on the calendar widget or by entering a search term in the search bar. If there are no matching events, an alert will pop up and the page will redirect back to the home display.

### Contributors
[Megan Venetianer - Front End](https://github.com/megan-venetianer)

[Cristina Peña - Front End](https://github.com/CLPena)

[Dan Reardon - Back End](https://github.com/dreardon1021)

[Kelly Bard - Back End](https://github.com/KellyIB)


### Capstone Presentation

  [Capstone Presentation](https://docs.google.com/presentation/d/1FwUGeC-TW4hBnwJTv6_vczn0SngD5CpbFQ5CY2KzNMI/edit?ts=5ed955f0#slide=id.g897d938f84_0_5)
  

### Deployed App
[c o v e n t s](https://covents.netlify.app/#/)

### Screenshots
![Dashboard](https://i.imgur.com/JJmx4D9.png)

![Search Results](https://i.imgur.com/DHLYhmb.png)

### In Action
![App Gif](https://i.imgur.com/FvWzOh9.gif)

### Front End Technologies Used
- Development: Vue, JavaScript, Vue CLI, Circle CI, Netlify, Node.JS, NPM
- Testing: Jest, Vue Testing Utils

#### Wireframe
The wireframe for this project can be viewed on [Figma](https://www.figma.com/file/AIyQ5oo9yizKCRlIREJ824/COVENTS?node-id=0%3A1).

#### Project Next Steps
- User login that allows users to save their favorites
- Currently the API does not return events in chronological order. We would like to find a way to display events in order and omit dates that have already passed, automatically removing those events or flagging them in the user's saved favorites.

#### Setup
- Fork and clone down this repo.
- Once you have cloned the repo, change into the directory.
- To view the application, run npm and open the provided localhost url in the browser.

##### Project setup
```
npm install
```

##### Compiles and hot-reloads for development
```
npm run serve
```

##### Compiles and minifies for production
```
npm run build
```
