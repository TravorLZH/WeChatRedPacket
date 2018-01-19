function open_packet(){
	var p=document.getElementById("packet-btn");
	p.classList.add("packet-opening");
	setTimeout(function(){
		p.classList.remove("packet-opening");
	},2500);
}