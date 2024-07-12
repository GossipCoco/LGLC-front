<template>
  <div id="quest-by-id"
    class="col-xxl-12 col-xl-12 col-lg-312 col-md-12 col-sm-12 col-xs-12 card-global quest-container">
    <div class="card quest-by-id-card">
      <div class="card-header quest-container-header">
        <h2>{{ quest.Title }}</h2> <br>
        <h3>{{ quest.Description }}</h3>
      </div>
      <div class="card-body">
        <div class="parallax-container">
          <!-- <img src="/images/Characters/Characters-transparents/_d8d9ba8b-6c90-48b5-87ad-a93b6603714a.png" alt="Chat"
            class="chat-image"> -->
            <div v-for="(layer, index) in layers" :key="index"
            :style="{ backgroundImage: `url(${layer})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }"
            class="parallax-layer">            
          </div>
        </div>       
        <!-- <div class="interactive-elements">
          <div v-for="(element, index) in interactiveElements" :key="index"
            :style="{ top: element.top, left: element.left, backgroundSize: element.backgroundSize, backgroundRepeat: element.backgroundRepeat }"
            class="clickable" @click="handleClick(element)">
            {{ element.label }}
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import QuestService from '../../../services/QuestService'

export default {
  name: 'QuestById',
  data() {
    return {
      quest: {},
      url: null,
      layers: [
      '/images/parallax/warrior-img01-38.png',
        // '/images/parallax/fond--1.png',
        // '/images/parallax/warrior-img01_9_.png',
        // '/images/Characters/Characters-transparents/_d8d9ba8b-6c90-48b5-87ad-a93b6603714a.png'
      ],
      interactiveElements: [
        { top: '20%', left: '30%', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', label: 'Point 1', action: 'action1' },
        { top: '50%', left: '50%', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', label: 'Point 2', action: 'action2' },
        { top: '80%', left: '70%', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', label: 'Point 3', action: 'action3' },
      ]
    }
  },
  created() {
    this.url = this.$route.params.id;
    this.GetQuestById(this.$route.params.id)
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleClick(element) {
      console.log(`Action: ${element.action}`)
    },
    GetQuestById(id) {
      QuestService.GetQuestById(id)
        .then(response => {
          this.quest = response.data.ob
        })
        .catch(err => {
          console.log(err)
        })
    },
    handleScroll() {
      console.log("Scrolling...")  // Debugging line
      const layers = document.querySelectorAll('.parallax-layer');
      const scrollTop = window.scrollY;

      layers.forEach((layer, index) => {
        const speed = index * 10;
        const yPos = -(scrollTop * speed);
        layer.style.transform = `translate3d(0px, ${yPos}px, 0px)`;
      });
    }
  }
}
</script>