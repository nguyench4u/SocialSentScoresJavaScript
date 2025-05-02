Chau Nguyen  
HW4  
Principles of Programming Language  
Sung Nam  

## Homework 4 Part 3: Report of What I learned: ## 
**Abstract:** 
For this assignment I used JavaScript with Node.js as my first OOP language, saving C# for the next assignment since it requested for the more 'OOP' oriented language. I didn't think it was very common to use JavaScript for assignments like this, since it’s primarily known as a web development language. I also know this because I have worked with JavaScript in my last summer internship. I chose JavaScript again so I can improve my fluency in it and this assignment gave me the opportunity to further explore the language from the ground up. This project gave me a better grasp of JavaScript's possibilities, and I was surprised at how strict it can be in certain areas, especially when compared to more familiar languages like Python and C++. Node.js was necessary so I can execute the program locally on my machine on Visual Studio Code. 

**Approach:**
As the assignment requested, I broke down the problem into 3 subprograms (functions) in JavaScript. 
1. buildSocialSentimentTable()
    - First, I looked up methods and syntax on how to read files and split the contents, and imported built-in functions to do so.
    - Have it read the provided .csv file and store the words and scores into separate objects through using dictionary. 
2. getSocialSentimentScore()
    - Then write the method that will read the words in .txt files, clean them to complete lowercase and punctuation free strings. 
    - Compare those clean words to the words of the sentiment table, if they exist. Show the score, and accumulate the scores.
3. getStarRating() 
    - Take the total score that was calculated in the getSocialSentimentScore() function, and convert it to a star rating according to the assignment. 
4. Wrote the main() function
    - This section takes a user input of the file name, reads it and processes each word from the file. The words are passed into the sentiment function and prints out the total score and star rating. 

**Special Features and What I learned:**
During this project, I discovered that require('module') in JavaScript imports built-in or external modules in a way similar to import in Python or C++. I also looked into how JavaScript manages dictionaries and objects, especially when it comes to saving key-value pairs from the socialsent.csv file, for the word-score pairings. Another key feature I learned was how to use regular expressions to clean and process raw strings, and how JavaScript distinguishes between quotes and backticks when working with strings. This continues into how formatting texts and embedding variables work, where I found template literals to be very helpful. I also learned that.padEnd() is used to produce output that is neatly aligned. Furthermore, other little modules like the .trim() is very useful for processing file lines or user input since I came across that type of error. Error handling is also more significant in JavaScript due to how flexible the language is. Then I didn't expect that I had to use && for range checks because JavaScript doesn't provide comparison chaining (such as -5 <= x <= -1). The comparison syntax in the if-else statements have a specific order to them, since there are reserved keywords and operators such as => which is NOT the same as >=.

**Features I liked:**
I liked JavaScript's flexibility and dynamic type while working with arrays and objects. Data processing felt more efficient and straightforward as a result. Regular expression tools and built-in string techniques were also useful for formatting and parsing input without requiring third-party libraries. The language is easily readable too. 

**Features I didn't like:**
I am not a picky person overall, and completing this homework assignment in JavaScript hasn't bothered me to any large extent. However the native comparison chaining (e.g., -5 <= score <= -1) was just interesting and could result in minor logical errors. I also found the syntax difference between require() and import in modern JavaScript a bit confusing. And then for template literals, I think it is a bit inconvenient to use ${} strictly in backticks. I think it would be more natural to refer to variable names simply, like in Python's f-strings, without the need for additional syntax.

**AI Usage:**
I used ChatGPT more as a learning guide for this assignment. Whenever I encountered functions that wouldn’t run in main() or produced errors, ChatGPT helped clarify the syntax and pointed out what I was doing wrong. For example, it explained how .toFixed() works and helped me fix basic logic issues, such as incorrect chained comparisons or misusing =>. Whenever I didn’t understand the structure of a certain statement or method, I would ask ChatGPT to explain how it worked and why. It also gave insightful comments. Then, when I wanted to make the output look nicer, I knew there was some pad spacing feature in JavaScript since I used it often in Python, and ChatGPT showed me .padEnd() on how to apply it. 
All things considered, the tool overall helped with the debugging process and strengthened my understanding of JavaScript by providing explanations, examples, and immediate feedback. 
