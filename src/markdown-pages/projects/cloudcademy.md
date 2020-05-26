---
path: '/projects/cloudcademy'
category: 'Programming'
date: 2016-01-30
title: 'Cloudcademy'
featuredImage: '../../images/projects/cloudcademy_code.png'
tags: ['HTML', 'CSS', 'JavaScript']
excerpt: 'Cloudcademy was the big course assignment we were to work on to get
  a final grade. We were just told to make "a social media platform"
  for any subject we wanted. The subject itself didn''t matter, as the
  goal was to learn JavaScript. In this project I chose to focus on
  jQuery, as it enabled me to get going faster.'
---

The registration system included a super fancy validation function. All `registerCheck` functions return a string literal of either `"error"` or `""`, so concatenating them would mean that any string with a length greater than 0 would result in the registration button becoming disabled. This felt smart at the time.

```javascript
function check_registration() {
  var registerCheck = check_username()
  registerCheck += check_password()
  registerCheck += check_ID()

  if (registerCheck == '') {
    $('input#submit').prop({ disabled: false })
  } else {
    $('input#submit').prop({ disabled: true })
  }
}
```

I made a login system (requirement), a post submission form with a dynamic display of images & videos and stored everything temporarily using the LocalStorage API to allow users to refresh a page and still preserve all the posts that had already been added. This was mainly done by concatenating strings of HTML, as shown in the image. Here is what the entire function looks like:

```javascript
function create_post(title, image, video, text, likes, name, avatar) {
  var fTitle = title,
    fImage = image,
    fVideo = video.replace('watch?v=', 'embed/'),
    fText = text,
    fAvatar = "<img src='" + avatar + "'>",
    fName = '<h3>' + name + '</h3>',
    postHead =
      "<div class='p'><div class='block post flex'><div class='post-img'>" +
      "<div class='image'>" +
      fAvatar +
      fName +
      "</div></div><div class='post-text'>",
    postComment =
      '</div></div><div class="post-io"><span data-type="1">Remove</span>' +
      '<span class=\'like-count\' data-type="3">' +
      (0 + likes) +
      '</span><span class=\'like\' data-type="2">Save</span></div>' +
      "<div class='comment'>" +
      "<div class='commentform flex'>" +
      "<input class='commenttext' placeholder='Reply to this!..'></input>" +
      "<button class='subcomment'>Reply</button></div></div>",
    postRequires = postTitle !== '' && postText !== '',
    postTitle = '<h2>' + fTitle + '</h2>',
    postImage = '<img src="' + fImage + '"/>',
    postText = '<p>' + fText + '</p>',
    postVideo =
      '<object width="800px" height="450px" data="' + fVideo + ' "> </object>'

  // If post has both image and video
  if (postRequires && fImage !== '' && fVideo !== '') {
    $('#postlist').prepend(
      postHead + postImage + postTitle + postVideo + postText + postComment
    )

    // If post only has video
  } else if (postRequires && fVideo !== '') {
    $('#postlist').prepend(
      postHead + postTitle + postVideo + postText + postComment
    )

    // If post only has image
  } else if (postRequires && fImage !== '') {
    $('#postlist').prepend(
      postHead + postImage + postTitle + postText + postComment
    )

    // If post only contains text
  } else if (postRequires) {
    $('#postlist').prepend(postHead + postTitle + postText + postComment)
  }

  // Reset colors to fix post heading and spans
  reset_colors()
  reset_images()

  // Clear post area input fields
  $('#newposttitle, #newposttext, #image-embed, #video-embed').val('')
  $('#preview').html('')

  // Update localStorage with every new post
  localStorage.setItem('itemPostList', $('#postlist').html())
}
```

It was an absolute pain making changes, but so much fun at the same time. I had no way of validating the structure other than just running the page in the browser. No ability to have an editor spot errors. I also had to make sure to append the right classes to the right elements, to make sure features like "liking" worked (as they relied on finding a specific class in the DOM tree with jQuery: `$(body).on('click', '.someClassName', callback)`). All in a single `scripts.js` file. The full source code is still available on [this GitHub repo](https://github.com/CSMR-DB/Cloudcademy).
