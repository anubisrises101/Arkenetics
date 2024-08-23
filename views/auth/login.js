<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sign In</title>
</head>
<body>
  <%- include('../partials/_navbar.ejs') %>
  <h1>Sign in</h1>
  <form action="/auth/sign-in" method="POST">
    <label for="username">Username:</label>
    <input type="text" name="username" id="username" required />
    <label for="password">Password:</label>
    <input type="password" name="password" id="password" required />
    <button type="submit">Sign in</button>
  </form>
</body>
</html>