# ContactInformationApp

## This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.24.
This incudes the use of,  
Libraries like -  
-ngx-bootstrap  
-underscore.js  
-font-awesome  
and Frameworks like -  
Bootstrap4  
----------------------------------------------------------------------------------

# Functionalities - 
This app enables users to  
1.View their contacts  
2.create new contact  
3.update a contact  
4.delete a contact.  
There is an additional "share button" against each contact that displays a QR code containing containing the encoded contact Information.  
Note - This is just a representation of the idea, it is not functional.  
-----------------------------------------------------------------------------------

# Steps for running the project on local environment- 
Prerequisites -  
Node.js and Angular cli (ver.8.3.24) should be installed in the server machine.  
1.At root level of the project, in the command prompt, give the below command -  
--> npm install  
This will install all the dependencies listed in the package.json file and node_modules folder will be created.  
2.Then to the application locally, give the below command -  
--> ng serve  
This will host the application on the default port 4200.  
3.Set up fake json server locally using "json-server". For this install from npm,  
--> npm i -g json-server  
now run the command to run the json server  in the watch mode giving the path of the dB.json.  
--> json-server --watch dB.json  
4.In the browser, hit the url -  
--> http://localhost:4200  

------------------------------------------------------------------------------------


