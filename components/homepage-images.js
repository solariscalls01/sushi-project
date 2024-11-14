import * as React from "react";

export default function MenuImageList() {
  return (
    // Using the box wrapper to wrap the header component for better styling
    <div className="w-full h-auto mb-4 flex justify-center mt-6"
      style={{
        width: "70%",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        padding:"1.2rem",
      }}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full">
        {itemData.map((item) => (
          <div key={item.img} className="p-4">
            <a href={item.href} target="_blank" rel="noopner noreferrer">
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                className="w-3/4 h-auto object-cover mx-auto"
                style={{
                  maxWidth: "350px",
                  minWidth: "200px",
                  minHeight: "200px",
                  maxHeight: "200px",
                  borderRadius: "1.5rem",
                  padding:"0.8rem"
                }}
              />
            </a>
            <div className="mt-3 text-center">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const itemData = [
  {
    img: "/images/california-roll.jpg",
    title: "California Roll",
    href: "/menu/sushi"
  },
  {
    img: "/images/sashimi-platter.jpg",
    title: "Sashimi Platter",
    href: "/menu/sushi"
  },
  {
    img: "/images/rainbow-roll.jpg",
    title: "Rainbow Roll",
    href: "/menu/sushi"
  },
  {
    img: "/images/homepage-3.jpg",
    title: "Sushi Combo",
    href: "/menu/signature-combos"
  },
  {
    img: "/images/chirashi/Deluxe-bowl.jpg",
    title: "Deluxe Bowl",
    href: "/menu/chirashi"
  },
  {
    img: "/images/sashimi-mix.jpg",
    title: "Sashimi Mix",
    href: "/menu/sushi"
  },

];

