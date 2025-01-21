# Node.js Express.js Improper Error Handling

This repository demonstrates a common error in Express.js applications: improper error handling.  The `bug.js` file shows an example of how NOT to handle errors, while `bugSolution.js` provides a more robust and secure solution.

**Problem:** The `bug.js` file uses a generic error handler that logs the error stack to the console and sends a generic 'Something broke!' message to the client. This exposes sensitive information (stack trace) to the user and lacks specific error handling.

**Solution:** The `bugSolution.js` file shows how to properly handle errors using separate error handlers for different HTTP status codes and providing more informative error messages to the user without revealing sensitive details.