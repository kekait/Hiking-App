Team_ISAK's UML diagram README.txt

In this diagram we have Actor, Login, Database, and Webpage components.

1) Any users, 0...n, can attempt to log into the website
2) Once logged in, 2 things happen:
   a) the user can now access the webpage
   b) the user, with the correct account, can access the Oracle database hosted by HSU
3) The webpage can only have the person who is logged in to view their unique site associated with their own
   Oracle database
4) The person who is currently logged in can add data to the database, which is relayed and displayed as a marker
   on their unique webpage
