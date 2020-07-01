
// -|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|-

// This code is for the image-gallery and will be copy-pasted into the 
// main js file

// -|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|-

// This creates the lightbox and adds it to the page
const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

//This applies the code to all the images of the webpage (find another selector to specificly select the ones you need):
const images = document.querySelectorAll('img') 
// This code will run for each image found:
images.forEach(image => {
    image.addEventListener('click', e => {
        // This part adds and removes certin attributes to give the effect for when it opens up. (not necessary)
        lightbox.style.left = 0
        lightbox.style.top = 0
        lightbox.style.right = null
        lightbox.style.bottom = null
        // This part adds the 'active' class that makes the lightbox apear
        lightbox.classList.add('active')
        // This adds and finds the image
        const img = document.createElement('img')
        img.src = image.src
        // This creates a div for all the content in the lightbox
        const content = document.createElement('div')
        // This loop removes all previous items from the lightbox, creating a clean slate
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        // This adds the content div and the image to the lightbox
        lightbox.appendChild(content)
        content.appendChild(img)
        // This part adds the paragraph for credit to author
        const credit = document.createElement('p')
        // This gets the name of the author (add a name="putNameHere" in your <img> tag)
        const name = image.name
        const text = document.createTextNode("Credits to: " + name)
        // This adds the paragraph to the lightbox
        credit.appendChild(text)
        content.appendChild(credit)
    })
})
// This sets upp the code for clicking away the lightbox
lightbox.addEventListener('click', e => {
    // this will make it so that clicking the "currentTarget" aka the lightbox itself, does not remove it
    if (e.target !== e.currentTarget){
        return
    }
    // This part adds and removes certin attributes to give the effect for when it closes down. (not necessary)
    lightbox.style.left = null
    lightbox.style.top = null
    lightbox.style.right = 0
    lightbox.style.bottom = 0
    // This removes the 'active' class so that the lightbox dissapears
    lightbox.classList.remove('active')  
})