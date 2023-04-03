Quiz App with React and Firestore Database
This is a quiz app built with React and Firestore database using Vite.

Installation

Clone the repo to your local machine
bash
Copy code
git clone https://github.com/<username>/<repository>.git
Navigate to the project directory
bash
Copy code
cd <repository>
Install dependencies using npm or yarn

npm install


Set up Firebase project and enable Firestore database
Go to the Firebase Console and create a new project.
Click on "Firestore Database" from the side menu and then click on "Create Database".
Select "Start in test mode" and click "Next".
Choose a region and click "Done".
Configure Firebase credentials
In the Firebase Console, go to Project Settings -> Service Accounts and click on "Generate new private key" to download a JSON file containing your Firebase credentials.
Rename the downloaded file to firebase-config.json and place it in the src folder of the project.

Start the development server

npm run dev

Open your browser and go to http://localhost:3000 to view the app.
Features
Users can sign up and log in with email and password.
Users can take quizzes and view their scores.
Admins can create and edit quizzes.
Dependencies
React: JavaScript library for building user interfaces.
Firestore: Cloud-hosted NoSQL database by Firebase.
Vite: Fast and lightweight build tool for modern web apps.
Credits
This app was built by Kabeer Joshi. Feel free to contact me at kabeer786joshi@gmail.com if you have any questions or feedback.
