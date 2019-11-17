---
path: '/projects/modernfamily'
date: 2015-10-01
title: 'Modern Family Fansite'
featuredImage: '../../images/projects/modernfamily.png'
tags: ['HTML', 'CSS']
excerpt: 'One of the first projects in year one that got me excited about
  webdevelopment. This project is just purely HTML5 + CSS3. Nothing too
  fancy, just the base necessities. The only thing that doesn''t "work" is
  the actor pages. They don''t exist due to deadlines at that time. Also,
  there are no links to the show''s social pages. It was just a prototype
  to show off HTML & CSS.'
---

We had some other requirements, like "show a different image on every page", "include a page with reviews" and "have a page with awards the show / movie has won". Super fancy, I know. Eventually, this project was just about copy / pasting most of the markup and even adding some hardcoded classes for 'active' menu items. I'm mostly satisfied with how clean the result ended up feeling. Some things I did to make the layout work, I probably wouldn't ever do again. Like positioning the sidebar in the following way:

```css
.someClassName {
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
}

.someOtherClassName {
  margin-right: 300px;
}
```

Now, I'd instantly go to for at least the simplest implementation of a CSS Grid.

```css
.someEncapsulatingClass {
  display: grid;
  grid-template-areas:
    'header header header'
    'main main sidebar'
    'footer footer footer';
}
```

This project can also be found [online](http://modernfamily.csmr.nl).
