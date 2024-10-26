<template>
    <div class="col-4">
          <div class="display-flex-column flex-one all-chapters-list-container">
            <ul class="list-group">
              <li
                class="list-group-item"
                v-for="(chapter, index) in Chapters"
                :key="index"
              >
                <router-link
                  class="dropdown-item roboto"
                  :to="'/chapter/' + chapter.Title"
                >
                  {{ chapter.Title }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>  
</template>
<script>
export default {
    name:"ListAllChapters",
    props:["Chapters"]
}
</script>