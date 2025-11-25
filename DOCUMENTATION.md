# Lilly Technical Challenge Documentation 

## Approach

First, I made sure to read through the objectives so I could understand what I needed to do. Once I had a clear idea of what needed to be done, I sketched a low-fidelity UI design on paper to map out the structure of the interface.
Next, I began to code the logic for fetching the data to display on the front end - since I hadn't implemented any UI functionality, the front end looked quite plain and boring.
Once I was able to successfully fetch and display the JSON data, I then worked on the objective where the user can send medicine data to backend.
After I did some happy path and unhappy path testing, to see what would happen if the user
Then, I worked on tackling the average price function in the backend. And after writing the logic in Python, I decided to test my API call in Postman which successfully returned the average price.
Finally, I worked on developing the UI, which was more developed than my initial design, and the websites GeeksforGeeks W3Schools really helped me when I needed to find specific HTML, CSS and JS features. 

## Objectives - Innovative Solutions

I included toast notifications for notifying the user if their medicine input was successful and thus added to the data set or if they did not give valid input, intially I had simple alerts but were too simple. I also incorporated an additional light and dark mode feature for enhancing user experience, thus making the webpage more visually appealing.

## Problems Faced

I did come across a few issues while undertaking this challenge. For instance, when fetching the data to display on the web page, I did not realise that I was supposed to loop through the data, since the JSON data was in the array Medicines.
Another issue occurred while implementing the POST method. I wrote the wrong request body format because I didn’t realise the backend was expecting form-data rather than JSON. After checking the Python backend file, I realised I needed to use Form fields, and adjusting this fixed the issue.
Also, to implement the additional light and dark mode feature, I had to do some research for colour scheme, seeing what would not clash too much with both modes. Actually, the overall implementation of this feature was a little challenging, I decided to do quick research to see how would this be carried out, and W3Schools helped me better understand how to go about this, and I did find it a bit challenging overall.
And, sometimes I would get a bit stuck regarding what CSS attributes to use to make the UI look more appealing, so it took some time for me to go and understand attributes such as grid and working more with flexbox.

## Evaluation

Overall, I thorougly enjoyed this challenge, it pushed me to think more creatively about how to approach each task and helped me to better understand how full stack applications work. I also enjoyed working with Postman to test API endpoints. And I liked writing the logic for the POST method so that users could send data to the backend.
If I were to do this again and were given more time, I would work on completing the UI first, and THEN work on the backend logic, rather than having to go back and edit it, as I would be able to visually track progress more clearly.
In future iterations, I would like to add a search bar, so users can get what they would like to see, as well as a filter button to show medicines based on price range, alphabetical order and medicines with full information (as in medicines with no missing data). And I would also like to add a delete medicine function.