# simple-gamepad-api
The [Gamepad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API) is a pretty cool addition to the modern web browser but it can be a bit painful to work with. So...

## Mission Statement

I'd like to be able to plug in a random controller and get a reasonably consistent button experience out of the box or be as few steps as possible away from getting such an experience. 

## Test Environment

I have a few controllers to play with (no pun intended) and I'll be using them as the initial basis for creating my solution:

1. 8bitdo SF30 PRO
... Apart from being a very nice looking controller with it's SFC / Euro SNES asthetic, this well built device can mimic native Windows, Switch, iOS and Android gamepad APIs. I'll be targeting the Windows xinout initially.
2. Playstation Classic Controller
... This also looks the business and is simpler than the SF30 but is let down by some odd button assignments and the fact that it presents the d-pad as an analog stick despite clearly being digital-only.
3. Xbox One Wired Controller (PowerA)
... A decent clone, this also presents as an xinput device. similar to the SF30 but obviously with different button labels.

If you have one of these (or even something else) open up the test page and see :

[Open test page](http://htmlpreview.github.io/?https://github.com/eoghanc/weekend.js/blob/master/simple-gamepad-api/test.html)