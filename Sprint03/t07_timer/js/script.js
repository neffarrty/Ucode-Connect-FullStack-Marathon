class Timer {
    constructor(title, delay, stopCount) {
        this.title = title;
        this.delay = delay;
        this.stopCount = stopCount;
    }

    start() {
        console.log(`Timer ${this.title} started (delay=${this._delay}, stopCount=${this.stopCount})`);
        this.id = setInterval(() => this.tick(), this.delay);
    }

    tick() {
        if (this.stopCount !== 0) {
            console.log(`Timer ${this.title} Tick! | cycles left ${--this.stopCount}`);
        }
        else {
            this.stop();
        }
    }

    stop() {
        clearInterval(this.id);
        console.log(`Timer ${this.title} stopped`);
    }
}

const runTimer = (id, delay, counter) => {
    let timer = new Timer(id, delay, counter).start();
}

runTimer("Bleep", 1000, 5);

/*
Console output:

Timer Bleep started (delay=1000,  stopCount=5)
Timer Bleep Tick! | cycles left 4
Timer Bleep Tick! | cycles left 3
Timer Bleep Tick! | cycles left 2
Timer Bleep Tick! | cycles left 1
Timer Bleep Tick! | cycles left 0
Timer Bleep stopped
*/
