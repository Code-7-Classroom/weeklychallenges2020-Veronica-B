import React from 'react';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer';

class IndexPage extends React.Component{
    render(){
        return(
<body class="background_color">

<Navbar />
  
    <div class="slideshow">
        <button class="arrow" Id="left-arrow">&lt;</button>
        <img id="img" class="image" src="../images/img1.jpg" alt="people learning"/>
        <button class="arrow" Id="right-arrow">&gt;</button>
        <div class="bottom_slideshow">
            <div id="dot1" class="dots"></div>
            <div id="dot2" class="dots"></div>
            <div id="dot3" class="dots"></div>
        </div>
    </div>
    <h2 class="title">Best Sellers</h2>

    <div class="grid">
        <section class="products">
            <img class="products__images"
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1532714506l/40961427._SX318_.jpg"
                alt="1984 book, which has a blue eye wide open. "/>
            <h2 class="products__title">1984 by George Orwell</h2>
            <p class="products__paragraph">1984 is a dystopian novella by George Orwell published in 1949, which follows
                the life of Winston Smith, a low ranking member of 'the Party', who is frustrated by the omnipresent
                eyes of the party, and its ominous ruler Big Brother. 'Big Brother' controls every aspect of people's
                lives.
                <span class="products__paragraph__price">$7.50</span>
            </p>
            <button class="products__button--mobile">Add to Cart</button>

        </section>
        <section class="products">
            <img class="products__images"
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553383690l/2657.jpg"
                alt="To Kill a Mocking Bird book, with an minminalist desgin, there is a tree with a red background. "/>
            <h2 class="products__title">To Kill a Mocking Bird by Harper Lee</h2>
            <p class="products__paragraph">Set in a small town in the South, during the Depression, follows the life of
                8-year-old Scout Finch, her brother, Jem, and their father, who is lawyer, and the trial of a young
                black man accused of a crime.
                <span class="products__paragraph__price"> $6.99</span>
            </p>
            <button class="products__button--mobile">Add to Cart</button>

        </section>

        <section class="products">
            <img class="products__images"
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1562424806l/45035018._SY475_.jpg"
                alt="Frankenstein book, with an creepy drawing of a man. "/>
            <h2 class="products__title">Frankenstein by Mary Shelley</h2>
            <p class="products__paragraph">The line between humanity and monster is blurred in this 1918 horror novel,
                where Victor Frankestein, a young scientist, creates new life however he revokes his creation for being
                an abomination.
                <span class="products__paragraph__price"> $6.99 </span>
            </p>
            <button class="products__button--mobile">Add to Cart</button>

        </section>
    </div>

    <Footer />

</body>
        )}
}

export default IndexPage;