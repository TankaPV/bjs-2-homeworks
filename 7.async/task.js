class AlarmClock {
	constructor (alarmCollection) {
		this.alarmCollection = [];
		this.timerId = null;
	} 

	addClock(time, callback, id) {
		if (id === undefined) {
			throw new Error('Невозможно идентифицировать будильник. Параметр id не передан.');
		}
		const valueId = this.alarmCollection.find((item) => item['id'] === id); 

		if (valueId === undefined) {
			this.alarmCollection.push({['id']:id,['time']:time,callback});
		} else {
			console.error('Будильник с таким id уже существует');
		}
		
	}

	removeClock(id) {

		const lengthStart = this.alarmCollection.length;

		this.alarmCollection.forEach((item,idx,arr) => {
			if (item['id'] === id) {
				arr.splice(idx, 1);
				return;
			}
		});

		const lengthEnd = this.alarmCollection.length;

		return lengthStart !== lengthEnd;
	}

	getCurrentFormattedTime() {
		return new Date().toLocaleTimeString('ru',{hour:'2-digit',minute:'2-digit'});
	}

	start() {
		const checkClock = (call) => {
			let timeNow = this.getCurrentFormattedTime();
			if (call.time === timeNow) {
					call.callback();
				}
			};
		
			if (this.timerId === null) {
				this.timerId = setInterval(
					() => {
						this.alarmCollection.forEach((item,idx,arr) => {
							checkClock(item);
						}); 
					},15000);
			}
	}

	stop() {
		if (this.timerId !== null) {
			clearInterval(this.timerId);
			this.timerId = null;
		}
	}

	printAlarms() {
		console.log(`Печать всех будильников в количестве ${this.alarmCollection.length}`);

		this.alarmCollection.forEach((item,idx,arr) => {
			console.log(`Будильник №${item.id} заведен на ${item.time}`);
		});
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}