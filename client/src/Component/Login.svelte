<script>
  let email = '';
  let password = '';
  let loginMessage = '';

  async function handleSubmit(event) {
    event.preventDefault();

    const userData = {
      email,
      password,
    };

    try {
      const response = await fetch('http://localhost:3000/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.status === 200) {
        const data = await response.json();
        const { token } = data;

        localStorage.setItem('token', token);

        loginMessage = 'Login successful';
        window.location.href = '/home';
      } else {
        loginMessage = 'Login failed';
      }
    } catch (error) {
      console.error('Error logging in:', error);
      loginMessage = 'Login failed';
    }
  }
</script>


<style>
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .form-container {
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    width: 320px;
    text-align: center;
  }

  .form-title {
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
  }

  .form-group {
    margin: 15px 0;
    text-align: left;
  }

  .form-label {
    font-weight: bold;
  }

  .form-input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .form-button {
    width: 100%;
    background-color: #007BFF;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 15px;
  }

  .form-button:hover {
    background-color: #0056b3;
  }



</style>

<div class="center">
  <div class="form-container">
    <h3 class="form-title">Login</h3>
    <form on:submit={handleSubmit}>
      <div class="form-group">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-input" id="email" bind:value={email} placeholder="Enter your email" required>
      </div>
      <div class="form-group">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-input" id="password" bind:value={password} placeholder="Enter your password" required>
      </div>
      <button type="submit" class="form-button">Login</button>
      {#if loginMessage}
        <p>{loginMessage}</p>
      {/if}
    </form>
    <div class="create-account">
      <p>Don't have an account? <a href="/register">Create a new account</a></p>
    </div>
  </div>
</div>
