# <a href="https://www.gnu.org/licenses/gpl-3.0.html">![License](https://www.gnu.org/graphics/gplv3-88x31.png "GNU General Public License v3.0")</a> WeChat Red Packet (微信红包)

> This project is created for testing my ability to design website.

> 我第一个含中文的仓库（我是中国人:joy:）

I have spent half an hour to develop the first version of the red packet.

The most interesting part is when you clicked the `開` button, it made a 3D animation, which I implemented this way:

```css
.packet-opening{
	animation: openbtn 2.5s linear;
}
@keyframes openbtn{
	0% {
		transform: rotateY(0deg);
	}
	50% {
		transform: rotateY(180deg);
	}
	100% {
		transform: rotateY(360deg);
	}
}
```

To handle click event, I do such stuff in `JavaScript`

```javascript
function open_packet(){
	var p=document.getElementById("packet-btn");
	p.classList.add("packet-opening");
	setTimeout(function(){
		p.classList.remove("packet-opening");
	},2500);
}
```

Then I added `onclick="open_packet()"` on the `開` button element.

```html
<div title="开红包" id="packet-btn" class="packet-yellow-bg circle" onclick="open_packet()">
	<h1>開</h1>
</div>
```