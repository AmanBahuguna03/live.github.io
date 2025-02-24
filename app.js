document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
  });

document.getElementById("face").addEventListener("click", function () {
  // Action to perform on click
  alert(
    "We are directing you to the official Facebook Page Of Gourmet Delight..."
  );
});

document.getElementById("insta").addEventListener("click", function () {
  // Action to perform on click
  alert(
    "We are directing you to the official Instagram Page Of Gourmet Delight..."
  );
});

document.getElementById("thread").addEventListener("click", function () {
  // Action to perform on click
  alert(
    "We are directing you to the official Thread Page Of Gourmet Delight..."
  );
});

document.getElementById("twitter").addEventListener("click", function () {
  // Action to perform on click
  alert(
    "We are directing you to the official Twitter Page Of Gourmet Delight..."
  );
});

const stars = document.querySelectorAll(".star");

stars.forEach((star) => {
  star.addEventListener("click", function () {
    // Remove selected class from all stars
    stars.forEach((s) => s.classList.remove("selected"));

    // Add selected class to the clicked star and all previous stars
    this.classList.add("selected");
    let previousStar = this.previousElementSibling;
    while (previousStar) {
      previousStar.classList.add("selected");
      previousStar = previousStar.previousElementSibling;
    }

    // Optional: Get the rating value
    const ratingValue = this.getAttribute("data-value");
    console.log(`Rating: ${ratingValue}`);
  });

  star.addEventListener("mouseover", function () {
    // Remove hover effect from all stars
    stars.forEach((s) => s.classList.remove("hover"));

    // Add hover effect to the current star and all previous stars
    this.classList.add("hover");
    let previousStar = this.previousElementSibling;
    while (previousStar) {
      previousStar.classList.add("hover");
      previousStar = previousStar.previousElementSibling;
    }
  });

  star.addEventListener("mouseout", function () {
    // Remove hover effect when mouse leaves the stars
    stars.forEach((s) => s.classList.remove("hover"));
  });
});

function printText() {
  // Get the value from the textarea
  var text = document.getElementById("myTextarea").value;

  // Display the value on the screen
  document.getElementById("output").innerText = `You review  - ${text}`;
}

// Searching anyhting in the page

document.getElementById("searchButton").addEventListener("click", function () {
  let searchTerm = document.getElementById("searchInput").value.trim();

  // Clear previous results
  document.getElementById("searchResults").innerHTML = "";

  if (searchTerm === "") {
    alert("Please enter a word to search.");
    return;
  }

  // Use window.find() to search for the term and scroll to it
  let found = window.find(searchTerm);

  if (!found) {
    let result = `The term "${searchTerm}" was not found on this page.`;
    document.getElementById("searchResults").innerHTML = result;
  }
});

// Blog Section

document.addEventListener("DOMContentLoaded", function () {
  const blogPostsContainer = document.getElementById("blogPosts");
  const loadMoreButton = document.getElementById("loadMore");

  // Sample blog posts data (you can replace this with dynamic content)
  const blogPosts = [
    {
      title: "5 Tips for a Perfect Dinner Date",
      image:
        "https://st3.depositphotos.com/7641714/33115/i/450/depositphotos_331150234-stock-photo-valentines-dinner-date-night.jpg/400x200",
      content:
        "Discover our top tips for a memorable dinner date at our restaurant. From ambiance to menu choices, we've got you covered.",
    },
    {
      title: "The Secret Behind Our Famous Pasta",
      image:
        "https://st.depositphotos.com/1003814/3345/i/450/depositphotos_33455217-Pasta-with-tomato-sauce-and-parmesan.jpg/400x200",
      content:
        "Learn the secret recipe of our chef's special pasta that keeps our customers coming back for more.",
    },
    {
      title: "Wine Pairing: What You Need to Know",
      image:
        "https://st5.depositphotos.com/2630737/69178/i/450/depositphotos_691785350-stock-photo-gourmet-wine-pairing-fine-dining.jpg/400x200",
      content:
        "Explore our expert guide to pairing wine with your meals for an enhanced dining experience.",
    },
    {
      title: "Meet Our Chef: A Culinary Journey",
      image:
        "https://st.depositphotos.com/1499736/2459/i/450/depositphotos_24590415-Chef-offering-pasta-salad-to-you.jpg/400x200",
      content:
        "Get to know the mastermind behind our exquisite dishes and his journey in the culinary world.",
    },
    {
      title: "How to Host the Perfect Private Event",
      image:
        "https://st3.depositphotos.com/1000260/18113/i/450/depositphotos_181132324-stock-photo-dance-party-with-group-people.jpg/400x200",
      content:
        "Planning a private event? Here are some tips to ensure it's a success at our restaurant.",
    },
    {
      title: "Seasonal Menu Highlights You Can't Miss",
      image:
        "https://st4.depositphotos.com/5604060/26625/i/450/depositphotos_266255352-stock-photo-autumn-concept-seasonal-vegetables-thanksgiving.jpg/400x200",
      content:
        "Discover the best of our seasonal menu, featuring fresh, locally sourced ingredients.",
    },
  ];

  let visiblePosts = 3;

  function renderBlogPosts() {
    blogPostsContainer.innerHTML = "";
    for (let i = 0; i < visiblePosts && i < blogPosts.length; i++) {
      const post = blogPosts[i];
      const blogPostElement = document.createElement("div");
      blogPostElement.className = "blog-post";
      blogPostElement.innerHTML = `
              <img src="${post.image}" alt="${post.title}">
              <div class="blog-post-content">
                  <h3>${post.title}</h3>
                  <p>${post.content}</p>
              </div>
          `;
      blogPostsContainer.appendChild(blogPostElement);
    }
    if (visiblePosts >= blogPosts.length) {
      loadMoreButton.style.display = "none";
    }
  }

  loadMoreButton.addEventListener("click", function () {
    visiblePosts += 3;
    renderBlogPosts();
  });

  renderBlogPosts();
});
