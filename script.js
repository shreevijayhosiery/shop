document.getElementById('whatsapp-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Replace with your business phone number (include country code, no symbols)
    const phoneNumber = "919441786401"; 
    
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobilenumber').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const message = document.getElementById('message').value;

    const text = `*New Inquiry*%0A` +
                 `*Name:* ${name}%0A` +
                 `*Mobile:* ${mobile}%0A` +
                 `*Email:* ${email}%0A` +
                 `*Address:* ${address}%0A` +
                 `*Message:* ${message}`;

    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
});
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
