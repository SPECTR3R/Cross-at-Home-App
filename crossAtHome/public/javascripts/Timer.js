class Timer {
  constructor(timerContainer, timeLimit = 60, timerSize = 150, labelcolor = 'green') {
    this.COLOR_CODES = {
      info: { color: 'green' },
      warning: { color: 'orange', threshold: 10 },
      alert: { color: 'red', threshold: 5 },
    };
    this.timeLimit = timeLimit;
    this.timeLeft = this.timeLimit;
    this.timePassed = 0;
    this.timerInterval = null;
    this.remainingPathColor = this.COLOR_CODES.info.color;
    this.timerContainer = timerContainer;
    this.timerSize = timerSize;
    this.labelcolor = labelcolor;
  }

  renderTimer() {
    this.timerContainer.innerHTML = `
    <div class="base-timer" style="height:${this.timerSize}px ; width: ${this.timerSize}px ;">
      <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="base-timer__circle">
          <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
          <path id="base-timer-path-remaining" stroke-dasharray="283" class="base-timer__path-remaining ${
            this.remainingPathColor
          }"
            d="M 50, 50
               m -45, 0
               a 45,45 0 1,0 90,0
               a 45,45 0 1,0 -90,0"></path></g>
       </svg>
         <span id="base-timer-label" class="base-timer__label"
           style=" font-size: ${Math.floor(this.timerSize / 3)}px;
           height:${this.timerSize}px ; width: ${this.timerSize}px ;
           color:${this.labelcolor}">
             ${this.formatTime(this.timeLeft)}
         </span>
    </div>`;
  }

  stopTimer() {
    clearInterval(this.timerInterval);
  }

  restartTimer(timeLimit = this.timeLimit) {
    this.stopTimer();
    this.timeLeft = timeLimit;
    this.timePassed = 0;
    this.timerInterval = null;
    this.remainingPathColor = this.COLOR_CODES.info.color;
    this.renderTimer();
    this.startTimer();
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      this.timePassed = this.timePassed += 1;
      this.timeLeft = this.timeLimit - this.timePassed;
      document.getElementById('base-timer-label').innerHTML = this.formatTime(this.timeLeft);
      this.setCircleDasharray();
      this.setRemainingPathColor(this.timeLeft);
      if (this.timeLeft === 0) this.stopTimer();
    }, 1000);
  }

  formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (seconds < 10) seconds = `0${seconds}`;
    return `${minutes}:${seconds}`;
  }

  calculateTimeFraction() {
    const rawTimeFraction = this.timeLeft / this.timeLimit;
    return rawTimeFraction - (1 / this.timeLimit) * (1 - rawTimeFraction);
  }

  setCircleDasharray() {
    const circleDasharray = `${(this.calculateTimeFraction() * 283).toFixed(0)} 283`;
    document
      .getElementById('base-timer-path-remaining')
      .setAttribute('stroke-dasharray', circleDasharray);
  }

  setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = this.COLOR_CODES;
    if (timeLeft <= alert.threshold) {
      document.getElementById('base-timer-path-remaining').classList.remove(warning.color);
      document.getElementById('base-timer-path-remaining').classList.add(alert.color);
    } else if (timeLeft <= warning.threshold) {
      document.getElementById('base-timer-path-remaining').classList.remove(info.color);
      document.getElementById('base-timer-path-remaining').classList.add(warning.color);
    }
  }
}

let timer = null;
let renderState = flag => {
  const $cStateContainer = document.getElementById('cStateContainer');

  switch (flag) {
    //For Time /////////////////////////////////////////////
    case 'forTime':
      $cStateContainer.innerHTML = `
      <div class="cSign">
        2020 SPECTR3R-B <button onclick="renderState('timer')" class="backButton" >Go back</button>
      </div>
      <div class="cContainer">
      <div class="cText">
        <div>For Time</div>
        <div>Complete WOD as <br />fast as possible in:</div>
      </div>
      <div class="cInputContainer">
        <input class ="inputValue" style="border: 3px solid rgb(95, 212, 248);" name="minutes" placeholder="15" min=1 max="99" value="15" type="number" />
        <label for="minutes">minutes </label>
      </div>
      <button onclick="renderState('forTimeCountDown')" class="cButton" style="background-color: rgb(95, 212, 248);">Start Timer</button>
      </div>`;
      break;
    //For Time CountDown /////////////////////////////////////////////
    case 'forTimeCountDown':
      timelimit = document.querySelector('.inputValue').value;
      $cStateContainer.innerHTML = `
      <div class="cSign">
        2020 SPECTR3R-B <button onclick="renderState('timer')" class="backButton" >Go back</button>
      </div>
      <button onclick="timer.restartTimer()" class="cButton" style=" margin: 50px 0px;background-color: rgb(95, 212, 248);">Start Timer</button>
      <div class="cContainer"></div>
      <div class="cText">
       <div>FOR TIME</div>
      </div>`;
      timer = new Timer(document.querySelector('.cContainer'), timelimit*60, 150, 'white');
      timer.renderTimer();
      timer.startTimer();

      break;

    //Tabata  //////////////////////////////////////////////
    case 'tabata':
      $cStateContainer.innerHTML = `
        <div class="cSign">
          2020 SPECTR3R-B <button onclick="renderState('timer')" class="backButton" >Go back</button>
        </div>
        <div class="cContainer">
        <div class="cText">
          <div>TABATA</div>
        </div>
        <div class="cTabataContainer">
        <div>
          <input name="minutes" placeholder="8" min=1 max="99" value="10" type="number" />
          <label for="minutes"> Rounds</label>
        </div>
        <div >
          <input name="minutes" placeholder="10" min=1 max="99" value="10" type="number" />
          <label for="minutes">secs Work </label>
        </div>
        <div>
          <input name="minutes" placeholder="10" min=1 max="99" value="10" type="number" />
          <label for="minutes">secs Rest </label>
        </div>
        </div>
        <button class="cButton" style="background-color: rgb(31, 190, 26);">Start Timer</button>
      </div>`;
      break;
    // Amrap ///////////////////////////////////////////////
    case 'amrap':
      $cStateContainer.innerHTML = `
        <div class="cSign">
         2020 SPECTR3R-B <button onclick="renderState('timer')" class="backButton" >Go back</button>
        </div>
        <div class="cContainer">
        <div class="cText">
          <div>AMRAP</div>
          <div>As Many rounds <br />as possible in:</div>
        </div>
        <div class="cInputContainer">
          <input style="border: 3px solid rgb(190, 190, 26);" name="minutes" placeholder="15" min=1 max="99" value="15" type="number" />
          <label for="minutes">minutes </label>
        </div>
        <button class="cButton" style="background-color: rgb(190, 190, 26);">Start Timer</button>
      </div>`;
      break;
    // EMOM ////////////////////////////////////////////////
    case 'emom':
      $cStateContainer.innerHTML = `
        <div class="cSign">
           2020 SPECTR3R-B <button onclick="renderState('timer')" class="backButton" >Go back</button>
        </div>
        <div class="cContainer">
        <div class="cText">
          <div>EMOM</div>
          <div>  Every Minute On<br />the Minute for:</div>
        </div>
        <div class="cInputContainer">
          <input style="border: 3px solid rgb(190, 26, 163);" name="minutes" placeholder="15" min=1 max="99" value="15" type="number" />
          <label for="minutes">minutes </label>
        </div>
        <button class="cButton" style="background-color:  rgb(190, 26, 163);">Start Timer</button>
      </div>`;
      break;
    // Main View //////////////////////////////////////////
    default:
      console.log('stop');
      if (timer) {
        timer.stopTimer();
        timer = null;
      }
      $cStateContainer.innerHTML = `
      <div class="cSign" style="margin-bottom: 26px;">2020 SPECTR3R-B</div>
      <div class="cContainer">
      <div class="cText">
        <div>WOD</div>
        <div>TIMER</div>
      </div>
      <button onclick="renderState('forTime')" class="cButton" style="background-color: rgb(95, 212, 248);">FOR TIME</button>
      <button onclick="renderState('tabata')" class="cButton" style="background-color: rgb(31, 190, 26);">TABATA</button>
      <button onclick="renderState('amrap')" class="cButton" style="background-color: rgb(190, 190, 26);">AMRAP</button>
      <button onclick="renderState('emom')" class="cButton" style="background-color: rgb(190, 26, 163);">EMOM</button>
      </div>`;
      break;
  }
};

window.onload = () => {
  renderState('timer');
};