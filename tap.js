//let manful tapswap
let obj = JSON.parse(localStorage.getItem('ManfulTap'));
let manfulTap = new Manfultap(obj.Tap, obj.CoinBalance, obj.Multitap, obj.EnergyLimit, obj.RechargingSpeed, obj.TapGuru, obj.FullTank, obj.Task, obj.Refs, obj.Stats, obj.League, obj.ReferalLink );
let balance = document.querySelector('.tapBalance');
let league = document.querySelector('.currentLeague');
let remaining = document.querySelector('.remaining');
let tapCoinPriceDiv = document.querySelector('.tapCoinPrice');

let length = document.querySelector('.length');
let progvalue = document.querySelector('.progvalue');

let tapswapBtn = document.querySelector('.tap-tap-tapers');
let tapTools = document.querySelectorAll('.tools');

let popOutCnt = document.querySelector('.tab-btn');
		tapswapBtn.onclick = function(ev){
			let wind = document.querySelector('.__tapswap__');
			let tapBody = document.querySelector('.__tapSwapMain__');

			let tapObjectFromStorage = JSON.parse(localStorage.getItem('ManfulTap'));

			let timer;
			let x = ev.clientX;
			let y = ev.clientY;

			let cntWidth = this.clientWidth;
			let cntHight = this.clientHeight;

			let winX = wind.clientWidth / 3;
			let winY = wind.clientHeight;
// 			alert(winX)
// alert(winY)
			let newX = x - winX; //520
			let newY = y - 230; //add tap on mouse position
			// clearTimeout(timer);
			this.appendChild(generateNumber(tapObjectFromStorage.Tap, newX, newY));
			saveCoinBalance(tapObjectFromStorage.Tap);
			// manfulTap.saveCoinBalance(tapObjectFromStorage.Tap); //save balance per clicked
			// manfulTap.updateBalance(balance);
			balance.innerHTML = manfulTap.updateBalance(); //update balance per click

			//__showCoinBalance();
			if(tapObjectFromStorage.GuruActive == false){
					progress(1);
			}
function returnTap(){
	return obj.Tap;
}
			// setTimeout(function(){
			// 	fillBack(returnTap());
			// }, 5000)

			// alert('x:' + x + 'y:' + y)
		}

function generateNumber(d, x, y){
	let ele = createElement('span');
			ele.className = 'tapPopout';
			ele.innerHTML = d;
			ele.style.left = x + 'px';
			ele.style.top = y + 'px';


			setTimeout(() => {
				ele.remove();
			}, 2000)
			return ele;
}


function randomColor(){
	return Math.floor(Math.random() * 255);
}

function defaultProgress(){
	// localStorage.setItem('Progress', 500);
	let tapObj = JSON.parse(localStorage.getItem('ManfulTap'));
	let sliderVal = tapObj.sliderPosition;
			progvalue.style.width = sliderVal + '%';
			let b;

		if(sliderVal < 100){
			b = setInterval(1000, fillBack())
		}else{
			clearInterval(b);
		}
}

function progress(d){
	let prog = document.querySelector('.progvalue');
	let remain = document.querySelector('.remaining');
	let val = document.querySelector('.remaining');
	// let win = window.getComputedStyle(prog);
	// let width = Number(win.width.toString().replace('px', '') - 303);
	let wit = parseFloat(prog.style.width);

		if(wit > 0){
			prog.style.width = (wit - d) + '%';
			remain.innerHTML = (val.innerHTML - obj.RechargingSpeed);


			let lmt = obj.EnergyLimit - obj.RechargingSpeed;
			 	obj.EnergyLimit = lmt;

				let sliderVal = obj.sliderPosition - d;
						obj.sliderPosition = sliderVal;

				localStorage.setItem('ManfulTap', JSON.stringify(obj));
		}else{
			tapswapBtn.disabled = true;
			fillBack();
		}

}

function fillBack(){
	let prog = document.querySelector('.progvalue');
	let remain = document.querySelector('.remaining');
	let val = document.querySelector('.remaining');
	// clearInterval(t);

	let t = setInterval(() => {
		let wit = parseFloat(prog.style.width);
		let lmt = obj.EnergyLimit + obj.RechargingSpeed;
		let slidePos = obj.sliderPosition + 1;
				if(slidePos >= 100){
					lmt = obj.Energy;
					slidePos = 100;
					clearInterval(t);
					
				}

			if(wit <= 100){
				prog.style.width = slidePos + '%';
				remain.innerHTML = lmt;

				if(wit >= obj.Tap){
					tapswapBtn.disabled = false;
				}


					obj.EnergyLimit = lmt;
					obj.sliderPosition = slidePos;
				localStorage.setItem('ManfulTap', JSON.stringify(obj));
			}else{

			}
	}, 1000)
}

	//loop through tap tools
	for(let x =0; x < tapTools.length; x++){
		tapTools[x].onclick = function(e){
			let wrapper = document.querySelector('.coverWrapper');
			if(this.getAttribute('data-type') == 'boost'){
				if(wrapper !== null){
					wrapper.remove();
				}
				boost();
				genertor('boost');

			}

			if(this.getAttribute('data-type') == 'tap'){
				if(wrapper !== null){
					wrapper.remove();
				}
			}
		}
	}

function createElement(e){
  return document.createElement(e);
}

function boost(){
	let taps = document.querySelector('.__tab__');
		taps.appendChild(coverCurrent());
}

function coverCurrent(){
	let wrapper = createElement('DIV');
			wrapper.className = 'coverWrapper wrap';
			return wrapper
}

function genertor(type){
let wrapper = document.querySelector('.coverWrapper');
let guru = obj.TapGuru;
let tank = obj.FullTank;
let multitap = obj.Multitap;
let energyLimit = obj.Energy;
	if(type == 'boost'){
		let boostW = createElement('DIV');
				boostW.className = 'booster';
					let h4 = createElement('h4');
							h4.innerHTML = 'your daily boosters:';
				boostW.append(h4);

				let boost2in1 = createElement('div');
						boost2in1.className = 'first2In1';
						let boost2in1C1 = createElement('div');
								boost2in1C1.className = 'bt-1 __guruInvoker__';
								let fireW = createElement('div');
										fireW.className = 'fire ';
										fireW.innerHTML = '<i class="fas fa-fire fa-2x"></i>';
								boost2in1C1.append(fireW);

								let wx = createElement('div');
										wx.className = 'threeOva3';
										wx.innerHTML = `<h6 class="tapGuru">tap Guru</h6><span class="three3Ova __gurus__">${guru}/3</span>`;
								boost2in1C1.append(wx);
					boost2in1.append(boost2in1C1);

					//two in one
					// let boost2in2 = createElement('div');
					// 		boost2in2.className = 'first2In1';
							let boost2in1C2 = createElement('div');
									boost2in1C2.className = 'bt-1';
									boost2in1C2.onclick = fullTap;
									let fireW1 = createElement('div');
											fireW1.className = 'fire';
											fireW1.innerHTML = '<i class="fas fa-bolt fa-2x"></i>';
									boost2in1C2.append(fireW1);
					//
									let wx1 = createElement('div');
											wx1.className = 'threeOva3';
											wx1.innerHTML = `<h6 class="tapGuru">full Tap</h6><span class="three3Ova __fullTank__">${tank}/3</span>`;
									boost2in1C2.append(wx1);
						// boost2in2.append(boost2in1C2);
					// boost2in1.append(boost2in1C1);
					boost2in1.append(boost2in1C2);



			boostW.append(boost2in1);
//down section start Here
 		h4 = createElement('h4');
		h4.innerHTML = 'boosters:';
boostW.append(h4);

		let lngDiv = createElement('DIV');
				lngDiv.className = 'longBooster';
					let ico = createElement('DIV');
							ico.className = 'kdk-icon';
								ico.innerHTML = '<i class="fas fa-hands fa-2x"></i>';
				lngDiv.onclick = Multitap;
				lngDiv.append(ico);
					let lngMiddle = createElement('DIV');
							lngMiddle.className = 'middle60';
								let middleSpan = createElement('span');
										middleSpan.className = 'middleSpan';
										middleSpan.innerHTML = 'multitap';
							lngMiddle.append(middleSpan);
								let divtwo = createElement('DIV');
										divtwo.className = 'divTwo-in-two';
										divtwo.innerHTML = `<span class="spicon"><i class="fas fa-coins"></i></span><span class="itx __multiTapper">${multitap}</span>|<span class="level multi">${obj.MultitapLevel} level</span>`;
							lngMiddle.append(divtwo);

				lngDiv.appendChild(lngMiddle);
					let lastAngle = createElement('DIV');
							lastAngle.className = 'lastAngle tap-angle';
							lastAngle.innerHTML = '<i class="fas fa-angle-right fa-2x"></i>';
				lngDiv.appendChild(lastAngle);

			 boostW.append(lngDiv);
			 //second tap start below
			  lngDiv = createElement('DIV');
	 				lngDiv.className = 'longBooster';
				lngDiv.setAttribute('onclick', 'EnergyLimit()');
	 					 ico = createElement('DIV');
	 							ico.className = 'kdk-icon';
	 								ico.innerHTML = '<i class="fas fa-battery-quarter fa-2x"></i>';
	 				lngDiv.append(ico);
	 					 lngMiddle = createElement('DIV');
	 							lngMiddle.className = 'middle60';
	 								 middleSpan = createElement('span');
	 										middleSpan.className = 'middleSpan';
	 										middleSpan.innerHTML = 'Energy Limit';
	 							lngMiddle.append(middleSpan);
	 								 divtwo = createElement('DIV');
	 										divtwo.className = 'divTwo-in-two';
	 										divtwo.innerHTML = `<span class="spicon"><i class="fas fa-coins"></i></span><span class="itx __energyLimit__">${energyLimit}</span>|<span class="level engyLimit">${obj.EnergyLimitLevel} level</span>`;
	 							lngMiddle.append(divtwo);

	 				lngDiv.appendChild(lngMiddle);
	 					 lastAngle = createElement('DIV');
	 							lastAngle.className = 'lastAngle tap-angle';
	 							lastAngle.innerHTML = '<i class="fa-solid fa-angle-right fa-2x"></i>';
	 				lngDiv.appendChild(lastAngle);

	 			 boostW.append(lngDiv);
	 			 //third tap start below
         lngDiv = createElement('DIV');
 	 				lngDiv.className = 'longBooster';
 	 					 ico = createElement('DIV');
 	 							ico.className = 'kdk-icon';
 	 								ico.innerHTML = '<i class="fas fa-bolt fa-2x"></i>';
 	 				lngDiv.append(ico);
 	 					 lngMiddle = createElement('DIV');
 	 							lngMiddle.className = 'middle60';
 	 								 middleSpan = createElement('span');
 	 										middleSpan.className = 'middleSpan';
 	 										middleSpan.innerHTML = 'Recharging speed';
 	 							lngMiddle.append(middleSpan);
 	 								 divtwo = createElement('DIV');
 	 										divtwo.className = 'divTwo-in-two';
 	 										divtwo.innerHTML = '<span class="level">0 level</span>';
 	 							lngMiddle.append(divtwo);

 	 				lngDiv.appendChild(lngMiddle);
 	 					 lastAngle = createElement('DIV');
 	 							lastAngle.className = 'lastAngle tap-angle';
 	 							lastAngle.innerHTML = '';
 	 				lngDiv.appendChild(lastAngle);

 	 			 boostW.append(lngDiv);

			wrapper.append(boostW);

			_guru_(); //invoke tap guru
	}

}

league.innerHTML = manfulTap.league(); //update current league here
balance.innerHTML = manfulTap.balance(); //update current league here
remaining.innerHTML = manfulTap.limit(); //update current league here
length.innerHTML =  ' /' + obj.Energy;

function _guru_(){
	let __guru__ = document.querySelector('.__guruInvoker__');
	__guru__.addEventListener('click', function(){
		// alert(manfulTap.TapGuru);
		let updateGuru = document.querySelector('.__gurus__');
		let wrapper = document.querySelector('.coverWrapper');
		let guruBtn = this;

		if(obj.TapGuru != 0){
				//checking to disabled click while guru is active
				if(obj.GuruActive == true){
					return;
				}
			localStorage.setItem('returnTap', manfulTap.tap());
			let dataSet = obj;
				let tap = obj.Tap * 5;
				let guru = obj.TapGuru - 1;
					dataSet.Tap = tap;
					dataSet.GuruActive = true;
					dataSet.TapGuru = guru;

				//remove clicked event from guru guruBtn
				// guruBtn.removeEventListener('click');

			localStorage.setItem('ManfulTap', JSON.stringify(dataSet));
			let txt = `You have successfully activate Tap Guru ${guru}/3 remaining`;
			updateGuru.innerHTML = guru + '/3';
			tapCoinPriceDiv.appendChild(tapNotify(txt));

		let timeout =	setTimeout(() => {
				let returnBack = Number(localStorage.getItem('returnTap'));
						dataSet.Tap = returnBack;
						dataSet.GuruActive = false;
						localStorage.removeItem('returnTap');
						localStorage.setItem('ManfulTap', JSON.stringify(dataSet));
						// alert(obj.CoinBalance);

						// clearTimeout(timeout);
			}, 30000);

			wrapper.remove();
		}
	})
}

function fullTap(){
	if(obj.FullTank != 0){
		let tankUpdate = document.querySelector('.__fullTank__');
		let slide = document.querySelector('.progvalue');
		let counter = document.querySelector('.remaining');
		let counterAll = document.querySelector('.length');
		let tank = obj.FullTank - 1;
			obj.FullTank = tank;
			obj.sliderPosition = 100;
			obj.EnergyLimit = obj.Energy;
			tankUpdate.innerHTML = tank + ' /3';
			slide.style.width = 100 + '%';
			counter.innerHTML = obj.Energy;
			counterAll.innerHTML = obj.Energy;
			let txt = "Full tank Activated, remaining " + tank + '/3';
			// tapNotify(txt);
			tapCoinPriceDiv.appendChild(tapNotify(txt));
		localStorage.setItem('ManfulTap', JSON.stringify(obj));
	}
}

function tapNotify(d){
	let wrapper = createElement('div');
			wrapper.className = 'notificationWrap';
				let icon = createElement('SPAN');
						icon.className = 'icon';
						icon.innerHTML = '<i class="fas fa-envelope fa-2x"></i>';
			wrapper.append(icon);
	let notify = createElement('h3');
			notify.className = 'noti-txt';
			notify.innerHTML = d;



			setTimeout(() =>{
				wrapper.style.opacity = 0;
			}, 3000);
			setTimeout(function(){
				wrapper.remove();
			}, 4000)

		wrapper.appendChild(notify);

		return wrapper;

}

function EnergyLimit(){
	//subtrract balance
		if(obj.CoinBalance > obj.Energy){
			let nextCharge = document.querySelector('.__energyLimit__');
			let lev = document.querySelector('.engyLimit');

			let newbal = obj.CoinBalance - obj.Energy;
			let level = ++obj.EnergyLimitLevel;
			let energy = obj.Energy * 2;
			let deducted = obj.Energy;
			let speed = obj.RechargingSpeed * 2;


				obj.CoinBalance = newbal;
				obj.EnergyLimitLevel = level;
				obj.Energy = energy;
				obj.RechargingSpeed = speed;
				nextCharge.innerHTML = energy;

				lev.innerHTML = level;
				let txt = `EnergyLimit successfully Boosted to level ${level}, ${deducted} ManfulTap coin has been deducted from your Balance`;
				balance.innerHTML = newbal;
				length.innerHTML = '/'+energy;
				remaining.innerHTML = energy;
				localStorage.setItem('ManfulTap', JSON.stringify(obj));
				tapCoinPriceDiv.appendChild(tapNotify(txt));
		}
}

function Multitap(){
	//subtrract balance
	if(obj.CoinBalance > obj.Multitap){
		let nextCharge = document.querySelector('.__multiTapper');
		let multi = document.querySelector('.multi');

		let newbal = obj.CoinBalance - obj.Multitap;
		let level = ++obj.MultitapLevel;
		let multap = obj.Multitap * 2;
		let deducted = obj.Multitap;


		obj.CoinBalance = newbal;
		obj.MultitapLevel = level;
		obj.Multitap = multap;
		obj.Tap = ++obj.Tap;
		balance.innerHTML = newbal;
		nextCharge.innerHTML = multap;
		multi.innerHTML = level;
		let txt = `Mulitap successfully Boosted to level ${level}, ${deducted} ManfulTap coin has been deducted from your Balance`;

		localStorage.setItem('ManfulTap', JSON.stringify(obj));
		tapCoinPriceDiv.appendChild(tapNotify(txt));
	}
}

function saveCoinBalance(data){

	let bal = obj.CoinBalance +  Number(data);

				obj.CoinBalance = bal;
			localStorage.setItem('ManfulTap', JSON.stringify(obj));
}

document.body.addEventListener('contextmenu', function(ev){
	ev.preventDefault();
})
//  addTocart(objs);
window.onload = function(){
// __showCoinBalance();
	defaultProgress();
}
