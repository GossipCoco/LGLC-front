<template>
  <div class="row pagination-zone-container display-flex align-items-content-justify-content vertical-align-middle">
    <div class="pagination-container-row col-lg-12 col-md-12 col-sm-12 col-xxl-12 col-xs-12">
      <div class="row pagination-container">
        <div class="col-2 col-md-2 col-sm-2 col-xxl-2 col-xs-2"></div>
        <div class="col-6 col-md-6 col-sm-6 col-xxl-6 col-xs-6 col-pagination-container">
          <ul class="pagination" v-if="navPage.pages < 6">
            <li class="nav-btn-contain">
              <button
                v-for="p in navPage.pages"
                :key="p"
                :disabled="navPage.current == p - 1"
                type="button"
                class="page-link"
                @click="getData(p - 1)"
              >
                {{ p }}
              </button>
            </li>
          </ul>
          <ul class="pagination" v-if="navPage.pages >= 6">
            <li class="page-item">
              <button
                type="button"
                class="page-link pagination-text"
                :disabled="navPage.current == 0"
                @click="getData(0)"
              >
                Premier
              </button>
            </li>
            <li class="page-item">
              <button
                type="button"
                class="page-link pagination-text"
                :disabled="navPage.current <= 0"
                @click="getData(navPage.current - 1)"
              >
                Précédent
              </button>
            </li>
            <li class="page-item">
              <button
                type="button"
                class="page-link"
                :disabled="navPage.current == 0"
                @click="getData(0)"
              >
                1
              </button>
            </li>
            <li class="page-item">
              <button
                type="button"
                class="page-link"
                :disabled="navPage.current == 1"
                @click="getData(1)"
              >
                2
              </button>
            </li>
            <li class="pagination" v-if="navPage.current == 1">
              <span class="page-item">
                <button
                  type="button"
                  class="page-link"
                  :disabled="navPage.current == 2"
                  @click="getData(2)"
                >
                  3
                </button>
              </span>
            </li>
            <li class="pagination" v-else-if="navPage.current == 2">
              <span class="page-item">
                <button
                  type="button"
                  class="page-link"
                  :disabled="navPage.current == 2"
                  @click="getData(2)"
                >
                  3
                </button>
              </span>
              <span class="page-item">
                <button
                  type="button"
                  class="page-link"
                  :disabled="navPage.current == 3"
                  @click="getData(3)"
                >
                  4
                </button>
              </span>
            </li>
            <div
              class="pagination"
              v-if="navPage.current < 3 || navPage.current > navPage.pages - 4"
            >
              <span class="nav-space-contain">...</span>
              <li class="page-item">
                <button
                  type="button"
                  class="page-link"
                  :disabled="navPage.current == getMiddle(navPage) - 2"
                  @click="getData(getMiddle(navPage) - 2)"
                >
                  {{ getMiddle(navPage) - 1 }}
                  <!-- {{ navPage }} -->
                  <!-- {{ navPage.middle - 1 }} -->
                </button>
              </li>
              <li class="page-item">
                <button
                  type="button"
                  class="page-link"
                  :disabled="navPage.current == getMiddle(navPage) - 1"
                  @click="getData(getMiddle(navPage) - 1)"
                >
                  {{ getMiddle(navPage) }}
                </button>
              </li>
              <li class="page-item">
                <button
                  type="button"
                  class="page-link"
                  :disabled="navPage.current == navPage.middle"
                  @click="getData(getMiddle(navPage))"
                >
                  {{ getMiddle(navPage) + 1 }}
                </button>
              </li>
              <span class="nav-space-contain">...</span>
            </div>
            <span class="pagination" v-else>
              <span class="nav-space-contain">...</span>
              <li class="page-item">
                <button
                  type="button"
                  class="page-link"
                  :disabled="navPage.current - 1 == navPage.current"
                  @click="getData(navPage.current - 1)"
                >
                  {{ navPage.current }}
                </button>
              </li>
              <li class="page-item">
                <button
                  type="button"
                  class="page-link"
                  :disabled="navPage.current == navPage.current"
                  @click="getData(navPage.current)"
                >
                  {{ navPage.current + 1 }}
                </button>
              </li>
              <li class="page-item">
                <button
                  type="button"
                  class="page-link"
                  :disabled="navPage.current + 1 == navPage.current"
                  @click="getData(navPage.current + 1)"
                >
                  {{ navPage.current + 2 }}
                </button>
              </li>
              <span class="nav-space-contain">...</span>
            </span>
            <span
              class="pagination"
              v-if="navPage.current == navPage.pages - 3"
            >
              <li class="page-item">
                <button
                  type="button"
                  class="page-link"
                  :disabled="navPage.current == navPage.pages - 4"
                  @click="getData(navPage.pages - 4)"
                >
                  {{ navPage.pages - 3 }}
                </button>
              </li>
              <li class="page-item">
                <button
                  type="button"
                  class="page-link"
                  :disabled="nav.current == nav.pages - 3"
                  @click="getData(nav.pages - 3)"
                >
                  {{ nav.pages - 2 }}
                </button>
              </li>
            </span>
            <span v-if="navPage.current == navPage.pages - 2">
              <li class="page-item">
                <button
                  type="button"
                  class="page-link"
                  :disabled="navPage.current == navPage.pages - 3"
                  @click="getData(navPage.pages - 3)"
                >
                  {{ navPage.pages - 2 }}
                </button>
              </li>
            </span>

            <li class="page-item">
              <button
                type="button"
                class="page-link"
                :disabled="navPage.current == navPage.pages - 2"
                @click="getData(navPage.pages - 2)"
              >
                {{ navPage.pages - 1 }}
              </button>
            </li>
            <li class="page-item">
              <button
                type="button"
                class="page-link"
                :disabled="navPage.current + 1 == navPage.pages"
                @click="getData(navPage.pages - 1)"
              >
                {{ navPage.pages }}
              </button>
            </li>

            <li class="page-item">
              <button
                type="button"
                class="page-link pagination-text"
                :disabled="navPage.current + 1 == navPage.pages"
                @click="getData(navPage.current + 1)"
              >
                Suivant
              </button>
            </li>
            <li class="page-item">
              <button
                type="button"
                class="page-link pagination-text"
                :disabled="navPage.current + 1 == navPage.pages"
                @click="getData(navPage.pages - 1)"
              >
                Dernier
              </button>
            </li>
          </ul>
        </div>
        <div class="col-1 col-md-1 col-sm-1 col-xxl-2 col-xs-2">
          <div class="number-page-container">
            <p v-if="!nav.current">Page : 1</p>
            <p v-else>Page : {{ nav.current + 1 }}</p>
          </div>
        </div>
        <div class="col-2 col-md-2 col-sm-2 col-xxl-2 col-xs-2"></div>
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
      middle: null,
    };
  },
  created() {
    // console.log(this.navPage)
  },
  methods: {
    getMiddle() {
      const Num = this.navPage.pages;
      const page = parseInt(Num, 10);
      return Math.ceil(page / 2);
    },
    getData(e) {
      const page = parseInt(e);
      this.$emit(this.getDatas, page);
    },
  },
};
</script>