<script>
  let subdomain = "";
  let message = "";

  async function createSubdomain() {
    if (!subdomain) {
      message = "Subdomain tidak boleh kosong!";
      return;
    }

    const response = await fetch("http://localhost:3001/add-subdomain", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subdomain }),
    });

    const data = await response.json();
    message = data.message || data.error;
  }
</script>

<section class="bg-white dark:bg-gray-900 h-screen flex items-center">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div class="mx-auto max-w-screen-sm text-center">
      <h1 class="mb-4 text-3xl tracking-tight text-black font-extrabold">
        Add Subdomain
      </h1>
      <fieldset class="fieldset">
        <div class="flex items-center">
          <input
            type="text"
            class="input me-3"
            placeholder="subdomain"
            bind:value={subdomain}
          />
          <div class="text-black text-lg">.automationweb.vercel.id</div>
        </div>
      </fieldset>
      <button on:click={createSubdomain} class="btn btn-neutral mt-3"
        >Submit</button
      >
    </div>
  </div>
</section>
