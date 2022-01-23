# myQuest-assessment

Answer to Question 3:

Yes, we can use a similar implementation for passwords. But not this exact one. If you want to use this exact solution, then it needs to be re-factored so that we can define the rules at runtime which need to be adhered to, where as the current implementation is specific for emails to the use case provided.

Answer to Question 4:

I used a SQLite database for this solution to make the inviilators life a little easier when it came to testing and running the program. In my './helper/db' file I used the following query to create the db: 

            CREATE TABLE execution_log (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            date datetime, 
            inputEmail text,
            isValid bool,
            errorMsgs text
            )
            
I have, unfortunately, not finished the implementation of the db.

HOW TO RUN APP:

1) copy or download zip,
2) open folder in IDE or console,
3) run 'npm install',
4) run 'npm run app'

Have implemented a unit test to showcase I am aware of testing and that it is important, but time became a factor, so:
1) to run unit test use: 'npm test'

If you want to run own personal test against the endpoint:
1) open Postman,
2) Create new request, 
3) Change to POST and set url to 'localhost:3000/email/validate/batch'
4) in body tab set to "raw" and JSON,
5) here is a sample payload:
  {
    "emails":
    [
        "martin@martin.co.za",
        "someone@someone.co.za",
        "@#!@!#",
        "aren@zozoapp.co.za"
    ],
    "blacklist" :{
        "words": [
                "martin"
        ],
        "domains":
        [
            "zozoapp.co.za"
        ]
        }
}
