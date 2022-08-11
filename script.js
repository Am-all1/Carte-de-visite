const RootComponent = {
  data() {
    return {
      infos: {
        firstName: "<Prénom>",
        lastName: "<Nom>",
        phone: "<Téléphone>",
        email: "<Email>",
        job: "<Profession>",
        organization: "<Organisation>",
      },
      theme: {
        background: 'bg-red',
        color: 'black',
        size: 'big'
      },
    };
  },
  methods: {
    changeBackground: function (color) {
      this.theme.background = `bg-${color}`;
    },
    changeInfos: function (event, field) {
      this.infos[field] = event.target.value;
    },
    resetFields: function () {
      this.infos = {
        firstName: "<Prénom>",
        lastName: "<Nom>",
        phone: "<Téléphone>",
        email: "<Email>",
        job: "<Profession>",
        organization: "<Organisation>",
      };
    },
    changeColor: function (color) {
      this.theme.color = color;
    },
  }
};

Vue.createApp(RootComponent).mount("#root");