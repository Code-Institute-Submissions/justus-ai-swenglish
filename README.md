

# Swenglish
## Introduction.
The project  is  a color activated  aided quiz for children who are learning to be bilingual. 
HOME PAGE
![Screenshot (298)](https://user-images.githubusercontent.com/83753891/130938788-23441287-7dee-44f6-9039-a114d29195c3.png)

The home page  will start with a 
##header 
title= swenglish
and a logo image of a child stacking up word block,I got the picture from unsplash:
Photo by Ryan Fields on Unsplash![ryan-fields-Xz7MMD5tZwA-unsplash][Link](https://user-images.githubusercontent.com/83753891/130231263-6183ac84-2b5b-4b4e-bbd7-c5223407a5fe.jpg)
### questions area.
 if question is answered wrongly
 ![Screenshot (295)](https://user-images.githubusercontent.com/83753891/130901580-b5a860fe-421f-4857-9381-56340cea213c.png)

 if question is answed correctly
 
* ![Screenshot (294)](https://user-images.githubusercontent.com/83753891/130901089-49e2a192-0f18-45e6-9d74-456fe3054fba.png)
my itial from was similar to the love maths format because i could see the benefit of having all the features in one page.
* I also wanted to divide the game into different levels ; however i had to rencinsder not to complicate my code and eventually not finish in good time.
* With the help of my subsidiary mentor, as my current mentor is on leave , we discussed a simpler format of one level and several random questions.
* The fact that its a childrens game also had me considering whether having scores will be helpful or dscouraging tothe younger players,evntually opted not to have scores but still have a n interactive colorful website.
 * the direct feed back of a colr coded backgrounded based on value  is rewarding for the kids .
 * the questions will have four choices to choose from  to deduce the correct answer.
 * hue feature was also fundermental feature that i used to show a grey color when the questions have not been clicked on courtesy of [Link] https://auth0.com/blog/how-to-control-hue-lights-with-javascript/
 ## Difficulties with the code
 1. i was able to achieve the hue for the neutral color but had trouble getting the hue for when the answer is wrong  and correct.So after speaking to student care ,they guided me into  figuring out that i had to declare enter the background color each time i was writing the code on css. the ::root was not enough on its own to run the background colors as was shown on the youtube video [Link]https://www.youtube.com/watch?v=riDzcEQbX6k
 #### shuffled questions
 the questions are random(thanks to the math.random) funtion on javascript. So at no point will the player start  the game with the same question. credit to [Link]https://www.youtube.com/watch?v=riDzcEQbX6k
 #### claring old answers
 so for each time a player entered their answer, the game saved their answer, in order to clear that i used the resetState function that resets everything to the default state each time the player clicks on a new question.helpful code to solve this is a credit to Brian Design [Link]https://www.youtube.com/watch?v=f4fB9Xg2JEY&t=1323s
 ####
I had trouble connecting html and javascript to he start button. The datset function was the problem. i had used camel case all through the project but had to learn the hard way that dataset is all small letters 
### controls area
consists of a :
start button and a next button.
The next button is hdden and only activated when the game has started .
###QUIZ INSTRUCTIONS
1. press the start button
2. the quiz is activated withthe first random question with mutiple questions and start button dissapears
3. when the player clicks on the right answer , the background screen turns green.
4. when the player clicks the wrong answer , the background turns red.
5. the game continues whther you click the right or te wrong answer with the next button on clicking wither option.
6. the game goes on until you see the restard button eaning ithe end of the question list.
7. the point of the game is to maintain a green screen always and avoid having redscreen background.
8. goodluck
##JAVASCRIPT
1. The purpose of javasript is to activate the interactive game with 20 random prewritten questions.
2, the start button launches the game that has four multiple choices.
3. if you choose the right answer, the background body turns green to show you are right and red if the answer is wrong.
5.A restart button comes up when the player has gone through all the questions.


after a while i realsieed for the age group i am targeting(4-6)using sentences will be much harder dor them to go through as children in swden only start to speak english activly after they turn 10onwards otherwise the majority eclusivly communicate in swedish . So i eventually removed the sentences as a challenge 
in  the javascript . i had yhe following funtions that i wanted to run:
1. startButton

2.  nextButton=

3. questionContainer

4. answerButtons

5. shuffled Questions

6. restart

### Media query
for a responsive screen size i reduced the size of the logo 
and the width of the button container as shown below![Screenshot (297)](https://user-images.githubusercontent.com/83753891/130902095-b75cdf85-8a63-47a2-b838-057408390ccb.png)

###validator testing
1. HTML-No errors were returned when passing through the official w3c validator
2. CSS-No errors were returned when passing through the official w3c validator
3. javascript on the console after pressing f12 , no errors passing through there either.

### Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub) 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

