const {createApp}= Vue;
createApp({
    data(){
        return {
            emailList: [],
        }
    },
    methods: {
        // inserisce una email nell'array emailList
        pushRandomEmail: function() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((resp) => {
                console.log(resp.data.response);
                this.emailList.push(resp.data.response);
                console.log(resp)
            });
        },
        // ripete la funzione pushRandomEmail per 10 volte
        pushTenRandomEmails: function() {
            for (let i = 0; i < 10; i++) {
                this.pushRandomEmail();
            }
        },
    },
    created() {
        this.pushTenRandomEmails();
        },
  
}).mount("#app")
