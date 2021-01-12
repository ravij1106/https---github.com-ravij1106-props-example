<template>
  <li>
    <h2>{{ name }} {{ isFavourite ? '(Favourite)' : ''}}</h2>
    <button @click="toggleFavourite">Toggle Favourite</button>
    &nbsp;&nbsp;
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  // props: [
  //   'name',
  //   'phoneNumber',
  //   'emailAddress',
  //   'isFavourite'
  // ],
  props : {
    id : {
      type : String,
      required : true
    },
    name : {
      type : String,
      required : true,
    },
    phoneNumber : {
      type : String,
      required : true
    },
    emailAddress : {
      type : String,
      required : true
    },
    isFavourite : {
      type : Boolean,
      required : false,
      default : false,
      // validator : function(value){
      //   return value === '1' || value === '0';
      // }
    },
  },
  emits : {
    'toggle-favourite' : function(id){
      if(id){
        console.log("id is available");
        return true;
      }
      else{
        console.warn("id is missing");
        return false;
      }
    }
  },
  data() {
    return {
      detailsAreVisible: false
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavourite(){
      //this.friendIsFavourite = !this.friendIsFavourite;
      this.$emit('toggle-favourite', this.id);
    }
  }
};
</script>