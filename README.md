Login and Sign-Up Authorization Application  
Overview  
This application facilitates user authentication, allowing individuals to sign up and login securely using the Lorby server.   
The system conducts validation checks for proper email formats, password strength, and username existence. It provides feedback on registration status,   
handles incorrect login credentials, and offers guidance through modal windows.  
![login](https://github.com/NSagynbek/neobis-front-authorization/assets/130668892/e1713aa3-6787-4c41-b9c7-e248cef81574)

![sign-up](https://github.com/NSagynbek/neobis-front-authorization/assets/130668892/31032c1f-0f3f-4310-927a-f1c583ebd421)

Features  
User Registration  
Validate email, username, and password format and strength.  
Ensures password matching during sign-up.  
Sends a registration link for completion via a token.


Login Authorization  
Checks for previously registered users on the Lorby server.  
Notifies if the user is not found or if the password is incorrect.  
Offers form validation on the login page.  
Dynamic Modals
Guides users through modal windows dynamically based on the process stage.
Implementation
Technologies Used


React  
Redux for state management  
React Router for navigation  
Formik and Yup for form validation  
Material-UI icons for UI elements  

Dependencies  
React, React Router, Reux, React-Redux, Redux-thunk Formik, Yup, Material-UI  
Running the Application
Clone the repository.
Install dependencies using npm install.
Start the application with npm start.
Contributing
Contributions are welcome! Feel free to open issues and pull requests for enhancements or bug fixes.
