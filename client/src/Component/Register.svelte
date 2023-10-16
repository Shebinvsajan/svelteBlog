<script>
 let fullName = '';
  let email = '';
  let password = '';
  let confirmPassword = '';
  let passwordMatchError = false;
  let registrationMessage = '';

  async function handleSubmit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      passwordMatchError = true;
      registrationMessage = '';
    } else {
      passwordMatchError = false;

      const userData = {
        name: fullName,
        email,
        password,
      };

      try {
        const response = await fetch('http://localhost:3000/api/user/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });

        if (response.status === 201) {
          registrationMessage = 'User registered successfully';

          setTimeout(() => {
            window.location.href = '/';
          }, 2000);

          fullName = '';
          email = '';
          password = '';
          confirmPassword = '';
        } else {
          registrationMessage = 'Registration failed';
        }
      } catch (error) {
        console.error('Error registering user:', error);
        registrationMessage = 'Registration failed';
      }
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
  
    .error-message {
      color: red;
    }
  </style>


<div class="center">
  <div class="form-container">
    <h3 class="form-title">Register</h3>
    <form on:submit={handleSubmit}>
      <div class="form-group">
        <label for="fullName" class="form-label">Full Name</label>
        <input type="text" class="form-input" id="fullName" bind:value={fullName} placeholder="Enter your full name" required>
      </div>
      <div class="form-group">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-input" id="email" bind:value={email} placeholder="Enter your email" required>
      </div>
      <div class="form-group">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-input" id="password" bind:value={password} placeholder="Enter your password" required>
      </div>
      <div class="form-group">
        <label for="confirmPassword" class="form-label">Confirm Password</label>
        <input type="password" class="form-input" id="confirmPassword" bind:value={confirmPassword} placeholder="Confirm your password" required>
      </div>
      <button type="submit" class="form-button">Register</button>
      {#if passwordMatchError}
        <p class="error-message">Passwords do not match.</p>
      {/if}
      {#if registrationMessage}
        <p>{registrationMessage}</p>
      {/if}
    </form>
    <p>Already have an account? <a href="/">Log in</a></p>
  </div>
</div>
  