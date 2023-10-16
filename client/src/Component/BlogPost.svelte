<script>
  let title = '';
  let imageUrl = '';
  let description = '';
  let token = localStorage.getItem('token');

  async function handleSubmit(event) {
    event.preventDefault();

    token = localStorage.getItem('token');

    if (!token) {
      window.location.href = "/";
      return;
    }

    const formData = {
      title,
      imgurl: imageUrl,
      description,
      token,
    };

    try {
      const response = await fetch('http://localhost:3000/api/blog/create-post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Post created successfully:', responseData.post);
        window.location.href = '/home';
      } else {
        console.error('Failed to create post:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  }
</script>



<style>
  .form-container {
    max-width: 40rem;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
  }

  .form-group {
    margin: 15px 0;
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
    background-color: #007BFF;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
</style>

<div class="form-container">
  <h2>Post a Blog</h2>
  <form on:submit={handleSubmit}>
    <div class="form-group">
      <label for="title" class="form-label">Title</label>
      <input type="text" class="form-input" id="title" bind:value={title} required>
    </div>
    <div class="form-group">
      <label for="imageUrl" class="form-label">Image URL</label>
      <input type="url" class="form-input" id="imageUrl" bind:value={imageUrl} required>
    </div>
    <div class="form-group">
      <label for="description" class="form-label">Description</label>
      <textarea class="form-input" id="description" bind:value={description} required></textarea>
    </div>
    <button type="submit" class="form-button">Submit</button>
  </form>
</div>
