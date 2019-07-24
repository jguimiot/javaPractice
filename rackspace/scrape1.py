# import the libraries needed to find and parse the website

import requests
from bs4 import BeautifulSoup

# create a variable to store the url of the target website, retrieved using the get method from the requests library

data = requests.get('https://ocw.mit.edu/courses/most-visited-courses/')

# create a BeautifulSoup object, essentially a parsing tree, with the contents of the webpage

soup = BeautifulSoup(data.text, 'html.parser')

# print a readable version of the parsed data

print(soup.prettify())
