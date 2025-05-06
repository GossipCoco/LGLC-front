<template>
  
    <button
      type="button"
      class="btn btn-primary edit-summary-btn"
      data-bs-toggle="modal"
      data-bs-target="#EditSummary"
    >
      Editer le résumé
    </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="EditSummary"
    tabindex="-1"
    aria-labelledby="EditSummaryLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content background-color-dark-green-01">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="EditSummaryLabel">
            Modifier le résumé
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form
            class="margin--1vh-0-0-0 height-50-vh width-140-vh"
            @submit.stop.prevent="handleOk"
            ref="uploadForm"
          >
            <div class="row">
              <div class="col-12">
                <div class="mb-12">
                  <label for="Content" class="form-label text-white"
                    >Votre résumé</label
                  >
                  <textarea
                    v-model="form.Content"
                    class="form-control"
                    id="Content"
                    rows="12"
                  >
                  </textarea>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Fermer
          </button>
          <button type="button" class="btn btn-primary">
            Enregistrer les modifications
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "EditSUmmary",
  props: ["FictionId", "Summary"],
  data() {
    return {
      form: {
        Id: this.FictionId,
        Content: this.Summary,
      },
    };
  },
};
</script>