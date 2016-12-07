Team_ISAK's c-and-c-arch diagram

README:

For our project we created a website for people to use, which connects to a a number of applications to gather various amounts of
different information.

For this diagram we have Client, application, and database components

1) Client requests information from 3 different application servers for various information

	a)Request to google supplies the user with the map data and access to a number of its included methods
	b)Request to simpleWeather supplies the user with weather information.
	c)Request to NRS-projects is made in preparation to connect with the Oracle database to send/recieve information that
		pertains to the map (EX: trail notes)

Our diagram is relatively simple, because we are only gathering information from Google and SimpleWeather, like our Maps API information, and
logging in to the Oracle database on campus for user input collection and web hosting. 
