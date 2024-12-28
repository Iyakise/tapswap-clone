class DateTime{
	constructor(){
		let d = new Date();
		this.hour = d.getHours();
		this.minute = d.getMinutes();
		this.hour = d.getHours();
		this.second = d.getSeconds();
		this.day = d.getDay();
		this.date = d.getDate();
		this.month = d.getMonth();
		this.year = d.getFullYear();

	}

	getTime(){
		let t = this.hour >= 12 ? 'Pm': 'Am';
		return this.hour + ' : ' + this.minute + ' : ' + this.second + ' ' + t;
	}
}

//coin object
let tapObject = {
  Tap: 1,
  CoinBalance: 5000,
  Multitap: 500,
  EnergyLimit: 500,
	Energy: 500,
  RechargingSpeed: 5,
	MultitapLevel: 0,
	EnergyLimitLevel: 0,
  TapGuru: 3,
  FullTank: 3,
  Task: {
      Cinema: [],
      Special: [],
      League: [],
      Refs: []
  },
  Refs:{},
  Stats:{
    TotalShares: 500,
    TotalTouches: null,
    TotalPlayers: 1,
    DailyUsers: 1,
    OnlinePlayers: null
  },
  League: 'Wood',
  ReferalLink: 'uid-4589888999',
	GuruActive: false,
	sliderPosition:100
}
if(localStorage.getItem('ManfulTap') == null){
	localStorage.setItem('ManfulTap', JSON.stringify(tapObject));
}

class Manfultap{
  constructor(t, bln, mtap, engyLmt, speed, guru, tank, task, ref, stat, leg){

      this.Tap = t;
      this.Balance = bln;
      this.Multitap = mtap;
      this.EnergyLimit = engyLmt;
      this.RechargeSpeed = speed;
      this.TapGuru = guru;
      this.FullTank = tank;
      this.Task = task;
      this.Referrals = ref,
      this.statistics = stat,
      this.League = leg;
  }

  tap(){
    return this.Tap;
  }

	league(){
		return this.League;
	}

	balance(){
		return this.Balance;
	}
	limit(){
		return this.EnergyLimit;
	}

	saveCoinBalance(b){
		let StoredObj = JSON.parse(localStorage.getItem('ManfulTap'));
		let bal = Number(StoredObj.CoinBalance) + Number(b);
			StoredObj.CoinBalance = bal;
		//
		// console.log(bal)
		localStorage.setItem('ManfulTap', JSON.stringify(StoredObj));

	}

	updateBalance(){
		let data = JSON.parse(localStorage.getItem('ManfulTap'));
		// console.log(data.CoinBalance);
		return data.CoinBalance;
	}

	updateSlider(d){
		let StoredObj = JSON.parse(localStorage.getItem('ManfulTap'));
		let value = StoredObj.EnergyLimit - d;
	}

}
