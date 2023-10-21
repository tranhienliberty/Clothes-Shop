import React from 'react'
import Header from "../components/Header";

function BlogDetailScreen() {
  return (
    <div>
    <Header></Header>
      <div class="main-blog">
        <div class="container-blog">
            <h1>Makeup Artists Love to Use These Inexpensive Foundations on Mature Skin</h1>
            <ul class="author-blog">
                <li>by Werner Geyser</li>
                <li>Last Updated: November 25th, 2022</li>
                <li>17 min read</li>
                <li>Influencer Marketing</li>
            </ul>
            <hr class="line-blog" />
            <p class="blog-paragraph">When it comes to fashion, visuals are key. It’s no wonder, then, that many lovers
                of style turn to Instagram and fashion blogs to get their fill of all things fashion. </p>
            <p class="blog-paragraph">Instagram is great when it comes to OOTDs—outfit of the day—and quick style
                inspirations, but blogs are where the serious fashionistas go to write about trends, advice, and the
                latest fashion innovations. Not feeling particularly stylish today? Fashion blogs can give you
                inspiration for dressing well even on those lazy mornings. Got your eye on this season’s hottest trends?
                These blogs are great for helping you figure out which clothing pieces and colors suit your frame. They
                can also provide you with ideas about mixing and matching pieces to create a dozen perfect looks without
                breaking the bank.</p>
            <p class="blog-paragraph">
                The rise of fashionable Instagram influencers and stylists paved the way for the bloggers on our list to
                have a significant presence online. Many of these bloggers started out on social media, and their keen
                eye for style did not go unnoticed by their followers. While they have their own website, most of them
                continue to be active on Instagram and YouTube.
            </p>
            <hr class="line-blog" />
            <h2>1. Atlantic-Pacific</h2>
            <img src={require("../assets/img/blog/blog-1.jpg")} class="img-blog" />
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
            <img src={require("../assets/img/blog/blog-2.jpg")} class="img-blog" />
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
            <img src={require("../assets/img/blog/blog-3.jpg")} class="img-blog" />
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

export default BlogDetailScreen
