# simple-gamepad-api :video_game:
The [Gamepad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API) is a pretty cool addition to the modern web browser but it can be a bit painful to work with. So...

## Mission Statement

I'd like to be able to plug in a random controller and get a reasonably consistent button experience out of the box or be as few steps as possible away from getting such an experience. 

## Test Environment

I have a few controllers to play with (no pun intended) and I'll be using them as the initial basis for creating my solution:

1. 8bitdo SF30 PRO [[Homepage]](https://www.8bitdo.com/) [[$ Amazon UK $]](https://www.amazon.co.uk/gp/product/B07CQKTWD8/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=B07CQKTWD8&linkCode=as2&tag=eoghan-21&linkId=43b9eeaad14df14e99154465dfcb4192)
       Apart from being a very nice looking controller with it's SFC / Euro SNES asthetic, this well built device can mimic native Windows, Switch, iOS and Android controller interfaces. I'll be targeting the Windows xinput mode initially.
2. Playstation Classic Controller [[Homepage]](https://www.playstation.com/en-us/explore/playstation-classic/) [[$ Amazon UK $]](https://www.amazon.co.uk/gp/product/B071G84NHX/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=B071G84NHX&linkCode=as2&tag=eoghan-21&linkId=4419d38fc8532a1e676e8f6f1041b47a)
       This also looks the business and is simpler than the SF30 but is let down by some odd button assignments and the fact that it presents the d-pad as an analog stick despite clearly being digital-only.
3. PowerA Xbox One Wired Controller [[Homepage]](https://www.powera.com/enhanced-wired-controllers-xbox-one/) [[$ Amazon UK $]](https://www.amazon.co.uk/gp/product/B07GKC1W3Q/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=B07GKC1W3Q&linkCode=as2&tag=eoghan-21&linkId=c5ed3d3d5d814e9860ba0398ac54306e)
       A decent clone, this also presents as an xinput device. Similar button mapping to the SF30 but obviously with different button labels.

If you have one of these (or even something else) open up the [Test Page](http://htmlpreview.github.io/?https://github.com/eoghanc/weekend.js/blob/master/simple-gamepad-api/test.html) and see it in action.