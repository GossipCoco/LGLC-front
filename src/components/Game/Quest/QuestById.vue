<template>
    <div id="quest-by-id"
         class="col-xxl-12 col-xl-12 col-lg-312 col-md-12 col-sm-12 col-xs-12 card-global quest-container">
      <div class="card quest-by-id-card">
        <div class="card-header avatar-container-header">
          <h2>{{ quest.Title }}</h2> : <h3>{{ quest.Description }}</h3>
        </div>
        <div class="card-body">
          <div class="parallax-container">
            <div v-for="(layer, index) in layers" :key="index"
                 :style="{ backgroundImage: `url(${layer})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }"
                 class="parallax-layer"></div>
          </div>
          <img src="/images/Characters/Characters-transparents/_d8d9ba8b-6c90-48b5-87ad-a93b6603714a.png" 
                     alt="Chat" class="chat-image">
          <div class="interactive-elements">
            <div v-for="(element, index) in interactiveElements" :key="index"
                 :style="{ top: element.top, left: element.left, backgroundSize: element.backgroundSize, backgroundRepeat: element.backgroundRepeat }"
                 class="clickable" @click="handleClick(element)">
              {{ element.label }}
            </div>
          </div>
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
        '/images/paysage/03-layer-payasagev3.png',
          '/images/paysage/01-layer-payasage.png',
          '/images/paysage/02-layer-payasage.png',

          
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
          const speed = index * 0.5;
          const yPos = -(scrollTop * speed);
          layer.style.transform = `translate3d(0px, ${yPos}px, 0px)`;
        });
      }
    }
  }
  </script>
  <style>
#quest-by-id {
    width: 100%;
    height: 90vh;
  }
  
  #quest-by-id .quest-by-id-card {
    width: 100%;
  }
  
  #quest-by-id .parallax-container {
    position: relative;
    width: 100%;
    height: 80vh;
    overflow: scroll;
    perspective: 50px;
    transform-style: preserve-3d;
  }
  
  #quest-by-id .parallax-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    transform: translate3d(0, 0, 0);
    transition: transform 0.1s linear;
  }
  
  #quest-by-id .parallax-layer:nth-child(1) {
    z-index: 1;
    transform: translateZ(-2px) scale(3);
  }
  
  #quest-by-id .parallax-layer:nth-child(2) {
    z-index: 2;
    transform: translateZ(-1.5px) scale(2.5);
  }
  
  #quest-by-id .parallax-layer:nth-child(3) {
    z-index: 3;
    transform: translateZ(-1px) scale(2);
  }
  
  #quest-by-id .chat-image {
    position: absolute;
    z-index: 4;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    width: 800px; /* Adjust size as needed */
    height: auto;
  }
  
  #quest-by-id .quest-details {
    position: relative;
    z-index: 5;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
  }
  
  #quest-by-id .interactive-elements .clickable {
    position: absolute;
    padding: 0.5rem 1rem;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  #quest-by-id .interactive-elements .clickable:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
</style>
  