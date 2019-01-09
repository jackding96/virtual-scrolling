# virtual-scrolling

When trying to view extremely large datasets on browsers, traditional lists are unperformant, as each data point (even when "display:none"), exists as a DOM node. The more DOM nodes that exist on a browser, the more work the browser's rendering engine needs to do, which eventually leads to a sluggish user experience.

Pagination is a popular solution to this, but:
1. It doesn't feel as fluid and seamless as virtual scrolling (in my opinion) because it forcibly breaks up the data at arbitrary points.
2. Pagination doesn't work for datasets that scroll in more than 1 dimension (ie. a 7000 x 7000 matrix). 

This is an attempt at trying to implement virtual scrolling.