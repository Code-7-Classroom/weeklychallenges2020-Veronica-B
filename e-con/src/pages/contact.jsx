import React from 'react';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer';

class ContactPage extends React.Component {
    render() {
        return (
            <body class="background_color">

                <Navbar />

                <div class="container">
                    <h1 class="title">Contact us!</h1>

                    <h2 class="message"> Have a question, or want to send a message? Write to your heart's content!</h2>
                    <form class="flexbox" method="POST">

                        <label class="label " for="name">Full Name</label>
                        <input class="input-text" type="text" id="name" />

                        <label class="label " for="email">Email Address</label>
                        <input class="input-text" type="email" id="email" />

                        <label class="label " for="message">Message</label>
                        <textarea class="textarea" id="message" />

                        <button class="button">Submit</button>
                    </form>
                </div>
                <Footer />
</body >
)
}}

export default ContactPage;


