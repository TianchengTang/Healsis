#Website Manual#


###I. Introduction to Healsis###
####Healsis####
Healsis is a data management web-app cooperates with NanoHealth. We help doctors and social workers monitor and analyze health data more easily.

####NanoHealth####
NanoHealth is a social enterprise specializing in chronic disease management and provides holistic managed care services by creating local health networks and using innovative technology to bring cost-effective health care at the doorstep. NanoHealth creates a network of community health workers called Saathis and equips them with a low-cost point-of-care device called the Doc-in-a-Bag™. NanoHealth's Saathis, who are well-trained and empowered, form a strong network of care-givers extending the reach of health care right to the doorstep of the patient.

####Who Are We####
We are currently graduate students at Boston University.
Team members: Chang Yan, Da Shu, Tiancheng Tang, Xin Li, Xuanyi Chen

###II. Website Structures###
![WebsiteMap](https://raw.githubusercontent.com/WilliamLeeBravo/Myhealsis/master/Website_Map.png)

###III. Develop Tools###
Basically, we use MEAN, which contains AngularJS, MongoDB, NodeJS, and Express, to construct our front end and back end. We ues amazon web services as the cloud computing platform for our project. For source control, we use Github as the tool. To be more efficient, we chose Teambition as the scrum management tool to help us monitor the whole project.

###IV. Basic Functions###
####For Common User####
![CommonUser](https://raw.githubusercontent.com/WilliamLeeBravo/Myhealsis/master/CommonUser.png)

####For Registered User####
![RegisterUser](https://raw.githubusercontent.com/WilliamLeeBravo/Myhealsis/master/RegisterUser.png)

###V. Getting Started - Creating An Account###
####Creating your account####
To create a new account on Healsis follow the steps below

 1. Visit https://toubib.org

 2. Click on the "SIGNIN OR SIGNUP" button

 3. Choose your identity

 4. Enter your first and last name, email address, basic information, registration key, and choose a password
 5. Click "Register"
 

###VI. Website Tools###
####Homepage####
![Homepage](https://raw.githubusercontent.com/WilliamLeeBravo/Myhealsis/master/homepage.PNG)
>In the homepage, people can see the introduction about our services, features, work flow, and staffs, no matter they are register users or common users.

![Service](https://raw.githubusercontent.com/WilliamLeeBravo/Myhealsis/master/service.PNG)

![Features](https://raw.githubusercontent.com/WilliamLeeBravo/Myhealsis/master/features.PNG)

>You can click each feature's picture to get more detailed introduction:

>*	**Doc-in-a-Bag:** The Saathis are equipped with a low cost point of care device called the “Doc-in-a-Bag™”. The Doc-in-a-Bag™ is a multi-parameter point of care device that measures disease progression markers such as blood pressure and blood sugar and creates an electronic health record for patients of chronic diseases. In NanoHealth plan, our patients get doorstep monitoring and counseling services and help in prescription compliance through proven methods.

>*	**Saathis:** NanoHealth network of local community health workers – ‘Saathis’, are well-trained and certified by the company. We as a company believe in empowering women and therefore, we chose women as our local community health worker. NanoHealth Saathis, form a strong network of care givers extending the reach of the health system to the door step of common people. Our Saathis are the first point of care for all our patients of chronic disease, from home based monitoring and counseling to referring to the right physician in the community.

>*	**hGraph:** hGraph (Health Graph) is a standardized visual representation of a patient's health status, designed to increase awareness of the individual's factors that can affect one's overall health. hGraph displays a complete overview of an individual's health. This single picture method provides a person with a significant understanding of his or her total well being because it compiles multiple metrics into a unified graph that can be viewed at a glance. hGraph users can easily identify which metrics exist in a normal range versus those that may be too high or low. It effectively conveys important data at sizes both large and small, and enables users to recognize condition patterns. With hGraph, patients can track their own health and healthcare providers can learn to recognize representative visualizations for common diseases.

>*	**Hypertension:** Usually hypertension is defined as blood pressure above 140/90 and is considered severe if the pressure is above 180/120. According to a WHO report, about 50% of deaths occur due to chronic diseases such as hypertension and diabetes among low income groups and communities. High blood pressure often has no symptoms. Over time, if untreated, it can cause health conditions, such as heart disease and stroke. Eating a healthier diet with less salt, exercising regularly, and taking medications can help lower blood pressure.

>*	**Diabetes:** With type 2 diabetes, the body either doesn't produce enough insulin, or it resists insulin. Symptoms include increased thirst, frequent urination, hunger, fatigue, and blurred vision. In some cases, there may be no symptoms. Treatments include diet, exercise, medication, and insulin therapy.

>When you are done, you can click "close" button to return to the homepage.


![Workflow](https://raw.githubusercontent.com/WilliamLeeBravo/Myhealsis/master/workflow.PNG)

>Our workflow contains:

>*	**SCREENING CAMPS:** A network of community health workers carry care diagnostic device “Doc-in-a-Bag” to sample disease markers and risk profile of citizens for chronic disease right at the doorstep of the slum dweller.
*	**SYNC DATA ONSITE:** Health workers can record and sync health data through Healsis dashboard immediately after taking physical examination.
*	**MEDICAL STUDY:** Healsis dashboard offers user-friendly data display interface for doctors to analyse certain disease status neighbour by neighbour.
*	**LONG-TERM GOAL:** Through our monitoring and counselling services, we want to achieve higher rates of prescription compliance to ensure that disease aggravation is prevented, and thus reduce overall health system costs.


![People](https://raw.githubusercontent.com/WilliamLeeBravo/Myhealsis/master/people.PNG)

>People can also contact us using our email system.

![ContactUs](https://github.com/WilliamLeeBravo/Myhealsis/raw/master/ContackUs.png) 

###VII. Dashboard Overview###

The dashboard is the central hub for this website. It is where doctors, clients, and also social workers manage their information and work. On this page, doctors and social workers can search their patients' data, and patients can check their h-graph. When you finish, you can logout and the website will jump back to the homepage.

####Client Data Inquiry####

In this category, doctors and social workers can search patients based on their needs. The results of specific patients will be showed in the table below the "Search" button. Users can see patient' ID, gender, age, living location, status of hypertension, diabetes, blood suger, blood pressure, and urination count in the table. To see more detailed information of these patients, please click "Show More Details" button.

![ClientDateInquiry](https://raw.githubusercontent.com/WilliamLeeBravo/Myhealsis/master/ClientDataInquiry.PNG)

####Client Data Update####

After input the patient ID, and press the "Find" button, all the following data of this patient will be automatically shown up. If the input Patient ID does not exist, the website will inform the user in a red sentence.
When finish updating, users can click the "Update" button to store the decent data.

![ClientDataUpdate](https://raw.githubusercontent.com/WilliamLeeBravo/Myhealsis/master/ClientDataUpdate.PNG)

####Neighborhood Statistics####

In this part, users can get detail information about general health conditions, hypertension conditions, and diabetes conditions which are sorted by locations. The overall health condition of a patient is calculated and graded by our own algorithms.

![NeighborhoodStatistics](https://raw.githubusercontent.com/WilliamLeeBravo/Myhealsis/master/neighborhood.PNG)

####Staff Contack Info####

This is a search page. First, you can choose the capital letter which represents the staff you want to get access to.

![Staff](https://raw.githubusercontent.com/WilliamLeeBravo/Myhealsis/master/staff.PNG)

####My Profile####

When users want to update their personal files, they could finish their job here.

![MyProfile](https://raw.githubusercontent.com/WilliamLeeBravo/Myhealsis/master/profile.PNG)

####Assign Tasks####

When doctors want to assign tasks to specifically social workers, they could assign here.

![AssignTasks](https://raw.githubusercontent.com/WilliamLeeBravo/Myhealsis/master/assign.PNG)

####My Tasks####

Doctors can check their tasks here. They can see patient's name, task category, living location, and Assigned date. If tasks have already finished, dotors click "Done" button, otherwise they make comments by clicking "Comment" button.

![MyTasks](https://raw.githubusercontent.com/WilliamLeeBravo/Myhealsis/master/task.PNG)

####Generate Registration Key####

In this part, doctors can generate registraton keys for social workers. Social workers can generate registration keys for patients as well. The registration key and user ID will be showed after users click "Generate" button.

![GenerateRegKey](https://raw.githubusercontent.com/WilliamLeeBravo/Myhealsis/master/regkey.PNG)

####My H-Graph####

Patients can see their health status on hGraph generated by our algorithms. The algorithems are designed by related theoretical papers and doctors' advices.

![hgraph](https://raw.githubusercontent.com/WilliamLeeBravo/Myhealsis/master/hgraph.PNG)

###IX. Clarification###
While working on Neighborhood Statistics page, we imported a "Donut Graph" from this Morri's Website. Here is the clarification of the license and the copyright of the owner.

Copyright (c) 2013, Olly Smith
<br>
All rights reserved.

>THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 

###X. Other Services###

If you need any other services, please contact us via our system.
    
