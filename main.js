const tabs = document.querySelectorAll(".tab__item");
const panes = document.querySelectorAll(".tab__pane");
const line = document.querySelector(".tab__line--active");
tabs.forEach((tab, index) => {
    const pane = panes[index];
    tab.onmouseenter = function() {
        document.querySelector(".tab__pane.active").classList.remove("active");
        pane.classList.add("active");
        console.log(this.offsetWidth);
        line.style.left = this.offsetLeft + "px";
        line.style.width = this.offsetWidth + "px";
    }
})