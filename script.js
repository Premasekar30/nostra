
// side nav-Bar

const sidenav = document.querySelector("#sidenav")
const menuicon = document.getElementById("menuicon")
const closetag = document.getElementById("closetag")


menuicon.addEventListener("click", function(){
    sidenav.style.left = 0
})

closetag.addEventListener("click", function(){
    sidenav.style.left = "-60%";
})


// Add-offer

    let adOffer = document.getElementById("offer_ad")
    let closebar = document.getElementById("closebar")

    closebar.addEventListener("click", function(){
    adOffer.style.display = "none"
})


// product search functionality

const productContainer = document.getElementById("product-container")
const search = document.getElementById("search")
const productlist = productContainer.querySelectorAll("div")


    search.addEventListener("keyup", function(){
        var enteredValue = event.target.value.toUpperCase()

        for(count=0; count<productlist.length; count=count+1)
            {
                var productname = productlist[count].querySelector("p").textContent

                if(productname.toUpperCase().indexOf(enteredValue)<0)
                {
                    productlist[count].style.display="none"
                }
                else{
                    productlist[count].style.display="block"
                }
            }
    })


    // checkbox search functionality


    document.addEventListener('DOMContentLoaded', () => {
        const checkboxes = document.querySelectorAll('.filter-checkbox');
        const products = document.querySelectorAll('#product');

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                filterProducts();
            });
        });

        function filterProducts() {
            const selectedCategories = [];
            checkboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    selectedCategories.push(checkbox.value);
                }
            });

            products.forEach(product => {
                const productCategory = product.getAttribute('data-category');
                if (selectedCategories.includes(productCategory)) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        }
    });