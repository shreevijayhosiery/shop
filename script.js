document.getElementById('form').addEventListener('submit', myFunction);

async function myFunction(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobilenumber = document.getElementById('mobilenumber').value;
    const message = document.getElementById('message').value;
    const address = document.getElementById('address').value;

    const formData = {
        name,
        mobilenumber,
        email,
        address,
        message
    };

    try {
        const response = await fetch('https://email-api-bice.vercel.app/sendemail', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        console.log(response)

        if (response.status == 201) {
            document.getElementById('exampleModalLabel').innerText = `Hey, ${name}!`;
            document.getElementById('display-text').innerText = `I have received your mail and will respond to you shortly at ${email}.`
            let modal = document.getElementById('exampleModal');
            let myModal = new bootstrap.Modal(modal, {});
            myModal.show();
        }

    } catch (error) {
        console.error('Error sending form data:', error);
    }
    this.reset();
}


document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function (navLink) {
        navLink.addEventListener('click', function () {
            var bsCollapse = new bootstrap.Collapse(document.getElementById('navbarSupportedContent'), {
                toggle: false
            });
            bsCollapse.hide();
        });
    });
});
