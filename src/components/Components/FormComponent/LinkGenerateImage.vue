<template>
  <div class="col-4">
    <div class="mb-1">
      <label  class="form-label text-white poppins-text">Générer une image avec</label>
      <div class="display-flex-row logo-wrapper-contain width-60-vh height-15-vh">
        <div class="logo">
          <a target="_blank" href="https://chatgpt.com/"
            ><img src="/images/Logos/openai-icon.svg" class="width-10-vh"
          /></a>
        </div>
        <div class="logo">
          <a target="_blank" href="https://copilot.microsoft.com"
            ><img src="/images/Logos/copilot-icon.svg" class="width-10-vh"
          /></a>
        </div>
        <div class="logo">
          <a target="_blank" href="https://firefly.adobe.com/"
            ><img src="/images/Logos/firefly.svg"  class="width-10-vh"
          /></a>
        </div>
        <div class="logo"> <a target="_blank" href="https://app.leonardo.ai/"
          >
          <img src="/images/Logos/leonardo-logo.webp"  class="width-10-vh">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LinkGenerateImage",
};
</script>