class build {
    // build the sign in page
    signin() {        
        this.loading()
        document.title = 'NightDirve - Sign in'

        $(document.body).empty()

        // create login container
        $(document.body).append(jQuery('<div>', {
            id: 'login-container',
            class: 'centered container'
        }))
        $('#login-container').append(jQuery('<div>', {
            id: 'login-box',
            class: 'centered box border'
        }))
        $('#login-box').append(jQuery('<h2>', {
            text: 'Sign in',
            class: 'text header centered'
        })).append(jQuery('<input>', {
            id: 'inp-username',
            type: 'text',
            name: 'username',
            placeholder: 'username',
            class: 'input default text stacked'
        })).append(jQuery('<input>', {
            id: 'inp-password',
            type: 'password',
            name: 'password',
            placeholder: 'password',
            class: 'input default text stacked'
        })).append(jQuery('<input>', {
            id: 'inp-stay-signed-in',
            type: 'checkbox',
            calss: 'input default checkbox'
        })).append(jQuery('<label>', {
            for: 'inp-stay-signed-in',
            text: 'stay signed in',
        })).append(jQuery('<input>', {
            id: 'btn-signin',
            type: 'button',
            value: 'Sign in',
            class: 'input default big button stacked center'
        }))
    }

    profile() {

    }

    // show loading icon
    loading() {
        $(document.body).empty()

        $(document.body).append(jQuery('<div>', {
            id: 'loader-container'
        }))
        $('#loader-container').append(jQuery('<span>', {
            class: 'loader'
        }))
    }
}