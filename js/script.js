const {createApp}= vue;
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
            .then((response) =>{
                console.log(response.data.response);
                this.emailList.push(response.data.response);
            });
        },
        // ripete la funzione pushRandomEmail per 10 volte
        pushTenRandomEmails: function() {
            for (let i = 0; i < 10; i++) {
                this.pushRandomEmail();
            }
        },
    created() {
        this.pushTenRandomEmails();
        },
    }
}).mount("#app")
