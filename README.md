

# Swenglish
## Introduction.
The project  is  a color activated  aided quiz for children who are learning to be bilingual. 
HOME PAGE
This website is built to  create interest in learning English  for children who speak Swedish as a first language.
In sweden children generally do not learn English in school until when they turn 7 years old.
Each school deciced when they will start to to tesch english And othre can strt as late as 10 years old .
Even then , not all  speak it even with addition of English to their syllabus.
With the  current globalisation and game inspired ways of learning, a game for children of earlier ages (4 years old and older; or younger based on individual reading ability)would be an added incentive to keep learning.
Below is a the home page for both full screen and mobile size .
![image](https://user-images.githubusercontent.com/83753891/144029663-78151cff-92d8-4302-9cca-d54698da20a3.png)
![image](https://user-images.githubusercontent.com/83753891/144029947-399f4463-1e1d-41b4-85fd-cc84ba0eae8b.png)

## User Experience (UX)

Initially i had a logo of a child stacking up blocks as a way to indicate that my website is meant for early learners , but english can also be picked by adults new to english at any age so I decided ona dack background istead.
The game simply starts when the player presses play and the game redirects to the game page As shown on the screenshot below:
![image](https://user-images.githubusercontent.com/83753891/144033014-361050dc-d991-4e31-8e98-fe1cdc1b3495.png)
and for the mbile version as below :
![image](https://user-images.githubusercontent.com/83753891/144033151-41857296-99fa-4fe4-8662-71479b231ca4.png)


### Questions area.
 if question is answered wrongly:
 ![image](https://user-images.githubusercontent.com/83753891/144033366-ade9d839-3abd-49ff-a334-8491e763f30c.png)

 
 if question is answed correctly:
 ![image](https://user-images.githubusercontent.com/83753891/144033468-d9ebde4c-60d9-44ce-b3f1-5c44611e963a.png)

1.With each question answered the progress bar continues regardless of right or wrong just to show how far along one has come .
2.The score board counts the right question answered with a multipe of 100 .The highest point is naturally 1600.
3.The home button riderects back to the index page incase one wants to stop at any point .
4.The restart button also restarts the game and the scores , if one feels they need to restart.
5.Once you have answered all the 16 questions,you are redirected to the end page witha scoreboard where you can enter your score and your name for record (the game has a max of five names that can be stored at a time )
![image](https://user-images.githubusercontent.com/83753891/144034761-599a948d-bf3b-487a-8b89-f0f1b193324b.png)
![image](https://user-images.githubusercontent.com/83753891/144040155-36d0c964-95d8-4987-b9df-f5e85d101b3f.png)

6.finally we have the leaderboard  where all the highscores are gathered for reference.
![image](https://user-images.githubusercontent.com/83753891/144040334-5f8cb6e6-70ba-487c-898d-75f2ed8a55c0.png)




my itial from was similar to the love maths format because i could see the benefit of having all the features in one page.
* I also wanted to divide the game into different levels ; however i had to renconsider so as not  to complicate my code and eventually not finish in good time.
* With the help of my  mentor Tim_Ci, we discussed a simpler format of one level and several random questions.
* The fact that its a game  also had me considering adding  scores as well as  progress bar.I used the youtube tutorials by Brian design https://www.youtube.com/watch?v=f4fB9Xg2JEY&t=1468swill to help me reach my goala
 * the direct feed back of a color coded backgrounded based on value  is rewarding for the player .
 * the questions will have four choices to choose from  to deduce the correct answer.

 ## Difficulties with the code
 I had trouble adding in the home button and restart button that were not part of the youtube tutorial , bit i finally figured it out and buttons are there for  enhanced user experience.
 the questions are random(thanks to the math.random) funtion on javascript. So at no point will the player start  the game with the same question. credit to [Link]https://www.youtube.com/watch?v=riDzcEQbX6k
 #### cleaaring old answers
 so for each time a player entered their answer, the game saved their answer, in order to clear that i used the resetState function that resets everything to the default state each time the player clicks on a new question.helpful code to solve this is a credit to Brian Design [Link]https://www.youtube.com/watch?v=f4fB9Xg2JEY&t=1323s
 #### linking html to js

### Controls area
consists of a :
start button that riderects to the game pageAnd the highscore button that redirects to the highscore page.

### Quiz instructions
1. press the start button
5. the game continues whther you click the right or te wrong answer with the next button on clicking wither option.
6. the game goes on until you see the restard button eaning ithe end of the question list.
7. the point of the game is to maintain a green screen always and avoid having redscreen background.
8. goodluck
### JAVASCRIPT
1. The purpose of javasript is to activate the interactive game with 16 random prewritten questions.
2, the start button launches the game that has four multiple choices.
3. if you choose the right answer, the background of the choice section turns greeen and  the background of the choice section turns red when the  the answer is wrong.
5.The restart button and the home page are always available at the top of the screen for the player to feel free to stop or restar when they want.



### Media query
for a responsive screen size i reduced the size of the logo 
and the width of the button container as shown below![Screenshot (297)](https://user-images.githubusercontent.com/83753891/130902095-b75cdf85-8a63-47a2-b838-057408390ccb.png)

### Validator testing
1. HTML-No errors were returned when passing through the official w3c validator
2. CSS-No errors were returned when passing through the official w3c validator
3. javascript on the console after pressing f12 , no errors passing through there either.

## Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows:

- In the GitHub [repository](https://github.com/justus-ai/swenglish), navigate to the Settings tab.
- From the source section drop-down menu, select the `Main` Branch.
- Once the Main branch has been selected and saved, the page will be automatically refreshed with a detailed ribbon displayed to indicate the successful deployment.

The live link can be found here - https://justus-ai.github.io/swenglish/

### Local Deployment

In order to make a local copy of this project, you can type the following into your IDE Terminal to clone this repository:

- `git clone https://github.com/justus-ai/swenglish.git`

Alternatively, if using Gitpod, you can [click here](https://gitpod.io/#https://github.com/justus-ai/swenglish), and it will create a brand new workspace on your own Gitpod account.


