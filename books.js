// Create a class for the element
class Book extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const title    = this.getAttribute('title');
        const subtitle = this.getAttribute('subtitle');
        const author   = this.getAttribute('author');
        const pages = this.getAttribute('pages');
        const description = this.getAttribute('description');
        const image = this.getAttribute('image');
        this.innerHTML = `
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${image}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <h5 class="card-title"></h5>
                            <div class="card-body">
                                <h5><b>${title}</b> ${subtitle}</h5>
                                    <p class="card-text">
                                        <table class="table">
                                            <tr>
                                                <td class="text-success font-weight-bold">Author:</td>
                                                <td>${author}</td>
                                            </tr>
                                            <tr>
                                                <td class="text-success font-weight-bold">Page Count:</td>
                                                <td>${pages}</td>
                                            </tr>
                                            <tr>
                                                <td class="text-success font-weight-bold">Description:</td>
                                                <td>${description}</td>
                                            </tr>
                                        </table>
                                    </p>
                                    <p class="card-text"><small class="text-muted">tags will go here</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
        `;  
    }
}

// Define the new element
customElements.define('mit-book', Book);
