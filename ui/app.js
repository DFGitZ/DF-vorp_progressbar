const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "",
      visible: false,
      theme: null,
      time: 0,
      currenttime: 0,
      interval: null,
      timeout: null,
      running: false,
      maincolor: null,
      width: '20vw'
    };
  },
  mounted() {
    window.addEventListener("message", this.onMessage);
  },
  destroyed() {
    window.removeEventListener("message");
    if (this.interval) clearInterval(this.interval);
    if (this.timeout) clearTimeout(this.timeout);
  },
  computed: {
    counter() {
      return Math.trunc((this.time - this.currenttime) / 1000);
    }
  },
  methods: {
    onMessage(event) {
      if (event.data.type === "vp-open") {
        this.visible = true;
        this.message = event.data.message;
        this.theme = event.data.theme;
        this.time = event.data.mili;
        this.maincolor = event.data.color;
        this.width = event.data.width;
        this.currenttime = 0; 
        let that = this;
        this.running = true;

        this.interval = setInterval(() => {
          that.currenttime += 100; 
        }, 100);

        this.timeout = setTimeout(() => {
          that.running = false;
          that.visible = false;
          clearInterval(that.interval);
          that.currenttime = 0;
          that.interval = null;
          that.timeout = null;
          fetch(`https://${GetParentResourceName()}/ProgressFinished`, {
            method: "POST"
          });
        }, event.data.mili);
      }
    },
  },
}).mount("#app");