# Keepr
*GA WDI Capstone Project*

![GitHub Logo](/public/assets/imgs/keepr-placeholder.png)

A front-end web app built with Ember.js, Handlebars and Bootstrap/Sass.

[Visit the Site]( https://tuckyeah.github.io/keepr-ember) || [API Repo](https://github.com/tuckyeah/keepr-api) || [Screenshot of Keepr](/dev_docs/keepr-screenshot.png)

### Installation

1. ```git clone``` this repo
2. Run ```npm install``` and ```bower install```

#### The Development Process

<br>
[User Stories](user-stories.md) || [ERD](/public/assets/imgs/Keepr_-_Page_1.png) || [Wireframe (rough)](/public/assets/imgs/wireframe_rough.JPG)
<br>*better wireframes coming soon*


I approached the development of Keepr with a few goals in mind - I wanted to build an app that was simple, minimalist, and eminently useful, at least to me. I've played around with existing apps similar to 'Keepr,' but I haven't been particularly impressed with any of them - there are so many limitations on the kinds of categories you can have, or the 'theme' of the app itself (one app for books, one for movies, one for tv shows...) Why not put be able to keep track of all of them in one place?

As I began to write out user stories and play around with wireframes, it occurred to me that the database structure itself need not be highly complex in order to accomplish a wide range of functionality. I built out the API using Rails first in a few hours, and after testing the basic functionality with curl requests, I found I didn't need to do much more tinkering with it - Ember was able to do a lot of the heavy lifting for me!

#### What I Learned Along The Way

This was my first foray into working seriously with a front-end framework (though I have had experience with front-end development and MVCs before), and while the learning curve was somewhat steep, I was soon able to understand the sheer amount of functionality Ember was capable of, and, perhaps more importantly, what I could do with it.

Keepr is a work in progress, thought it is roughly 70-80% complete at present. Now that I have a better grasp on Ember components, there is much refactoring I want to do there to make my code more DRY and efficient. I'm also planning on adding some critical features like the ability to edit list items and their notes, as well as improve the overall UI/UX.

#### Next Steps

After those first key features are accomplished, my future plans for Ember include a lot more sharing and integration.

Some of my future feature goals include:
  - adding an auto-complete feature to the list and item creation fields, so a user can see suggestions from the database

  - the ability to share a list with a friend

  - Integration with 3rd party APIs like Rotten Tomatoes, IGN, Amazon, etc so you can retrieve more information about items added to lists

  - Improved notes, with more details about the date an item has been added / updated

  - The inclusion of a 'must try' feature, so a user can flag things they want to try right away
