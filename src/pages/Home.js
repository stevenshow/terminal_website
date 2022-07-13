import "./Home.scss";

const cards = [
  {
    name: "Linux",
    alt: "linux logo",
    id: 1,
    content: `I began using Linux back in 2018 when a professor mentioned how beneficial it would be for a programmer to be familiar with. Being the "all-in" type, I deleted my Windows partition and installed Linux Mint. This forced me to learn the operating system as I was mid-semester. I learned it fast and ended up falling in love. I did what every Linux user does at some point in their journey and "Distro-hopped" to a few popular distros. This landed me at the distro I have been using for roughly 2 years now, Manjaro, an Arch-based distro. This has made me feel at home in the command line.`,
  },
  {
    name: "Raspberry Pi",
    alt: "raspberry pi",
    id: 2,
    content: `My Raspberry Pi is a device that has helped foster my imagination and love for tech. I love the ability that I have to deploy an automated script that can collect data for me, send emails/texts, or just turn on LEDs based on the local weather. This gives me the ability to take whatever idea I have and create a project that can affect my surroundings in a real sense.`,
  },
  {
    name: "Front End Development",
    alt: "html css js",
    id: 3,
    content: `I always feared front-end development because I felt that since I was not a graphic designer, I would not be able to create something that looked good. This all changed when I got my internship doing front-end development. I quickly realized how easily it came to me and how at home I felt doing it. This sparked my interest in making myself a personal website so that I could showcase some of the skills I have learned thus far.`,
  },
  {
    alt: "python logo",
    name: "Python",
    id: 4,
    content: `Python is a language that I fell in love with about halfway through my college degree. I love that I am able to do something that would be complex in a more verbose language, and do it in a few lines of code. It is also the main language used on the Raspberry Pi, so naturally, it became a language I am very strong in.`,
  },
  {
    name: "UVU",
    alt: "utah valley university logo",
    id: 5,
    content: `I came to UVU because it was close to home and because they had the degree I was pursuing at the time. But after attending, I realized how much of a perfect fit this college is for me. I love being able to have a professor that is fresh out of the industry and is able to give advice to students that are just getting into it. This to me is invaluable. The other students feel more like partners rather than someone you are competing against. Overall I have everything here that I felt I needed to excel in my degree and prepare for the industry.`,
  },
  // {
  //   name: "Agile Methodology",
  //   alt: "agile",
  //   id: 6,
  //   content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  // },
];

const Home = () => {
  return (
    <div className="home">
      <div className="cardHolder">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <div className="title">{card.name}</div>
            <div className="content">
              <p>{card.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
