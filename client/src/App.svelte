<script>
  import { Router, Route } from "svelte-routing";
  import Home from "./Component/Home.svelte";
  import Login from "./Component/Login.svelte";
  import Register from "./Component/Register.svelte";
  import BlogPost from "./Component/BlogPost.svelte";
  import Single from "./Component/Single.svelte";
</script>

<Router>
  <Route path="/" component={Login} />
  <Route path="/home" component={Home} />
  <Route path="/register" component={Register} />
  <Route path="/post" component={BlogPost} />
  <Route path="/single/:id" component={Single} />
</Router>

<main>
</main>
