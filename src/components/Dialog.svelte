<script>
  import { onMount, afterUpdate, onDestroy } from "svelte";
  export let name = 'jimi';
  console.log("name", name);
  onMount(() => {
    console.log("Mounted");
  });

  afterUpdate(() => {
    console.log("Updated", $$props);
  });

  onDestroy(() => {
    console.log("Destroyed");
  });

  $: {
    console.log("changed");
  }
</script>

<svelte:options tag={null} />
<h1>Hello {name}!</h1>
<slot />
