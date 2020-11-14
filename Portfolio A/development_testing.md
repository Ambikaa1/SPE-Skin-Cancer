# Development Testing

### Strategy and Approach
Following the test-driven development outline, we will draw from our user stories, client comments and project requirements to create the tests. This will allow us to order the development of the different features of the app, based upon which parts depend on each other. For each of the app features the group has discussed in detail with the client what the feature should achieve and how it should take information from the user. All information should be displayed in a user-friendly format. When dealing with data being input by the user, for example when they sign up, we will use equivalence partitioning to test the robustness of the app. This ensures that the information we store is valid and that the app will not crash if the user enters unexpected values, for example an abnormally large string for their name field. Other outlier cases will be accounted for, including incorrect data types and empty fields.

### Core Component
A core component of our system is the feature that allows the user to take a picture of their skin lesion/mole. They will have diary entries for moles that they have already begun tracking and will have the ability to add new diary entries for new moles. In this test description we will focus on the scenario where the user is adding new images to an existing diary entry. This feature is a key requirement specified by the client. In order to help the user track their moles they must be able to take periodic photos so that a doctor can look for changes.

### Testing Table
Test | Explanation
-----|------------
