<script>
  function logOut() {
    localStorage.removeItem("token");

    window.location.href = "/";
  }
</script>


<style>
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #007BFF;
      color: #fff;
      padding: 10px 20px;
    }
  
    .navbar-left {
      display: flex;
      align-items: center;
    }
  
    .navbar-right {
      display: flex;
      align-items: center;
    }
  
    .navbar-link {
      color: #fff;
      text-decoration: none;
      margin-right: 20px;
    }
  
    .navbar-button {
      background-color: #fff;
      color: #007BFF;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      text-decoration: none;
      margin-right: 20px;
      cursor: pointer;
    }
    .blog-link {
    font-weight: bold;
    text-transform: uppercase;
  }

  </style>
<div class="navbar">
  <div class="navbar-left">
    <a class="navbar-link blog-link" href="/home">Blog</a>
  </div>
  <div class="navbar-right">
    <a class="navbar-link" href="/home">Home</a>
    <a class="navbar-link" role="button" on:click={logOut} on:keydown={logOut} style="cursor: pointer;" tabindex="0">Log Out</a>
    <a class="navbar-button" href="/post">Post Blog</a>
  </div>
</div>