<script>
  import { onMount } from "svelte";
  import { Link } from "svelte-routing";
  import Nav from "./Nav.svelte";

  let blogPosts = [];
  let currentPage = 1;
  let itemsPerPage = 5;

  onMount(async () => {
    const token = localStorage.getItem("token");

    if (token) {
      const response = await fetch('http://localhost:3000/api/blog/all-posts');
      const data = await response.json();
      blogPosts = data.posts.map(post => {
        post.description = post.description.length > 60
          ? post.description.slice(0, 60) + '...'
          : post.description;
        return post;
      });
    } else {
      window.location.href = "/";
    }
  });

  function setPage(page) {
    currentPage = page;
  }
</script>



<style>
  .container {
    display: flex;
    justify-content: center;
    height: 100vh;
  }

  .blog-card {
    display: flex;
    align-items: center;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-bottom: 20px;
    max-width: 40rem;
    width: 40rem;
  }

  .blog-image {
    width: 100px;
    height: 100px;
    border-radius: 5px;
    margin-right: 20px;
  }

  .blog-content {
    display: flex;
    flex-direction: column;
  }

  .blog-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .blog-description {
    font-size: 16px;
  }
  .blog-title{
    text-decoration: none;
  }
</style>

<Nav />

<div class="container">
  <div>
    <h1>Blog Home Page</h1>

    {#each blogPosts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) as post (post._id)}
      <div class="blog-card">
        <Link class='link' to={`single/${post._id}`}>
        <img class="blog-image" src={post.imgurl} alt="Blog">
        <div class="blog-content">
          <h2 class="blog-title">{post.title}</h2>
          <p class="blog-description">{post.description}</p>
        </div>
      </Link>
      </div>
    {/each}

    <div class="pagination">
      {#if blogPosts.length > currentPage * itemsPerPage}
        {#each Array.from({ length: Math.ceil(blogPosts.length / itemsPerPage) }, (_, i) => i + 1) as page}
          <button on:click={() => setPage(page)}>{page}</button>
        {/each}
      {/if}
    </div>
  </div>
</div>