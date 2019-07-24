# import the libraries needed to find the website
# and parse it
import requests
from bs4 import BeautifulSoup

# create a variable to store the url of the target website,
# retrieved using the get method from the requests library
data = requests.get('https://ocw.mit.edu/courses/most-visited-courses/')

# parse the website using BeautifulSoup
soup = BeautifulSoup(data.text, 'html.parser')

# find the relevant table using the find method from BeautifulSoup,
# ignore everything else
course_table = soup.find('table', { 'class': 'courseList' })
# find the heading of the relevant section using the find method from
# BeautifulSoup, ignore everything else
tbody = course_table.find('tbody')
# for loop to capture the information from each course in turn
# within the heading of the section identified as relevant, extract the text
# related to each course, and strip out anything unnecessary
for tr in tbody.find_all('tr'):
	# the course number will be the first item in the list, at position 0
	course_num = tr.find_all('td')[0].text.strip()
	# the course title will be the second item in the list, at position 1
	course_title = tr.find_all('td')[1].text.strip()
	# the course level will be the third item in the list, at position 2
	course_level = tr.find_all('td')[2].text.strip()
	# print each course number, title and level
	print(course_num, course_title, course_level)
