const App = new Vue({
    el: '#app',
    data: {
        message:null,
        users : [],
        filtedUser:null,
        msgs:null,
        status:false,
        error:true
    },
    methods:{
        registerUser(e) {
            e.preventDefault()
            let registerForm = document.querySelector('.register')
            fetch('http://localhost/clement/exos/php/register.php', {
                method: 'POST',
                headers : new Headers(),
                body: new FormData(registerForm)
            }).then((res) => res.json())
                .then((data) => {
                    if (data.http === 200) {
                        this.msgs = data.msg
                        this.status = true
                        this.error = false
                    }
                    else{
                        this.msgs = data.msg
                        this.status = false
                        this.error = true
                    }
                })
        }
    },
    computed: {
        compiledMarkdown: function () {
            if(this.message !== null)
            return marked(this.message, { sanitize: true })
        },
        searchUsers(){
            if(this.filtedUser !== null){
                return this.users.filter(c => c.username.indexOf(this.filtedUser.trim()) > -1);
            }
            else{
                return this.users
            }
        }
    },
    mounted(){
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.users = response.data
            })
            .catch(function (error) {
                console.log(error);
            })
    }
})