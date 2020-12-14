function formulario() {
    return {
            form:  {
                name: ''
            },

            user: null,

            submit(){
                fetch('https://reqres.in/api/users', {
                    method: 'POST',
                    headers: { 'Content-type': 'application/json'},
                    body: JSON.stringify(this.form)
                })
                .then(response => response.json())
                .then(user => this.user = user);
            }
    };
}