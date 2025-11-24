const users = [
  {
    fullName: "Aarav Mehta",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Frontend Developer",
    description:
      "Passionate about creating beautiful and highly performant user interfaces.",
    tags: ["React", "JavaScript", "UI/UX", "Tailwind"],
  },
  {
    fullName: "Sara Khurana",
    image:
      "https://plus.unsplash.com/premium_photo-1669704098876-2a38eb10e56a?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Digital Marketer",
    description:
      "Specializes in brand storytelling and social media growth for startups in Marketing.",
    tags: ["Marketing", "SEO", "Branding", " Social Media"],
  },
  {
    fullName: "Rohan Verma",
    image:
      "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Full Stack Engineer",
    description:
      "Loves building scalable backend systems and clean frontend architectures.",
    tags: ["Node.js", "MongoDB", "Express", "React"],
  },
  {
    fullName: "Neha Sharma",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    profession: "Graphic Designer",
    description:
      "Creates minimal, modern visuals and brand identities for clients worldwide.",
    tags: ["Photoshop", "Illustrator", "Branding", "UI Design"],
  },
  {
    fullName: "Kabir Singh",
    image:
      "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Content Creator",
    description:
      "Produces tech-focused videos and short-form content for social platforms.",
    tags: ["Content", "Video Editing", "YouTube", "AI Tools"],
  },
];

let sum = "";

users.forEach(function (elem) {
  sum =
    sum +
    ` <div class="card">
        <img src="${elem.image}" alt="${elem.fullName}">
        <h3>${elem.fullName}</h3>
        <h4>${elem.profession}</h4>
        <p>${elem.description}</p>
        <div class="tags">
          ${elem.tags.map((tag) => 
            `<span>${tag}</span>`).join("")}
        </div>
    </div> `;
});

let main = document.querySelector("main");
main.innerHTML = sum;
