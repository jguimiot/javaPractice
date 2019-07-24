import requests
from bs4 import BeautifulSoup

data = requests.get('https://ocw.mit.edu/courses/most-visited-courses/')

soup = BeautifulSoup(data.text, 'html.parser')

course_name_list = soup.find(class_='maintabletemplate')
course_name_list_items = course_name_list.find_all('tr')

for course_name in course_name_list_items:
	print(course_name.text)

#print(soup.prettify())
