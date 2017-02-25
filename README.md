# Monterail Recruitment Task
Recruitment task for junior front-end developer position at Monterail

## Technologies
- Versions system: `Git` (Github)
- Code preprocessor: `SASS`
- Templating: `Jade/Pug` (I used it mostly in the first part while implementing static views)
- Additional tools: `Gulp` (compiling SCSS, CSS minification), `Webpack` (for compiling `React`ish stuff)
- For React I used some `ES2015` syntax, `Babel` and some `Redux`
- `Node.js` server
- I also used `Adobe Illustrator` to prepare a sprite with icons

## CSS framework
I didn't use any CSS framework to challenge myself a little bit and try for example `flexbox` which I didn't know before (but it's sooo awesome).

## JS framework
I decided to use React + Redux. I have some experience with Angular 1.x, but I prefer React for general idea of using components. It's for me a lot easier to find and update things in _big_ React app than in Angular one. More than that, I feel **happy** while doing React-powered stuff :-)

## Fonts
As a substitute for _Rotice_, I used _Agfa Rotis_ font.

## Tasks
### Task 1 - Implement views :white_check_mark:
All three static views are finished. In this stage I used `Jade/Pug` for templating and `SASS` for CSS.

### Task 2 - Make views responsive :white_check_mark: :information_source:
All views are fully responsive above 320px. For devices below that are less than 320px wide, `<body />` has set fixed width of 320px – to avoid strange text overflows and unexpected behavior of elements. For those devices views act like they wouldn't be responsive (I hope this isn't the worst idea from the UX point of view).

While writing CSS for RWD I made some things different than they were designed:
- All questions view:
	- for activities I made a container with `overflow: hidden`, so when the window shrinks, the activities slowly hide behind question stats.
- Single question view:
	- I decided to leave the information _last time discussed_ below the page title.

### Task 3 - Connect modal to users :white_check_mark:
Modal appears when you click on user name or photo. It's also possible to show modal for users that are listed in already opened modal (like in the section about people who joined the same period). You can hide modal by clicking on the `×` icon or the dark layer behind the modal.

### Task 4 - Templates :white_check_mark:
All repeating HTML elements has been implemented as separate React components. Thanks to that, if some changes are required in the structure of an element, we have to do it in one place (just change the implementation of the component representing this element).

I also did some back-end things – simple Node.js app with small API, that allow fetch data from server in JSON format. You can fetch all questions, question with given slug or user profile with given user ID.

Because I don't apply for back-end dev position, the server is not very good written (I mean here: security, input filtering, errors handling). So if something strange will happen and the app fill stop working, please let me know.

### Task 5 - Pagination and sorting :white_check_mark:
One the server there are 4 questions. By default only 3 are displayed and fetched from server, so if you click _load more questions_, one additional question will be fetched.

Sorting works in real time, so if you click sort by [hot], the order of questions will change.

### Task 6 - Searching :white_check_mark:
If you want to search a question by title, you have to submit the form first to see filtered output. If the search input is empty, all questions will be shown.

### Task 7 - Voting :white_check_mark:
Voting works for question and answers/comments. You can upvote or downvote only once.

### Task 8 - Routing, SPA :white_check_mark:
I used `react-router` for routing. Everything works SPA-way, every time you change view, data is fetched from server, so there can be small delays in presenting right data.

## Data for app
I generated some data with Mockaroo.com. Stats are just random numbers, so they don't reflect the real number of discussions, peers involved etc.

## Running the app
### Localhost
If you want to run the app on localhost:
```
> git clone -b master https://github.com/jedrzejginter/monterail-task.git
> cd monterail-task
> npm install --only=prod
> node index.js
```
The app will run on localhost:3000, so navigate to that address in your browser.

### Live preview
The app will be also running on my VPS. Just visit `http://vps315369.ovh.net:3000` when I will send you an e-mail that my task is ready for review.
