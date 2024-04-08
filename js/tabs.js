/**
 * Tabs controller
 */


/** Startup */
document.querySelectorAll("[tab-buttons]").forEach(setupTabs);


/**
 * Sets up buttons and tab targets
 * 
 * @param {HTMLElement} container container element of tab buttons
 */
function setupTabs(container){

    let targets = [];
    const selectorButtons = container.querySelectorAll("[tab-target]");
    let initialActive = "";

    /**
     * handles updating active tab
     * 
     * @param {string} active 
     */
    const update = (active) => {
        for(const target of targets){
            const elem = document.querySelector(target);
            if(!elem){continue;}

            if(target == active){
                elem.style.display = "";
            } else {
                elem.style.display = "none";
            }
            
        }

        selectorButtons.forEach((button) => {
            if(button.getAttribute("tab-target") === active){
                button.classList.add("active");
            } else {
                button.classList.remove("active");
            }
        });
    };

    //setup buttons and default active tab
    selectorButtons.forEach((elem) =>{
        const target = elem.getAttribute("tab-target");
        targets.push(target);

        if (elem.classList.contains("active") ) {
            initialActive = target;
        }

        elem.addEventListener("click", ()=>{
            update(target);
        });
    });

    //set first element as default if none specified
    if(initialActive === "" && targets.length > 0){
        initialActive = targets[0];
    }

    //run initial update
    update(initialActive);
}

