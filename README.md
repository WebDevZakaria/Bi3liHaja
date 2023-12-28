```diff
-Big Notes: THe Project iss Still In Progess :40% 
```
<hr/>
<h1> Bi3li Haja Marketplace with Django and React </h1>

<h2>Project Overview</h2>

a versatile web application that empowers users to buy and sell a diverse range of items, including phones, houses, cars, and home furniture. 
The platform operates on a unique one-time selling model, 
ensuring each product can be sold only once. Users can also add various items and wait for admin approval before making them visible on the platform.

<h2>Features</h2>


One-Time Selling: Each product, whether it's a phone, house, car, or home furniture, can be sold only once for a unique and one-time selling experience.

User Authentication: Secure user authentication for both buyers and sellers.

Product Approval: Sellers can add various items and wait for admin approval before making them visible on the platform.

Product Listings: Browse and search for a diverse range of items available for purchase, including phones, houses, cars, and home furniture.

Transaction History: Track the history of products bought and sold.

<h2>Getting Started</h2>

Follow these instructions to set up and run the  Application locally.

<h2>Back End </h2>

first thing to do is to clone repository :

      $ git clone https://github.com/WebDevZakaria/Bi3liHaja.git
 
Create a virtual environment to install dependencies in and activate it:

      $ virtualenv venv

      $ venv\Scripts\activate

      
Then go to the backend folder and  install the dependencies:

      $ cd bi3libackend
      (venv) $ pip install -r requirements.txt
      
Note the (venv) should be in the front of the prompt. this indicate that the terminal session is in a virtual env

<h2>Database Setup</h2>

Apply migrations:

      (env) $ python manage.py migrate

Create a superuser account:

      (env) $ python manage.py createsuperuser
      
Follow the prompts to set up your admin account.

Once downloading the dependencies has finished you can start the server by running:

      (env) $ python manage.py runserver

And go to your browser and navigate to http://127.0.0.1:8000.


<h2>Front End </h2>

Navigate to the frontend directory


       cd bi3lihaja

Install frontend dependencies:


       npm install 
       

Finally ,Start the frontend development server:


      npm start


And go to your browser and navigate to http://localhost:3000/.   



For The Admin Panel You Can Access the Django admin panel at http://127.0.0.1:8000/admin/ and log in with the superuser credentials







