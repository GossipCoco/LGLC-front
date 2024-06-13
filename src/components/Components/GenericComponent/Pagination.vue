<template>
  <div class="row pagination-row-container">
    <div class="row pagination-zone-container">
      <div class="
            pagination-container-row
            col-lg-12 col-md-12 col-sm-12 col-xxl-12 col-xs-12
          ">
        <div class="row pagination-container">
          <div class="col-2">
            <p v-if="!nav.current">Page : 1</p>
            <p v-else>Page : {{ nav.current + 1 }}</p>
          </div>
          <div class="col-6">
            <ul class="pagination" v-if="nav.pages < 12">
              <li class="nav-btn-contain">
                <button v-for="p in navPage.pages" :key="p" :disabled="navPage.current == p - 1" type="button"
                  class="page-link" @click="getData(p - 1)">{{ p }}
                </button>
              </li>
            </ul>
            <ul class="pagination" v-if="navPage.pages >= 12">
              <li class="page-item">
                <button type="button" class="page-link pagination-text" :disabled="navPage.current == 0"
                  @click="getData(0)">
                  Premier
                </button>
              </li>
              <li class="page-item">
                <button type="button" class="page-link pagination-text" :disabled="navPage.current <= 0"
                  @click="getData(navPage.current - 1)">
                  Précédent
                </button>
              </li>
              <li class="page-item">
                <button type="button" class="page-link" :disabled="navPage.current == 0" @click="getData(0)">
                  1
                </button>
              </li>
              <li class="page-item">
                <button type="button" class="page-link" :disabled="navPage.current == 1" @click="getData(1)">
                  2
                </button>
              </li>
              <li class="pagination" v-if="navPage.current == 1">
                <span class="page-item">
                  <button type="button" class="page-link" :disabled="navPage.current == 2" @click="getData(2)">
                    3
                  </button>
                </span>
              </li>
              <li class="pagination" v-else-if="navPage.current == 2">
                <span class="page-item">
                  <button type="button" class="page-link" :disabled="navPage.current == 2" @click="getData(2)">
                    3
                  </button>
                </span>
                <span class="page-item">
                  <button type="button" class="page-link" :disabled="navPage.current == 3" @click="getData(3)">
                    4
                  </button>
                </span>
              </li>

              <div class="pagination" v-if="navPage.current < 3 || navPage.current > navPage.pages - 4
              ">
                <span class="nav-space-contain">...</span>
                <li class="page-item">
                  <button type="button" class="page-link" :disabled="navPage.current == navPage.middle - 2"
                    @click="getData(navPage.middle - 2)">
                    {{ navPage.middle - 1 }}
                  </button>
                </li>
                <li class="page-item">
                  <button type="button" class="page-link" :disabled="navPage.current == navPage.middle - 1"
                    @click="getData(navPage.middle - 1)">
                    {{ navPage.middle }}
                  </button>
                </li>
                <li class="page-item">
                  <button type="button" class="page-link" :disabled="navPage.current == navPage.middle"
                    @click="getData(navPage.middle)">
                    {{ navPage.middle + 1 }}
                  </button>
                </li>
                <span class="nav-space-contain">...</span>
              </div>
              <span class="pagination" v-else>
                <span class="nav-space-contain">...</span>
                <li class="page-item">
                  <button type="button" class="page-link" :disabled="navPage.current - 1 == navPage.current"
                    @click="getData(navPage.current - 1)">
                    {{ navPage.current }}
                  </button>
                </li>
                <li class="page-item">
                  <button type="button" class="page-link" :disabled="navPage.current == navPage.current"
                    @click="getData(navPage.current)">
                    {{ navPage.current + 1 }}
                  </button>
                </li>
                <li class="page-item">
                  <button type="button" class="page-link" :disabled="navPage.current + 1 == navPage.current"
                    @click="getData(navPage.current + 1)">
                    {{ navPage.current + 2 }}
                  </button>
                </li>
                <span class="nav-space-contain">...</span>
              </span>
              <span class="pagination" v-if="navPage.current == navPage.pages - 3">
                <li class="page-item">
                  <button type="button" class="page-link" :disabled="navPage.current == navPage.pages - 4"
                    @click="getData(navPage.pages - 4)">
                    {{ navPage.pages - 3 }}
                  </button>
                </li>
                <li class="page-item">
                  <button type="button" class="page-link" :disabled="nav.current == nav.pages - 3"
                    @click="getData(nav.pages - 3)">
                    {{ nav.pages - 2 }}
                  </button>
                </li>
              </span>
              <span v-if="navPage.current == navPage.pages - 2">
                <li class="page-item">
                  <button type="button" class="page-link" :disabled="navPage.current == navPage.pages - 3"
                    @click="getData(navPage.pages - 3)">
                    {{ navPage.pages - 2 }}
                  </button>
                </li>
              </span>

              <li class="page-item">
                <button type="button" class="page-link" :disabled="navPage.current == navPage.pages - 2"
                  @click="getData(navPage.pages - 2)">
                  {{ navPage.pages - 1 }}
                </button>
              </li>
              <li class="page-item">
                <button type="button" class="page-link" :disabled="navPage.current + 1 == navPage.pages"
                  @click="getData(navPage.pages - 1)">
                  {{ navPage.pages }}
                </button>
              </li>

              <li class="page-item">
                <button type="button" class="page-link pagination-text" :disabled="navPage.current + 1 == navPage.pages"
                  @click="getData(navPage.current + 1)">
                  Suivant
                </button>
              </li>
              <li class="page-item">
                <button type="button" class="page-link pagination-text" :disabled="navPage.current + 1 == navPage.pages"
                  @click="getData(navPage.pages - 1)">
                  Dernier
                </button>
              </li>
            </ul>
          </div>
          <div class="col-4"></div>
          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Pagination",
  props: ["nav", "filters", "getDatas"],
  data() {
    return {
      nbFound: null,
      navPage: this.nav,
      filtersPage: this.filters,
      typeDatasPage: this.typeDatas,
    };
  },
  created() {

  },
  methods: {
    getData(e) {
      const page = parseInt(e);
      this.$emit(this.getDatas, page)
    },
  },
};
</script>