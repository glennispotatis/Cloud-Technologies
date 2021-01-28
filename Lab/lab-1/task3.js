class FormInput extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = this._template();
        this._setEventListener();
    }

    _template(){
        return `
        <form>
            <label for="name">Your Name: </label>
            <input type="text" id="name" required>
            <input type="submit" value="Submit" id="submit">
        </form>
        `;
    }

    _setEventListener(){
        this.shadowRoot.getElementById('submit').addEventListener("click", (e) => this._handleSubmitElement());
    }

    _handleSubmitElement(){
        let input = this.shadowRoot.getElementById('name').value;
        alert(input);
    }
}

customElements.define('form-input', FormInput);