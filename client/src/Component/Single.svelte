<script>
  import { onMount } from "svelte";
  import { Link, navigate } from "svelte-routing";
  import Nav from "./Nav.svelte";

  let post = null;

  onMount(async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
    } else {
      const postId = window.location.pathname.split('/').pop();
      if (!postId) {
        navigate("/home");
      } else {
        const response = await fetch(`http://localhost:3000/api/blog/post/${postId}`);
        const data = await response.json();

        if (response.ok) {
          post = data.post;
        } else {
          navigate("/home"); 
        }
      }
    }
  });
</script>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .card {
    max-width: 40rem;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    text-align: center;
  }

  .image-container {
    text-align: center;
  }

  .page-image {
    max-width: 100%;
    height: auto;
  }

  .page-title {
    font-size: 24px;
    font-weight: bold;
    margin-top: 20px;
  }

  .page-description {
    font-size: 16px;
    text-align: center;
  }
</style>
<Nav/>
<div class="container">
  
  {#if post}

  <div class="card">
    <div class="image-container">
      <img class="page-image" src={post.imgurl} alt="post">
    </div>
    <h1 class="page-title">{post.title}</h1>
    <p class="page-description">{post.description}</p>
    <button on:click={() => navigate("/home")}>Back to Home</button>

  </div>
  {:else}
  <p>Loading...</p>
{/if}
</div>

