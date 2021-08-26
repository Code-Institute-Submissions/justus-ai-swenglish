![Screenshot (293)](https://user-images.githubusercontent.com/83753891/130900808-7da690ca-fba7-4b10-a15e-f3eb27dd9310.png)
# Swenglish
## Introduction.
The project  is  a color activated  aided quiz for children who are learning to be bilingual. 
HOME PAGE
![Screenshot (293)](https://user-images.githubusercontent.com/83753891/130900808-7da690ca-fba7-4b10-a15e-f3eb27dd9310.png)
# Swenglish![Screenshot (295)](https://user-images.githubusercontent.com/83753891/130901019-2d3f2a67-582c-450b-9555-8b6cea51591a.png)

The home page  will start with a 
##header 
title= swenglish
and a logo image of a child stacking up word block,I got the picture from unsplash:
Photo by Ryan Fields on Unsplash![ryan-fields-Xz7MMD5tZwA-unsplash][Link](https://user-images.githubusercontent.com/83753891/130231263-6183ac84-2b5b-4b4e-bbd7-c5223407a5fe.jpg)
### questions area.
 if question is answered correctly
 ![Screenshot (293)](https://user-images.githubusercontent.com/83753891/130900808-7da690ca-fba7-4b10-a15e-f3eb27dd9310.png)
 if question is answed wrongly
 
* My initial form![Screenshot (294)](https://user-images.githubusercontent.com/83753891/130901089-49e2a192-0f18-45e6-9d74-456fe3054fba.png)
at was similar to the love maths format because i could see the benefit of having all the features in one page.
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
6.restart
###media query
for a responsive screen size i reduced the size of the logo 
and the width of the button container as shwn i the picture

