let icon1,icon2;
let WIN = 0;
let turn = 0;
let name1 = prompt("Enter player1 name : ");
	name2 = prompt("Enter player2 name : "),
	f = Math.floor(Math.random()*100);
if(f%2==0){
	icon1 = 'X';
	icon2 = 'O';
}else{
	icon1 = 'O';
	icon2 = 'X';
}
alert(name1 + " icon : " + icon1);
alert(name2 + " icon : " + icon2);

for(let i=0;i<9;i++){
	$('.board').append('<span class="br"></span>')
}
$('.player-name p span').html(name1 + " ( "+ icon1 +" ) ");
//Addeventlistener
$('.board span').click(play);
function play(){
	if(turn%2==0){
		if(this.innerText!="" || WIN==1){
			return;
		}
		$(this).html(icon1);
		$('.player-name p span').html(name2 + " ( "+ icon2 +" ) ");
		isWin(icon1,name1);
	}else {
		if(this.innerText!="" || WIN==1){
			return;
		}
		$(this).html(icon2);
		$('.player-name p span').html(name1 + " ( "+ icon1 +" ) ");
		isWin(icon2,name2);
	}
	var b =1;
	for(var l=0;l<9 && WIN!=1;l++){
		var a = $('.board span')[l];
		if(a.innerText=="")
		{
			b = 0;
			break;
		}
	}
	if(b==1 && WIN!=1){
		$('.player-name p').html("Match Draw.");
		WIN = 1;
	}
	turn++;
}
function row(icon){
	for(var i=0;i<3;i++){
		let flag = 0;
		for(j=0;j<3;j++){
			var a = $('.board span')[(i*3)+j];
			if(a.innerText!=icon){
				flag = 1;
				break;
			}
		}
		if(flag==0){
			for(var k=0;k<3;k++){
				var a = $('.board span')[(i*3)+k];
				a.style.color = "#f00";
			}
			return true;
		}
	}
	return false;
}
function col(icon){
	for(var i=0;i<3;i++){
		let flag = 0;
		for(j=0;j<3;j++){
			var a = $('.board span')[(j*3)+i];
			if(a.innerText!=icon){
				flag = 1;
				break;
			}
		}
		if(flag==0){
			for(var k=0;k<3;k++){
				var a = $('.board span')[(k*3)+i];
				a.style.color = "#f00";
			}
			return true;
		}
	}
	return false;
}
function ver(icon){
	var a = $('.board span');
	if(a[0].innerText==icon && a[4].innerText==icon && a[8].innerText==icon){
		a[0].style.color = "#f00";
		a[4].style.color = "#f00";
		a[8].style.color = "#f00";
		return true;
	}
	if(a[2].innerText==icon && a[4].innerText==icon && a[6].innerText==icon){
		a[2].style.color = "#f00";
		a[4].style.color = "#f00";
		a[6].style.color = "#f00";
		return true;
	}
	return false;
}
function isWin(icon,name){
	if(row(icon) || col(icon) || ver(icon)){
		WIN = 1;
		$('.player-name p').html(name +" is the winner of the Match.(Refresh to restart)");
		$('.player-name p').css("color","yellow");
	}
}