<template>
  <div class="row pagination-zone-container width-180-vh display-flex align-items-content-justify-content vertical-align-middle">
    <div class="pagination-container-row margin-0-rem align-items-content-justify-content col-lg-12 col-md-12 col-sm-12 col-xxl-12 col-xs-12">
      <div class="row pagination-container width-180-vh align-items-content-justify-content">        
        <div class="col-md-6 col-sm-6 col-xl-6 col-xxl-6 col-xs-6 col-lg-6 col-pagination-container align-items-content-justify-content">
          <ul class="pagination" v-if="navPage.pages < 6">
            <li class="nav-btn-contain display-flex-row  flex-one">
              <button
                v-for="p in navPage.pages"
                :key="p"
                :disabled="navPage.current == p - 1"
                type="button"
                class="page-link background-color-dark-green-01 white-text roboto"
                @click="getData(p - 1)"
              >
                {{ p }}
              </button>
            </li>
          </ul>
          <ul class="pagination" v-if="navPage.pages >= 6">
            <li class="page-item display-flex-row  flex-one">
              <button
                type="button"
                class="page-link background-color-dark-green-01 white-text pagination-text roboto"
                :disabled="navPage.current == 0"
                @click="getData(0)"
              >
                Premier
              </button>
            </li>
            <li class="page-item display-flex-row  flex-one">
              <button
                type="button"
                class="page-link background-color-dark-green-01 white-text pagination-text roboto"
                :disabled="navPage.current <= 0"
                @click="getData(navPage.current - 1)"
              >
                Précédent
              </button>
            </li>
            <li class="page-item display-flex-row  flex-one">
              <button
                type="button"
                class="page-link background-color-dark-green-01 white-text roboto"
                :disabled="navPage.current == 0"
                @click="getData(0)"
              >
                1
              </button>
            </li>
            <li class="page-item display-flex-row  flex-one">
              <button
                type="button"
                class="page-link background-color-dark-green-01 white-text roboto"
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
                  class="page-link background-color-dark-green-01 white-text roboto"
                  :disabled="navPage.current == 2"
                  @click="getData(2)"
                >
                  3
                </button>
              </span>
            </li>
            <li class="pagination pagination-div-container-center" v-else-if="navPage.current == 2">
              <span class="page-item">
                <button
                  type="button"
                  class="page-link background-color-dark-green-01 white-text roboto"
                  :disabled="navPage.current == 2"
                  @click="getData(2)"
                >
                  3
                </button>
              </span>
              <span class="page-item">
                <button
                  type="button"
                  class="page-link background-color-dark-green-01 white-text roboto"
                  :disabled="navPage.current == 3"
                  @click="getData(3)"
                >
                  4
                </button>
              </span>
            </li>
            <div
              class="pagination pagination-div-container-center"
              v-if="navPage.current < 3 || navPage.current > navPage.pages - 4"
            >
              <span class="nav-space-contain white-text">...</span>
              <li class="page-item display-flex-row  flex-one">
                <button
                  type="button"
                  class="page-link background-color-dark-green-01 white-text roboto"
                  :disabled="navPage.current == getMiddle(navPage) - 2"
                  @click="getData(getMiddle(navPage) - 2)"
                >
                  {{ getMiddle(navPage) - 1 }}
                </button>
              </li>
              <li class="page-item display-flex-row  flex-one">
                <button
                  type="button"
                  class="page-link background-color-dark-green-01 white-text roboto"
                  :disabled="navPage.current == getMiddle(navPage) - 1"
                  @click="getData(getMiddle(navPage) - 1)"
                >
                  {{ getMiddle(navPage) }}
                </button>
              </li>
              <li class="page-item display-flex-row  flex-one">
                <button
                  type="button"
                  class="page-link background-color-dark-green-01 white-text roboto"
                  :disabled="navPage.current == navPage.middle"
                  @click="getData(getMiddle(navPage))"
                >
                  {{ getMiddle(navPage) + 1 }}
                </button>
              </li>
              <span class="nav-space-contain white-text roboto">...</span>
            </div>
            <span class="pagination " v-else>
              <span class="nav-space-contain white-text roboto">...</span>
              <li class="page-item display-flex-row  flex-one">
                <button
                  type="button"
                  class="page-link background-color-dark-green-01 white-text roboto"
                  :disabled="navPage.current - 1 == navPage.current"
                  @click="getData(navPage.current - 1)"
                >
                  {{ navPage.current }}
                </button>
              </li>
              <li class="page-item display-flex-row  flex-one">
                <button
                  type="button"
                  class="page-link background-color-dark-green-01 white-text roboto"
                  :disabled="navPage.current == navPage.current"
                  @click="getData(navPage.current)"
                >
                  {{ navPage.current + 1 }}
                </button>
              </li>
              <li class="page-item display-flex-row  flex-one">
                <button
                  type="button"
                  class="page-link background-color-dark-green-01 white-text roboto"
                  :disabled="navPage.current + 1 == navPage.current"
                  @click="getData(navPage.current + 1)"
                >
                  {{ navPage.current + 2 }}
                </button>
              </li>
              <span class="nav-space-contain white-text roboto">...</span>
            </span>
            <span
              class="pagination pagination-div-container-center"
              v-if="navPage.current == navPage.pages - 3"
            >
              <li class="page-item display-flex-row  flex-one">
                <button
                  type="button"
                  class="page-link background-color-dark-green-01 white-text roboto"
                  :disabled="navPage.current == navPage.pages - 4"
                  @click="getData(navPage.pages - 4)"
                >
                  {{ navPage.pages - 3 }}
                </button>
              </li>
              <li class="page-item display-flex-row  flex-one">
                <button
                  type="button"
                  class="page-link background-color-dark-green-01 white-text roboto"
                  :disabled="nav.current == nav.pages - 3"
                  @click="getData(nav.pages - 3)"
                >
                  {{ nav.pages - 2 }}
                </button>
              </li>
            </span>
            <span v-if="navPage.current == navPage.pages - 2">
              <li class="page-item display-flex-row flex-one">
                <button
                  type="button"
                  class="page-link background-color-dark-green-01 white-text roboto"
                  :disabled="navPage.current == navPage.pages - 3"
                  @click="getData(navPage.pages - 3)"
                >
                  {{ navPage.pages - 2 }}
                </button>
              </li>
            </span>

            <li class="page-item display-flex-row  flex-one">
              <button
                type="button"
                class="page-link background-color-dark-green-01 white-text roboto"
                :disabled="navPage.current == navPage.pages - 2"
                @click="getData(navPage.pages - 2)"
              >
                {{ navPage.pages - 1 }}
              </button>
            </li>
            <li class="page-item display-flex-row  flex-one">
              <button
                type="button"
                class="page-link background-color-dark-green-01 white-text roboto"
                :disabled="navPage.current + 1 == navPage.pages"
                @click="getData(navPage.pages - 1)"
              >
                {{ navPage.pages }}
              </button>
            </li>

            <li class="page-item display-flex-row  flex-one">
              <button
                type="button"
                class="page-link background-color-dark-green-01 white-text pagination-text roboto"
                :disabled="navPage.current + 1 == navPage.pages"
                @click="getData(navPage.current + 1)"
              >
                Suivant
              </button>
            </li>
            <li class="page-item display-flex-row flex-one">
              <button
                type="button"
                class="page-link background-color-dark-green-01 white-text pagination-text roboto"
                :disabled="navPage.current + 1 == navPage.pages"
                @click="getData(navPage.pages - 1)"
              >
                Dernier
              </button>
            </li>
          </ul>
        </div>
        <div class="col-md-4 col-sm-4 col-xl-4 col-xxl-4 col-xs-4 col-lg-4">
          <div class="number-page-container height-5-vh roboto background-color-dark-green-01 align-items-content-justify-content display-flex-row">
            <p v-if="!nav.current" class="padding-2-vh-0 white-text">Page : 1</p>
            <p v-else class="padding-2-vh-0 white-text">Page : {{ nav.current + 1 }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Pagination",
  props: {
    nav: Object,
    filters: Array,
    getDatas: String 
  },
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