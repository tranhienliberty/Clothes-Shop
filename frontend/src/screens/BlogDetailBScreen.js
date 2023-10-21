import React from 'react'
import Header from "../components/Header";

function BlogDetailBScreen() {
  return (
    <div>
    <Header></Header>
      <div class="main-blog">
        <div class="container-blog">
            <h1>Look of the Week: Katie Holmes's Y2K ensemble goes viral for all the wrong reasons</h1>
            <ul class="author-blog">
                <li>by John</li>
                <li>Updated 16th December 2022</li>
                <li>5 min read</li>
                <li>Influencer Marketing</li>
            </ul>
            <hr class="line-blog" />
            <p class="blog-paragraph">When it comes to fashion, visuals are key. It’s no wonder, then, that many lovers
                of style turn to Instagram and fashion blogs to get their fill of all things fashion. </p>
            <p class="blog-paragraph">Walk into any Urban Outfitters, Zara or adjacent store today and you'll be greeted by rows of cargo or "parachute" trousers á la Ciara circa 2006. Scroll through Pinterest, Instagram or TikTok and you'll see Gen Z favorites like Dua Lipa, Olivia Rodrigo and influencer Matilda Djerf flaunting flamboyant sequin butterfly tops like they've only just waved goodbye to 1999. But at the iHeartRadio Jingle Bell red carpet in New York last Sunday, when Katie Holmes stepped out in true Y2K style in a royal blue Tove mini dress styled over raw-hemmed jeans and black New Balance trainers, her look went viral for all the wrong reasons.</p>
            <p class="blog-paragraph">
                The rise of fashionable Instagram influencers and stylists paved the way for the bloggers on our list to
                have a significant presence online. Many of these bloggers started out on social media, and their keen
                eye for style did not go unnoticed by their followers. While they have their own website, most of them
                continue to be active on Instagram and YouTube.
            </p>
            <hr class="line-blog" />
            <h2>1. Atlantic-Pacific</h2>
            <img src={require("../assets/img/blog/blog-4.jpg")} class="img-blog" />
            <p class="blog-paragraph">Atlantic-Pacific creator Blair Eadie has been in the fashion industry for several
                years now. Having worked for companies such as Tory Burch and Gap, she has the insider’s experience in
                how the industry has evolved over the years. She started Atlantic-Pacific in 2010 to showcase her own
                fashion aesthetic, which she describes as “east-coast-meets-west-coast.” She has built up a significant
                social media following, including over 1.9 million Instagram followers.. </p>
            <p class="blog-paragraph">She has worked as an influencer with many brands, including Nordstrom, Amazon,
                Sephora, CoverGirl, Gucci and many more. She has also collaborated on global campaigns with luxury
                brands such as Vogue, Elle, and Harper’s Bazaar, among others.</p>
            <p class="blog-paragraph">
                A quick perusal of her website shows eye-catching images of the latest trends that she loves and her
                tips on what to wear and where to get them. What’s also great about Atlantic-Pacific is the regular
                updates of FAQs that Eadie posts, where she responds to questions she receives from fans and followers.
            </p>
            <h2>2. Egg Canvas</h2>
            <img src={require("../assets/img/blog/blog-5.jpg")} class="img-blog" />
            <p class="blog-paragraph">The whimsically named Egg Canvas is the brainchild of Erica Choi, a design
                director and photographer based in New York. </p>
            <p class="blog-paragraph">Why the name “Egg Canvas”? Erica was inspired by her Korean childhood nickname,
                which means egg, while “canvas” is the medium with which art is created. “Egg Canvas,” therefore, is her
                life—creating beautiful things each day on a blank canvas..</p>
            <p class="blog-paragraph">
                A licensed esthetician and graphic design graduate, Erica has a discerning eye for visuals. The posts on
                Egg Canvas have beautiful photos that are accompanied by short texts.
            </p>
            <h2>3. The Daileigh</h2>
            <img src={require("../assets/img/blog/blog-6.jpg")} class="img-blog" />
            <p class="blog-paragraph">The Daileigh’s Ashleigh Hutchinson wants her readers to build their perfect
                closet. She aims to help women of all ages find or create a style they love. In particular, Ashleigh
                wants older women to feel confident in their own style. She wants to break the assumption that some
                trends are suited only to a particular age group. Ashleigh’s philosophy centers around the notion that
                “age is only a number.”</p>
            <p class="blog-paragraph">Ashleigh’s blog is full of advice for the regular woman to make better fashion
                choices, whether it’s “Dressing Better With the Clothes You Have” or starting a capsule wardrobe. Along
                with her blog posts, she has also published e-books and has even held online webinars to help people
                improve their fashion sense.</p>
            <p class="blog-paragraph">
                Ashleigh frequently posts “How To” articles, often adapted to target a particular segment of her
                audience. She has written posts that are aimed at women of varying ages:
            </p>
        </div>
        <div class="banner-blog"><img
                src="https://influencermarketinghub.com/wp-content/uploads/2022/08/banner_11_1660296018.webp" /></div>
       </div>
    </div>
  )
}

export default BlogDetailBScreen
