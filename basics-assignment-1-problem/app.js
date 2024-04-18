const app = Vue.createApp({
  data() {
    return {
      myName: "Jéssica",
      myAge: 27,
      imgCat:
        "https://th-thumbnailer.cdn-si-edu.com/6ZmsnMxsZCMGJWn_0GDDjGsCG6g=/1000x750/filters:no_upscale():focal(400x267:401x268)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/b0/94/b094a830-dd4e-4aca-8884-5ab2b8a3625b/gettyimages-152621111_resize.jpg",
    };
  },
  methods: {
    agePlus() {
      return this.myAge + 5;
    },
    randomNumber() {
      return Math.random();
    },
  }
});

app.mount("#assignment");
 