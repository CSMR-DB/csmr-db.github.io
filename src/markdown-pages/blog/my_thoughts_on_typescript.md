---
path: /blog/my-thoughts-on-typescript
publishedOn: 2020-xx-xx
title: TypeScript
excerpt: The discussion on the value of TypeScript as opposed to JavaScript with decent type inference in editors is one discussion that's been going on forever. I would just like to weigh in with an analogy.
---

#What is TypeScript?
If you are reading this post, I assume you already know what TypeScript is, why it was created and what problems it aims to solve. If you don't, there are various resources and developers that are much more capable at explaining it than I would.

##What is this discussion?
Basically, a part of the JavaScript developer community arguing that TypeScript, more often than not, gets in the way of being as productive as possible when writing code. I agree with this statement, albeit partially. I have found myself running into issues with packages. [...]

Also, that same group would typically argue that TypeScript has no point, since "types don't exist at runtime". True, but this should only ever be an issue when dealing with user input. When you're working with modules interacting with other modules you have this "contract".

###Analogy time
I thought of this analogy around the time the Covid-19 pandemic happened to be at it's peak. People are using the extra time they saved by working from home instead of having to travel to the office to clean their homes and possibly even doing some construction work.

Say you are, hypothetically, having an issue with the windows (and / or the window frame) of your house and you have to either get them fixed, or replaced.

Would you have some contractors make a proposal for any specific design, frame material (`enum`), glass thickness (`number | string`), isolation quality (`enum`), frame color (`string`), inclusion & position of an opening window (`{ openableWindow: boolean, positions: Position[] }`) and / or the inclusion & position of some air vents (`{ airVents: number, positions: Position[] }`)?

######OR

Would you just call a contractor, say "I need a new window" (perhaps only providing necessary dimensions) and just wait and see what they bring over to install?

This is what TypeScript is for me. Type safety, between modules. The second you have to deal with user input, make sure you have a system in place to do runtime type-checking. For the front-end: proper `<input>` types can help and wíll make for better UX (especially on smartphones), but provide no safety for function calls made directly from the console.
