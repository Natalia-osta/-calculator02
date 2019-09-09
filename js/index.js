    const nums = document.querySelector('.nums');
    const opers = document.querySelector('.opers');
    const display = document.querySelector('.calc .display');
    const equal = document.querySelector('.calc .eq');
    const clear = document.querySelector('.calc .clear');
    const back = document.querySelector('.calc .back');
    const swicher = document.querySelector('.swicher');
    const changer = document.querySelector('.changer');

    let trigger = false;
    let deltaOperation = "";
    let deltaData = 0;

    nums.addEventListener("click", pushNumButton)
    function pushNumButton(ev){
        if(ev.target.nodeName !== "BUTTON"){
            return;
        }
        const num = ev.target.innerText;
            if (trigger)
            {
                display.value = num;
                trigger = false;
            }
            else
            {
                if (display.value == "0")
                    display.value = num;
                else
                    display.value += num;
            }
    }
    opers.addEventListener("click", pushOperButton)
    function pushOperButton(ev){
        let operator = ev.target.innerText;
		var out = display.value;
		if (trigger && deltaOperation != "=")
		{
			display.value = deltaData;
		}
		else
		{
			trigger = true;
			if ( '+' == deltaOperation )
            deltaData += parseFloat(out);
			else if ( '-' == deltaOperation )
            deltaData -= parseFloat(out);
			else if ( '/' == deltaOperation )
            deltaData /= parseFloat(out);
			else if ( '*' == deltaOperation )
            deltaData *= parseFloat(out);
			else
            deltaData = parseFloat(out);
			display.value = deltaData;
			deltaOperation = operator;
		}
    }
    clear.addEventListener('click', clearPressed );
    function clearPressed(ev) {
        result = 0;
        display.value = " ";
    }
    back.addEventListener('click', backSpace);
    function backSpace(ev) {
        const str = display.value
        display.value = str.substring(0, str.length - 1);
    }
    changer.addEventListener('click', changeValue);
    function changeValue(ev) {
        const str = display.value;
        if(+str > 0){
            display.value = `-${str}`;
        }
        else display.value = str.slice(1)
    }
    swicher.addEventListener('click', toogleOff);
    function toogleOff(ev) {
        display.classList.toggle("hide")
        swicher.classList.toggle("online")
        result = 0;
        display.value = " ";
    }

