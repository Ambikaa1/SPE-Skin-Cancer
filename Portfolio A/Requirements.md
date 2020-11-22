# Requirements
## System Stakeholders
Within our project, we have identified a number of system stakeholders. Stakeholders marked with an asterisk are ones we deem to be user stakeholders. 
1.	Client: The Skin Cancer Research Fund (SCaRF) team based at Southmead Hospital, whose objective is to raise money and awareness about skin cancer. This team is represented by Jonathon Pleat, the Chairman of the charity. 
2.	Development team: The team is comprised of 5 students: Ambika Agarwal, Emily Lopez, Euan Bagguley, George Herbert, Seth Holdcroft, who will be developing, testing and releasing the app for the SCaRF project. 
3.	**\*** Young adults: Skin cancer is the most rapidly increasing killer of young adults.  Up to the age of 25, is when moles most commonly develop. Therefore, it is essential young adults are able to track their moles from development to have the best chance of noticing changes over time. 
4.	**\*** Adults (25+): After 25 it is less common for moles to develop. Development of a mole can be the first indication of skin cancer; therefore, it is essential this age group are able to track their moles to have the best chance of noticing changes over time.
5.	**\*** Carers, friends or family: This group of people involves people who are taking pictures on behalf of someone else. For example, a carer may take a picture for the person they are caring for if they are unable to do so themselves.
6.	**\*** General public: This group of people are not using the app to take pictures of moles but may instead want to learn about skin cancer or the SCaRF project. They will be able to do this by following the embedded video links or reading the information pages. 
7.	Clinicians: Users who are concerned about a mole they have taken a picture of may want to send the picture to a clinician. The clinician can be emailed from the app itself and are most likely to be GP’s who can see the development of the mole and look for any signs of skin cancer. 
8.	Researchers: This is a wide group of people who may be researching into various areas of skin cancer. For example, they may be looking into how a mole develops and in particular what trends they can notice amongst moles that become cancerous. If users have a log of pictures from using our app, they may wish to partake in the researcher’s study. 
9.	Legislators: This group of people are stakeholders as we will be using their laws to store data within our app.
10.	Other app owners & app stores: Other apps on the market which have similar functionality to ours, such as SkinVision, may get less interest as consumers have more choices. Additionally, as our app will be available to download from app stores such as Google Play Store, the app stores will get more traction. 

## User stories
For each stakeholder we have deemed to be a user stakeholder, we have provided three of the most important user stories. Some user stories are the same across different users as they have a goal in common. 

**Young adults:** 
1.	As a young adult who is at greater risk of skin cancer, I want to be able to regularly take pictures of my moles, so that I can compare pictures over time and notice potentially cancerous differences.
2.	As a young adult, I want to know that the app is secure, so that I can comfortably and confidently store my photos knowing that they’ll remain private.  
3.	As a busy young adult in full-time work & education, I want to be notified of when to take pictures, so that I do not have to worry about remembering the next due date or missing weeks of pictures. 

**Adults (25+):**
1.	As an adult, I want to be able to click on the information tab, so that I can educate myself about skin cancer, by reading the pages and watching the videos.
2.	As an adult, I want to be able to send my clinician pictures of my moles, so that they can review the moles that I deem to be potentially cancerous and see how they have developed over time. 
3.	As an elderly user, I want to be faced with an intuitive and easy-to-use interface, so that I can easily navigate my way around the app and have the option to get help if I come across a page I do not understand how to navigate. 

**Carers, friends or family:**
1.	As a carer of a vulnerable person, I want to be able to regularly take pictures of their moles, so that I can monitor them between visits and spot any concerning signs. 
2.	As an isolated person unable to see some parts of my body, I want to be able to look at previous pictures that have been taken for me, so that I can monitor the development of each mole.
3.	As a friend/family member taking pictures on behalf of someone else, I want to be able to see the position of the mole on a previous picture, so that I can ensure consistency across all the pictures of the same mole. 

**General public:**
1.	As a member of public, I want to be able to click on the information tab, so that I can educate myself about skin cancer, by reading the pages and watching the videos. 
2.	As a member of public, I want to be able to click on the SCaRF badge which links me to their donation page, so that I can send donations to this worthy cause. 
3.	As a member of public, I want to be faced with an easy-to-use interface so that I can easily navigate my way around the app and have the option to get help if I come across a page I do not understand how to navigate. 

## Basic, alternative and exceptional flows
For a subset of user stories, we have created diagrams showing the basic flow, an alternative flow and an exceptional flow. The basic flow shows the typical sequence we expect our users to take to achieve their goal and the alternative flow shows a valid but less common sequence. The exceptional flow, however, shows steps the users may take which may result in an undesired goal. 


### User story 1: 
> “I want to be able to regularly take pictures of my moles”

#### Basic Flow:
![Basic Flow 3](https://user-images.githubusercontent.com/57152715/99905059-68e64400-2cc6-11eb-90fc-ca4ee713db9a.png)

#### Alternative Flow:
![Alternative Flow 3](https://user-images.githubusercontent.com/57152715/99905085-83202200-2cc6-11eb-8d21-1727ffb20127.png)

#### Exceptional Flow:
![Exceptional Flow 3](https://user-images.githubusercontent.com/57152715/99905062-6c79cb00-2cc6-11eb-83f8-a7ad945ddc65.png)


### User story 2: 
> "I want to be able to send my clinician pictures of my moles"

#### Basic Flow:
![Basic Flow 2](https://user-images.githubusercontent.com/57152715/99905057-671c8080-2cc6-11eb-85ab-d75c8a66fc57.png)

#### Alternative Flow:
![Alternative Flow 2](https://user-images.githubusercontent.com/57152715/99905051-5f5cdc00-2cc6-11eb-8bd8-b92b8a75a0a9.png)

#### Exceptional Flow:
![Exceptional Flow 2](https://user-images.githubusercontent.com/57152715/99905061-6b489e00-2cc6-11eb-93d1-7c23ba5b91b9.png)


### User story 3: 
> "I want to be able to educate myself about skin cancer"

#### Basic Flow:
![Basic Flow 1](https://user-images.githubusercontent.com/57152715/99904809-49025080-2cc5-11eb-9a5b-a7632679efb2.png)

#### Alternative Flow:
![Alternative Flow 1](https://user-images.githubusercontent.com/57152715/99904813-4d2e6e00-2cc5-11eb-933d-3578487eae84.png)

#### Exceptional Flow:
![Exceptional Flow 1](https://user-images.githubusercontent.com/57152715/99904815-50295e80-2cc5-11eb-92d2-4e02503f767c.png)


## Decomposition of basic flow steps
For a select user story we have decomposed the basic flow steps and identified features that we will need to implement in order for a user to navigate through each flow step.
> “I want to be able to regularly take pictures of my moles” 
##### Basic flow steps decomposed: 
![Basic Flow 3](https://user-images.githubusercontent.com/57152715/99905059-68e64400-2cc6-11eb-90fc-ca4ee713db9a.png)
![decomposed flow steps](https://user-images.githubusercontent.com/57152715/99905066-6edc2500-2cc6-11eb-94b6-091dbe556cd4.png)

