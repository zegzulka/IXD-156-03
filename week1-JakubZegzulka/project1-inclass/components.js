class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const buyText = this.getAttribute("buy-text") || "Buy now";
    const buyUrl = this.getAttribute("buy-url") || "#buy";

    this.innerHTML = `
    <div class="header">
    <div class="flex align-middle justify-between bg-slate-300/50 p-[24px] w-full">
        <div class="">
            <h1>Macbook Pro</h1>
            <p class="text-xs">for $1200</p>
        </div>
        <div class="flex align-middle gap-[24px]">
            <a href="${buyUrl}" class="px-[16px] py-[12px] bg-blue-800 text-white rounded-full hover:bg-blue-900"><p>${buyText}</p></a>
        </div>
    </div>
    </div>
    `;
  }
}

customElements.define("header-component", Header);