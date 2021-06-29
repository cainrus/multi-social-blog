<template>
  <a class="twitter-timeline"
     href="https://twitter.com/cp2x77"
     data-tweet-limit="3"
     data-chrome="nofooter noborders">
    Tweets by @TwitterDev
  </a>
</template>
<script>
  import loadTwttr from './loadTwttr';

  export default {
    name: 'TwitterTimeline',
    mounted() {
      loadTwttr()
    }
  }
</script>