# pc2Web9.7

This README file provides instructions for installing PC2 version 9.7 with the PC2Team web client.

### 1. Deploy pc2server.
The first step is to configure the pc2server, which is the core of the pc2 solution. Before we begin, please ensure that your machine meets these requirements.
  - Java(1.7 or greater) and its bin directory in PATH.
  - Enough memory to avoid memory-limit problems.
  
If your machaine meets these requirements i can say that we are ready to go.
  - Now unzip the folder called **pc2-9.7.0** (anywhere in your machine).
  - Add the PC² bin directory to the PATH.   
#### How to start pc2server.
It depends if your machine is a GUI machine or non GUI.
##### GUI machine.
  - Go to the bin folder and execute the file pc2server.bat, enter the **site1** as login and password.
  - Enter a contest password (this contest security password will be required to be reentered for all subsequent server startups).
##### non GUI machine.
  run this command **pc2server --nogui --login site1 --password site1 --contestpassword [contest password]**
  
### 2. Deploy pc2admin. 
#### What is pc2admin for.
a bat file located in the bin direcotory, It's the instance which manage, configure and run the contest. it's the **ADMIN**
#### How to run it.
If you are going to run your **pc2admin** in a different server of **pc2server**, you have to do the same steps that we did with pc2server.
  - Unzip the folder called **pc2-9.7.0**.
  - Add the PC² bin directory to the PATH.    
In addition you have to edit the file **pc2v9.ini** by replacing the **localhost** in **client** section with the IP of the pc2server machine, and run the command **pc2admin** (if you are going to run pc2admin in the same machine of pc2server, you dont need all what we did, you have just to run **pc2admin** command), an interface desktop is launched, now you have just to login using the name **root** and password **administrator1**.

Important note: if the login button in the **pc2admin** interface is disabled, it means that your **pc2admin** can't find your **pc2admin**, so just make sure that your **pc2server** is running and **pc2v9.ini** file of your **pc2admin** contains the right IP if you run it in a diffrent server.

#### Configure contest.
Using the **pc2admin** try to Generate a pc2admin, teams, judges and 2 scoreboards, 

In order to support the PC2Team web client, the PC2 configuration must include a scoreboard account explicitly named "scoreboard2". so you have to create two accounts.

### 3. Run PC2Team web client.
To run PC2Team web client, First you need to install an application server (in my case i used XAMPP when i ran in windows and apache 2 when i ran in linux).
  - Unzip the folder **WebTeamInterface-1.1.zip** in the racine of server application.
  - Add bin directory to PATH
  - Edit the file **pc2v9.ini** and replace **localhost** in the **[client]** section with the IP of **pc2server** machine.
  - make sure the **pc2server** is running.
  - Run **pc2wti** command in the racine where the file **WebTeamInterface-1.1.jar** is located.
  - Test in the port 8080.


