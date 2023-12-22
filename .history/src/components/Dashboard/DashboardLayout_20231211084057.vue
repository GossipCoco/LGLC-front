<template>
  <div class="dashboard-layout-container">
    <div class="row">
      <div class="col-md-4">
        <div class="row">
          <div class="dashboard-mini-card-container">
            <div class="dashboard-max-card-container card">

            </div>
          </div>
        </div>
        
        <div class="row">          
          <div class="col-md-6">
            <div class="dashboard-mini-card-container">
              <div class="dashboard-mini-card-container card"></div>
            </div>
          </div>
          
        </div>        
        <div class="row">
          <div class="col-md-6">
            <div class="dashboard-medium-card-container">
              <div class="dashboard-medium-card-container card"></div>
            </div>
          </div>

        </div>
      </div>
      <div class="col-md-4">
        <div class="row">
          <div class="dashboard-mini-card-container">
            <div class="dashboard-mini-card-container card"></div>
          </div>
        </div>        
        <div class="row">          
          <div class="col-md-6">
            <div class="dashboard-mini-card-container">
              <div class="dashboard-mini-card-container card"></div>
            </div>
          </div>
          
        </div>        
        <div class="row">
          <div class="col-md-6">
            <div class="dashboard-medium-card-container">
              <div class="dashboard-medium-card-container card"></div>
            </div>
          </div>

        </div>
      </div>
      <div class="col-md-4">
        <div class="row">
          <div class="dashboard-max-card-container">
            <div class="dashboard-max-card-container card"></div>
          </div>
        </div>        
     </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DashboardLayout",
  data(){
    return{
      feeze: 'feeze',
      buzz: 'buzz',
      showResult: null,
      nb: null,
      newNb: null
    }
  },
  methods:{
    GetFeezeBuz(){

    }
  }
};
</script>