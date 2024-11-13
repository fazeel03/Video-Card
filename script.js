// Function to create a video card and add it to the container
function addVideoCard() {
    // Get the container where the card will be added
    const container = document.getElementById('cardContainer');
  
    // Create the card element
    const card = document.createElement('div');
    card.classList.add('video-card');
  
    // Create the thumbnail image
    const thumbnail = document.createElement('img');
    thumbnail.classList.add('thumbnail');
    thumbnail.src = "https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLABJhdIBqlilwXKzJqa6StynbJT4Q";
  
    // Create the label for "Tutorial #1"
    const label = document.createElement('div');
    label.classList.add('label');
    label.textContent = 'Tutorial #1';
  
    // Create the duration overlay
    const duration = document.createElement('div');
    duration.classList.add('duration');
    duration.textContent = '31:20';
  
    // Create the info container
    const info = document.createElement('div');
    info.classList.add('info');
  
    // Create the title element
    const title = document.createElement('p');
    title.classList.add('title');
    title.textContent = 'Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1';
  
    // Create the views element
    const views = document.createElement('p');
    views.classList.add('views');
    views.textContent = 'CodeWithHarry • 727K views • 2 months ago';
  
    // Append title and views to info container
    info.appendChild(title);
    info.appendChild(views);
  
    // Append all elements to the card
    card.appendChild(thumbnail);
    card.appendChild(label);
    card.appendChild(duration);
    card.appendChild(info);
  
    // Append the card to the container
    container.appendChild(card);
  }
  
  // Call the function to add a video card to the container
  addVideoCard();
  